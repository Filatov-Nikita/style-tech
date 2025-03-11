<template>
  <header class="header">
    <a class="logo-wrap" href="https://ufa.planeta-mall.ru/" target="_blank">
      <img width="113" height="43" src="@/assets/images/logo.svg" alt="Логотип планета">
    </a>
    <button v-if="!grid.lg" class="btn-burger" @click="showedMenu = true">
      <IconBurger />
    </button>
    <NavMenu v-if="grid.lg" />
    <NavScreen v-else :showed="showedMenu" @close="showedMenu = false" />
  </header>
</template>

<script setup lang="ts">
  import useAppGrid from '@/composables/useAppGrid';
  import NavMenu from './NavMenu.vue';
  import NavScreen from './NavScreen.vue';
  import IconBurger from '@/components/Icons/IconBurger.vue';
  import { ref } from 'vue';

  const grid = useAppGrid();

  const showedMenu = ref(false);
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    align-items: center;
    column-gap: 130px;
    padding: 40px 0;

    @include md {
      justify-content: space-between;
      column-gap: 50px;
      padding: 30px 0;
    }

    @include sm {
      padding: 16px 0;
    }
  }

  .btn-burger {
    cursor: pointer;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
  }

  .logo-wrap {
    width: 113px;

    @include sm {
      width: 91px;
    }

    &:hover {
      opacity: 0.8;
    }
  }
</style>
