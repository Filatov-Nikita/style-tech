<template>
  <section class="section-about">
    <div class="wrapper">
      <div class="section-about__wrap">
        <div class="section-about__left">
          <h2>Для тех, кто ценит время и&nbsp;качество</h2>
        </div>
        <div class="section-about__right">
          <div class="text-block">
            <p class="text-block__text">Персональный гид-эксперт по бытовой технике Планеты поможет вам выбрать мощный робот-пылесос, самый бесшумный холодильник или Дайсон в комплектации, которая точно вас порадует.</p>
            <p class="text-block__caption">Консультация бесплатная / необходима предварительная запись</p>
            <BaseButton>Записаться</BaseButton>
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
    padding-top: 110px;
    padding-bottom: 80px;

    &__wrap {
      display: grid;
      grid-template-columns: 500px 1fr;
      column-gap: 140px;
    }
  }

  .text-block {
    max-width: 534px;
    font-size: 20px;
    line-height: 1.35;

    &__text {
      margin-bottom: 20px;
    }

    &__caption {
      color: var(--color-primary);
      margin-bottom: 30px;
    }
  }
</style>
