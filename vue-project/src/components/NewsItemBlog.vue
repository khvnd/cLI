<template>
    <div class="news-item">
      <div :class="['news-img', news.imgClass]">
        <div class="img-block">
          <p class="img-text">{{ news.imgText }}</p>
        </div>
      </div>
      <h4 class="news-item-subtitle" v-html="news.subtitle"></h4>
      <div class="description">
        <p class="news-item-text">{{ news.date }}</p>
        
          <button @click="goToArticles" class="btn-news">
            <img src="@/assets/img/arrow.png" alt="arrow" />
          </button>
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
   
    props: {
      news: Object
    },
    methods: {
        goToArticles() {
            this.$router.push('/articles');
        }
    }
  };
  </script>
  