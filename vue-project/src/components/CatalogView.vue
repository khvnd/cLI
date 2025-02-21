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
  
.catalog-info {
    padding-top: 96px;
    padding-bottom: 93px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.subtitle {
    color: rgb(41, 47, 54);
    font-family: "DM Serif Display", sans-serif;
    font-size: 50px;
    font-weight: 400;
    text-align: center;
}

.text-catalog {
    color: rgb(77, 80, 83);
    font-size: 22px;
    font-weight: 400;
    text-align: center;
}

.catalog {
    display: grid;
    grid-template-columns: repeat(2, 619px);
    gap: 56px;
    padding-bottom: 97px;
}
  </style>
  