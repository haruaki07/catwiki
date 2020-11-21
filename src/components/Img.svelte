<script>
	export let src = "";
	export let type = "";
</script>

<style lang="postcss">
	.img {
		z-index: 1;
		@apply relative;
		&:not(.normal)::before {
			content: "";
			width: 30px;
			left: -14px;
			top: 31px;
			bottom: 13px;
			border-radius: 14px;
			z-index: -1;
			@apply block absolute bg-primary-light;
		}
		img {
			border-radius: 24px;
			@apply object-center object-cover inline-block w-48 h-48;
			@screen md {
				@apply w-56 h-56;
			}
		}
	}
</style>

<!-- svelte-ignore a11y-missing-attribute -->
<div class="img" class:normal={type === 'normal'}><img {src} /></div>
