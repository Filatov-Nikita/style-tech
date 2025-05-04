import { ref, reactive } from 'vue';
import useAuth from './useAuth';
import { useNotification } from "@kyvg/vue3-notification";

export default function(
  fetchFn,
  initialValues,
  successFn = () => {},
  failedFn = () => {}
) {
  const { notify } = useNotification();
  const auth = useAuth();
  const pending = ref(false);

  const form = reactive({ ...initialValues });

  function reset() {
    for(let key in form) {
      delete form[key];
    }
  }

  async function onSubmit(event) {
    try {
      pending.value = true;
      const res = await fetchFn(form, { event });
      successFn(res, { event, reset });
    } catch(e) {
      console.log(e);

      failedFn(e);
      if(e.response.status === 401) {
        auth.logout();
      }

      if(e.response && e.response.data && e.response.data.error) {
        notify({
          type: 'error',
          text: e.response.data.error,
        });
      }
    } finally {
      pending.value = false;
    }
  }

  return {
    form,
    pending,
    onSubmit,
    reset,
  }
};
