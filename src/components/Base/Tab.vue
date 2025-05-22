<template>
  <button
    class="tab"
    :class="{
      'tab--default': !active,
      'tab--active': active,
    }"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  defineProps({
    active: {
      default: false,
      type: Boolean,
    }
  })
</script>

<style scoped lang="scss">
  .tab {
    border: 1px solid var(--border);
    color: var(--text-color);
    text-align: center;
    padding: 12px 20px;
    font-size: 16px;
    line-height: 1.35;
    font-weight: 300;
    border-radius: 15px;

    &--default {
      --border: #686868;
      --text-color: var(--color-body);

      &:hover {
        opacity: 0.8;
      }
    }

    &--active {
      --border: var(--color-body);
      --text-color: #151515;
      background: var(--color-body);
    }
  }
</style>
