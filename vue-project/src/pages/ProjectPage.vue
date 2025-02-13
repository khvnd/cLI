<template>
    <div >
      <ProjectBanner />
      <div>
        <CategoryFilter 
      :categories="categories" 
      :selectedCategory="activeCategory"
      @update-category="setCategory" 
    />
    <CategoryList :articles="filteredArticles" />
  </div>
      
    </div>
  </template>
    
  <script>
    import ProjectBanner from '@/components/ProjectBanner.vue';
    import CategoryFilter from '@/components/CategoryFilter.vue'
    import CategoryList from '@/components/CategoryList.vue'
    
    
    export default {
      name: 'App',
      components: {
        ProjectBanner,
        CategoryFilter,
        CategoryList
      },
      data() {
    return {
      categories: ['Ванная комната', 'Спальня', 'Кухня', 'Гостиная'],
      activeCategory: 'Спальня',
      articles: [],
    } 
    },
    computed: {
    filteredArticles() {
      return this.articles.filter(article => article.category === this.activeCategory);
    }
  },
  methods: {
    setCategory(category) {
      this.activeCategory = category;
    },
    async fetchArticles() {
      try {
        const response = await fetch('category.json');
        this.articles = await response.json();
      } catch (error) {
        console.error("Ошибка загрузки данных:", error);
      }
    }
  },
  created() {
    this.fetchArticles();
  }
}
  </script>
    
    <style lang="scss">
    
    </style>
    