<template>
  
    <div class="banner-content-project">
     <div class="project-banner">
     </div>
     <div class="banner-project-info">
         <h3 class="banner-subtitle">Наш проект</h3>
         <p class="banner-text">Домой / Проект</p>
     </div>
 </div>
  
</template>

<script>
export default {
  name: 'ProjectBanner',
 
}
</script>

<style>
    .banner-content-project {
    height: 389px;
    padding-top: 41px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;   
}

.project-banner {
    position: absolute; /* или fixed, если нужно, чтобы блок всегда оставался на экране */
    left: 0;
    right: 0;
    top: 83px;
    bottom: 2951px;
    width: 100vw; /* растягиваем на всю ширину экрана */
    height: 356px; /* задаем высоту блока */
    background-image: url(@/assets/img/bannerProject.png);
    background-size: cover; /* картинка будет покрывать весь блок */
    background-position: center; /* центрируем изображение */
    z-index: -1; 
}

.banner-project-info {
    width: 504px;
    height: 178px;
    padding: 41px 115px ;
    border-radius: 37px 37px 0px 0px;
    background: rgb(255, 255, 255);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
    </style>