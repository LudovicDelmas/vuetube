<template>
  <div>
    <h1 class="title has-text-centered">Dashboard</h1>
    <div class="tabs">
      <ul>
        <li :class="{ 'is-active' : activeCategory === 'Newest'}">
          <a @click="setCategory('Newest')">Newest</a>
        </li>
        <li v-for="(category, index) in categories" v-bind:key="index" :class="{ 'is-active' : activeCategory === category.title }">
          <a @click="setCategory(category.title)">{{ category.title }}</a>
        </li>
      </ul>
    </div>
    <tab-movie v-for="(category, index) in categories" v-bind:key="index" :category= "category.id">

    </tab-movie>
  </div>
</template>

<script>
import { db } from '../index'
import TabMovie from '../components/TabMovie.vue'

export default {
  name: 'dashboard',
  components: { TabMovie },
  data: () => ({
    categories: [],
    activeCategory: 'Newest'
  }),
  firestore: { 
    categories: db.collection('categories')
  },
  methods: {
    setCategory (title) {
      this.activeCategory = title
    }
  }
}
</script>
