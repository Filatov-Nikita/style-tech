<template>
  <header class="header">
    <a class="logo-wrap" href="https://ufa.planeta-mall.ru/" target="_blank">
      <img width="113" height="43" src="@/assets/images/logo.svg" alt="Логотип планета">
    </a>
    <NavMenu />
  </header>
</template>

<script setup lang="ts">
  import NavMenu from './NavMenu.vue';
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    align-items: center;
    column-gap: 130px;
    padding: 40px 0;
  }

  .logo-wrap {
    width: 113px;

    &:hover {
      opacity: 0.8;
    }
  }
</style>
