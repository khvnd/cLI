<template>
    <div class="banner">
      <div class="banner-content">
        <h1 class="title">Пусть ваш дом будет уникальным</h1>
        <p class="text">Существует много вариантов Lorem Ipsum, <br> которые можно использовать</p>
        <button class="btn-banner">Начать
          <img src="/img/Vector.png" alt="Начать">
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "BannerSection"
  };
  </script>
  
  <style scoped>
 
.banner {
    height: 758px;
    margin-top: 57px;
    background-image: url(/public/img/banner.png);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.banner-content {
    max-width: 595px;
    padding-left: 52px;
}

.title {
    color: rgb(41, 47, 54);
    font-size: 65px;
    font-weight: 400;
    text-align: left;
    font-family: "DM Serif Display", sans-serif;
    padding-bottom: 18px;
}

.text {
    color: rgb(77, 80, 83);
    font-size: 22px;
    font-weight: 400;
    text-align: left;
    padding-bottom: 21px;
}

.btn-banner {
    display: flex;
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    width: 182.14px;
    height: 75px;
    border-radius: 18px;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    background: rgb(41, 47, 54);
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

  </style>
  