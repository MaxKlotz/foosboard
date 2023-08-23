<script>
    import Profile from './Profile.svelte';
    import Score from './Score.svelte';
    import { auth, googleProvider } from './firebase';
    import { authState } from 'rxfire/auth';

    let user;

    const unsubscribe = authState(auth).subscribe(u => user = u);

    function login() {
        auth.signInWithPopup(googleProvider);
    }
</script>


{#if user}
    <Profile {...user} />
    <button on:click={ () => auth.signOut() }>Logout</button>
    <hr>
    <Score></Score>
{:else}
	<button on:click={login}>
		Signin with Google
	</button>
{/if}