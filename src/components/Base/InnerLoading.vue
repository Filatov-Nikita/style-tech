<template>
  <div class="loader" v-if="showed">
    <BaseSpinner size="100px" />
  </div>
</template>

<script setup lang="ts">
  defineProps({
    showed: {
      default: false,
      type: Boolean,
    },
  })
</script>

<style scoped lang="scss">
  .loader {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgb(255, 255, 255, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
  }
</style>
