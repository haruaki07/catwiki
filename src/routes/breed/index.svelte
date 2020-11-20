<script>
	import { onMount } from "svelte";

	import Img from "../../components/Img.svelte";
	import { popularBreeds } from "../../stores";

	onMount(async () => {
		if (!$popularBreeds.length) {
			let res = await fetch(`${process.env.BACKEND_API_URL}/popular`);
			res = await res.json();

			popularBreeds.set(res.data);
		}
	});
</script>

<style lang="postcss">
	.popular {
		.title {
			font-size: 36px;
			@apply text-primary font-bold mb-12;
		}
		&-breed {
			@apply flex flex-col mb-24;
			@screen md {
				@apply flex-row;
			}
			:global(.img) {
				margin-right: 46px;
				@apply flex-shrink-0;
			}
			.detail {
				.name {
					font-size: 36px;
					@apply text-primary font-semibold my-4 inline-block;
					@screen md {
						@apply mb-8 mt-0;
					}
				}
				.description {
					font-size: 18px;
					@apply text-primary font-medium;
				}
			}
		}
	}
</style>

<svelte:head>
	<title>Popular Breeds - CatWiki</title>
</svelte:head>

<div class="popular">
	<h1 class="title">Top 10 most searched breeds</h1>
	<div class="popular-list">
		{#each $popularBreeds as breed, i}
			<div class="popular-breed">
				<Img src={breed.image} type="normal" />
				<div class="detail">
					<a href="breed/{breed.breed_id}" class="name">
						{i + 1}.
						{breed.name}
					</a>
					<div class="description">{breed.description}</div>
				</div>
			</div>
		{/each}
	</div>
</div>
