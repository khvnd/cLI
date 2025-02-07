<template>
  <div >
    
    <BannerSection />
      <CatalogView />
      <WightBackgr />
      <NewsList />
    
  </div>
</template>
  
<script>
  
  
  import BannerSection from "@/components/BannerSection.vue";
  import CatalogView from "@/components/CatalogView.vue";
  import WightBackgr from '@/components/WightBackgr.vue';
  import NewsList from '@/components/NewsList.vue';
  
  export default {
    name: 'App',
    components: {
      
      BannerSection,
      CatalogView,
      WightBackgr,
      NewsList
    }
  }
</script>
  
  <style lang="scss">
  
  </style>
  