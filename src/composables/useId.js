import { computed } from 'vue';

export default function(_id) {
  const id = computed(() => {
    return _id.value ?? '_input_' + Math.random().toString();
  });

  return {
    id,
  }
}
