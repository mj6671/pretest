<script>
export default {
    mounted() {
        const overlay = document.querySelector('.overlay')
        window.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e
            const x = Math.round((clientX / window.innerWidth) * 100)
            const y = Math.round((clientY / window.innerHeight) * 100)

            gsap.to(overlay, {
                '--x' : `${x}%`,
                '--y' : `${y}%`,
                duration: 0.3,
                ease: 'sine.out'
            })
        })
    }
}
</script>

<template>
    <div id="dev">
        <section class="orig">
            <div class="content">
                <div>
                    <h1>PreTest</h1>
                    <p>onRoute to Brand Recognition</p>
                </div>

                
                <router-link to="/questions"><button class="orig-button">Take the Test</button></router-link>
            </div>
        </section>

        <section class="overlay">
            <div class="content">
                <div>
                    <h1>PreTest</h1>
                    <p>onRoute to Brand Recognition</p>
                </div>
    
                <router-link to="/questions"><button class="overlay-button">Take the Test</button></router-link>
            </div>
        </section>
    </div>
</template>

<style scoped>
#dev {
    width: 100vw;
    height: 100vh;

    box-sizing: border-box;
}

#dev > section {
    width: 100vw;
    height: 100vh;
    padding: 5em;
}

.content {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

h1 {
    font-size: 7em;
    font-weight: 800;
}

p {
    font-size: 1.5em;
    font-weight: 600;
}

.orig {
    background: #121212;
    color: #00b0f0;
}

.overlay {
    background-color: #00b0f0;
    color: #121212;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    /* clip-path: circle(100px at 50% 50%); */
    clip-path: circle(100px at var(--x) var(--y));
    transition: clip-path 100ms;
}

.orig-button {
    background-color: #121212;
    color: #00b0f0;
    padding: 1.3em 1.8em;
    border: 3px solid #00b0f0;
    border-radius: 10px;

    font-size: 1.3em;
}

.overlay-button {
    color: #121212;
    background-color: #00b0f0;
    padding: 1.3em 1.8em;
    border: 3px solid #121212;
    border-radius: 10px;

    font-size: 1.3em;
}
</style>