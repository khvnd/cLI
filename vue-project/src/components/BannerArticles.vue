<template>
    <div class="articles-banner-block">
      <div class="articles-banner"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "BannerArticles",
  };
  </script>

  <style>
  
.articles-banner {
position: absolute; 
left: 0;
right: 0;
top: 83px;
bottom: 2951px;
width: 100vw; 
height: 351px; 
background-image: url(/public/img/bannerArticles.png);
background-size: cover; 
background-position: center; 
z-index: -1;
}

.articles-banner-block {
    height: 351px; 
    margin-top: 40px;
}
</style>