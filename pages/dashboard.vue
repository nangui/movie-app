<script setup>
import { createClient } from "@supabase/supabase-js";

const { supabaseUrl, supabasePublicKey } = useRuntimeConfig();
const supabase = createClient(supabaseUrl, supabasePublicKey);

const onLogout = async () => {
  await supabase.auth.signOut();
  window.location.replace("/");
};
</script>

<template>
  <div class="dashboard">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="title-section">
            <h1>Dashboard</h1>
            <button class="logout" v-on:click="onLogout">Logout</button>
          </div>
          <div class="content-session">
            <pre>
              {{ supabase.auth.user() }}
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  padding: 20px;
  min-height: 60vh;
}
.title-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

/* Logout button */
.logout {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
}
</style>
