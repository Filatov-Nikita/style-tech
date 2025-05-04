<template>
  <form class="code-form" @submit.prevent="onSubmit">
    <BaseInput class="code-form__input" v-model="code" type="number" label="Код из СМС" placeholder="Код" />
    <BaseButton class="code-form__submit" :disabled="!isValid || pending" type="submit" theme="black">
      Продолжить
    </BaseButton>
  </form>
</template>

<script setup>
  import { computed, ref } from 'vue';

  defineProps({
    pending: {
      default: false,
      type: Boolean,
    }
  });

  const emit = defineEmits(['submit']);

  const code = ref('');

  const isValid = computed(() => {
    return code.value.toString().length === 6;
  });

  function onSubmit() {
    emit('submit', { code: code.value });
  }
</script>

<style scoped lang="scss">
  .code-form {
    &__submit {
      width: 100%;
      margin-top: 32px;
    }
  }
</style>
