<template>
  <div class="container is-fluid">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          VueTube
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Home</router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped" v-if="!isAuthenticated">
              <p class="control">
                <router-link to="/signup" class="button is-primary">Sign up</router-link>
              </p>
              <p class="control">
                <router-link to="/login" class="button is-info">Log in</router-link>
              </p>
            </div>
            <div class="field" v-else>
              <div class="field is-grouped">
                <p class="control">
                  <button class="button is-primary" @click="showCategoryForm = !showCategoryForm">Add category</button>
                </p>
                <p class="control">
                  <button class="button is-primary" @click=" showMovieForm = !showMovieForm" >Add Movie</button>
                </p>
                <p class="control">
                  <button class="button is-danger" @click="logout">Log out</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="modal" :class="{ 'is-active' : showCategoryForm }">
      <div class="modal-background" ></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add Category</p>
          <button class="delete" aria-label="close" @click="showCategoryForm = !showCategoryForm"></button>
        </header>
        <section class="modal-card-body">
          <form @submit.prevent= "addCategory">
            <div class="field mt-6">
              <input type="text" class="input" v-model="title">
            </div>
          </form>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="addCategory">Add</button>
          <button class="button" aria-label="cancel" @click="showCategoryForm = !showCategoryForm">Cancel</button>
        </footer>
      </div>
    </div>
    <div class="modal" :class="{ 'is-active' : showMovieForm }">
      <div class="modal-background" ></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add Movie</p>
          <button class="delete" aria-label="close" @click="showMovieForm = !showMovieForm"></button>
        </header>
        <section class="modal-card-body">
          <form @submit.prevent= "addMovie">
            <div class="field mt-6">
              <input type="text" class="input" v-model="title" placeholder="Title">
            </div>
            <div class="field mt-6">
              <input type="text" class="input" v-model="url" placeholder="URL">
            </div>
            <div class="field">
              <p class="control">
                <span class="select">
                  <select v-model="category">
                    <option value="empty" selected>Choose category</option>
                    <option v-for="(category, index) in categories" v-bind:key="index" :value="category.id">{{ category.title }}</option>
                  </select>
                </span>
              </p>
            </div>
          </form>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="addMovie">Add</button>
          <button class="button" aria-label="cancel" @click="showMovieForm = !showMovieForm">Cancel</button>
        </footer>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

import firebase from 'firebase'
import { db } from './index'

export default {
  data () {
    return {
      isAuthenticated: false,
      showCategoryForm: false,
      showMovieForm: false,
      title: '',
      url: '',
      category: 'empty',
      categories : []
    }
  },
  firestore () { 
    return {
      categories: db.collection('categories')
    }
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.isAuthenticated = true
      }
    })
  },
  methods: {
    addCategory () {
      if(this.title !== '') {
        const category = {
          title: this.title
        }

        db.collection('categories').add(category)

        this.showCategoryForm = false
        this.title = ''
      } else {
        alert('You have to fill out all the fields !')
      }

    },
    addMovie () {
      if(this.title && this.category !== 'empty') {
        const movie = {
          title: this.title,
          url: this.url
        }

        db.collection('categories').doc(this.category).collection('movies').add(movie)

        this.title = ''
        this.url = ''
        this.category = 'empty'
        this.showMovieForm = false

      } else {
        alert('You have to fill out all the fields !')
      }

    },
    logout () {
      firebase.auth().signOut()
        .then(() => {
          this.isAuthenticated = false
          this.$router.push('/login')
        })
    }
  }
}
</script>
