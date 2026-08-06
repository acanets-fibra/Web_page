import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the ACANETS landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>ACANETS \| Internet de fibra óptica e ingeniería<\/title>/i);
  assert.match(html, /Conectamos el futuro/i);
  assert.match(html, /Fibra óptica/i);
  assert.match(html, /Ingeniería &amp; sistemas/i);
  assert.match(html, /24\.99/i);
  assert.match(html, /Plan estándar/i);
  assert.match(html, /76300536/i);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview|react-loading-skeleton/i);
});

test("ships both ACANETS logo variants", async () => {
  await access(new URL("../public/acanets-logo-dark.png", import.meta.url));
  await access(new URL("../public/acanets-logo-light.png", import.meta.url));
});
