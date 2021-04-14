<template>
  <div class="container">
    <h1 class="title">Log in</h1>
    <form @submit.prevent="logIn">
      <div class="field">
        <div class="control">
          <input class="input" type="email" placeholder="Email" v-model="email">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" type="password" placeholder="Password" v-model="password">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-primary">Submit</button>
        </div>
      </div>
    </form>
    <div class="field">
      <div class="control">
        <button class="button is-danger" @click="logOut">Log out</button>
      </div>
    </div>
    <hr>
    Signed in: {{ isAuthenticated }}

  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      isAuthenticated: false
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
    logIn () {
      console.log('Log in')
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .catch(error => alert(error.message))
    },
    logOut () {
      console.log('Log out')
      firebase.auth().signOut()
        .then(() => {
          this.isAuthenticated = false
        })
    }
  }
}
</script>

