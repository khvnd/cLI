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
 
.tags {
    width: 335px;
    height: 145px;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    flex-wrap: wrap;
    gap: 11px;
}

.tags .active {
    background-color: black;
    color: white;
}

.tags-block {
    width: 345px;
    height: 200px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: flex-end;
}

.tags-subtitle {
    color: rgb(41, 47, 54);
    font-family: "DM Serif Display", sans-serif;
    font-size: 25px;
    font-weight: 400;
}

.tags button {
    width: 131px;
    height: 41px;
    border-radius: 10px;
    background: rgb(244, 240, 236);
    border: none;;
}

  </style>