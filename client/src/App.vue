<template>
  <div id="app">
    <div class="header">
      <div class="container">
        <img src="@/assets/img/logo.svg" alt="logo" class="header-logo" />
      </div>
    </div>

    <div class="container main-container">
      <list-posts></list-posts>
    </div>
  </div>
</template>

<script>


import ListPosts from "./components/ListPosts";


export default {
  name: "App",

  components: {
    ListPosts,
  },  
};
</script>
