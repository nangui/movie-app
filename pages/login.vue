<script setup>
import { createClient } from "@supabase/supabase-js/dist/main/index.js";
import { reactive } from "vue";

const { supabaseUrl, supabasePublicKey } = useRuntimeConfig();
const supabase = createClient(supabaseUrl, supabasePublicKey);

const loginState = reactive({
  email: "",
  password: "",
  user: null,
  error: null,
});

const signIn = async () => {
  const { user, error } = await supabase.auth.signIn({
    email: loginState.email,
    password: loginState.password,
  });
  loginState.email = "";
  loginState.password = "";

  if (error) {
    window.alert("Connection failed");
    loginState.error = error;
  } else {
    loginState.user = user;
    window.location.replace("/dashboard");
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
