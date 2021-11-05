<script setup>
defineProps({
  title: {
    type: String,
    default: "",
    required: true,
  },
  link: {
    type: String,
    default: "",
    required: true,
  },
  text: {
    type: String,
    default: "",
    required: true,
  },
});
</script>

<template>
  <div class="form-container">
    <div class="form-content">
      <h2>{{ title }}</h2>
      <slot></slot>
      <p class="text-right">
        <NuxtLink :to="link">{{ text }}</NuxtLink>
      </p>
    </div>
  </div>
</template>

<style>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
}
.form-content {
  width: 480px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.2rem;
  background: var(--tertiary-color);
  /* box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3); */
}
.form-content .form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;
}

.form-content .input-group {
  display: flex;
  flex-direction: column;
  width: 70%;
  min-width: 280px;
}

.form-content .input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  height: 60px;
  width: 100%;
  font-size: 20px;
  color: white;
  padding-left: 20px;
  margin-top: 5px;
  margin-bottom: 25px;
}
.form-content .input::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

.form-content .button {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: none;
  height: 55px;
  width: 70%;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
}

.button.primary {
  background: var(--primary-color);
  color: var(--tertiary-color);
}

a {
  line-height: 25px;
  font-size: 16px;
  text-align: center;
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
}
</style>
