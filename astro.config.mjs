import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://DrJonki.github.io",
  base: "/starlight-test",
  integrations: [
    starlight({
      title: "Hypothetical Studio App Documentation",
      logo: {
        src: "./src/assets/logo.png",
      },
      editLink: {
        baseUrl: "https://github.com/DrJonki/starlight-test/tree/main",
      },
      social: {
        github: "https://github.com/DrJonki/starlight-test",
      },
      sidebar: [
        {
          label: "Guides",
          autogenerate: {
            directory: "guides",
          },
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
