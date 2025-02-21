<template>
  <div >
    <MainHeader />
    <router-view />
    <MainFooter />
  </div>
  </template>
  
  <script>
  import MainFooter from '@/components/MainFooter.vue';
  import MainHeader from '@/components/MainHeader.vue';
  
  
  export default {
    name: 'App',
    components: {
      MainHeader,
      MainFooter
      
    }
  }
  </script>
  
  <style lang="scss">
  *, *::after, *::before {
    padding: 0;
    margin: 0;
    text-decoration: none;
    box-sizing: border-box;
}

body {
    font-family: "Jost", sans-serif;
    max-width: 1200px;
    margin: 0 auto;
}



  </style>