<script setup>
// import { createClient } from "@supabase/supabase-js/dist/main/index.js";
import { reactive } from "vue";

const loginState = reactive({
  email: "",
  password: "",
  user: null,
  error: null,
});

const signIn = async () => {
  try {
    const response = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "signin",
        email: loginState.email,
        password: loginState.password,
      }),
    });

    data = await response.json();

    console.log(data);

    // loginState.user = user;
    // loginState.error = error;
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <FormContainer title="Sign In" text="Create new account?" link="/register">
    <form class="form" @submit.prevent="signIn">
      <div class="input-group">
        <label class="label" for="email">Email</label>
        <input
          class="input"
          placeholder="Enter your email"
          type="email"
          id="email"
          v-model="loginState.email"
        />
      </div>
      <div class="input-group">
        <label class="label" for="password">Password</label>
        <input
          class="input"
          type="password"
          placeholder="Enter your password"
          id="password"
          v-model="loginState.password"
        />
      </div>
      <button class="button primary" type="submit">Login</button>
    </form>
  </FormContainer>
</template>
