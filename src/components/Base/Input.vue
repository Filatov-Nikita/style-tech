<template>
  <div class="base-input">
    <label class="base-input__label" :for="_id">{{ label }}</label>
    <input
      class="base-input__input"
      :id="_id"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :data-maska="maska"
      v-maska="maskObject"
      v-model="value"
    />
  </div>
</template>

<script setup>
  import { toRef } from 'vue';
  import { vMaska } from 'maska';
  import useId from '@/composables/useId';

  const props = defineProps({
    type: {
      default: 'text',
      type: String,
    },
    name: {
      default: undefined,
      type: String,
    },
    id: {
      default: undefined,
      type: String,
    },
    label: {
      required: true,
      type: String,
    },
    placeholder: {
      default: undefined,
      type: String,
    },
    maska: {
      default: undefined,
      type: String,
    }
  });

  const value = defineModel({ default: '' });

  const maskObject = defineModel('maskObject', { default: undefined });

  const { id: _id } = useId(toRef(props, 'id'));
</script>

<style scoped lang="scss">
  .base-input {
    &__label {
      display: block;
      width: 100%;
      font-size: 16px;
      line-height: 1.2;
      margin-bottom: 8px;
      color: var(--color-white);
    }

    &__input {
      display: block;
      width: 100%;
      border: 1px solid #C3C3C3;
      height: 50px;
      padding: 8px 16px;
      font-size: 14px;
      color: var(--color-black);
      background: var(--color-white);

      &:hover {
        border-color: var(--color-primary-hover);
      }

      &:focus {
        border-color: var(--color-accent);
      }
    }
  }
</style>
