<template>
  <div class="main">
    <div v-if="loading" class="loading">
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
      v-for="(post, idx) in posts"
      :key="idx"
      :href="post.link"
      class="post"
      target="_blank"
    >
      <div class="post-source">
        <img :src="icons[post.name]" alt="icon" class="post-source-icon" />
        <div class="post-source-link">{{ urlToDomain(post.url) }}</div>
      </div>
      <div class="post-title">
        {{ post.title }}
      </div>
    </a>
  </div>
</template>

<script>
import api from "@/api";
import iconMeduza from "@/assets/img/meduza.png";

export default {
  data() {
    return {
      posts: null,
      loading: true,

      icons: {
        meduza: iconMeduza,
      },
    };
  },

  async mounted() {
    this.posts = await api.getPosts();
    this.loading = false;
  },

  methods: {
    urlToDomain(url) {
      const el = document.createElement("a");
      el.href = url;
      return el.hostname;
    },
  },

  computed: {
    serializedPosts() {
      return this.posts.map((post) => ({
        name: post.name,
        link: post.link,
        title: post.title,
        url: post.url,
      }));
    },

    calcCountLoaderItems() {
      const count = parseInt((document.body.clientHeight - 244) / (72 + 24));
      return Array(count).fill();
    },
  },
};
</script>
