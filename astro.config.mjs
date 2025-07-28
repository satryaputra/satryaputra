import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://satrya.dev",
  integrations: [mdx(), sitemap(), tailwind()],
  output: "server",
  adapter: cloudflare(),
});