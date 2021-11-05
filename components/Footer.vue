<template>
  <div class="footer">
    <p class="logo"><span>NuxtApp</span>.com</p>
    <div class="footer__menu">
      <NuxtLink class="footer__menu_link" to="/">Contact</NuxtLink>
      <NuxtLink class="footer__menu_link" to="/">FAQ</NuxtLink>
      <NuxtLink class="footer__menu_link" to="/">Terms and conditions</NuxtLink>
      <NuxtLink class="footer__menu_link" to="/">Privacy Policy</NuxtLink>
    </div>
    <p>@2021 - Made with NuxtJS 3</p>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--tertiary-color);
  color: var(--text-secondary-color);
  margin-top: 3rem;
  padding: 2.5rem;
}

p {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
}

p {
  color: var(--text-color);
}

span {
  color: var(--primary-color);
}

.footer__menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.footer__menu_link {
  color: var(--text-grey);
  text-decoration: none;
  font-size: 1rem;
  text-transform: uppercase;
  margin-right: 1.5rem;
}

.footer p:last-child {
  margin-bottom: 0;
  font-size: 1rem;
  margin-right: 1.5rem;
  color: var(--text-grey);
}
</style>
