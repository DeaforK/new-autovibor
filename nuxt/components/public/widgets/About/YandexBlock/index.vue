<template>
  <div class="container">
    <div class="rating-block-user">
      <div class="user-rating">
        <span style="font-size: 65px; font-weight: bold">9,5</span><span> / 10</span>
      </div>

      <span style="z-index: 2">cредняя оценка нашей работы от 1400 клиентов</span>
    </div>

    <div class="rating-block-ya">
      <div class="ya-top">
        <span style="font-size: 80px; font-weight: 600">5,0</span>
        <div class="rating-stars">
          <img :src="'/images/star.svg'">
        </div>
      </div>

      <div class="ya-content">
        оценка компании на сервисах Яндекса
      </div>

      <div class="ya-bottom">
        Отзывы реальных клиентов расскажут о нашей работе лучше, чем мы"
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
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.container {
  background-color: #ffdf3f;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  .rating-block-user {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 auto 60px auto;
    padding: 0 80px 0 90px;
    background-image: url('/images/circle-arrow.png');
    background-repeat: no-repeat;
    background-position: 10px 10px;
    background-size: 300px;
    border-radius: 50%;
    width: 320px;
    height: 320px;
    color: #000000;
    .user-rating {
      background-color: white;
      z-index: 2;
    }
  }
  .rating-block-user::after {
    position: absolute;
    left: 40px;
    top: 40px;
    background-color: #ffffff;
    border-radius: 50%;
    width: 240px;
    height: 240px;

    content: '';
  }
  .rating-block-ya {
    position: relative;
    width: 320px;
    height: 236px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto;
    padding: 0 20px 80px 40px;
    background-image: url('/images/chatbox.png');
    background-size: contain;
    background-repeat: no-repeat;
    color: #000000;
    .ya-top {
      margin-top: -34px;
      display: flex;
      align-items: flex-end;
    }
    .ya-more {
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
      background-color: #ffffff;
      border-radius: 20px;
      z-index: 1;
      text-decoration: none;
    }
  }
}
</style>
