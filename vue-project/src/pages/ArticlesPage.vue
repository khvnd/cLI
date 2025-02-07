<template>
    <BannerArticles />

    <div class="articles-content">
      <TagFilter :tags="tags" :selected-tag="selectedTag" @tag-selected="selectTag" />
      <ArticleList v-if="!selectedTag && defaultArticle" :articles="[defaultArticle]" />
      <ArticleList v-if="selectedTag" :articles="filteredArticles" />
    </div>
  </template>
  
  <script>
  import TagFilter from "@/components/TagFilter.vue";
  import ArticleList from "@/components/ArticleList.vue";
    import BannerArticles from "@/components/BannerArticles.vue";
  
  export default {
    components: { TagFilter, ArticleList, BannerArticles },
    data() {
      return {
        selectedTag: null,
        tags: ["Кухня", "Спальня", "Ванная", "Архитектура", "Планировка", "Гостиная"],
        articles: [],
        loading: true
      };
    },
    computed: {
      defaultArticle() {
        return this.articles.length > 0 ? this.articles[0] : null;
      },
      filteredArticles() {
        if (!this.selectedTag) return [];
        return this.articles.filter(article => article.tags.includes(this.selectedTag));
      }
    },
    methods: {
      selectTag(tag) {
        this.selectedTag = this.selectedTag === tag ? null : tag;
      },
      async fetchArticles() {
        try {
          const response = await fetch("/articles.json");
          this.articles = await response.json();
        } catch (error) {
          console.error("Ошибка загрузки статей:", error);
        } finally {
          this.loading = false;
        }
      }
    },
    mounted() {
      this.fetchArticles();
    }
  };
  </script>
  
  <style scoped>
  
  </style>