<template>
  <div>
    <header class="header">
    <img src="/img/Logo.png" alt="logo" class="logo">
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

.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.logo {
    width: 177px;
    height: 50px;
}

.menu {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 40px;
    }


a {
    color: rgb(41, 47, 54);
    font-size: 20px;
    font-weight: 400;
}
</style>

