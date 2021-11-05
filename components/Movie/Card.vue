<script setup lang="ts">
defineProps({
  movie: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="movie-card__item" @click="$router.push(`/movies/${movie.show.id}`)">
    <picture>
      <img
        :src="movie?.show?.image?.medium ?? 'https://picsum.photos/200.webp'"
        :alt="movie?.show?.name"
        :title="movie?.show?.name"
      />
    </picture>
    <div class="movie-card__item__body">
      <div>
        <div>
          <small>{{ movie?.show?.language }}, </small>
          <small class="premiered">{{ movie?.show?.premiered }}</small>
        </div>
        <h4>{{ movie?.show?.name }}</h4>
        <p class="genres">
          <small v-for="(genre, index) in movie?.show?.genres" :key="index">
            {{ genre }}{{ index < movie?.show?.genres.length - 1 ? ", " : "" }}
          </small>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie-card__item {
  max-width: 210px;
  width: max-content;
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.8s ease-in-out;
  transform: skew(0, -5deg);
}

.movie-card__item:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
}

.movie-card__item:hover .movie-card__item__body {
  opacity: 1;
}

.premiered {
  color: var(--primary-color);
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 5px;
}

img {
  width: 100%;
  object-fit: cover;
}

h4 {
  margin-bottom: 8px;
}

.genres {
  margin: 0;
  margin-bottom: 5px;
  color: #fefefe;
}

.movie-card__item__body {
  position: absolute;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  display: flex;
  z-index: 20;
}

.movie-card__item__body > div {
  padding: 10px;
  backdrop-filter: blur(16px);
  width: 100%;
}
</style>
