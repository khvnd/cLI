<template>
  <div>
    <footer class="footer">
     <div class="media">
         <img src="@/assets/img/Logo.png" class="logo">
         <div class="social">
             <img src="@/assets/img/tw.png">
             <img src="@/assets/img/in.png">
         </div>
     </div>
     <div class="pages">
         <h4 class="pages-title">Страницы</h4>
         <router-link to="/">Домой</router-link>
        <router-link to="#">Проект</router-link>
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
