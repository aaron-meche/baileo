export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/a-new-ui": [3],
		"/credit": [4],
		"/episode-selector": [5],
		"/insomnia": [6],
		"/library": [7],
		"/music": [8],
		"/search": [9],
		"/watch": [10]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';