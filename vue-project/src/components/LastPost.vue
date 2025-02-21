<template>
  
  <div class="last-post">
     <h4 class="latest-title">Последний пост</h4>
     <div class="last-content">
         <img src="/img/lastPost.png" alt="lastpost" class="img-post">
         <div class="post-content">
             <h4 class="post-title">Low Cost Latest Invented Interior Designing Ideas</h4>
             <p class="post-text">С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов. Перед появлением электронных издательств дизайнеры импровизировали в работе над макетами, изображая текст при помощи волнистых линий. С появлением самоклеющихся наклеек с напечатанным текстом «Lorem ipsum» появился более реалистичный способ обозначения расположения текста на странице.</p>
             <div class="btn-last">
                 <p class="date-post">26 December,2022 </p>
                 <button class="btn-post"><img src="/img/arrow.png"></button>
             </div>
         </div>
     </div>
 </div>
  
</template>

<script>
export default {
  name: 'LastPost',
 
}
</script>

<style>
.last-post {
    padding-top: 104px;
}

.latest-title {
    color: rgb(41, 47, 54);
    font-family: "DM Serif Display", sans-serif;
    font-size: 50px;
    font-weight: 300;
    padding-bottom: 27px;
}

.img-post {
    width: 569px;
    height: 478px;
}

.last-content {
    height: 584px;
    box-sizing: border-box;
    border: 1px solid rgb(231, 231, 231);
    border-radius: 62px;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* align-content: center; */
    gap: 65px;
    padding: 22px;
}

.post-content {
    width: 489px;
    height: 540px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 41px;
    
}

.post-title {
    color: rgb(41, 47, 54);
    font-family: "DM Serif Display", sans-serif;
    font-size: 25px;
    font-weight: 400;
}
.post-text {
    color: rgb(77, 80, 83);
    font-size: 22px;
    font-weight: 400;
}

.btn-last {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}


.date-post {
    color: rgb(77, 80, 83);
    font-size: 16px;
    font-weight: 400;
}

.btn-post {
    width: 52px;
    height: 52px;
    background: rgb(244, 240, 236);
    border: none;
    border-radius: 50px;
}
</style>