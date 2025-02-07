<template>
    <div>
      <div class="catalog-info">
        <h2 class="subtitle">Следите за нашими проектами</h2>
        <p class="text-catalog">
          Хорошо известно, что читатель будет отвлекаться <br> на читабельный контент страницы
        </p>
      </div>
  
      <div class="catalog">
        <CatalogItem
          v-for="(item, index) in catalogItems"
          :key="index"
          :image="item.image"
          :title="item.title"
          :description="item.description"
        />
      </div>
    </div>
  </template>
  
  <script>
  import CatalogItem from "@/components/CatalogItem.vue";
  
  export default {
    name: "CatalogView",
    components: {
      CatalogItem
    },
    data() {
      return {
        catalogItems: [
          { image: "img/item1.png", title: "Современная кухня", description: "Декор / Планировка" },
          { image: "img/item2.png", title: "Современная кухня", description: "Декор / Планировка" },
          { image: "img/item3.png", title: "Современная кухня", description: "Декор / Планировка" },
          { image: "img/item4.png", title: "Современная кухня", description: "Декор / Планировка" }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Ваши стили */
  </style>
  