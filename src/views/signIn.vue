
<script>

import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { auth } from './firebase.js'
import Router from '@/router'

const delay = ms => new Promise(res_ => setTimeout(res_, ms))

export default {
    data() {
        return {
            form: { name: '', email: '', password: '' },
            err: '',
            emailNotProvided: false,
            signInError: "",
            errorState: false,
            successState: false
        }
    },
    methods: {
        loginWithGoogle() {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
                .then((result) => {
                    console.log(result.user)
                    this.successState = true
                    Router.push('/#services')
                    this.getUser()
                })
                .catch((error) => {
                    console.log('err', error)
                });
        },
        getUser() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const uid = user.email;
                    let email_username = uid.split('@')[0]
                    let valid_username = email_username.replace(".", "")
                    console.log(valid_username)
                } else {
                    console.log("Can't get user e-mail")
                    Router.push('/signup')
                }
            });
        },

        signin() {
            signInWithEmailAndPassword(auth, this.form.email, this.form.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log('sigin successfully')
                    this.errorState = false
                    this.successState = true

                    console.log('this')
                    delay(2000)
                    console.log('that')
                    Router.push('/#services')
                })
                .catch((error) => {
                    console.log(error)
                    let re_braces = /\((.*)\)/
                    let re_slash = /[^/]*$/
                    let error_parse = error.message.match(re_braces)[1]
                    let message_parse = error_parse.match(re_slash)[0]
                    let message = message_parse.replace("-", " ")
                    this.signInError = message
                    this.errorState = true
                    this.successState = false
                });
        },

        reset() {
            console.log('ok');
            const email = document.querySelector('#form-email')
            console.log(email.value)

            if (email.value == "") {
                this.signInError = "Email was not provided"
                this.errorState = true
                console.log("Email was not provided")
            } else {
                this.emailNotProvided = false

                sendPasswordResetEmail(auth , email.value) 
                .then(() => {
                    console.log('link send')
                })
                .catch((err) => { console.log(err) })
            }
        }
    },
}

</script>


<template>
    <div id="signin-div">
        <div class="padd"></div>
        <form @submit.prevent="signin()" class="signin">
            <h1>Welcome back!  🎉</h1>

            <label for="email">
                Email
                <input id="form-email" type="text" v-model="form.email" required>
            </label>
            <label for="password">
                <div class="forgot-wrapper">Password <div class="forgot" @click="reset()">Forgot Password?</div></div>
                <input type="password" v-model="form.password" required>
            </label>
            <div class="buttons">
                <button type="submit" class="prominent">Continue</button>
                <button type="button" class="secondary"><router-link to="/signup"> Create Account</router-link></button>
            </div>
            <button @click="loginWithGoogle()" class="g-signin">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256"
                    width="20px" height="20px" fill-rule="nonzero" class="googlesvg">
                    <g fill="#171717" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                        stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                        font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        style="mix-blend-mode: normal">
                        <g transform="scale(10.66667,10.66667)">
                            <path
                                d="M12.545,10.239v3.821h5.445c-0.712,2.315 -2.647,3.972 -5.445,3.972c-3.332,0 -6.033,-2.701 -6.033,-6.032c0,-3.331 2.701,-6.032 6.033,-6.032c1.498,0 2.866,0.549 3.921,1.453l2.814,-2.814c-1.777,-1.619 -4.141,-2.607 -6.735,-2.607c-5.524,0 -10.002,4.477 -10.002,10c0,5.523 4.478,10 10.002,10c8.396,0 10.249,-7.85 9.426,-11.748z">
                            </path>
                        </g>
                    </g>
                </svg>
                Login with Google?
            </button>
            <div class="bottom-span"></div>

            <div v-if="errorState" class="email-alert alert-error">
                {{ this.signInError }}
            </div>

            <div v-if="successState" class="email-alert alert-success">
                Signed In successfully
            </div>
        </form>
    </div>
</template>

<style scoped>
#signin-div {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;

    width: 100vw;
    height: 100vh;
}

.padd {
    background-color: #fc3171bf;
    width: 30vw;

}

.signin {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    gap: 1em;
    min-width: 25vw;
    margin: auto;
}

label {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}

.buttons {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 1em;
}

.buttons>button {
    width: 45%;
    outline: none;
    height: 2.5em;
    border-radius: 5px;
    border: 1px solid #fc3171bf;
}

.prominent {
    color: #fefefe;
    background-color: #fc3171bf;
}

.secondary {
    color: #171717;
    background-color: #fefefe;
    border: 1px solid #fc3171bf;
}

.g-signin {
    background: none;
    border: none;
    color: #171717ff;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 1em;
}

.googlesvg {
    margin-right: 0.5em;
}

.bottom-span {
    height: 2px;
    width: 0%;
    transition: 200ms ease;
    background-color: #171717;
}

.g-signin:hover ~ .bottom-span {
    width: 100%;
}

input {
    height: 2rem;
    padding: 0 .4em;
}

input:focus {
    border: 3px solid #cb99a2cc;
    outline: none;

}

a{
    color: #171717;
}

.forgot-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}


.forgot {
    font-size: 0.8em;
    font-weight: 100;
    color: #536bd8;
}

.forgot:hover {
    color: #607cfa;
}

.email-alert {
    width: 100%;
    height: 3rem;
    background-color: #fefefe;
    border-radius: 5px;
    
    display: flex;
    justify-content: center;
    align-items: center;
}

.alert-error {
    color: #fa5f54;
    border: 2px solid #fa5f54;
}

.alert-success {
    color: #22c55e;
    border: 2px solid #22c55e;
}

@media only screen and (max-width: 600px) {
    #signin-div {
        display: flex;
        flex-direction: column;
    }
    .padd {
        height: 20vh;
        width: 100vw;
    }
}

</style>