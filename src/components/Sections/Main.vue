<template>
  <div class="section-main">
    <div class="wrapper">
      <div class="section-main__wrap">
        <Header class="section-main__header" />
        <div class="section-main__grid">
          <div class="section-main__left">
            <div class="sticker">
              <h1 class="h1">Ваш гид по&nbsp;технике</h1>
              <p class="sticker__text">индивидуальные консультации с&nbsp;экпертом по&nbsp;бытовой технике в&nbsp;Планете</p>
              <BaseButton class="sticker__btn">Записаться</BaseButton>
            </div>
          </div>
          <div class="section-main__right">
            <div class="main-bg">
              <img class="main-bg__img" width="1440" height="1590" src="@/assets/images/main-bg.jpg" alt="фото интерьера">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Header from '../LayoutParts/Header.vue';
</script>

<style scoped lang="scss">
  .section-main {
    @include screen($md) {
      height: 100vh;
      background-image: url('@/assets/images/main-bg.jpg');
      background-size: cover;
      background-position: center;
    }

    &__wrap {
      position: relative;
    }

    &__header {
      position: absolute;
      z-index: 10;
      top: 0;
      left: 0;
      width: 100%;

      @include screen($md) {
        position: static;
      }
    }

    &__grid {
      display: grid;
      grid-template-columns: calc(47% - 40px) calc(53% - 40px);
      column-gap: 80px;

      @include screen($lg) {
        grid-template-columns: calc(60% - 20px) calc(40% - 20px);
        column-gap: 40px;
      }

      @include screen($md) {
        grid-template-columns: 100%;
      }
    }

    &__left {
      padding-top: 190px;

      @include screen($lg) {
        padding-top: 130px;
      }

      @include screen($md) {
        padding-top: 30px;
      }
    }

    &__right {
      margin-right: -75px;

      @include screen($lg) {
        margin-right: -40px;
      }

      @include screen($md) {
        display: none;
      }
    }
  }

  .sticker {
    position: relative;
    border-radius: 50px;
    background-image: url('@/assets/images/texture.png');
    background-size: cover;
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
    border-radius: 0 0 0 100px;
    overflow: hidden;
  }
</style>
