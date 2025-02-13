<template>
  <div>
    <header class="header">
    <img src="@/assets/img/Logo.png" alt="logo" class="logo">
    <div class="menu">
        <router-link to="/">Домой</router-link>
        <router-link to="/project">Проект</router-link>
        <router-link to="/blog">Блог</router-link>
    </div>
</header>

  </div>
</template>

<script>
export default {
  name: 'MainHeader',
 
}
</script>


<style scoped lang="scss">

</style>

