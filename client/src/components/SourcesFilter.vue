<template>
  <div class="sidebar-section filter">
    <div class="sidebar-title">ИСТОЧНИКИ</div>
    <div v-for="source in allSources" :key="source" class="filter-item">
        <img :src="source.icon" alt="icon" class="filter-item-icon">
        <div class="filter-item-title">{{ source.name }}</div>
        <div class="switcher active" @click="toggleClass"></div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {

    methods: {
        toggleClass(evt) {
            evt.target.classList.toggle('active');
        },
    },

    computed: {
        ...mapGetters(['allPosts', 'allSources']),        
    }
};
</script>

<style></style>
