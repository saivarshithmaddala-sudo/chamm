import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // TanStack Start's bundled server entry in src/server.ts
    server: { entry: "server" },
  },
});
