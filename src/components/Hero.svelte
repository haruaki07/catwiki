<script>
	import HeroImg from "../images/HeroImg.png";
	import HeroBreeds from "./HeroBreeds.svelte";
	import Logo from "./Logo.svelte";
	import Search from "./Search.svelte";
	import SearchMobile from "./SearchMobile.svelte";

	let logoWidth = 250;
	let innerWidth;

	$: logoWidth = innerWidth >= 768 ? 250 : 120;
</script>

<style lang="postcss">
	.hero {
		border-radius: 42px;
		@apply relative overflow-hidden bg-primary-lighter w-full;
		&-header {
			min-height: auto;
			@screen md {
				min-height: 500px;
			}
			@apply bg-cover bg-center p-12;
			@screen md {
				@apply p-20 pt-24;
			}
			&-content {
				max-width: 130px;
				@screen md {
					max-width: 380px;
				}
				.text {
					font-size: 14px;
					@apply text-white font-medium mt-2 mb-10;
					@screen md {
						font-size: 24px;
					}
				}
			}
		}
	}
</style>

<svelte:window bind:innerWidth />

<div class="hero">
	<div class="hero-header" style="background-image: url({HeroImg})">
		<div class="hero-header-content">
			<Logo color="#ffffff" width={logoWidth} />
			<p class="text">Get to know more about your cat breed</p>
			{#if innerWidth >= 768}
				<Search />
			{:else}
				<SearchMobile />
			{/if}
		</div>
	</div>
	<HeroBreeds />
</div>
