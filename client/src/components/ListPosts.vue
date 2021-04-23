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
import iconKommersant from "@/assets/img/kommersant.jpg";
import iconRt from "@/assets/img/rt.png";
import iconRbk from "@/assets/img/rbk.jpg";
import iconLenta from "@/assets/img/lenta.png";

export default {
  data() {
    return {
      data: null,
      posts: null,
      loading: true,

      icons: {
        meduza: iconMeduza,
        kommersant: iconKommersant,
        rt: iconRt,
        rbk: iconRbk,
        lenta: iconLenta,
      },
    };
  },

  async mounted() {
    this.posts = await api.getPosts();
    if (this.posts) {
      this.posts = this.shufflePosts;
      this.loading = false;
    }
  },

  methods: {
    urlToDomain(url) {
      const el = document.createElement("a");
      el.href = url;
      return el.hostname;
    },

    dividedPosts() {
      const arr = [];
      const count = 20;

      const countParts = parseInt(this.posts.length / count);
      let prevIndex = 0;

      for (let i = 0; i < countParts; i++) {
        arr.push({
          isSend: false,
          data: this.posts.splice(prevIndex, count),
        });

        prevIndex += count;
      }

      arr.forEach((obj, i) => {
        if (obj.data.length == 0) {
          delete arr[i];
        }
      });

      return arr;
    },
  },

  computed: {
    shufflePosts() {
      let currentIndex = this.posts.length,
        array = this.posts,
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
