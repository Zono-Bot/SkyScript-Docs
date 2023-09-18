import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://zono-bot.vercel.app",
  base: "/",
  integrations: [
    starlight({
      title: "Zono",
      logo: {
        light: "./src/assets/zono.png",
        dark: "./src/assets/zono-1.png",
      },
      editLink: {
        baseUrl: "https://github.com/adityaREDFLAG/starlight-test/tree/main",
      },
      social: {
        github: "https://github.com/adityREDFLAG/starlight-test",
        discord: "https://discord.gg/r3KNBCtVFk",
    
      },
      sidebar: [
        {
          label: "Bots",
          autogenerate: {
            directory: "bot",
          },
        },
        {
          label: "Info",
          autogenerate: {
            directory: "info",
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
