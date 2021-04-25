<template>
  <div id="app">
    <div class="header">
      <div class="container">
        <img src="@/assets/img/logo.svg" alt="logo" class="header-logo" />
      </div>
    </div>

    <div class="container main-container">
      <list-posts></list-posts>
      <div class="sidebar">
        <exchange-rates></exchange-rates>
        <sources-filter></sources-filter>
      </div>
    </div>
  </div>
</template>

<script>
import ListPosts from "./components/ListPosts";
import ExchangeRates from "./components/ExchangeRates";
import SourcesFilter from "./components/SourcesFilter";

export default {
  name: "App",

  components: {
    ListPosts,
    ExchangeRates,
    SourcesFilter
  },
};
</script>
