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
          <img src="/img/arrow.png" alt="arrow" />
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
  .news-item {
    width: 382px;
    height: 521px; 
    border: 1px solid rgb(231, 231, 231);
    border-radius: 62px;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    padding: 21px;
}

.news-item:hover {
    background-color: rgb(244, 240, 236);
}

.news-img {
    
    width: 340px;
    height: 289.27px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 20px;
    padding-bottom: 20.27px;
}

.news-img1 {
    background-image: url(/public/img/news1.png);
}

.news-img2 {
    background-image: url(/public/img/news2.png);
}

.news-img3 {
    background-image: url(/public/img/news3.png);
}

.news-img4 {
    background-image: url(/public/img/news4.png);
}

.news-img5 {
    background-image: url(/public/img/news5.png);
}

.news-img6 {
    background-image: url(/public/img/news6.png);
}

.img-block {
    width: 124px;
    height: 41px;
    border-radius: 8px 8px 8px 0px;
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: row;
    align-items: center;
    
    
}

.img-text {
    color: rgb(77, 80, 83);
    font-family: "Jost";
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
    margin-left: 11px;
    
}

.news-item-subtitle {
    color: rgb(41, 47, 54);
    font-family: "DM Serif Display", sans-serif;
    font-size: 25px;
    font-weight: 400;
    padding-top: 21px;
   
}

.description {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
}

.news-item-text {
    color: rgb(77, 80, 83);
    font-family: "Jost";
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    text-transform: capitalize;
}

.btn-news {
    background: rgb(244, 240, 236);
    width: 52px;
    height: 52px;
    border-radius: 50px;
    border: none;
}


.news-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 27px;
    padding-top: 30px;
}
  </style>
  