import type { IncomingMessage, ServerResponse } from 'http';
import * as url from 'url';

export default async (req: IncomingMessage, res: ServerResponse) => {
  const queryObject = url.parse(req.url as string, true).query;
  let data = { data: [ { data: "" } ] };

  const { search, singlesearch } = queryObject;

  if (search) {
    data = await $fetch(`${process.env.TVMAZE_URL}/search/shows?q=${search}`)
  }

  if (singlesearch) {
    data = await $fetch(`${process.env.TVMAZE_URL}/singlesearch/shows?q=${singlesearch}`)
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(data));
  res.end();
}
