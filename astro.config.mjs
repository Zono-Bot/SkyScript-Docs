import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://skyscript.js.org",
  base: "/",
  integrations: [
    starlight({
      title: "SkyScript",
     favicon: "/sky.ico",
      logo: {
     scr: "./src/assets/sky.png",
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
          label: "🍀 Introduction",
          autogenerate: {
            directory: "Introduction",
          },
        },
        {
          label: "🚀 Stardard Functions",
          autogenerate: {
            directory: "Standard Library",
          },
        },
        {
          label: "🔮 Colours Library",
          autogenerate: {
          directory: "Colours Library",
      },
    },
    {
      label: "🔜 Advanced Mode",
      autogenerate: {
        directory: "Advanced Mode",
      }
    },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
