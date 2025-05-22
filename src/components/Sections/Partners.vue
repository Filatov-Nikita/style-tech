<template>
  <section id="partners" class="section-partners">
    <div class="wrapper">
      <h2 class="h2 section-partners__title">Партнеры</h2>
      <div class="items">
        <div class="item">
          <img class="item__photo" width="274" height="187" src="@/assets/images/eldo.svg" alt="" loading="lazy">
        </div>
        <div class="item">
          <img class="item__photo" width="278" height="187" src="@/assets/images/mvideo.svg" alt="" loading="lazy">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .section-partners {
    &__title {
      margin-bottom: 50px;

      @include sm {
        margin-bottom: 30px;
      }
    }
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    margin: -15px;

    @include sm {
      margin: -6px;
    }
  }

  .item {
    padding: 0 20px;
    border-radius: 30px;
    overflow: hidden;
    width: calc(50% - 30px);
    margin: 15px;
    position: relative;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-image: url('@/assets/images/texture.png');
      background-size: cover;
      z-index: -1;
      opacity: 0.2;
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      backdrop-filter: blur(48px);
      box-shadow: inset 0 0 68px 0 rgba(255, 255, 255, 0.05);
      background: rgba(224, 198, 185, 0.03);
      z-index: -2;
    }

    @include md {
      width: 100%;
    }

    @include sm {
      margin: 6px;
    }

    &__photo {
      margin: 0 auto;

      @include sm {
        width: 50%;
      }
    }
  }
</style>
