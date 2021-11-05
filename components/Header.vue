<script setup>
import { ref } from "vue";

const navLinks = ref({
  home: {
    name: "Home",
    href: "/",
  },
  login: {
    name: "Login",
    href: "/login",
  },
  register: {
    name: "register",
    href: "/register",
  },
});

onMounted(() => {
  const header = document.querySelector(".header");
  const sticky = header.offsetTop;

  window.addEventListener(
    "scroll",
    function () {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    },
    true
  );
});
</script>

<template>
  <nav class="header" v-on:scroll.capture="addStyle">
    <div class="content">
      <div class="header__logo">
        <p class="logo"><span>NuxtApp</span>.com</p>
      </div>
      <div class="header__menu">
        <NuxtLink class="header__menu_link" :to="navLinks.login.href">{{
          navLinks.login.name
        }}</NuxtLink>
        <NuxtLink class="header__menu_link" :to="navLinks.register.href">{{
          navLinks.register.name
        }}</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.header {
  padding: 30px 16px;
  color: #f1f1f1;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background: #f1f1f1;
  z-index: 1;
  padding-top: 10px;
  padding-bottom: 10px;
  color: var(--text-secondary-color);
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.header__logo p {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
}

.sticky .header__logo p {
  color: var(--text-secondary-color);
}

.header__logo span {
  color: var(--primary-color);
}

.header__menu {
  display: flex;
  align-items: center;
}

.header__menu .header__menu_link {
  margin-left: 40px;
  color: #f1f1f1;
  text-decoration: none;
  text-transform: uppercase;
}

.sticky .header__menu .header__menu_link {
  color: var(--text-secondary-color);
}
</style>
