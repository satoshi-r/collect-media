<template>
  <div class="sidebar-section filter">
    <div class="sidebar-title">ИСТОЧНИКИ</div>
    <div class="filter-item">
        <img src="@/assets/img/meduza.png" alt="icon" class="filter-item-icon">
        <div class="filter-item-title">Meduza</div>
        <div class="switcher active" ref="switcher" @click="toggleClass"></div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },

    methods: {
        toggleClass() {
            this.$refs.switcher.classList.toggle('active');
        },
    },

    mounted() {
        
    }
};
</script>

<style></style>
