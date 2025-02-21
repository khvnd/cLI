<template>
    <div class="item">
      <img :src="`/${image}`" class="img-item" alt="Catalog Item">
      <div class="content-item">
        <div class="info-item">
          <h3 class="subject">{{ title }}</h3>
          <p class="text-item">{{ description }}</p>
        </div>
        <div class="arrow">
          <button class="btn-item">
            <img src="/img/arrow.png" alt="Arrow">
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
  
.content-item {
   width: 547px;
   padding-top: 24px;
   display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.info-item {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: center;
    align-items: flex-start;
}

.subject {
    color: rgb(41, 47, 54);
    font-family: "DM Serif Display", sans-serif;
    font-size: 25px;
    font-weight: 400;
    padding-bottom: 4px;
}

.text-item {
    color: rgb(77, 80, 83);
    font-size: 22px;
    font-weight: 400;
    
}

.btn-item {
    width: 70px;
    height: 70px;
    background: rgb(244, 240, 236);
    border-radius: 50px;
    border: none;
}
  </style>
  