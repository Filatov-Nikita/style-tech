import useEvent from './useEvent';
import * as User from '@/helpers/user';
import { ref, provide, inject, watch } from 'vue';

const exposedSymbol = Symbol();

export function init() {
  const user = ref(User.get());
  const isAuth = ref(user.value !== null);
  const showedModal = ref(false);
  const successEvent = useEvent();

  function logout() {
    user.value = null;
    isAuth.value = false;
    User.clean();
  }

  function login(res) {
    User.save(res);
    user.value = res;
    isAuth.value = true;
  }

  function onComplete(user) {
    successEvent.trigger(user);
  }

  function addAction(fn) {
    return function() {
      if(isAuth.value) {
        fn(user.value);
      } else {
        showedModal.value = true;
        successEvent.on((user) => {
          showedModal.value = false;
          fn(user);
        }, { once: true });
      }
    }
  }

  watch(showedModal, (val) => {
    if(!val) successEvent.removeAll();
  });

  const exposed = {
    showedModal,
    isAuth,
    user,
    successEvent,
    addAction,
    login,
    logout,
    onComplete,
  };

  provide(exposedSymbol, exposed);

  return exposed;
};

export default function() {
  const exposed = inject(exposedSymbol);
  if(exposed === null) throw new Error('exposed не найден');
  return exposed;
};
