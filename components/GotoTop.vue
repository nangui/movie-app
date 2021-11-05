<script setup lang="ts">
import { ref } from "vue";

const show = ref<boolean>(false);

onMounted(() => {
  const header: any = document.querySelector(".header");
  const sticky = header.offsetTop;

  window.addEventListener(
    "scroll",
    function () {
      if (window.pageYOffset > sticky) {
        show.value = true;
      } else {
        show.value = false;
      }
    },
    true
  );
});

function scrollToTop() {
  window.scrollTo(0, 0);
}
</script>

<template>
  <button v-show="show" @click.capture="scrollToTop">Go top</button>
</template>

<style scoped>
/* go to top button */
button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  color: #002e3b;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
