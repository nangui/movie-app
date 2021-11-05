<script setup>
import { createClient } from "@supabase/supabase-js/dist/main/index.js";

const { supabaseUrl, supabasePublicKey } = useRuntimeConfig();

const supabase = createClient(supabaseUrl, supabasePublicKey);

console.log(supabase);
</script>
<template>
  <div>Login</div>
</template>
