import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://skyscript.vercel.app",
  base: "/",
  integrations: [
    starlight({
      title: "SkyScript",
      logo: {
        light: "./src/assets/sky.png",
        dark: "./src/assets/sky.png",
      },
      editLink: {
        baseUrl: "https://github.com/Zono-Bot/SkyScript-Docs",
      },
      social: {
        github: "https://github.com/SkyOPG/SkyScript",
        discord: "https://discord.gg/5unPYHu8zX",
    
      },
      sidebar: [
        {
          label: "Introduction",
          autogenerate: {
            directory: "Introduction",
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
