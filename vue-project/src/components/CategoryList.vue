<template>
  <div class="articles-category">
    <div  class="articles-project">
      <div v-for="article in paginatedArticles" :key="article.id" class="article-card">
        <img :src="article.img" alt="Статья" class="article-card-img" />
        <div class="category-item">
        <div class="category-info-item">
          <h3 class="category-subject">{{ article.title }}</h3>
          <p class="category-text">{{ article.description }}</p>
        </div>
        <div class="caterogy-arrow">
          <router-link :to="{ name: 'Article', params: { id: article.id }}">
            <button class="category-btn-item">
            <img src="/img/arrow.png" alt="Arrow" class="arow-img">
          </button>
          </router-link>
          
        </div>
      </div>
      </div>
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1"><img src="/img/arrow.png" width="5.94px" /></button>
      <button 
        v-for="page in totalPages" 
        :key="page" 
        @click="setPage(page)" 
        :class="{ active: currentPage === page }">
        {{ page }}
      </button>
      <button @click="nextPage" :disabled="currentPage === totalPages"><img src="/img/arrow.png" width="5.94px" /></button>
    </div>
  </div>
  </template>
  
  <script>



export default {
  props: {
    articles: Array,
    
  },   
  data() {
    return {
      currentPage: 1,
      perPage: 8, 
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.articles.length / this.perPage);
    },
    paginatedArticles() {
      const start = (this.currentPage - 1) * this.perPage;
      return this.articles.slice(start, start + this.perPage);
    }
  },
 
  methods: {
    
    setPage(page) {
      this.currentPage = page;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
  },
  watch: {
    articles() {
     
      this.currentPage = 1;
    }
  }
 
};

  </script>
  
  <style scoped>
.articles-project {
  margin-top: 61px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  
  gap: 15px;
}

.article-card {
  width: 100%;
  position: relative; 
}

.article-card-img {
  width: 100%;
  display: block;
  height: auto;
  object-fit: cover;
}

.article-card:nth-child(odd) {
  grid-row: span 2;
}
 

.arow-img {
  width: 8px;
  height: 18px;
}

.category-btn-item {
  width: 70px;
height: 70px;
background: rgb(244, 240, 236);
border: none;
}

.category-item {
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
}

.category-subject {
  color: rgb(41, 47, 54);
  font-family: "DM Serif Display", sans-serif;
  font-size: 25px;
  font-weight: 400;
}

.category-text {
  color: rgb(77, 80, 83);
  font-size: 22px;
  font-weight: 400;
}

  </style>
  