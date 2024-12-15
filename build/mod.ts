import { serveFile } from "jsr:@std/http@1.0.12/file-server";

console.log([...Deno.readDirSync(".")]);
console.log(4);
console.log([...Deno.readDirSync("..")]);
Deno.serve((req) => {
  console.log(req);
  const url = req.url;
  const path = new URL(url).pathname;
  if (path === "/") {
    return serveFile(req, "../dist/index.html");
  }
  return serveFile(req, `../dist/${path.slice(1)}`); // remove leading slash
});
