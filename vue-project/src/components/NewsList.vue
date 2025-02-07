<template>
    <div class="news-info">
      <h2 class="news-subtitle">Статьи & <br>Новости</h2>
      <p class="news-info-text">
        Хорошо известно, что читатель будет отвлекаться<br> 
        на читабельный контент страницы
      </p>
    </div>
    
    <div class="news-content">
      <NewsItem v-for="item in newsList" :key="item.id" :news="item" />
    </div>
  </template>
  
  <script>
  import NewsItem from "@/components/NewsItem.vue";
  
  export default {
    components: { NewsItem },
    data() {
      return {
        newsList: [
          {
            id: 1,
            imgClass: "news-img1",
            title: "Дизайн кухни",
            subtitle: "Создадим лучший <br>макет перепланировки",
            date: "26 Декабря, 2022"
          },
          {
            id: 2,
            imgClass: "news-img2",
            title: "Дизайн для жизни",
            subtitle: "Лучшие интерьерные идеи по низкой цене",
            date: "22 Декабря, 2022"
          },
          {
            id: 3,
            imgClass: "news-img3",
            title: "Дизайн Интерьера",
            subtitle: "Лучшие интерьерные решения для офисов",
            date: "25 Декабря, 2022"
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Сюда добавь стили, если нужно */
  </style>
  