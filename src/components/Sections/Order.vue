<template>
  <section id="order" class="section-order">
    <div class="wrapper">
      <h2 class="h2 section-order__title">Запись на услугу</h2>
      <div class="section-order__grid">
        <div class="section-order__left">
          <Calendar v-model="orderDate" :disabledDates="[]" />
        </div>
        <div class="section-order__right">
          <div class="option option--mb">
            <div class="option__label option__label--mb-sm">Дата</div>
            <div class="option__text">1</div>
          </div>
          <div class="option option--mb">
            <div class="option__label option__label--mb-md">Время</div>
            <div class="option__text">1</div>
          </div>
          <div class="option">
            <div class="option__label option__label--mb-md">Какую технику нужно будет подобрать?</div>
            <div class="option__text">1</div>
          </div>
          <BaseButton class="section-order__btn">Записаться</BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import Calendar from '@/components/Order/Calendar.vue';
  import { ref } from 'vue';

  const orderDate = ref('');
</script>

<style scoped lang="scss">
  .section-order {
    &__title {
      margin-bottom: 50px;

      @include sm {
        margin-bottom: 24px;
      }
    }

    &__grid {
      display: flex;
      flex-wrap: wrap;
      column-gap: 70px;

      @include lg {
        row-gap: 50px;
      }

      @include sm {
        row-gap: 30px;
      }
    }

    &__left {
      width: calc(45% - 35px);

      @include lg {
        width: 100%;
        max-width: 600px;
      }
    }

    &__right {
      width: calc(55% - 35px);

      @include lg {
        width: 100%;
      }
    }

    &__btn {
      margin-top: 40px;

      @include sm {
        margin-top: 30px;
        width: 100%;
      }
    }
  }

  .option {
    &--mb {
      margin-bottom: 36px;

      @include sm {
        margin-bottom: 30px;
      }
    }

    &__label {
      max-width: 480px;
      font-family: var(--font-druk);
      font-weight: 700;
      font-size: 24px;
      line-height: 1.15;

      @include sm {
        font-size: 20px;
        max-width: 340px;
      }

      &--mb-sm {
        margin-bottom: 10px;

        @include sm {
          margin-bottom: 12px;
        }
      }

      &--mb-md {
        margin-bottom: 20px;

        @include sm {
          margin-bottom: 12px;
        }
      }
    }

    &__text {
      font-weight: 300;
      font-size: 20px;
      line-height: 1.35;

      @include sm {
        font-size: 16px;
      }
    }
  }
</style>
