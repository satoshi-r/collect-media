<template>
  <div id="app">

  </div>
</template>

<script>

export default {
  name: 'App',

  async mounted() {
    const data = await fetch('/api/posts');
    console.log(data.json());
  }
}
</script>

<style src="./css/style.css"></style>
