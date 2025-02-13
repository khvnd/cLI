<template>
    <div class="categories">
      <button 
        v-for="category in categories" 
        :key="category"
        :class="{ active: category === selectedCategory }"
        @click="$emit('update-category', category)">
        {{ category }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      categories: Array,
      selectedCategory: String
    }
  }
  </script>
  
  <style scoped>
    .categories {
    margin-top: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 96px;
    border-radius: 18px;
    border: 1px solid rgb(205, 162, 116);

    }

  .categories button {
    color: rgb(41, 47, 54);
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    width: 880px;
    height: 75px;
    border: none;
    cursor: pointer;
    
  }
  
  .categories .active {
    color: white;
    border-radius: 18px;
    background: rgb(205, 162, 116);
  }
  </style>
  