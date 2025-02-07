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
  
  </style>