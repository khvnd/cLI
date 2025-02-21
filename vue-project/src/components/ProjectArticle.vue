<template>
    <div v-if="articleData" class="p-a-block" >
      <div class="project-article-block">
      <h1 class="p-a-title">{{ articleData.title }}</h1>
      <p class="p-a-text">{{ articleData.information }}</p>
    </div>
      <ProjectSlider :images="articleImages" />
    </div>
    <div v-else>
      <p>Статья не найдена.</p>
    </div>
  </template>
  
  <script>
  import ProjectSlider from "@/components/ProjectSlider.vue";
 
 
  export default {
    name: 'ProjectArticle',
    components: { ProjectSlider },
    props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
    data() {
      return {
        articleData: null,
        articleImages: []
      };
    },
    created() {
      this.loadArticleData();
  },
  methods: {
    async loadArticleData() {
      try {
        const response = await fetch("/category.json"); // Загружаем JSON
        if (!response.ok) throw new Error("Ошибка загрузки JSON");
        
        const articlesData = await response.json(); // Преобразуем в объект
        this.articleData = articlesData.find(article => article.id === parseInt(this.id));

        if (this.articleData) {
          this.articleImages = this.articleData.images.map(img => `/img/${img}`);
        }
      } catch (error) {
        console.error("Ошибка загрузки данных:", error);
      }
    }
  }
}
  </script>
  <style>
.p-a-block {
   display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
}

  .project-article-block {
    width: 658px;
    margin-bottom: 103px;
   
  }

  .p-a-title {
    color: rgb(41, 47, 54);
    font-family: "DM Serif Display", sans-serif;
    font-size: 50px;
    font-weight: 400;
  }

  .p-a-text {
  color: rgb(77, 80, 83);
  font-size: 22px;
  font-weight: 400;
  text-align: justify;
  }
  </style>