<template>
  <div>
    <header class="header">
    <img src="/img/Logo.png" alt="logo" class="logo">

      <input type="checkbox" id="burger-toggle" class="burger-toggle" v-model="isMenuOpen" />
    <label for="burger-toggle" class="burger-button">☰</label>
    <div class="menu">
        <router-link to="/">Домой</router-link>
        <router-link to="/project">Проект</router-link>
        <router-link to="/blog">Блог</router-link>
    </div>
    <div class="mobile-menu">
        <router-link 
            v-for="link in links" 
            :key="link.path" 
            :to="link.path" 
            class="a-menu"
            @click="closeMenu"
        >
            {{ link.title }}
        </router-link>
    </div>
</header>

  </div>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false,
            links: [
                { path: '/', title: 'Домой' },
                { path: '/project', title: 'Проект' },
                { path: '/blog', title: 'Блог' },
            ]
        }
    },
    methods: {
        closeMenu() {
            this.isMenuOpen = false;
        }
    },
    watch: {
        '$route'() {
            this.closeMenu();
        }
    }
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

.a-menu {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 300;
}
.burger-button {
  font-size: 24px;
  cursor: pointer;
  display: none;
  color: white;
  position: absolute;
  right: 20px;
  top: 40px;
  z-index: 20;
}

.burger-toggle:checked ~ .burger-button {
    right: 0px; 
    top: 15px;
    transform: rotate(90deg)
}

.burger-toggle {
  display: none;
}


.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 250px;
  height: 100vh;
  background: black;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  transition: right 0.3s ease-in-out;
  z-index: 15;
}


.burger-toggle:checked ~ .mobile-menu {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
  right: 0;
}

</style>

