import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/devs/Home.vue'
import About from './views/devs/About.vue'
import Contact from './views/devs/Contact.vue'
import Portfolio from './views/devs/Portfolio.vue'
import Skills from './views/devs/Skills.vue'

import Blogs from './views/blog/Blogs.vue'
import Signup from './views/blog/Signup.vue'
import Signin from './views/blog/Signin.vue'
import BlogHome from './views/blog/LandingPage.vue'
import Post from './views/blog/Post.vue'
import NewPost from './views/blog/new.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: Blogs
    },
    {
      path: '/bruno',
      name: 'BlogHome',
      component: BlogHome
    },
    {
      path: '/signup',
      name: 'blog-signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'blog-signin',
      component: Signin
    },
    {
      path: '/blogs/post/:id',
      name: 'blog-post',
      props: true,
      component: Post
    },
    {
      path: '/new',
      name: 'new-post',
      component: NewPost
    },


  ]
})
