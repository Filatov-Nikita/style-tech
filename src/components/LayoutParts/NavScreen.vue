<template>
  <Teleport to="body">
    <Transition name="nav-anim">
      <div class="nav-mobile" v-if="showed">
        <div class="wrapper">
          <div class="body">
            <div class="head">
              <button class="btn-close" @click="$emit('close')">
                <IconClose />
              </button>
            </div>
            <div class="nav">
              <div class="nav-wrap">
                <a class="nav-link" href="#about" @click.prevent="$scroll.onShowView($event); emit('close')">
                  Об услуге
                </a>
              </div>
              <div class="nav-wrap">
                <a class="nav-link" href="#advantages" @click.prevent="$scroll.onShowView($event); emit('close')">
                  Преимущества
                </a>
              </div>
              <div class="nav-wrap">
                <a class="nav-link" href="#order" @click.prevent="$scroll.onShowView($event); emit('close')">
                  Запись
                </a>
              </div>
              <div class="nav-wrap">
                <a class="nav-link" href="#partners" @click.prevent="$scroll.onShowView($event); emit('close')">
                  Партнеры
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
  import IconClose from '@/components/Icons/IconClose.vue';

  defineProps({
    showed: {
      required: true,
      type: Boolean,
    },
  });

  const emit = defineEmits([ 'close' ]);
</script>

<style scoped lang="scss">
  .nav-mobile {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 9000;
    background-color: var(--color-bg);
    overflow-x: hidden;
    padding-bottom: 32px;
  }

  .body {
    padding-top: 30px;
  }

  .head {
    text-align: right;
    margin-bottom: 30px;
  }

  .nav-anim {
    &-enter-from {
      opacity: 0;
    }

    &-enter-active {
      transition: opacity 300ms;
    }

    &-leave-active {
      transition: opacity 300ms;
      opacity: 0;
    }
  }

  .nav {
    margin-bottom: 50px;
  }

  .nav-wrap {
    padding: 7px 0;
  }

  .nav-link {
    font-size: 16px;
    line-height: 1.25;
    color: var(--color-body);
  }

  .btn-close {
    cursor: pointer;
    width: 24px;
    height: 24px;
    fill: #ffffff;
  }
</style>
