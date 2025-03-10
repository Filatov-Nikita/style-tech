<template>
  <div class="section-main">
    <div class="wrapper">
      <Header />
      <div class="sticker">
        <h1 class="h1">Ваш гид по&nbsp;технике</h1>
        <p class="sticker__text">индивидуальные консультации с&nbsp;экпертом по&nbsp;бытовой технике в&nbsp;Планете</p>
        <BaseButton class="sticker__btn">Записаться</BaseButton>
      </div>
      <div class="main-bg">
        <img class="main-bg__img" width="1440" height="1590" src="@/assets/images/main-bg.jpg" alt="фото интерьера">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Header from '../LayoutParts/Header.vue';
</script>

<style scoped lang="scss">
  .sticker {
    position: relative;
    border-radius: 50px;
    background-image: url('@/assets/images/texture.png');
    background-size: cover;
    max-width: 558px;
    padding: 60px 40px 30px 45px;

    &__text {
      margin-top: 30px;
      font-weight: 200;
      font-size: 24px;
      line-height: 1.25;
      color: var(--color-accent);
    }

    &__btn {
      transform: translateY(100%);
    }
  }

  .main-bg {
    position: absolute;
    width: 50%;
    right: 0;
    top: 0;
    z-index: -1;
    border-radius: 0 0 0 100px;
    overflow: hidden;
  }
</style>
