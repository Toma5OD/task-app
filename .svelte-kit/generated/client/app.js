export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'), // export { default as component } from "../../../../src/routes/+layout.svelte";
	() => import('./nodes/1'), // export { default as component } from "../../../../node_modules/@sveltejs/kit/src/runtime/components/error.svelte";
	() => import('./nodes/2'), // export { default as component } from "../../../../src/routes/+page.svelte";
	() => import('./nodes/3') // export { default as component } from "../../../../src/routes/dashboard.svelte";
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/dashboard": [3],
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';