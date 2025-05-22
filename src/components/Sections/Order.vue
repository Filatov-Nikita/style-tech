<template>
  <section id="order" class="section-order" v-if="data && data.results">
    <div class="wrapper">
      <h2 class="h2 section-order__title">Запись на услугу</h2>
      <div class="section-order__grid">
        <div class="section-order__left">
          <Calendar v-model="orderDate" :disabledDates="disabledDates" />
        </div>
        <div class="section-order__right">
          <div class="option option--mb">
            <div class="option__label option__label--mb-md">Какую технику нужно будет подобрать?</div>
            <div class="option__text">
              <Categories :items="categories" v-model:activeItem="activeCategory" />
            </div>
          </div>
          <div class="option option--mb">
            <div class="option__label option__label--mb-sm">Дата</div>
            <div class="option__text">{{ orderDateLabel }}</div>
          </div>
          <div class="option">
            <div class="option__label option__label--mb-md">Время</div>
            <div class="option__text">
              <BaseSelect
                class="section-order__time"
                v-model="orderTime"
                emptyLabel="Выберите время"
                :options="timeSlots"
                :disabled="!activeCategory || !orderDate"
              />
            </div>
          </div>
          <BaseButton
            class="section-order__btn"
            :disabled="!canOrder"
            @click="createOrderAction"
          >
            Записаться
          </BaseButton>
        </div>
      </div>
    </div>
    <SuccessModal
      v-model:showed="successModal"
      :event="currentEvent"
      :category="activeCategory"
      @finish="finish"
    />
    <BaseInnerLoading :showed="loading" />
  </section>
</template>

<script setup>
  import Calendar from '@/components/Order/Calendar.vue';
  import Categories from '@/components/Order/Categories.vue';
  import useRequest from '@/composables/useRequest';
  import useAuth from '@/composables/useAuth';
  import * as CategoriesRepo from '@/http/categories';
  import * as OrderRepo from '@/http/order';
  import { computed, ref, watch } from 'vue';
  import { dateToIso, dateToLocale } from '@/helpers/dates';
  import SuccessModal from '../Order/SuccessModal.vue';
  import { useNotification } from '@kyvg/vue3-notification';
  import useForm from '@/composables/useForm';

  const { data, loading, send } = await useRequest(CategoriesRepo.all, {
    errorMessage: 'Не удалось загрузить данные!'
  });

  const orderDate = ref('');
  const orderTime = ref('');
  const activeCategory = ref(null);
  const categories = computed(() => data.value?.results ?? []);

  watch(activeCategory, () => {
    orderDate.value = '';
  });

  watch(orderDate, () => {
    orderTime.value = '';
  });

  const orderDateLabel = computed(() => {
    if(!orderDate.value) return 'Выберите дату';
    return dateToLocale(new Date(orderDate.value));
  });

  const availableEvents = computed(() => {
    if(!activeCategory.value) return [];
    return activeCategory.value.events.filter(event => {
      return event.start_date.substring(0, 10) === orderDate.value;
    });
  });

  const currentEvent = computed(() => {
    if(!orderTime.value) return null;
    return availableEvents.value.find(event => event.id === orderTime.value) ?? null;
  });

  const timeSlots = computed(() => {
    return availableEvents.value.map(event => ({
      value: event.id,
      label: event.start_date.substring(11, 16),
    }));
  });

  const disabledDates = computed(() => {
    if(!data.value?.results || !activeCategory.value) return [ { start: null, end: null } ];

    const start = new Date();
    start.setDate(start.getDate() - 1);

    return [
      {
        start,
        repeat: {
          every: 'day',
          on: (_opts) => {
            return activeCategory.value.events
              .every(event => {
                const dt1 = event.start_date.split(' ')[0];
                const dt2 = dateToIso(_opts.date);
                return dt1 !== dt2;
              });
          }
        },
      },
    ]
  });

  const { notify } = useNotification();
  const successModal = ref(false);
  const auth = useAuth();

  function orderFn(_form, { event: user }) {
    return OrderRepo.create(user.api_token, {
      event_id: currentEvent.value?.id,
      user_id: user.id,
    });
  }

  function successFn(res) {
    if(!res.data.success) {
      notify({
        type: 'error',
        text: res.data.error,
      });
    } else {
      console.log(res);
      successModal.value = true;
    }
  }

  const { pending: orderPending, onSubmit: createOrder } = useForm(orderFn, {}, successFn);

  const createOrderAction = auth.addAction(createOrder);

  const canOrder = computed(() => {
    return activeCategory.value && orderDate.value && orderTime.value && !orderPending.value;
  });

  function finish() {
    orderDate.value = '';
    activeCategory.value = null;
    send();
  }
</script>

<style scoped lang="scss">
  .section-order {
    position: relative;

    &__title {
      margin-bottom: 50px;

      @include sm {
        margin-bottom: 24px;
      }
    }

    &__grid {
      display: flex;
      flex-wrap: wrap;
      column-gap: 70px;

      @include lg {
        row-gap: 50px;
      }

      @include sm {
        row-gap: 30px;
      }
    }

    &__left {
      width: calc(45% - 35px);

      @include lg {
        width: 100%;
        max-width: 600px;
      }
    }

    &__right {
      width: calc(55% - 35px);

      @include lg {
        width: 100%;
      }
    }

    &__btn {
      margin-top: 40px;

      @include sm {
        margin-top: 30px;
        width: 100%;
      }
    }

    &__time {
      max-width: 240px;
    }
  }

  .option {
    &--mb {
      margin-bottom: 36px;

      @include sm {
        margin-bottom: 30px;
      }
    }

    &__label {
      max-width: 480px;
      font-family: var(--font-druk);
      font-weight: 700;
      font-size: 24px;
      line-height: 1.15;

      @include sm {
        font-size: 20px;
        max-width: 340px;
      }

      &--mb-sm {
        margin-bottom: 10px;

        @include sm {
          margin-bottom: 12px;
        }
      }

      &--mb-md {
        margin-bottom: 20px;

        @include sm {
          margin-bottom: 12px;
        }
      }
    }

    &__text {
      font-weight: 300;
      font-size: 20px;
      line-height: 1.35;

      @include sm {
        font-size: 16px;
      }
    }
  }
</style>
