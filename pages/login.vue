<script setup>
import { createClient } from "@supabase/supabase-js";

const { supabaseUrl, supabasePublicKey } = useRuntimeConfig();

const supabase = createClient(supabaseUrl, supabasePublicKey);

console.log(supabase);
</script>
<template>
  <div>Login</div>
</template>
