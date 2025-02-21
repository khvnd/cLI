<template>
  
    <div class="banner-content-news">
     <div class="blog-banner">
     </div>
     <div class="banner-news-info">
         <h3 class="banner-subtitle">Статьи & Новости</h3>
         <p class="banner-text">Домой / Блог</p>
     </div>
 </div>
  
</template>

<script>
export default {
  name: 'BannerBlog',
 
}
</script>
<style>

.banner-content-news {
    height: 452px;
    padding-top: 41px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    
}

.blog-banner {
    position: absolute; /* или fixed, если нужно, чтобы блок всегда оставался на экране */
    left: 0;
    right: 0;
    top: 83px;
    bottom: 2951px;
    width: 100vw; /* растягиваем на всю ширину экрана */
    height: 356px; /* задаем высоту блока */
    background-image: url(/public/img/bannerBlog.png);
    background-size: cover; /* картинка будет покрывать весь блок */
    background-position: center; /* центрируем изображение */
    z-index: -1;
   
}

.banner-news-info {
    width: 503px;
    height: 274px;
    padding: 41px 78px ;
    border-radius: 37px 37px 0px 0px;
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.banner-subtitle {
    color: rgb(41, 47, 54);
    font-family: "DM Serif Display", sans-serif;
    font-size: 50px;
    font-weight: 400;   
}

.banner-text {
    color: rgb(77, 80, 83);
    font-size: 22px;
    font-weight: 400;
}
</style>