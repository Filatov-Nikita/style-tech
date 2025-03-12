<template>
  <VDatePicker
    class="app-calendar"
    transparent
    isDark
    expanded
    color="orange"
    title-position="left"
    :locale="{ id: 'ru', firstDayOfWeek: 2, masks: { weekdays: 'WW', modelValue: 'YYYY-MM-DD' } }"
    :disabled-dates="disabledDates"
    :min-date="from"
    v-model.string="date"
  />
</template>

<script setup>
  defineProps({
    disabledDates: {
      default: undefined,
      type: Array,
    },
  });

  const date = defineModel();

  const from = new Date();
</script>

<style lang="scss">
  .app-calendar {
    --vc-font-family: 'unbounded';
    --vc-focus-ring: #FB3F4A;
    --vc-weekday-color: #333333;
    --vc-header-arrow-color: #333333;
    --vc-header-arrow-hover-bg: #EDEDED;
    --vc-day-content-disabled-color: #C1C1C1;
    --vc-rounded-lg: 30px;
    width: 100%;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.14);
    border-radius: 20px;

    .vc-weeks {
      padding: 40px 35px 20px;

      @include sm {
        padding: 20px 12px 15px;
      }
    }

    .vc-header {
      margin-top: 50px;
      padding-left: 35px;
      padding-right: 35px;
      font-size: 24px;

      @include sm {
        font-size: 16px;
        margin-top: 20px;
        padding-left: 12px;
        padding-right: 12px;
      }
    }

    .vc-orange {
      --vc-accent-500: var(--color-primary);
    }

    &.vc-dark {
      --vc-weekday-color: var(--color-body);
      --vc-header-title-color: var(--color-body);
      --vc-border: var(--color-body);
      --vc-color: #C1C1C1;
      --vc-day-content-disabled-color: #666666;
    }

    .vc-weekday, .vc-day-content {
      font-size: 24px;
      font-weight: 500;
      line-height: normal;

      @include sm {
        font-size: 16px;
      }
    }

    .vc-day-content {
      width: 59px;
      height: 59px;

      @include sm {
        width: 32px;
        height: 32px;
      }
    }

    .vc-highlight {
      width: 56px;
      height: 56px;

      @include sm {
        width: 30px;
        height: 30px;
      }
    }
  }
</style>
