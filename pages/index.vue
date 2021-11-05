<script lang="ts">
export default {
  layout: "default",
};
</script>

<script setup lang="ts">
import { ref } from "vue";

const table = ref(["cinema", "serie", "titanic", "ballon", "sport"]);
const randomElement: number = Math.floor(Math.random() * table.value.length);

const searchText = ref(table.value[randomElement]);
const movies = ref([]) as any;

async function search() {
  const data = await fetch(`/api/video?search=${searchText.value}`);
  const json = await data.json();
  console.log(json);
  movies.value = json;
}
</script>

<template>
  <div class="container">
    <Hero />
    <form class="form" @submit.prevent="search">
      <input class="input" type="text" v-model="searchText" />
      <button class="button">Search for TV Shows</button>
    </form>
    <!-- Card List -->
    <MovieCardList :movies="movies" />
  </div>
</template>

<style scoped>
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}

/* Input search */
.input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  height: 46px;
  width: 320px;
  font-size: 20px;
  color: white;
  padding: 0 10px;
  padding-left: 20px;
}

/* Search button */
.button {
  background-color: var(--primary-color);
  border: none;
  color: var(--tertiary-color);
  padding: 14px 30px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  display: inline-block;
  font-size: 16px;
  margin: 4px 8px;
  cursor: pointer;
}

.button:hover {
  background-color: var(--primary-color-dark);
}
</style>
