import { useNotification } from '@kyvg/vue3-notification';
import { ref } from 'vue';

export default async function(fetchFn, params = {}) {
  params = Object.assign({}, {
    immediate: true,
  }, params);

  const loading = ref(false);
  const data = ref(null);
  const error = ref(null);

  const { notify } = useNotification();

  async function send() {
    try {
      loading.value = true;
      const res = await fetchFn();
      data.value = res.data;
      if(params.onSuccess) params.onSuccess(res);
      return res;
    } catch(e) {
      data.value = null;
      error.value = e;
      if(params.errorMessage) {
        notify({
          type: 'error',
          text: params.errorMessage,
        });
      }
      return null;
    } finally {
      loading.value = false;
    }
  }

  if(params.immediate) {
    await send();
  }

  if(params.watch) {
    params.watch.forEach(w => {
      watch(w, send);
    });
  }

  return {
    loading,
    data,
    error,
    send,
  }
}
