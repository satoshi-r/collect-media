<template>
  <div class="main">
    <div v-if="isLoading" class="loading">
      <div
        v-for="item of calcCountLoaderItems"
        :key="item"
        class="loading-item"
      >
        <div class="loading-row-sm"></div>
        <div class="loading-row-lg"></div>
      </div>
    </div>

    <a
      v-for="(post, idx) in shufflePosts"
      :key="idx"
      :href="post.link"
      class="post"
      target="_blank"
      :data-source="allSources[post.name].name"
    >
      <div class="post-source">
        <img :src="allSources[post.name].icon" alt="icon" class="post-source-icon" />
        <div class="post-source-link">{{ urlToDomain(post.url) }}</div>
      </div>
      <div class="post-title">
        {{ post.title }}
      </div>
    </a>
  </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      data: null,
      posts: null,
    };
  },

  async mounted() {
    await this.fetchPosts();
    this.setLoading(false);
  },

  methods: {
    ...mapActions(["fetchPosts", "setLoading"]),

    urlToDomain(url) {
      const el = document.createElement("a");
      el.href = url;
      return el.hostname;
    },
  },

  computed: {
    ...mapGetters(["allPosts", "allSources", "isLoading"]),

    shufflePosts() {
      let currentIndex = this.allPosts.length,
        array = this.allPosts,
        temporaryValue,
        randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },

    calcCountLoaderItems() {
      const count = parseInt((document.body.clientHeight - 244) / (72 + 24));
      return Array(count).fill();
    },
  },
};
</script>
