<script>

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js'
import Router from '@/router'

export default {
    data() {
        return {
            form: {
                email: '',
                password: '',
                confirmpassword: ''
            },
            passwordMismatchError: false,
            passwordError: "Passwords don't match"
        }
    },
    methods: {
        signup() {

            if (this.form.password == this.form.confirmpassword) {
                createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        this.passwordMismatchError = false

                        Router.push("/signin")
                    })
                    .catch((error) => {
                        let re_braces = /\((.*)\)/
                        let re_slash = /[^/]*$/
                        let error_parse = error.message.match(re_braces)[1]
                        let message_parse = error_parse.match(re_slash)[0]
                        let message = message_parse.replace("-", " ")
                        this.passwordError = message
                        this.passwordMismatchError = true
                    });

            } else {
                this.passwordMismatchError = true
            }
        }
    }
}
</script>

<template>
    <div id="dev">
        <div class="padder">
            
        </div>
        <div class="former">
            <form @submit.prevent="signup()" class="signin-form">
                <h1>Hey there!</h1>
                <label for="email">Email<input type="text" v-model="form.email" required></label>
                <label for="password">Password<input type="password" v-model="form.password" required></label>
                <label for="confirm-password">Confirm Password<input type="password" v-model="form.confirmpassword" required></label>
                <div class="buttons">
                    <button type="submit" class="prominent">Create Account</button>
                    
                    <button type="button" class="secondary"><router-link to="/signin" style="color: #dedede;">Already an User?</router-link></button>
                    
                </div>

                <div v-if="passwordMismatchError" class="password-alert">
                    {{ this.passwordError }}
                </div>
            </form>
            
        </div>
    </div>
</template>

<style scoped>
#dev {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;

    width: 100vw;
    height: 100vh;

    background-color: #121212;
}

h1 {
    font-weight: 999;
    color: #84a9ff;
}

.padder {
    width: 30vw;
    height: 100vh;
    background-color: #202020;
}

.former {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
}

.signin-form {
    display: flex;
    justify-content: center;
    flex-direction: column;

    gap: 1em;
    width: 70%;
    max-width: 25em;
}

label {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;

    width: 100%;
    color: #c7c7c7;
}

.buttons {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.buttons > button {
    width: 45%;
    outline: none;
    height: 2.5em;
    border-radius: 5px;
}

.prominent {
    color: #d4d4d4;
    background-color: #4069c8;
}

.secondary {
    color: #d4d4d4;
    background-color: #02111c;
    border: 3px solid #4069c8;
}

input {
    outline: none;
    padding: 0 .4em;
    height: 2em;
}

input:focus {
    border: 3px solid #84a9ff;
}

a {
    color: black;
}

.password-alert {
    color: #253f7b;
    width: 100%;
    height: 3rem;
    background-color: #fefefe;
    border: 2px solid #84a9ff;
    border-radius: 5px;
    
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width: 768px) {
    #dev {
        display: flex;
        flex-direction: column;
    }
    .padder {
        width: 100vw;
        height: 20vh;
    }
    .signin-form {
        width: 90%;
    }
}

</style>
