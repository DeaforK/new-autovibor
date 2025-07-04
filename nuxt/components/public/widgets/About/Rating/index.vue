<template>
  <div class="rating">
    <div class="rating-container">
      <h3 class="rating-title">
        <img
          :src="'/images/yandex-logo.png'"
          alt="Яндекс"
        >
        <b>отзывы</b>
      </h3>
    </div>
    <div class="rating-content">
      <div class="container rating-container">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="rating-block-user">
              <div class="user-rating">
                <span>9,5</span><span> / 10</span>
              </div>
              <span>cредняя оценка нашей работы от 1400 клиентов</span>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="rating-block-ya">
              <div class="ya-top">
                <span>5,0</span>
                <div class="rating-stars">
                  ★★★★★
                </div>
              </div>
              <div class="ya-content">
                оценка компании на сервисах Яндекса
              </div>
              <div class="ya-bottom">
                Отзывы реальных клиентов расскажут о нашей работе лучше, чем мы
              </div>
              <a
                class="ya-more"
                href="https://yandex.ru/profile/212881395529"
                target="_blank"
              >
                Читать отзывы на Яндексе
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rating-container {
  max-width: 1100px;
  margin: 0 auto;
}

.rating-content {
  padding: 30px 0;
  background-size: cover;
  background-color: #ffdf3f;
}

.rating-title {
  display: flex;
  justify-content: center;
  padding: 60px 0 30px;
  color: #000000;
  line-height: unset;
  text-align: center;
}

.rating-title img {
  height: 44px;
  margin-right: 10px;
}

.rating-title b {
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
}

.rating-block-user {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto 60px auto;
  padding: 0 80px 0 90px;
  background-image: url("/images/circle-arrow.png");
  background-repeat: no-repeat;
  background-position: 10px 10px;
  background-size: 300px;
  border-radius: 50%;
  width: 320px;
  height: 320px;
  color: #000000;
  zoom: 0.8;
}

.rating-block-user::after {
  position: absolute;
  left: 40px;
  top: 40px;
  background-color: #FFFFFF;
  border-radius: 50%;
  width: 240px;
  height: 240px;
  content: "";
}

.rating-block-user b,
.rating-block-user span {
  position: relative;
  z-index: 1;
}

.rating-block-user > span {
  font-size: 12px;
}

.rating-block-user > div > span:first-child {
  font-size: 65px;
  font-weight: bold;
}

.rating-block-ya {
  position: relative;
  width: 360px;
  height: 236px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  padding: 0 20px 80px 40px;
  background-image: url("/images/chatbox.png");
  background-size: contain;
  background-repeat: no-repeat;
  color: #000000;
  zoom: 0.8;
}

.rating-block-ya .ya-top {
  display: flex;
  align-items: flex-end;
  margin-top: -12px;
}

.rating-block-ya .ya-top > span {
  font-size: 50px;
  font-weight: bold;
}

.rating-stars {
  margin: 0 0 20px 5px;
  font-size: 24px;
}

.rating-block-ya .ya-content {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 900;
  line-height: 22px;
}

.rating-block-ya .ya-bottom {
  font-size: 12px;
  margin-bottom: 20px;
}

.rating-block-ya .ya-more {
  position: absolute;
  bottom: 16px;
  left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  padding: 6px 16px;
  font-weight: bold;
  color: #000000;
  background-color: #FFFFFF;
  border-radius: 20px;
  z-index: 1;
}

@media (min-width: 360px) {
  .rating-block-user,
  .rating-block-ya {
    zoom: unset;
    padding-bottom: 5px;
  }
}

@media (min-width: 768px) {
  .rating-content {
    padding: 40px 0;
  }

  .rating-title {
    padding: 30px 0;
  }

  .rating-block-user {
    zoom: 0.75;
  }

  .rating-block-ya {
    padding: 0 40px 40px 40px;
  }

  .rating-block-ya .ya-top {
    margin-top: -10px;
  }

  .rating-block-ya .ya-top > span {
    font-size: 60px;
  }

  .rating-stars {
    margin-left: 10px;
  }

  .rating-block-ya .ya-content {
    margin: 0 30px 10px 0;
  }

  .rating-block-ya .ya-bottom {
    margin: 0 30px 20px 0;
  }

  .rating-block-ya .ya-more {
    bottom: 15px;
    left: 40px;
  }
}

@media (min-width: 992px) {
  .rating-block-user {
    zoom: 0.9;
  }

  .rating-block-ya {
    padding: 0 60px 80px 60px;
    width: 390px;
    height: 295px;
    background-size: cover;
  }

  .rating-block-ya .ya-top > span {
    font-size: 70px;
  }

  .rating-block-ya .ya-content {
    margin: 0 0 10px 0;
    font-size: 24px;
    line-height: 28px;
  }

  .rating-block-ya .ya-bottom {
    margin: 0 0 20px 0;
  }

  .rating-block-ya .ya-more {
    bottom: 22px;
    left: 60px;
  }
}

@media (min-width: 1200px) {
  .rating-block-user {
    margin: 0 0 0 60px;
    zoom: unset;
  }

  .rating-block-ya {
    width: 460px;
    height: 345px;
    padding: 0 60px 80px 80px;
  }

  .rating-block-ya .ya-top > span {
    font-size: 80px;
  }

  .rating-block-ya .ya-content {
    font-size: 30px;
    line-height: 34px;
    margin-bottom: 10px;
  }

  .rating-block-ya .ya-more {
    bottom: 28px;
    left: 80px;
  }
}
</style>