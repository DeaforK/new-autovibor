<template>
  <div class="page_container">
    <PublicWidgetsTopHeroSection
      text="Hеограниченное число осмотров автомобилей с 11:00 до 18:00&#x2A;"
      smalltext="*в течение рабочего дня"
      :video="true"
    >
      <template #title>
        Эксперт на день
      </template>
      <template #body>
        Приедем за 1 час, проверим, предоставим экспертное заключение.
      </template>
    </PublicWidgetsTopHeroSection>
    <div class="page_container__reports">
      <h2 style="padding-top: 20px">
        Будьте уверены в автомобиле, как в новом
      </h2>
      <p>
        Проверим нужный автомобиль по фирменному чек-листу. Автодиагностика выявляет не только
        текущие проблемы, но и те, которые могут возникнуть через 100-200 км пробега. Проведем
        юридическую проверку вместе с технической и компьютерной диагностикой автомобиля.
      </p>
      <div class="page_container__reports__hero">
        <PublicSharedUiBlackButton
          to="/reports"
        >
          Отчеты автомобилей
        </PublicSharedUiBlackButton>
      </div>
      <p>
        Приехать и проверить автомобиль - этого уже недостаточно. Проблемы могут возникнуть через
        несколько дней или неделю. Перекупы и автосервисы давно научились скрывать технические
        неполадки чисто на время продажи.
      </p>
      <p>
        Более 10 лет мы занимались перепродажей автомобилей, и знаем, куда и на что нужно смотреть
        во время автодиагностики, чтобы выявить автомобиль, над которым поработали профессионалы,
        чтобы его продавать.
      </p>
    </div>
    <div class="page_container__outcity">
      <h2>
        Экономим ваше время.<br>
        Вы можете не приезжать
      </h2>
      <p style="text-align: center">
        Для иногородних или занятых предоставляем полный отчет на email <br>о проверке и
        диагностике автомобиля
      </p>
      <div class="page_container__outcity__video_container">
        <iframe
          src="https://www.youtube.com/embed/IrHSIkZ2XNY"
          width="100%"
          loading="lazy"
          height="400"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
        <div>
          <p>
            Наши клиенты давно просили ввести эту услугу, и мы ее ввели. Теперь вы можете не
            приезжать на диагностику авто.
          </p>
          <b>После проверки вы получите:</b>
          <br>

          <ul>
            <li>полный видеоотчет с проверки по требованию</li>
            <li>не менее 50 фотографий</li>
            <li>чек-лист проверки</li>
            <li>экспертное заключение</li>
          </ul>
        </div>
      </div>
      <br>
      <PublicSharedUiBlackButton
        to="/reports"
      >
        Смотреть отчеты
      </PublicSharedUiBlackButton>
      <h2 style="font-size: 27px; line-height: 39px; margin-bottom: 60px; max-width: 80%">
        Для иногородних или занятых предоставляем полный отчет на любой мессенджер или личный email
        о проверке автомобиля
      </h2>
    </div>
    <PublicWidgetsCommonDiagnoseForm />
    <div style="padding: 60px 0 50px; max-width: 70%; margin: 0 auto">
      <h2>Договариваемся о стоимости персонально</h2>
      <p>
        Стоимость наших услуг начинается от 2 000 рублей за проверку. Но у каждого клиента свои
        задачи. Кому то нужно посмотреть 3 автомобиля, которые будут находится в одном районе.<br>
        Кому то - 5 штук, в разных частях города.
      </p>
    </div>
    <div class="page_container__separator">
      <h1>Приедем на диагностику авто в течение часа <br>в любую точку города</h1>
      <div class="page_container__separator__btn_wrapper">
        <a
          href="https://www.youtube.com/channel/UCmrb3M_KF-1WLvzdgXbohbQ/videos"
          target="_blank"
        >
          <PublicSharedUiPrimaryButton> Как мы проверяем </PublicSharedUiPrimaryButton>
        </a>
        <PublicSharedUiPrimaryButton @click="navigateTo('/blog/articles')">
          Прочитай и ЗНАЙ!
        </PublicSharedUiPrimaryButton>
      </div>
    </div>
    <div class="page_container__points">
      <h2>Несколько причин, по которым нужно проверять автомобиль</h2>
      <ul>
        <li>
          <b>Многие продавцы </b>проводят предпродажную подготовку. Некоторым удается скрыть 80-90%
          дефектов, которые заметит только профессионал с опытом работы.
        </li>
        <li>
          <b>Распространенная проблема </b>– чрезмерный износ деталей, который покупатель недооценил
          при проверке. Есть риск попасть на ремонт <br>до 300 000 руб. Полная компьютерная
          диагностика облегчает обнаружение.
        </li>
        <li>
          <b>Самые строгие проверки</b> следует проводить, имея дело с перекупами. Узнать, продает
          ли автомобиль реальный владелец или перекуп, всегда может профессионал.
        </li>
        <li>
          <b>Далеко не все битые авто </b>нужно списывать со счетов. Какие повреждения допустимы, и
          даже нужны, чтобы снизить цену на торге, – расскажет эксперт после проведенной
          автодиагностики и проверки.
        </li>
        <li>
          <b>Даже сегодня </b>можно легко наткнуться на поддельный ПТС. Чтобы не купить ворованное
          авто или с обременениями, нужно уметь отличить оригинал ПТС от подделки.
        </li>
      </ul>
      <PublicSharedUiPrimaryButton @click="navigateTo('/')">
        Найти лучший автомобиль
      </PublicSharedUiPrimaryButton>
    </div>
    <div class="page_container__packages">
      <h2>Что входит в выездную диагностику</h2>
      <div class="page_container__packages__container">
        <div class="page_container__packages__container__left">
          <h3>В комплексную диагностику входит</h3>
          <ul>
            <li>
              Диагностика кузова на предмет ДТП, на предмет замененных кузовных элементов, проверка
              оригинальности оптики, остекления и пр., замер и оценка состояния ЛКП;
            </li>
            <li>Осмотр подкапотного пространства, наличие течей, запотеваний;</li>
            <li>
              Проверка технических жидкостей (проверка уровня и состояния моторного масла, эмульсия,
              проверка уровня и температуры кристаллизации антифриза, проверка уровня тормозной
              жидкости и наличия в ней воды, при наличии системы ГУР проверка уровня и состояния
              жидкости ГУРа);
            </li>
            <li>Диагностика АКПП;</li>
            <li>Компьютерная диагностика всех электронных систем авто сканером;</li>
            <li>Проверка подлинности пробега;</li>
            <li>Проверка автомобиля по базе ГИБДД;</li>
            <li>Проверка на юридическую чистоту (ограничения, запреты обременения, аресты);</li>
            <li>Тест-драйв.</li>
          </ul>
        </div>
        <div class="page_container__packages__container__right">
          <h3>После проверки вы получите</h3>
          <ul>
            <li>Полный видеоотчет с проверки;</li>
            <li>
              Не менее 50 фотографий (*при личном присутствии фиксация основных моментов по
              запросу). Фото и видео материалы загружаются на Яндекс Диск по соответствующим папкам
              для удобства просмотра.
            </li>
            <li>Фирменный чек-лист проверки;</li>
            <li>
              Экспертное заключение (резюмирование диагностики в текстовом или голосовом формате, а
              также рекомендации).
            </li>
          </ul>
        </div>
      </div>
      <PublicSharedUiPrimaryButton @click="showModal = true">
        Отправить заявку
      </PublicSharedUiPrimaryButton>
    </div>
    <PublicSharedUiFlampContiner />
    <PublicWidgetsAboutRating />
    <PublicWidgetsAboutMap />
  </div>
  <PublicWidgetsCommonFormModal
    v-show="showModal"
    @close-modal="showModal = false"
  />
</template>

<script setup lang="ts">
useHead({
  title: 'Эксперт на день'
})

const showModal = ref(false)
</script>

<style lang="scss" scoped>


.page_container {
  h2 {
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    margin: 40px 0;
    text-align: center;
    overflow-wrap: break-word;
    hyphens: manual;
  }

  p {
    font-size: 16px;
    line-height: 170%;
    text-align: center;
    margin-bottom: 20px;

    @include more-than-tablet {
      max-width: 80%;
      margin: 0 auto;
      margin-bottom: 40px;
    }
  }

  &__reports {
    margin: 0 auto;
    width: 90%;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__hero {
      background: url('/images/check-list.jpg');
      padding: 100px;
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 30px;
      margin: 50px;
    }
  }

  &__outcity {
    background: url('/images/report2.png');
    background-position: center bottom;
    background-size: cover;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 0 auto;
    h2 {
      margin-bottom: 0;
    }
    p {
      text-align: left;
      max-width: 100%;
      margin: 0;
      margin-bottom: 10px;
    }

    &__video_container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: center;
      align-items: center;
      max-width: 80%;

      ul {
        padding-left: 30px;
        padding-bottom: 20px;
        li {
          font-size: 16px;
        }
      }

      @include more-than-mobile {
        flex-direction: row;
      }
    }
  }

  &__separator {
    background: url('/images/moto-section.jpg') no-repeat center center;
    background-size: cover;
    min-height: 470px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 20px;

    &__btn_wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      @include more-than-mobile {
        flex-direction: row;
      }
    }

    h1 {
      color: white;
      font-weight: bold;
      font-size: 36px;
      text-align: center;
      max-width: 70%;
      line-height: 44px;
      margin-bottom: 10px;
      overflow-wrap: break-word;
      hyphens: manual;
    }
  }

  &__points {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
    margin: 30px auto;
    margin-bottom: 80px;
    @include more-than-mobile {
      max-width: 80%;
    }

    ul {
      list-style: none;
      margin-bottom: 50px;

      li {
        background: url('/images/pointer.svg') left center no-repeat;
        max-width: 100%;
        margin: 0 auto;
        font-size: 16px;
        font-weight: 300;
        line-height: 30px;
        padding: 10px;
        margin-bottom: 50px;
        padding-left: 70px;
        align-self: flex-start;
        justify-self: flex-start;
        margin-left: 10px;
        @include more-than-tablet {
          max-width: 60%;
          margin: 0 auto;
        }
      }
    }
  }

  &__packages {
    background: url('/images/modal_bg.jpg') center center no-repeat;
    background-size: cover;
    color: white;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding-bottom: 60px;
    margin-bottom: 40px;
    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
      padding-top: 20px;
      @include more-than-mobile {
        justify-content: space-between;
        align-items: flex-start;
        gap: 50px;
        max-width: 90%;
        margin: 0 auto;
        margin-bottom: 40px;
        flex-direction: row;
      }
      h3 {
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
      }
      &__left {
        max-width: 80%;
        padding: 40px 20px;
        background-color: white;
        color: black;
        height: auto;
        border-radius: 40px;
        @include more-than-mobile {
          max-width: 50%;
        }
        ul {
          padding-top: 20px;
          li {
            padding: 10px 0;
            font-size: 16px;
            max-width: 80%;
            margin: 0 auto;
          }
        }
      }
      &__right {
        max-width: 80%;
        background-color: white;
        padding: 40px 20px;
        border-radius: 40px;
        color: black;
        height: 100%;
        @include more-than-mobile {
          max-width: 50%;
        }
        ul {
          @include more-than-tablet {
            padding-left: 30px;
            padding-top: 20px;
          }
          li {
            padding: 10px 0;
            font-size: 16px;
            max-width: 80%;
            margin: 0 auto;
          }
        }
      }
    }
  }
}
</style>
