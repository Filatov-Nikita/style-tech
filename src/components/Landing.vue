<template>
  <main>
    <SectionMain />
    <SectionAbout />
    <SectionAdvantages />
    <div class="section-devices">
      <img class="section-devices__photo" width="2160" height="1417" src="@/assets/images/devices.jpg" alt="devices" loading="lazy">
    </div>
  </main>
</template>

<script setup>
  import SectionMain from './Sections/Main.vue';
  import SectionAbout from './Sections/About.vue';
  import SectionAdvantages from './Sections/Advantages.vue';
</script>

<style scoped lang="scss">
  .section-devices {
    padding: 80px 0;

    &__photo {
      width: 100%;
    }
  }
</style>
