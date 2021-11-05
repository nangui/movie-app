<script setup>
import { reactive } from "vue";

const registerState = reactive({
  email: "",
  password: "",
  user: null,
  error: null,
});

const signUp = async () => {
  try {
    const response = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "signup",
        email: registerState.email,
        password: registerState.password,
      }),
    });
    const data = await response.json();
    console.log(data);

    // registerState.user = user;
    // registerState.error = error;
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <FormContainer title="Sign Up" text="Already have an account?" link="/login">
    <form class="form" @submit.prevent="signUp">
      <div class="input-group">
        <label class="label" for="email">Email</label>
        <input
          class="input"
          placeholder="Enter your email"
          type="email"
          id="email"
          v-model="registerState.email"
        />
      </div>
      <div class="input-group">
        <label class="label" for="password">Password</label>
        <input
          class="input"
          type="password"
          id="password"
          placeholder="Enter your password"
          v-model="registerState.password"
        />
      </div>
      <button class="button primary" type="submit">Register</button>
    </form>
  </FormContainer>
</template>
