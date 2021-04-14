<template>
  <div id="app">
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
          <router-link to="/signup" class="navbar-item">Sign up</router-link>
          <router-link to="/login" class="navbar-item">Log in</router-link>
        </div>

        <div class="navbar-end">
          <!-- navbar items -->
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
