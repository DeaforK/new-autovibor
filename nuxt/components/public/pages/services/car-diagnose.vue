<template>
  <div class="page_container">
    <PublicWidgetsTopHeroCarDiagnose :video="true">
      <template #title>
        Выездная диагностика автомобиля в Екатеринбурге – проверка перед покупкой с выездом к вам
      </template>
      <template #body>
        Услуги диагностики автомобиля с выездом и вниманием к каждой детали в Екатеринбурге и Свердловской области от
        компании «Автовыбор».
      </template>
    </PublicWidgetsTopHeroCarDiagnose>
    <div class="page_container__reports">
      <h2 style="padding-top: 20px">
        Будьте уверены в автомобиле, как в новом
      </h2>
      <p>
        Проверим нужный автомобиль по фирменному чек-листу. Автодиагностика выявляет не только
        текущие проблемы, но и те, которые могут возникнуть через 100-200 тысяч км пробега. Проведем
        юридическую проверку вместе с технической и компьютерной диагностикой автомобиля.
      </p>
      <div class="page_container__reports__hero">
        <PublicSharedUiBlackButton to="/reports">
          Отчеты автомобилей
        </PublicSharedUiBlackButton>
      </div>
      <p>
        Приехать и проверить автомобиль — этого уже недостаточно. Проблемы могут возникнуть через
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
          loading="lazy"
          width="100%"
          height="350"
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
            <li>полный видеоотчет по требованию</li>
            <li>не менее 50 фотографий</li>
            <li>чек-лист</li>
            <li>экспертное заключение</li>
          </ul>
        </div>
      </div>
      <br>
      <PublicSharedUiBlackButton to="/reports">
        Смотреть отчеты
      </PublicSharedUiBlackButton>
      <div class="page_container__outcity__info">
        <h5 class="page_container__outcity__info__title">
          Диагностика для иногородних клиентов – эксперты проверят авто за вас
        </h5>
        <p class="page_container__outcity__info__text">
          Выездная диагностика авто в Екатеринбурге – востребованная услуга среди покупателей из Свердловской области и
          других регионов РФ.
        </p>
        <p class="page_container__outcity__info__text">
          По вашей заявке специалист выезжает на осмотр машины для:
          <br>— проведения компьютерной диагностики автомобиля с выездом - тестируется исправность всех основных узлов и
          механизмов ТС;
          <br>— проверки юридической чистоты документов;
          <br>— выявления скрытых признаков ДТП.
        </p>
        <p class="page_container__outcity__info__text">
          Диагностика автомобиля с выездом к клиенту также позволяет получить представление о состоянии салона и кузова:
          наличие ржавчины, битых и неисправных элементов, факты покраски и пр.
        </p>
        <p class="page_container__outcity__info__text">
          Вам не придется никуда ехать. Полная и соответствующая действительности информация по результатам
          выездной проверки автомобиля будет зафиксирована в фото и видеоотчете.
          Мы работаем на совесть и готовы нести финансовую ответственность за реализуемые нами услуги.
        </p>
      </div>
    </div>
    <PublicWidgetsCommonDiagnoseForm />
    <div class="page_container__agreement-cost">
      <h2>Договариваемся о стоимости персонально</h2>
      <p>
        Стоимость наших услуг начинается от 2 000 рублей за проверку. Но у каждого клиента свои
        задачи. Кому-то нужно посмотреть 3 автомобиля, которые будут находится в одном районе.<br>
        Кому-то — 5 штук, в разных частях города.
      </p>
    </div>
    <div class="page_container__separator">
      <h2>Приедем на диагностику авто в течение часа <br>в любую точку города</h2>
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
      <h2>5 причин сделать выездную диагностику перед покупкой авто:</h2>
      <ul>
        <li>
          <b>Выявление скрытых дефектов.</b> Как правило, продавцы не спешат честно рассказывать о состоянии ТС.
          В ходе компьютерной диагностики автомобиля с выездом в Екатеринбурге мы гарантированно обнаружим проблемы и
          неисправности,
          которые попросту не заметит непрофессионал.
        </li>
        <li>
          Объективная оценка. Независимый эксперт проведет диагностику авто на выезде и представит честное заключение о
          состоянии машины,
          чтобы вы могли принять взвешенное решение о покупке.
        </li>
        <li>
          Проверка юридической чистоты и истории владения. Специалист, который выполняет выездную проверку автомобиля
          перед
          покупкой,
          заглянет под капот, сверит VIN-номера, посмотрит документы и пробег.
        </li>
        <li>
          Адекватный торг.
          В ходе осмотра и проверки эксперты выявят недочеты и спорные моменты, на которые можно опираться, чтобы
          уменьшить
          сумму сделки.
        </li>
        <li>
          Выгодные цены на диагностику автомобиля с выездом. Стоимость наших услуг в разы меньше того, что придется
          потратить на устранение неполадок,
          которые вы попросту не увидите при самостоятельном осмотре машины перед покупкой.
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
  <PublicWidgetsCommonFormModalCarDiagnose
    v-show="showModal"
    @close-modal="showModal = false"
  />
</template>

<script setup lang="ts">
useHead({
  title: 'Выездная диагностика автомобиля перед покупкой в Екатеринбурге — Автовыбор',
  meta: [
    { name: 'description', content: 'Тщательная выездная диагностика автомобиля перед покупкой. Отчёт о скрытых дефектах, помощь в торге и безопасная сделка.' }
  ]
})

const showModal = ref(false)
</script>

<style lang="scss" scoped>
.page_container {
  h2 {
    font-weight: bold;
    margin: 40px 0;
    text-align: center;
    hyphens: manual;

    @include more-than-small-mobile {
      font-size: 28px;
      line-height: 36px;
    }

    @include more-than-mobile {
      font-size: 36px;
      line-height: 44px;
    }
  }

  p {
    font-size: 16px;
    line-height: 170%;
    text-align: center;

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

    &__hero {
      background: url('/images/check-list.jpg');
      background-size: cover;
      padding: 100px;
      max-width: 80%;
      margin: 50px auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 30px;
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

    &__info {
      padding: 30px 20px;
      margin: 0 auto;
      max-width: 1200px;
      display: flex;
      flex-direction: column;
      gap: 20px;

      @include more-than-mobile {
        padding: 40px 40px;
      }

      @include more-than-tablet {
        padding: 60px;
        gap: 25px;
      }

      &__title {
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        line-height: 1.4;

        @include more-than-tablet {
          font-size: 24px;
        }
      }

      &__text {
        font-size: 16px;
        line-height: 165%;
        color: #333;
        text-align: left;

        @include more-than-tablet {
          font-size: 18px;
          max-width: 90%;
          margin: 0 auto;
        }
      }
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

  &__agreement-cost {
    margin: 0 auto;

    @include more-than-small-mobile {
      padding: 10px 0 30px 0;
      max-width: 90%;
    }

    @include more-than-mobile {
      padding: 60px 0 50px;
      max-width: 70%;
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

    h2 {
      color: white;
      font-weight: bold;
      text-align: center;
      margin-bottom: 10px;
      hyphens: manual;

      @include more-than-small-mobile {
        font-size: 28px;
        line-height: 36px;
      }

      @include more-than-mobile {
        font-size: 36px;
        line-height: 44px;
      }
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
        height: max-content;

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
