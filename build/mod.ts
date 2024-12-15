import { serveFile } from "jsr:@std/http@1.0.12/file-server";

Deno.serve((req) => {
  const url = req.url;
  const path = new URL(url).pathname;
  if (path === "/") {
    return serveFile(req, "../dist/index.html");
  }
  return serveFile(req, `../dist/${path.slice(1)}`); // remove leading slash
});
