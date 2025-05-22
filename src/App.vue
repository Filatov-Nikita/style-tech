<template>
  <notifications />
  <Transition
    mode="out-in"
    leave-active-class="animate__animated animate__fadeOut loader--delay"
    enter-active-class="animate__animated animate__fadeIn loader--delay"
  >
    <Suspense>
      <Landing />
      <template #fallback>
          <div class="loader">
            <BaseSpinner size="100px" />
          </div>
        </template>
      </Suspense>
  </Transition>
</template>

<script setup>
  import Landing from './components/Landing.vue';
</script>

<style scoped lang="scss">
  .loader {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9000;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &--delay {
      --animate-duration: 500ms;
    }
  }
</style>
