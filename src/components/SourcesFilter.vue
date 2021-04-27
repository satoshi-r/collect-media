<template>
  <div class="sidebar-section filter">
    <div class="sidebar-title">ИСТОЧНИКИ</div>
    <div v-for="source in allSources" :key="source" class="filter-item">
      <img :src="source.icon" alt="icon" class="filter-item-icon" />
      <div class="filter-item-title">{{ source.name }}</div>
      <div
        :class="(isLoading) ? 'disabled' : ''"
        class="switcher active"
        @click="filterSources($event, source.name)"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    filterSources(evt, name) {
      evt.target.classList.toggle("active");

      if (evt.target.classList.contains("active")) {
        document.querySelectorAll(`[data-source="${name}"]`).forEach(item => {
          item.style.display = "block";
        });
      } else {
        document.querySelectorAll(`[data-source="${name}"]`).forEach(item => {
          item.style.display = "none";
        });
      }
    },
  },

  computed: {
    ...mapGetters(["allSources", "isLoading"]),
  },
};
</script>

<style></style>
