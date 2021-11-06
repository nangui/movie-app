<script setup>
import { createClient } from "@supabase/supabase-js/dist/main/index.js";
import { reactive } from "vue";

const { supabaseUrl, supabasePublicKey } = useRuntimeConfig();
const supabase = createClient(supabaseUrl, supabasePublicKey);

const registerState = reactive({
  email: "",
  password: "",
  user: null,
  error: null,
});

const signUp = async () => {
  const { user, error } = await supabase.auth.signUp({
    email: registerState.email,
    password: registerState.password,
  });
  registerState.email = "";
  registerState.password = "";

  if (error) {
    window.alert("Account creation failed");
    registerState.error = error;
  } else {
    registerState.user = user;
    window.alert("Account created");
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
