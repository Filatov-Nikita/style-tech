<template>
  <div class="items">
    <BaseTab
      v-for="item in items"
      :active="item.id === activeItem?.id"
      @click="onClick(item)"
    >
      {{ item.title }}
    </BaseTab>
  </div>
</template>

<script setup>
  defineProps({
    items: {
      required: true,
      type: Array,
    },
    activeItem: {
      default: undefined,
      type: Object,
    }
  });

  const emit = defineEmits(['update:activeItem']);

  function onClick(item) {
    emit('update:activeItem', item);
  }
</script>

<style scoped lang="scss">
  .items {
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
    row-gap: 14px;
  }
</style>
