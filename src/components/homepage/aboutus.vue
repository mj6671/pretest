<script>
export default {
    data() {
        return {

        }
    },

}
</script>

<template>
    <div id="dev">
        <div class="circle">.</div>

        <div class="head-area">

        </div>

        <div class="text-area">
            <h1>About Us</h1>
            <div>
                Process of establishing a recognizable brand through marketing, awareness, trust, and credibility building.
            </div>
        </div>
    </div>
</template>

<style scoped>
#dev {
    width: 100vw;
    height: 100vh;

    position: relative;
    overflow: hidden;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    background-color: #121212;
}

.circle {
    width: 100vw;
    aspect-ratio: 1 / 1;
    border-radius: 50vw;

    background-color: #171717;

    position: absolute;
    top: -50vw;
    left: -50vw;
}

#dev>.head-area>h1 {
    font-size: 5.5em;
}

#dev>.text-area {
    width: 20vw;
    font-size: 1.3em;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.text-area>h1 {
    font-family: "Satoshi", sans-serif;

    font-size: 3.5em;
    font-weight: 999;
    color: #00b0f0;
}

.text-area {
    color: #d4d4d4;

}

@media only screen and (max-width: 768px) {
    #dev {
        position: relative;
        display: block;
    }

    #dev>.head-area {
        position: absolute;
        top: 10px;
        left: 0;
    }

    #dev>.head-area svg {
        width: 300px;
    }

    #dev>.text-area {
        position: absolute;
        bottom: 6em;
        right: 0;
        width: 100vw;
        padding: 2em;
    }
}
</style>
