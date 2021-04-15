<template>
  <div>
    <h1>Dashboard</h1>
    <div class="tabs">
      <ul>
        <li class="is-active">
          <a href="">Newest</a>
        </li>
        <li>
          <a v-for="(category, index) in categories" v-bind:key="index" href="">{{ category.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { db } from '../main'

export default {
  name: 'dashboard',
  data: () => ({
    categories: []
  }),
  firestore: { 
    categories: db.collection('categories')
  }
}
</script>
