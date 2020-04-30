import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


import home from '../pages/home.vue'
import photo_stories from '../pages/photo_stories.vue'
import publications from '../pages/publications.vue'
import book from '../pages/book.vue'
import bio from '../pages/bio.vue'
import contact from '../pages/contact.vue'

let Admin = ['Admin'];


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
          title: 'Home',
      }
    },

    {
      path: '/publications',
      name: 'publications',
      component: publications,
      meta: {
          title: 'publications',
      }
    },

    {
      path: '/photo_stories',
      name: 'photo_stories',
      component: photo_stories,
      meta: {
          title: 'photo_stories',
      }
    },

    {
      path: '/book',
      name: 'book',
      component: book,
      meta: {
          title: 'book',
      }
    },

    {
      path: '/bio',
      name: 'bio',
      component: bio,
      meta: {
          title: 'bio',
      }
    },

    {
      path: '/contact',
      name: 'contact',
      component: contact,
      meta: {
          title: 'contact',
      }
    },

  ],

});
