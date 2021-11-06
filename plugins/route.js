import { defineNuxtPlugin } from '#app'
import { createClient } from '@supabase/supabase-js/dist/main/index.js'

export default defineNuxtPlugin(nuxtApp => {
  console.log('nuxtApp', nuxtApp)
  const { supabaseUrl, supabasePublicKey } = nuxtApp.$config;
  const supabase = createClient(supabaseUrl, supabasePublicKey);

  nuxtApp.$router.beforeEach((to, from, next) => {
    const session = supabase.auth.session();
    
    if (to.name !== 'register' && to.name !== 'login' && !session?.user) next({ name: 'login' });
    else next();
  });
});
