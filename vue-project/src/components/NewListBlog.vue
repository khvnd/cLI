<template>
    <div class="news-block">
      <div class="news-title-block">
        <h4 class="news-title">Статьи & Новости</h4>
      </div>
  
      <div class="news-content">
        <NewsItemBlog v-for="(news, index) in paginatedNews" :key="index" :news="news" />
      </div>
  
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">
          <img src="/img/arrow2.png" width="5.94px" />
        </button>
  
        <button v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="{ active: currentPage === page }">
          {{ page }}
        </button>
  
        <button @click="nextPage" :disabled="currentPage === totalPages">
          <img src="/img/arrow.png" width="5.94px" />
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import NewsItemBlog from "@/components/NewsItemBlog.vue";
  
  export default {
    components: { NewsItemBlog },
    data() {
      return {
        currentPage: 1,
        itemsPerPage: 6,
        newsList: [
            {
                imgClass: 'news-img1',
                imgText: 'Дизайн кухни',
                subtitle: 'Создадим лучший <br> макет перепланировки',
                date: '26 Декабрь, 2022'
            },
            {
                imgClass: 'news-img2',
                imgText: 'Дизайн для жизни',
                subtitle: 'Лучшие интерьерные идеи по низкой цене',
                date: '22 Декабрь, 2022'
            },
            {
                imgClass: 'news-img3',
                imgText: 'Дизайн интерьера',
                subtitle: 'Лучшие интерьерные решения для офисов',
                date: '25 Декабрь, 2022'
            },
            {
                imgClass: 'news-img4',
                imgText: 'Дизайн кухни',
                subtitle: 'Создадим лучший макет перепланировки',
                date: '26 Декабрь,2022 '
            },
            {
                imgClass: 'news-img5',
                imgText: 'Дизайн для жизни',
                subtitle: 'Лучшие интерьерные идеи по низкой цене',
                date: '22 Декабрь,2022 '
            },
            {
                imgClass: 'news-img6',
                imgText: 'Дизайн интерьера',
                subtitle: 'Лучшие интерьерные решения для офисов',
                date: '25 Декабрь,2022 '
            },
            {
                imgClass: 'news-img4',
                imgText: 'Дизайн для жизни',
                subtitle: 'Лучшие интерьерные идеи по низкой цене',
                date: '22 Декабрь, 2022'
            },
            {
                imgClass: 'news-img3',
                imgText: 'Дизайн для жизни',
                subtitle: 'Лучшие интерьерные идеи по низкой цене',
                date: '22 Декабрь, 2022'
            },
            {
                imgClass: 'news-img2',
                imgText: 'Дизайн для жизни',
                subtitle: 'Лучшие интерьерные идеи по низкой цене',
                date: '22 Декабрь, 2022'
            },
            {
                imgClass: 'news-img1',
                imgText: 'Дизайн для жизни',
                subtitle: 'Лучшие интерьерные идеи по низкой цене',
                date: '22 Декабрь, 2022'
            },
            {
                imgClass: 'news-img5',
                imgText: 'Дизайн для жизни',
                subtitle: 'Лучшие интерьерные идеи по низкой цене',
                date: '22 Декабрь, 2022'
            },
            {
                imgClass: 'news-img6',
                imgText: 'Дизайн для жизни',
                subtitle: 'Лучшие интерьерные идеи по низкой цене',
                date: '22 Декабрь, 2022'
            },
            {
                imgClass: 'news-img2',
                imgText: 'Дизайн для жизни',
                subtitle: 'Лучшие интерьерные идеи по низкой цене',
                date: '22 Декабрь, 2022'
            },
            {
                imgClass: 'news-img3',
                imgText: 'Дизайн для жизни',
                subtitle: 'Лучшие интерьерные идеи по низкой цене',
                date: '22 Декабрь, 2022'
            },
            {
                imgClass: 'news-img1',
                imgText: 'Дизайн для жизни',
                subtitle: 'Лучшие интерьерные идеи по низкой цене',
                date: '22 Декабрь, 2022'
            }
        ]
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.newsList.length / this.itemsPerPage);
      },
      paginatedNews() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        return this.newsList.slice(start, start + this.itemsPerPage);
      }
    },
    methods: {
      goToPage(page) {
        this.currentPage = page;
      },
      prevPage() {
        if (this.currentPage > 1) this.currentPage--;
      },
      nextPage() {
        if (this.currentPage < this.totalPages) this.currentPage++;
      }
    }
  };
  </script>
  <style>
  
.news-title {
    color: rgb(41, 47, 54);
    font-family: "DM Serif Display", sans-serif;
    font-size: 50px;
    font-weight: 400;
    
}

.news-block {
    padding-top: 88px;
}

.btn-news-block {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding-top: 51px;
}


 
.pagination {
    display: flex;
    gap: 20px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 51px;
    padding-bottom: 200px;
}

button {
    width: 52px;
    height: 52px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    background: white;
    color: rgb(41, 47, 54);
    font-size: 16px;
    font-weight: 500;
}

button.active {
    background: #F4F0EC;
    border: none;
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
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