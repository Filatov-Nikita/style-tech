<template>
  <BaseModal v-model="showed">
    <BaseModalCard class="auth-card">
      <button class="close-modal" @click="showed = false">
        <BaseIcon class="w-full h-full" name="close" color="#ffffff" />
      </button>
      <div class="auth-card__body">
        <KeepAlive>
          <AuthForm v-if="step === 'data'" @submit="onAuth" :pending="authPending" />
          <CodeForm v-else-if="step === 'code'" @submit="onCode" :pending="checkCodePending" />
        </KeepAlive>
      </div>
    </BaseModalCard>
  </BaseModal>
</template>

<script setup>
  import AuthForm from './Form.vue';
  import CodeForm from './CodeForm.vue';
  import { ref, watch } from 'vue';
  import * as AuthApi from '@/http/auth';
  import { useNotification } from "@kyvg/vue3-notification";
  import useForm from '@/composables/useForm';
  import useAuth from '@/composables/useAuth';

  const { notify }  = useNotification();

  const auth = useAuth();

  const emit = defineEmits(['auth:completed']);

  const showed = defineModel('showed');

  const step = ref('data');

  const authBody = ref({});
  const codeBody = ref({});

  const {
    pending: authPending,
    onSubmit: onAuth,
  } = useForm(
    (_, { event: body }) => {
      return AuthApi.sendCode({
        personal_data_agree: body.personal_data_agree,
        email_subscribe_agree: body.email_subscribe_agree,
        phone: body.phone,
        g_token: body.g_token,
      });
    },
    {},
    ({ data }, { event: body }) => {
      if(!data.success) {
        notify({
          type: 'error',
          text: data.error,
        });
      } else {
        authBody.value = body;
        step.value = 'code';
        console.log(data);
      }
    }
  );

  const {
    pending: checkCodePending,
    onSubmit: onCode,
  } = useForm(
    (_, { event: { code } }) => {
      return AuthApi.checkCode({
        token: code,
        personal_data_agree: authBody.value.personal_data_agree,
        email_subscribe_agree: authBody.value.email_subscribe_agree,
        phone: authBody.value.phone,
        lastname: authBody.value.lastname,
        firstname: authBody.value.firstname,
      });
    },
    {},
    ({ data }) => {
      if(!data.success) {
        notify({
          type: 'error',
          text: data.error,
        });
      } else {
        auth.login(data.results);
        emit('auth:completed', data.results);
      }
    }
  );

  watch(showed, (val) => {
    if(!val) {
      authBody.value = {};
      codeBody.value = {};
      step.value = 'data';
    }
  });
</script>

<style scoped lang="scss">
  .auth-card {
    position: relative;
    max-width: 500px;
    padding: 60px 20px 30px;

    @include sm {
      padding: 40px 20px 16px;
    }

    &__close {
      width: 24px;
      height: 24px;
      position: absolute;
      right: 20px;
      top: 20px;
    }

    &__title {

    }
  }
</style>
