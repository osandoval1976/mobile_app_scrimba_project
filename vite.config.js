import { defineConfig } from "@netlify/vite-plugin";
import netlify from "@netlify/vite-plugin";

export default defineConfig({
	plugins: [
		netlify()
	]
});
