<script setup lang="ts">
defineProps({
  movies: [Object],
});
</script>

<template>
  <div class="movie-card__list">
    <MovieCard v-for="movie in movies" :key="movie.show.id" :movie="movie" />
  </div>
</template>

<style>
.movie-card__list {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>
