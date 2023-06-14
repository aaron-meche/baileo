import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path'

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$components: path.resolve(__dirname, './src/components'),
			$assets: path.resolve(__dirname, './src/assets'),
			$modules: path.resolve(__dirname, './src/modules'),
		},
	},
});
