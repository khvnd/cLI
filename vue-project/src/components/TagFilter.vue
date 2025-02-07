<template>
    <div class="tags-block">
      <h4 class="tags-subtitle">Тэги</h4>
      <div class="tags">
        <button
          v-for="tag in tags"
          :key="tag"
          :class="{ active: selectedTag === tag }"
          @click="$emit('tag-selected', tag)"
        >
          {{ tag }}
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["tags", "selectedTag"],
    emits: ["tag-selected"]
  };
  </script>
  
  <style scoped>
  /* Стили */
  </style>