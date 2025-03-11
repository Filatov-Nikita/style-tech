<template>
  <section id="about" class="section-about">
    <div class="wrapper">
      <div class="section-about__wrap">
        <div class="section-about__left">
          <h2>Для тех, кто ценит время и&nbsp;качество</h2>
        </div>
        <div class="section-about__right">
          <div class="text-block">
            <p class="text-block__text">Персональный гид-эксперт по бытовой технике Планеты поможет вам выбрать мощный робот-пылесос, самый бесшумный холодильник или Дайсон в комплектации, которая точно вас порадует.</p>
            <p class="text-block__caption">Консультация бесплатная / необходима предварительная запись</p>
            <BaseButton class="text-block__btn">Записаться</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .section-about {
    &__wrap {
      display: grid;
      grid-template-columns: calc(47% - 40px) calc(53% - 40px);
      column-gap: 80px;

      @include screen($lg) {
        grid-template-columns: calc(60% - 20px) calc(40% - 20px);
        column-gap: 40px;
      }

      @include screen($md) {
        grid-template-columns: 100%;
        row-gap: 30px;
      }
    }
  }

  .text-block {
    max-width: 534px;
    font-size: 20px;
    line-height: 1.35;

    @include sm {
      font-size: 16px;
    }

    &__text {
      max-width: 700px;
      margin-bottom: 20px;

      @include sm {
        margin-bottom: 16px;
      }
    }

    &__caption {
      color: var(--color-primary);
      margin-bottom: 30px;

      @include sm {
        margin-bottom: 24px;
      }
    }

    &__btn {
      @include sm {
        width: 100%;
      }
    }
  }
</style>
