<template>
  <div class="container">
    <h1 class="title"> Sign up </h1>
    <form @submit.prevent="signUp">
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
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-primary">Submit</button>
        </div>
      </div>
    </form>
    <hr>
    Signed in: {{ isAuthenticated }}
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'signup',
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
    signUp () {
      console.log('Sign up')
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .catch(error => alert(error.message))
    }
  }
}
</script>

