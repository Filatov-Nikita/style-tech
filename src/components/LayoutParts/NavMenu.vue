<template>
  <nav class="nav-menu">
    <a class="nav-menu__item" href="#about">Об услуге</a>
    <a class="nav-menu__item" href="#advantages">Преимущества</a>
    <a class="nav-menu__item" href="#order">Запись</a>
    <a class="nav-menu__item" href="#partners">Партнеры</a>
  </nav>
</template>

<script setup></script>

<style scoped lang="scss">
  .nav-menu {
    display: flex;
    align-items: center;
    column-gap: 40px;

    &__item {
      font-size: 16px;
      line-height: 1.2;
      font-weight: 200;
      color: var(--color-body);
      text-decoration: none;

      &:hover {
        color: var(--color-primary-hover);
      }
    }
  }
</style>
