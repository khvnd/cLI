<template>
    <div class="news-item">
      <div :class="['news-img', news.imgClass]">
        <div class="img-block">
          <p class="img-text">{{ news.title }}</p>
        </div>
      </div>
      <h4 class="news-item-subtitle" v-html="news.subtitle"></h4>
      <div class="description">
        <p class="news-item-text">{{ news.date }}</p>
        <button class="btn-news">
          <img src="@/assets/img/arrow.png" alt="arrow" />
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      news: Object
    }
  };
  </script>
  
  <style scoped>
  /* Сюда добавь стили, если нужно */
  </style>
  