<template>
  
    <div class="proj-art-banner-block">
        <div class="proj-art-banner"></div>
    </div>
    
</template>

<script>
export default {
  name: 'ProjectArtBanner',
 
}
</script>

<style>

.proj-art-banner-block {
    margin-top: 45px;
    height: 356px;
    margin-bottom: 200px;
}

.proj-art-banner {
    height: 356px;
    background-image: url(/public/img/BannerArtProj.png);
    
    position: absolute; 
    left: 0;
    right: 0;
    top: 83px;
    bottom: 2951px;
    width: 100vw; 
    background-size: cover; 
    background-position: center; 
    z-index: -1;
    
}
</style>
