<template>
  <section id="advantages" class="section-advantages">
    <div class="wrapper">
      <h2 class="h2 section-advantages__title">Преимущества</h2>
      <div class="section-advantages__wrap">
        <article class="item">
          <span class="item__index">1</span>
          <h3 class="item__title">Экономия времени</h3>
          <p class="item__text">
            Гид уже ознакомлен с вашим запросом и подготовил информацию о подходящих товарах. Вам не придется тратить время на самостоятельное изучение ассортимента
          </p>
        </article>
        <article class="item">
          <span class="item__index">2</span>
          <h3 class="item__title">Удобство</h3>
          <p class="item__text">
            Не нужно стоять в очереди к консультанту или искать свободного сотрудника магазина. Опытный гид ждет вас в оговоренное время и полностью сосредоточен на вашей задаче
          </p>
        </article>
        <article class="item">
          <span class="item__index">3</span>
          <h3 class="item__title">Избежание ошибок</h3>
          <p class="item__text">
            Покупка техники требует внимательного подхода. Гид поможет избежать распространенных ошибок, таких как покупка неподходящего оборудования или переплата за ненужные функции
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .section-advantages {
    &__title {
      margin-bottom: 50px;

      @include sm {
        margin-bottom: 32px;
      }
    }

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      margin: -7px;
    }
  }

  .item {
    width: calc(33.3% - 14px);
    margin: 7px;
    border: 1px solid var(--color-primary);
    border-radius: 30px;
    padding: 30px 20px 70px 30px;

    @include lg {
      width: calc(100% - 14px);
    }

    @include sm {
      padding: 24px 15px 45px 20px;
    }

    &__index {
      display: block;
      width: 100%;
      font-family: var(--font-zekton);
      font-size: 80px;
      font-weight: 400;
      line-height: 1.15;
      color: #FD5F0F;
      margin-bottom: 25px;

      @include sm {
        font-size: 60px;
        margin-bottom: 20px;
      }
    }

    &__title {
      font-family: var(--font-druk);
      font-size: 24px;
      font-weight: 700;
      line-height: 1.15;
      margin-bottom: 16px;

      @include sm {
        font-size: 20px;
      }
    }

    &__text {
      font-weight: 200;
      font-size: 16px;
      line-height: 1.35;

      @include sm {
        font-size: 14px;
      }
    }
  }
</style>
