<template>
    <div class="articles">
      <div v-for="article in articles" :key="article.id" class="article">
        <h3 class="article-title">{{ article.title }}</h3>
        <div class="article-img">
        <img :src="article.img" alt="Статья" >
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
     
    
    }   

  };
  </script>
  
  <style scoped>
  
.articles {
    width: 804px;
}

.article-title {
    color: rgb(41, 47, 54);
    font-family: "DM Serif Display", sans-serif;
    font-size: 50px;
    font-weight: 400;
    padding-bottom: 15px;
}

.acticle-img {
    width: 799px;
    height: 539px;
    
    
}

.article-img img {
    width: 100%;
    height: 539px;
    border-radius: 50px;
    object-fit: cover; /* Обрезка картинки по размеру блока */
   
  }

.article-img1 { 
    background-image: url(/public/img/кухня.png)
}

.article-img2 {
    background-image: url(/public/img/Спальня.png);
}

.article-img3 {
    background-image: url(/public/img/Ванная.png)
}

.article-img4 {
    background-image: url(/public/img/планировка.png)
}

.article-img5 {
    background-image: url(/public/img/архитектура.png)
}

.article-img6 {
    background-image: url(/public/img/Гостиная.png)
}


.article-date {
    padding-top: 46px;
    color: rgb(77, 80, 83);
    font-size: 16px;
    font-weight: 400;
}

.article-text {
    color: rgb(77, 80, 83);
    font-size: 22px;
    font-weight: 400;
    padding-top: 48px;
    padding-bottom: 35px;
}

.quote {
    height: 267px;
    border-radius: 50px;
    background: rgb(244, 240, 236);
    border: none;
    padding: 53px 227px 53px 227px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
}



.quote-title {
    color: rgb(205, 162, 116);
    font-family: "DM Serif Display", sans-serif;
    font-style: italic;
    font-size: 150px;
    font-weight: 400;
   
    text-align: center;
}

.quote-text {
    color: rgb(205, 162, 116);
    font-family: "DM Serif Display", sans-serif;
    font-style: italic;
    font-size: 25px;
    font-weight: 400;
    text-align: center;
}

.second {
    padding-top: 27px;
    padding-bottom: 63px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
}

.second-title {
    color: rgb(41, 47, 54);
    font-family: "DM Serif Display", sans-serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 1em;
}

.second-text {
    color: rgb(77, 80, 83);
    font-size: 22px;
    font-weight: 400;
}

  </style>