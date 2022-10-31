import { defineConfig } from "astro/config";
import remarkToc from "remark-toc";

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    markdown: {
        remarkPlugins: [remarkToc],
        extendDefaultPlugins: true,
    },
    integrations: [react(), mdx(), tailwind()],
});
