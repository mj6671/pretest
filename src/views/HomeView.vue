
<script>
import aboutUs from '../components/homepage/aboutus.vue'
import contactUs from '../components/homepage/contactus.vue'
import homevue from '../components/homepage/Home.vue'

export default {

	data() {
		return {

		};
	},

	components: {
		homevue,
		contactUs,
		aboutUs,
	},

	created() {
		document.title = "PreTest"
	}
}

</script>

<template>
	<div id="dev">
		<div class="header">
			<div class="logo">
				<div>PreTest</div>
			</div>
		</div>

		<div class="full-page">

			<div class="page" id="home">
				<homevue />
			</div>

			<div class="page" id="about">
				<aboutUs />
			</div>

			<div id="contact">
				<contactUs />
			</div>

		</div>
		<router-view></router-view>
	</div>
</template>

<style scoped>

.nav-bar {
	text-decoration: none;
	z-index: 100;
}


.header {
	margin-top: .3em;
	display: flex;
	justify-content: space-between;

	position: absolute;
	z-index: 100;
}

.collapse {
	justify-content: end;
}

button {
	background-color: #171717;
}

.logo {
	font-size: 2em;
	margin-left: 1.5em;
	margin-top: .2em;
	color: white;
	font-weight: 600;
}

.nav-links {
	margin-right: 1.5em;

	display: flex;
	flex-direction: row;
	gap: 0.4em;
}

.nav-link {
	text-decoration: none;
	text-transform: uppercase;

	position: relative;
	z-index: 1;
	color: #171717;
	margin: 0 0.5em 0 0.5em;
}

.nav-link:hover {
	color: #171717;
}

.nav-link::before {
	content: '';
	position: absolute;
	z-index: -1;
	top: 0;
	bottom: 0;
	left: -0.25em;
	right: -0.25em;
	background-color: #fc3171bf;
	transform-origin: center right;
	transform: scaleX(0);
	transition: transform 0.2s ease-in-out;
}

.nav-link:hover::before {
	transform: scaleX(1);
	transform-origin: center left;
}

.p3 {
	background-color: rgb(22, 192, 156);
}

/* .full-page {
	max-width: 100vw;
	max-height: 100vh;
	overflow: scroll;
	scroll-snap-type: y mandatory;
} */

.page {
	scroll-snap-align: start;
}

a {
	text-decoration: none;
}

.navbar-nav>li {
	margin-right: 0;
	width: 100%;

	display: flex;
	justify-content: right;

	/* border-right: 2px solid #fc3171bf; */
	/* margin-bottom: 2px; */
}

.logo-subtext {
	display: flex;
	font-size: 1.5em;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin: 0;
	letter-spacing: 0.2em;
}

@media only screen and (max-width: 600px) {
	.cards-container {
		flex-direction: column;
		width: 100vw;
	}

	.cards-col {
		width: 100vw;
	}
}
</style>
