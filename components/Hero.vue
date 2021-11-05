<script setup></script>

<template>
  <div class="hero">
    <div class="hero__first">
      <h1><span>The first</span> online streaming movie search engine</h1>
    </div>
    <div class="hero__second">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi in,
        laboriosam iure maiores quia corporis ratione?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi in,
        laboriosam iure maiores quia corporis ratione. Reprehenderit aperiam optio
        voluptates eum, in ex ipsa vitae! Corrupti, mollitia deleniti..
      </p>
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
}

.hero__first {
  width: 40%;
}

.hero__second {
  flex: 1;
  padding-left: 80px;
}

.hero__second p {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 30px;
}

h1 {
  font-weight: bold;
  font-size: 2.5rem;
}

span {
  color: var(--primary-color);
  font-weight: bold;
}

p {
  color: var(--text-color);
}
</style>
