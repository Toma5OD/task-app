<script lang="ts">
    import { auth } from '../lib/firebaseConfig';
    import { goto } from '$app/navigation';
    import { GoogleAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

    let email = '';
    let password = '';

    const login = async (event: Event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            goto('/dashboard');
        } catch (error: any) {
            console.error('Error logging in: ', error.message);
        }
    };

    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            goto('/dashboard');
        } catch (error: any) {
            console.error('Error logging in with Google: ', error.message);
        }
    };

    const loginWithFacebook = async () => {
        const provider = new FacebookAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            goto('/dashboard');
        } catch (error: any) {
            console.error('Error logging in with Facebook: ', error.message);
        }
    };

    const goToSignup = () => {
        goto('/signup');
    };
</script>

<div class="container mx-auto p-8 space-y-8">
	<div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
		<div class="lg:col-start-4 lg:col-span-6">
			<form class="space-y-4" on:submit|preventDefault={login}>
				<div>
					<label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
					<input
						type="email"
						class="form-input mt-1 block w-full"
						id="email"
						bind:value={email}
						placeholder="Enter email"
					/>
				</div>
				<div>
					<label for="password" class="block text-sm font-medium text-gray-700">Password</label>
					<input
						type="password"
						class="form-input mt-1 block w-full"
						id="password"
						bind:value={password}
						placeholder="Password"
					/>
				</div>
				<button type="submit" class="btn variant-filled-primary">Log in</button>
				<button type="button" class="btn variant-filled-secondary" on:click={loginWithGoogle}>Log in with Google</button>
				<button type="button" class="btn variant-filled-tertiary" on:click={loginWithFacebook}>Log in with Facebook</button>
				<p class="mt-4 text-center">
					Don't have an account? <a href="/signup" class="text-blue-500 hover:underline">Sign up here!</a>
				</p>
			</form>
		</div>
	</div>
</div>
