<template>
  <div class="columns is-multiline">
    <div class="card column is-4 pl-4" v-for="(movie, index) in movies" v-bind:key="index">
      <div class="card-image">
        <iframe :src="embedable(movie.url)" frameborder="0" width="100%" height="500"></iframe>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ movie.title }}</p>
            <p class="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '../index'

export default {
  name: 'TabMovie',
  props: {
    category: String
  },
  data() {
    return {
      movies: []
    }
  },
  firestore () {
    return {
      movies: db.collection('categories').doc(this.$props.category).collection('movies')
    }
  },
  methods: {
    embedable (url) {
      return 'https://youtube.com/embed/' + url.split('=') [1]
    }
  }
}
</script>