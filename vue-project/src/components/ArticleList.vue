<template>
    <div class="articles">
      <div v-for="article in articles" :key="article.id" class="article">
        <h3 class="article-title">{{ article.title }}</h3>
        <div class="article-img">
        <img :src="getImageUrl(article.img)" alt="Статья" >
        </div>
        <p class="article-date">{{ article.date }}</p>
        <p class="article-text">{{ article.content }}</p>
        <div class="quote">
        <h3 class="quote-title">„</h3>
        <p class="quote-text">Запомни-а то забудешь</p>               
    </div>
<div class="second">
    <h3 class="second-title">{{ article.subtitle }}</h3>
    <p class="second-text">{{ article.secondContent }}</p>
</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["articles"],
    methods: {
    getImageUrl(img) {
        return img ? require(`@/assets/img/${img}`) : '';
        }
    }   

  };
  </script>
  
  <style scoped>
  
  </style>