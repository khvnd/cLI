<template>
    <div class="not-found">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <router-link to="/">Вернуться на главную</router-link>
    </div>
  </template>
  
  <script>
 export default {
  name: "NotFound",
 }
</script>
  <style scoped>
  .not-found {
    text-align: center;
    padding: 50px;
  }
  
  h1 {
    font-size: 5rem;
    color: #ff5555;
  }
  
  p {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  
  a {
    color: #007bff;
    text-decoration: none;
    font-size: 1.2rem;
  }
  </style>
  