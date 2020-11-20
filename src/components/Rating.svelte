<script>
	export let value = 0;

	let ratings = [0, 0, 0, 0, 0];

	for (let i in ratings) {
		if (i < value) ratings[i] = 1;
	}
</script>

<style lang="postcss">
	.rating {
		@apply flex -mr-3;
		&-slot {
			width: 40px;
			height: 10px;
			@apply mr-3 bg-primary-lighter rounded-lg;
			@screen md {
				width: 50px;
			}
			&.active {
				@apply bg-primary-dark;
			}
		}
	}
</style>

<div class="rating">
	{#each ratings as rate}
		{#if rate}
			<div class="rating-slot active" />
		{:else}
			<div class="rating-slot" />
		{/if}
	{/each}
</div>
