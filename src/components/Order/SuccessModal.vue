<template>
  <BaseModal v-model="showed">
    <BaseModalCard class="or-success">
      <button class="close-modal" @click="finish">
        <BaseIcon class="w-full h-full" name="close" color="#ffffff" />
      </button>
      <div class="or-success__body">
        <p class="or-success__title">
          Ваша запись успешно завершена!
        </p>
        <p class="or-success__row1">{{ categoryName }} - {{ date }} в {{ time }}</p>
        <p>Ожидайте подтверждение по телефону.</p>
        <BaseButton class="or-success__btn" theme="black" @click="finish">
          Завершить
        </BaseButton>
      </div>
    </BaseModalCard>
  </BaseModal>
</template>

<script setup>
  import { computed } from 'vue';
  import { dateToLocale } from '@/helpers/dates';

  const props = defineProps({
    event: {
      required: true,
      type: [Object, null],
    },
    category: {
      required: true,
      type: [Object, null],
    }
  });

  const emit = defineEmits([ 'finish' ]);

  const showed = defineModel('showed');

  const categoryName = computed(() => props.category?.title ?? '-')

  const time = computed(() => {
    if(!props.event) return '-';
    return props.event.start_date.substring(11, 16) ?? '-';
  });

  const date = computed(() => {
    if(!props.event) return '-';
    return dateToLocale(new Date(props.event.start_date.substring(0, 10)));
  });

  function finish() {
    showed.value = false;
    emit('finish')
  }
</script>

<style scoped lang="scss">
  .or-success {
    position: relative;
    max-width: 500px;
    padding: 60px 20px 30px;

    @include sm {
      padding: 50px 20px 16px;
    }

    &__body {
      text-align: center;
    }

    &__title {
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 24px;
    }

    &__row1 {
      margin-bottom: 16px;
    }

    &__btn {
      width: 100%;
      margin-top: 32px;
    }
  }
</style>
