<template>
  <form class="auth-form" @submit.prevent="onSubmit">
    <BaseInput class="auth-form__input" v-model="form.phone" v-model:maskObject="phoneMask" label="Телефон" placeholder="Телефон" maska="+7 (9##) ### ## ##" />
    <BaseInput class="auth-form__input" v-model="form.lastname" label="Фамилия" placeholder="Фамилия" />
    <BaseInput class="auth-form__input" v-model="form.firstname" label="Имя" placeholder="Имя" />
    <div class="auth-form__captcha" id="google_captcha"></div>
    <AgreeCheck class="auth-form__check" v-model="form.personal_data_agree">
      Согласен с <a class="link" :href="policyUrl" target="_blank">правилами обработки</a> персональных данных
    </AgreeCheck>
    <BaseButton class="auth-form__submit" :disabled="!isValid || pending" type="submit" theme="black">
      Получить код
    </BaseButton>
  </form>
</template>

<script setup>
  import { computed, onMounted, reactive, ref } from 'vue';
  import AgreeCheck from '@/components/AgreeCheck.vue';

  defineProps({
    pending: {
      default: false,
      type: Boolean,
    }
  });

  const emit = defineEmits(['submit']);

  const policyUrl = 'https://id.mall.tech/4/policy?_ga=2.172854755.1188110737.1711946212-1642067771.1650613927';

  const phoneMask = ref({});

  const form = reactive({
    phone: '',
    lastname: '',
    firstname: '',
    personal_data_agree: false,
    email_subscribe_agree: true,
    g_token: '',
  });

  async function prepareCaptcha() {
    captchaIsReady.then(() => {
      grecaptcha.render('google_captcha', {
        sitekey: '6LdDYCAeAAAAACYEMAsY9Nu35lJKw3sJPVs1br3U'
      });
    });
  }

  const isValid = computed(() => {
    return phoneMask.value.completed === true
      && form.lastname !== ''
      && form.firstname !== ''
      && form.personal_data_agree === true;
  });

  function onSubmit() {
    const token = grecaptcha.getResponse();
    form.g_token = token;
    emit('submit', form);
  }

  onMounted(() => {
    prepareCaptcha();
  });
</script>

<style scoped lang="scss">
  .auth-form {
    &__input + &__input {
      margin-top: 20px;
    }

    &__check {
      margin-top: 20px;
      line-height: 1.2;
      font-size: 14px;
    }

    &__submit {
      width: 100%;
      margin-top: 32px;
    }

    &__captcha {
      margin-top: 24px;
    }
  }
</style>
