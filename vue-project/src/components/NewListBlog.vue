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
          <img src="@/assets/img/arrow2.png" width="5.94px" />
        </button>
  
        <button v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="{ active: currentPage === page }">
          {{ page }}
        </button>
  
        <button @click="nextPage" :disabled="currentPage === totalPages">
          <img src="@/assets/img/arrow.png" width="5.94px" />
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
  