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
    background-image: url('@/assets/images/texture.png');
    background-size: cover;

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
