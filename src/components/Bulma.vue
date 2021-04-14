<template>
  <div class="box">
  <h1 class="title">
      Bulma
    </h1>

    <p class="subtitle">
      Modern CSS framework based on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Flexbox</a>
    </p>

    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Input">
      </div>
    </div>

    <div class="field">
      <p class="control">
        <span class="select">
          <select>
            <option>Select dropdown</option>
          </select>
        </span>
      </p>
    </div>

    <div class="buttons">
      <router-link to="/signup"> 
        <a class="button is-primary">Sign up</a>
      </router-link>
      <router-link to="/login">
        <a class="button is-link is-rounded">Log in</a>
      </router-link>
      <router-link to="/PageC">
        <a class="button is-info"> Page C</a>
      </router-link>
    </div>

    

  </div>
</template>