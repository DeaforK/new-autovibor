<template>
  <div class="consult__wrapper">
    <!-- Заголовки отдельно сверху -->
    <div class="consult__headings">
      <h3 class="consult__title-top">
        ПОЛУЧИТЕ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ
      </h3>
      <h3 class="consult__title-bottom">
        ПРИ ПОКУПКЕ АВТОМОБИЛЯ ИЗ-ЗА ГРАНИЦЫ
      </h3>
    </div>

    <!-- Контент в две колонки -->
    <div class="consult__content">
      <!-- Левая колонка -->
      <div class="consult__left">
        <p class="consult__body">
          Свяжитесь с нами любым удобным способом
        </p>

        <div class="consult__row">
          <a
            :href="`tel:${phoneNumber}`"
            class="consult__phone"
            v-text="phoneNumber"
          />
          <div class="consult__socials">
            <a
              v-for="(social, idx) in socials"
              :key="idx"
              :href="social.link"
              target="_blank"
            >
              <img
                :src="social.image"
                :alt="social.label"
              >
            </a>
          </div>
        </div>

        <div class="consult__btn-wrapper">
          <button
            class="consult__btn"
            @click="showModal = true"
          >
            Получить консультацию
          </button>
        </div>
      </div>

      <!-- Правая колонка -->
      <div class="consult__right">
        <p><b>Офис в России:</b> г. Екатеринбург, ул. Амундсена д.107, оф.516 (вход блок2)</p>
        <p><b>Офис в Южной Корее:</b> 49-34 Hang-dong 7(chil)-ga, Jung-gu, Incheon</p>
      </div>
    </div>
  </div>

  <PublicWidgetsCommonFormModal v-model:showModal="showModal" />
</template>


<script setup lang="ts">
import { useInitStore } from '~/components/public/entities/initStore/model'

const { settingsMap } = useInitStore()
const showModal = ref(false)

const phoneNumber = settingsMap.get('phoneNumber')?.content ?? ''

const socials = [
  {
    image: '/images/whatsapp_1.svg',
    label: 'Whatsapp',
    link: settingsMap.get('whatsapp')?.content ?? ''
  },
  {
    image: '/images/youtube_2.svg',
    label: 'Youtube',
    link: settingsMap.get('youtube')?.content ?? ''
  }
]
</script>

<style lang="scss" scoped>
.consult__wrapper {
  margin: 30px 40px;
  border-radius: 32px;
  overflow: hidden;
  background: url('/images/car-delivery/bg-info2.png') center/cover no-repeat;
  color: #fff;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    margin: 30px 0;
  }
}

.consult__headings {
  display: flex;
  flex-direction: column;
  gap: 12px;

  .consult__title-top,
  .consult__title-bottom {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.4;

    @media (min-width: 1024px) {
      font-size: 32px;
    }
  }
}

.consult__content {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 1000px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    gap: 64px;
  }
}

.consult__left,
.consult__right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  @media (min-width: 1024px) {
    align-items: flex-start;
    text-align: left;
  }
}

.consult__body {
    font-size: 18px;
    text-align: center;

    @media (min-width: 1024px) {
        text-align: left;
    }
}

.consult__row {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;

    .consult__phone {
        font-size: 24px;
        font-weight: 700;
        color: #de5b2a;
        text-decoration: none;
    }

    .consult__socials {
        display: flex;
        gap: 12px;

        img {
            width: 32px;
            height: 32px;
        }
    }
}

.consult__btn-wrapper {
    margin-top: 8px;

    .consult__btn {
        background-color: #de5b2a;
        color: #fff;
        font-weight: 600;
        font-size: 16px;
        padding: 12px 24px;
        border-radius: 16px;
        border: none;
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
            background-color: #c34f22;
        }
    }
}

.consult__right {
    flex: 1;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: center;

    @media (min-width: 1024px) {
        text-align: left;
    }

    p {
        line-height: 1.5;

        b {
            font-weight: 700;
        }
    }
}
</style>
