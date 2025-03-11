<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer__wrap">
        <div class="footer__body">
          <div class="footer__address">
            <p>ТРЦ «Планета»</p>
            <p>г. Уфа, ул. Энтузиастов, 20</p>
          </div>
          <div class="soc-items">
            <a class="soc-item soc-item--vk" href="https://vk.com/trc_planeta_ufa" target="_blank"></a>
            <a class="soc-item soc-item--ok" href="https://ok.ru/group/57048741838907" target="_blank"></a>
            <a class="soc-item soc-item--rt" href="https://rutube.ru/channel/24694861/" target="_blank"></a>
            <a class="soc-item soc-item--tg" href="https://t.me/trc_planeta_ufa" target="_blank"></a>
            <a class="soc-item soc-item--you" href="https://www.youtube.com/channel/UCwQ9kwTOFChkJKrMOMqJ-pg" target="_blank"></a>
          </div>
        </div>
        <a class="logo" href="https://ufa.planeta-mall.ru/" target="_blank">
          <img class="logo__img" width="113" height="43" src="@/assets/images/logo.svg" alt="Логотип планета">
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .footer {
    @include sm {
      padding-bottom: 40px;
    }

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-between;
      row-gap: 15px;
    }

    &__address {
      font-weight: 400;
      font-size: 20px;
      line-height: 1.35;
      margin-bottom: 25px;

      @include sm {
        font-size: 16px;
      }
    }

    &__body {
      @include sm {
        width: 100%;
        order: 1;
      }
    }
  }

  .logo {
    width: 141px;

    @include sm {
      width: 120px;
    }

    &:hover {
      opacity: 0.8;
    }

    &__img {
      width: 100%;
    }
  }

  .soc-items {
    display: flex;
    align-items: flex-start;
    column-gap: 16px;
  }

  .soc-item {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    background-size: 100%;

    &:hover {
      opacity: 0.8;
    }

    &--vk {
      background-image: url('@/assets/images/soc/vk.svg');
    }

    &--ok {
      background-image: url('@/assets/images/soc/ok.svg');
    }

    &--rt {
      background-image: url('@/assets/images/soc/rt.svg');
    }

    &--tg {
      background-image: url('@/assets/images/soc/tg.svg');
    }

    &--you {
      background-image: url('@/assets/images/soc/you.svg');
    }
  }
</style>
