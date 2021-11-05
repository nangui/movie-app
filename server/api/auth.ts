import type { IncomingMessage, ServerResponse } from 'http';
import { StringDecoder } from 'string_decoder'
import { createClient } from '@supabase/supabase-js';

export default async (req: IncomingMessage, res: ServerResponse) => {
  let data: any = { data: [ { data: "" } ] };
  let decoder = new StringDecoder('utf8');
  let buffer = '';
  const supabaseUrl: string = process.env.SUPABASE_URL ?? '';
  const supabasePublicKey: string = process.env.SUPABASE_PUBLIC_KEY ?? '';

  const supabase = createClient(supabaseUrl, supabasePublicKey)

  req.on('data', (chunk) => {
    buffer += decoder.write(chunk);
  });

  req.on('end', async () => {
    buffer += decoder.end();

    const { type, email, password } = JSON.parse(buffer);

    if (type === 'signup') {
      const { user, error } = await supabase.auth.signUp({  email, password })
      data = { user, error };
    } else if (type === 'signin') {
      const { user, error } = await supabase.auth.signIn({  email, password })
      data = { user, error };
    }

    console.log(data);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(data));
    res.end();
  });
}
