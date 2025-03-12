<template>
  <button class="base-btn">
    <slot></slot>
  </button>
</template>

<script setup></script>

<style scoped>
  .base-btn {
    cursor: pointer;
    border-radius: 15px;
    padding: 15px 40px;
    font-size: 16px;
    line-height: 1.25;
    text-align: center;
    background-color: var(--color-primary);
    color: var(--color-body);
  }

  .base-btn:hover {
    background-color: var(--color-primary-hover);
  }
</style>
