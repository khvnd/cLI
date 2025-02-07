<template>
    <div >
      <BannerBlog />
        <LastPost />
        <NewListBlog />
      
    </div>
  </template>
    
  <script>
    import BannerBlog from "@/components/BannerBlog.vue";
    import LastPost from "@/components/LastPost.vue";
    import NewListBlog from "@/components/NewListBlog.vue";
    
    export default {
      name: 'App',
      components: {
        BannerBlog,
        LastPost,
        NewListBlog
      
      }
    }
  </script>
    
    <style lang="scss">
    
    </style>