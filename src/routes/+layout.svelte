<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { session } from '../lib/sessionStore';
	import { auth } from '../lib/firebaseConfig'; // <-- imported here
	import { AppShell } from '@skeletonlabs/skeleton';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	onMount(() => {
		auth.onAuthStateChanged((currentUser) => { // <-- used here
			if (currentUser) {
				// User is signed in, you can use user object here
				session.set({ user: currentUser });
			} else {
				// User is signed out
				session.set({ user: null });
				goto('/');
			}
		});
	});
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="sidebarLeft">
		<nav class="list-nav">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				{#if $session.user}
					<li><a href="/dashboard">Dashboard</a></li>
					<li><a href="/logout">Logout</a></li>
				{:else}
					<li><a href="/login">Login</a></li>
					<li><a href="/signup">Sign Up</a></li>
				{/if}
			</ul>
		</nav>
	</svelte:fragment>
	<slot />
</AppShell>
