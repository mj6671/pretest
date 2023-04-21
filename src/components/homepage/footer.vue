<script>


export default {
    
}
</script>

<template>
    <div class="fot">
        <div class="icons-div">
            <div><font-awesome-icon icon="fa-brands fa-twitter icon" /></div>
            <div><font-awesome-icon icon="fa-brands fa-youtube icon"/></div>
            <div><font-awesome-icon icon="fa-brands fa-instagram icon" /></div>
            <div><font-awesome-icon icon="fa-solid fa-envelope" /></div>
        </div>
        <div class="made-div">
            <div>© 2023 PreTest Pte Ltd. All rights reserved.Made with <font-awesome-icon icon="fa-solid fa-heart hrt-icon" bounce /> by kreativ.</div>
        </div>
    </div>
</template>

<style scoped>

.fot{
    background-color: #00b0f0;
    height: 10vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0 5em;
}

.icons-div {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 2em;
    font-size: 20px;
    cursor: pointer;
}

.icon {
    font-size: 24px;
}

.made-div {
    width: 50%;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: end;
}

.made-div svg {
    padding: 0 0.5em;
    margin-top: 0.7em;
}

@media only screen and (max-width: 768px) {
    .fot {
        padding: .5em 1em;
        height: auto;
        display: flex;
        flex-direction: column;
        gap: .3em;
    }
    .made-div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .icons-div {
        gap: 1.5em;
        margin-left: 1em;
        width: 100%;
        justify-content: center;
    }
}

</style>