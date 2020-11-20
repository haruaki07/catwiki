<script>
	import Img from "./Img.svelte";
	import { popularBreeds } from "../stores";
</script>

<style lang="postcss">
	.hero-breeds {
		@apply p-12 pt-8;
		@screen md {
			@apply p-20 pt-8;
		}
		.title {
			font-size: 18px;
			@apply text-primary font-medium;
			&::after {
				content: "";
				margin-top: 8px;
				width: 60px;
				height: 3px;
				@apply block bg-primary-darker rounded-full;
			}
			&-big {
				font-size: 18px;
				line-height: 22px;
				@apply font-bold text-primary;
				@screen md {
					line-height: 59px;
					font-size: 48px;
				}
			}
		}
		section {
			@apply py-10 flex flex-col justify-between items-start;
			a {
				font-size: 14px;
				opacity: 60%;
				@apply text-primary font-bold uppercase mt-3;
				i {
					@apply align-middle;
				}
				@screen md {
					font-size: 18px;
				}
			}
			@screen md {
				@apply flex-row items-end;
			}
		}
		.popular {
			@apply grid grid-cols-2 gap-8;
			@screen md {
				@apply grid-cols-4;
			}
			.text {
				font-size: 18px;
				@apply text-primary font-semibold mt-3;
			}
		}
	}
</style>

<!-- svelte-ignore a11y-invalid-attribute -->
<div class="hero-breeds">
	<h1 class="title">Most searched breeds</h1>
	<section>
		<div class="title-big">66+ Breeds For you <br /> to discover</div>
		<a href="breed">SEE MORE <i class="material-icons">trending_flat</i></a>
	</section>
	<div class="popular">
		{#each $popularBreeds.slice(0, 4) as breed, i}
			<a href="/breed/{breed.breed_id}">
				<Img src={breed.image} type={i <= 0 ? '' : 'normal'} />
				<p class="text">{breed.name}</p>
			</a>
		{/each}
	</div>
</div>
