<template>
  <div>
    <footer class="footer">
     <div class="media">
         <img src="/img/Logo.png" class="logo">
         <div class="social">
             <img src="/img/tw.png">
             <img src="/img/in.png">
         </div>
     </div>
     <div class="pages">
         <h4 class="pages-title">Страницы</h4>
         <router-link to="/">Домой</router-link>
        <router-link to="/project">Проект</router-link>
        <router-link to="/blog">Блог</router-link>
     </div>
     <div class="contacts">
         <h4 class="contacts-title">Контакты</h4>
         <p class="contacts-info">55 East Birchwood Ave. Brooklyn, New York 11201</p>
         <p class="contacts-info">contact@interno.com</p>
         <p class="contacts-info">(123) 456 - 7890</p>
     </div>
 </footer>
  </div>
</template>

<script>
export default {
  name: 'MainFooter',

  
};
</script>
<style>

.logo {
    width: 177px;
    height: 50px;
}

.footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 101px;
    padding-top: 33px;
}

.social {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 54px;
    padding-top: 31px;
   
}

.pages {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
}

.pages-title {
    color: rgb(41, 47, 54);
    font-family: "DM Serif Display", sans-serif;
    font-size: 25px;
    font-weight: 400;
}

.a-pages {
    color: rgb(77, 80, 83);
    font-size: 22px;
    font-weight: 400;
}

.contacts {
    width: 258px;
    height: 303px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 26px;
}

.contacts-title {
    color: rgb(41, 47, 54);
    font-family: "DM Serif Display", sans-serif;
    font-size: 25px;
    font-weight: 400;
}

.contacts-info {
    color: rgb(77, 80, 83);
    font-size: 22px;
    font-weight: 400;
}
</style>