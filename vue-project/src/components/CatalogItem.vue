<template>
    <div class="item">
      <img :src="require(`@/assets/${image}`)" class="img-item" alt="Catalog Item">
      <div class="content-item">
        <div class="info-item">
          <h3 class="subject">{{ title }}</h3>
          <p class="text-item">{{ description }}</p>
        </div>
        <div class="arrow">
          <button class="btn-item">
            <img src="@/assets/img/arrow.png" alt="Arrow">
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CatalogItem",
    props: {
      image: String,
      title: String,
      description: String
    }
  };
  </script>
  
  <style scoped>
  /* Ваши стили */
  </style>
  