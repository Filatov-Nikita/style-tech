<template>
  <div class="app-select-wrap">
    <div
      class="app-select"
      :class="{
        'app-select--showed': showed,
        'app-select--disabled': disabled
      }"
      @click="showed = !showed"
    >
      <div v-if="label" class="app-select__label">{{ label }}</div>
      <div class="app-select__wrap">
        <span class="app-select__val">{{ currentText }}</span>
        <span class="app-select__icon-wrap">
          <BaseIcon class="app-select__icon" name="arrow-down" />
        </span>
      </div>
    </div>
    <div v-if="showed" class="app-dropdown">
      <div
        class="app-option"
        :class="{
          'app-option--active': modelValue === option.value,
        }"
        v-for="option in options"
        @click="onClick(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, onMounted, onUnmounted, ref } from 'vue';

  const props = defineProps({
    options: {
      required: true,
      type: Array,
    },
    emptyLabel: {
      required: true,
      type: String,
    },
    label: {
      default: undefined,
      type: String,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    size: {
      default: 'md',
      type: String,
    },
    modelValue: {
      required: true,
      type: [String, Number],
    }
  });

  const emit = defineEmits([ 'update:modelValue' ]);

  const showed = ref(false);

  function findOpt(value) {
    return props.options.find(opt => opt.value === value);
  }

  const currentText = computed(() => {
    return props.modelValue ?
        findOpt(props.modelValue)?.label ?? props.emptyLabel
      : props.emptyLabel;
  });

  function onClick(opt) {
    emit('update:modelValue', opt.value);
    showed.value = false;
  }

  function onOutside(e) {
    if(!e.target.closest('.app-select-wrap')) {
      showed.value = false;
    }
  }

  onMounted(() => {
    document.body.addEventListener('click', onOutside);
  });

  onUnmounted(() => {
    document.body.removeEventListener('click', onOutside);
  });
</script>

<style scoped lang="scss">
  .app-select-wrap {
    position: relative;
    --border: #686868;
    --radius: 15px;
  }

  .app-select {
    --icon-rotate: 0deg;
    --text-color: var(--color-body);
    --icon-color: #C3C3C3;

    &--showed {
      --icon-rotate: 180deg;
    }

    &--disabled {
      pointer-events: none;
      --text-color: #525252;
      --icon-color: #525252;
      --border: #525252;
    }

    &__wrap {
      border-radius: var(--radius);
      border: 1px solid var(--border);
      cursor: pointer;
      user-select: none;
      display: flex;
      align-items: center;
      column-gap: 20px;
      padding: 12px 20px;
      color: var(--text-color);
      font-size: 16px;
      font-weight: 300;
      line-height: 1.35;

      &:hover {
        --icon-color: var(--color-primary);
        --border: var(--color-primary);
      }
    }

    &__val {
      flex-grow: 1;
    }

    &__icon-wrap {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      color: var(--icon-color);
      transform: rotate(var(--icon-rotate));
      transition: transform 100ms;
    }

    &__icon {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .app-dropdown {
    width: 100%;
    max-height: 300px;
    overflow-x: hidden;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--color-bg);
    position: absolute;
    top: calc(100% + 10px);
    left: 0px;
    z-index: 100;

    &:hover {
      --border: var(--color-primary);
    }
  }

  .app-option {
    cursor: pointer;
    user-select: none;
    padding: 12px 16px;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.35;
    color: var(--color-body);

    &:hover {
      background: #4a4a4a;
    }

    &--active {
      color: var(--color-primary);
    }
  }
</style>
