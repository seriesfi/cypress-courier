import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    env: {
      courierAuthToken: process.env.COURIER_AUTH_TOKEN,
    }
  },
});
