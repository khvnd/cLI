<template>
   <div class="wight">
     <div class="aside">
     <div class="aside-item">
         <h3 class="subject-aside">12</h3>
         <p class="text-aside">Лет опыта</p>
     </div>
     <div class="aside-item">
         <h3 class="subject-aside">85</h3>
         <p class="text-aside">Успешных проектов</p>
     </div>
     <div class="aside-item">
         <h3 class="subject-aside">15</h3>
         <p class="text-aside">Проектов в работе</p>
     </div>
     <div class="aside-item">
         <h3 class="subject-aside">95</h3>
         <p class="text-aside">Счастливых клиентов</p>
     </div>
     </div>
 </div>
  </template>
  
  <script>
  export default {
    name: "WightBackgr"
  };
  </script>
  
  <style scoped>
  
.wight {
    position: relative;
    width: 100vw;
    left: 50%;
    transform: translateX(-50%);
    background: rgb(244, 240, 236);
    
}

.aside {
    
    
    display: flex ;
    flex-direction: row;   
    justify-content: space-around;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}



.aside-item {
    margin-top: 151px;
    margin-bottom: 151px;
    /*display: flex;
    flex-direction: column;
    
    align-items: center;*/
    text-align: center;
    border-right: 1px solid rgb(205, 162, 116);
    
    padding-right:  65px;
}

.aside-item:last-child {
    border-right: none;
}

.subject-aside {
    color: rgb(205, 162, 116);
    font-family: "DM Serif Display", sans-serif;
    font-size: 85px;
    font-weight: 400;
}

.text-aside {
    color: rgb(77, 80, 83);
    font-family: "Jost";
    font-size: 22px;
    font-weight: 400;
}

  </style>