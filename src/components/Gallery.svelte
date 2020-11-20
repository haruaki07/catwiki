<script>
	import Img from "./Img.svelte";

	export let data = [];
</script>

<style lang="postcss">
	.gallery {
		@apply grid grid-cols-2 gap-6 mb-12;
		@screen md {
			@apply grid-cols-4;
		}
	}
</style>

<div class="gallery">
	{#each data as src}
		<Img {src} type="normal" />
	{/each}
</div>
