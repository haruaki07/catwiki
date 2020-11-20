<script>
	import Nav from "../components/Nav.svelte";
	import Footer from "../components/Footer.svelte";
	import { stores } from "@sapper/app";
	import PageLoadingBar from "sapper-page-loading-bar/PageLoadingBar.svelte";

	const { preloading } = stores();
</script>

<style lang="postcss">
	main {
		width: 90%;
		min-height: 100vh;
		@screen md {
			@apply w-4/5;
		}
		@apply relative bg-white mx-auto flex flex-col;
	}
</style>

{#if $preloading}
	<PageLoadingBar {preloading} color2="#dec68b" color1="#e3e1dc" />
{/if}

<main>
	<Nav />
	<div>
		<slot />
	</div>
	<Footer />
</main>
