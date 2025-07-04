<template>
  <div class="info_section">
    <div class="info_section__container">
      <div class="info_section__container__info_header">
        <img
          :src="'/images/logo.png'"
          alt="logo"
        >
        <h2><slot name="title" /></h2>
      </div>
      <slot name="body" />
    </div>
  </div>
</template>

<style lang="scss">
.info_section {
  background: #202021;
  background-image: url('/images/sellers.jpeg');
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  align-items: flex-start;
  margin: 0 auto;
  gap: 30px;
  text-align: left;
  color: white;

  &__container {
    display: flex;
    margin: 0 auto;
    width: 100%;
    flex-direction: column;
    padding: 30px;

    @include more-than-tablet {
      width: 90%;
      padding: 100px 0px;
    }

    &__info_header {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: flex-start;

      h2 {
        font-weight: bold;
        line-height: 44px;
        @include more-than-small-mobile {
          font-size: 28px;
          line-height: 120%;
          padding: 0 !important;
          margin: 40px 0;
          text-align: center;
        }

        @include more-than-mobile {
          font-size: 36px;
          text-align: left;
          line-height: 44px;
        }
      }
    }

    &__info_btn-wrapper {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      gap: 30px;
      margin-top: 40px;
    }

    @include more-than-tablet {
      width: 50%;
    }

    p {
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 170%;
      margin-bottom: 30px;

      a:link,
      a:visited {
        @include reset-link;
        color: #3498db;
      }

      a:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
