<template>
  <main class="page">
    <SectionMain />
    <SectionAbout class="page__about" />
    <SectionAdvantages class="page__adv" />
    <div class="section-devices">
      <img class="section-devices__photo" width="2160" height="1417" src="@/assets/images/devices.jpg" alt="devices" loading="lazy">
    </div>
    <SectionOrder class="page__order" />
    <SectionPartners class="page__partners" />
    <Footer class="page__footer" />
    <AuthModal v-model:showed="auth.showedModal.value" @auth:completed="auth.onComplete" />
  </main>
</template>

<script setup>
  import SectionMain from './Sections/Main.vue';
  import SectionAbout from './Sections/About.vue';
  import SectionAdvantages from './Sections/Advantages.vue';
  import SectionPartners from './Sections/Partners.vue';
  import SectionOrder from './Sections/Order.vue';
  import Footer from './LayoutParts/Footer.vue';
  import AuthModal from '@/components/Auth/Modal.vue';
  import { init as initAuth } from '@/composables/useAuth';

  const auth = initAuth();
</script>

<style scoped lang="scss">
  .section-devices {
    padding: 80px 0;

    @include sm {
      padding: 35px 0;
    }

    &__photo {
      width: 100%;
    }
  }

  .page {
    &__about {
      padding-top: 110px;
      padding-bottom: 80px;

      @include sm {
        padding-top: 70px;
        padding-bottom: 35px;
      }
    }

    &__adv, &__partners, &__footer, &__order {
      padding: 80px 0;

      @include sm {
        padding: 35px 0;
      }
    }
  }
</style>
