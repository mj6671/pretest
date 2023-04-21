import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import signIn from '../views/signIn.vue'
import signUp from '../views/signUp.vue'
import questions from '../views/questions.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '',
			component: Home,
			meta: {
				title: 'Serve To All'
			}
		},
		{
			path: '/signin',
			component: signIn,
			meta: {
				title: 'SignIn'
			}
		},
		{
			path: '/signup',
			component: signUp,
			meta: {
				title: 'SignUp'
			}
		},
		{
			path: '/questions',
			component: questions
		}
	]
})

router.beforeEach((to, from, next) => {
	const title = to.meta.title
	if (title) {
	  document.title = title
	}
	next()
  })

export default router
