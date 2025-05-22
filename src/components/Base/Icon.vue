<template>
  <svg aria-hidden="true">
    <use :href="symbolId" :fill="fill" />
  </svg>
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'BaseIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      default: undefined,
      type: String,
    },
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`);
    const fill = computed(() => props.color ? props.color : 'currentColor');
    return {
      symbolId,
      fill,
    };
  },
})
</script>
