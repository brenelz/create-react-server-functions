import { createApp } from "vinxi";
import { serverFunctions } from "@vinxi/server-functions/plugin";

export default createApp({
  server: {
    preset: "vercel",
  },
  routers: [
    {
      name: "client",
      type: "client",
      handler: "./src/index.jsx",
      plugins: () => [serverFunctions.client()],
    },
    {
      name: "spa",
      type: "spa",
      handler: "index.html",
      plugins: () => [serverFunctions.client()],
    },
    serverFunctions.router(),
  ],
});
