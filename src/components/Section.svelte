<script>
	import Img1 from "images/Img1.png";
	import Img2 from "images/Img2.png";
	import Img3 from "images/Img3.png";
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<style lang="postcss">
	.section {
		@apply grid grid-cols-1 gap-8 py-32 px-12;
		@screen md {
			@apply grid-cols-2 px-20;
		}
		.left {
			.title {
				font-size: 48px;
				line-height: 59px;
				@apply font-bold text-primary;
				&::before {
					content: "";
					margin-bottom: 16px;
					width: 70px;
					height: 3px;
					@apply block bg-primary-darker rounded-full;
				}
			}
			.text {
				font-size: 18px;
				@apply font-medium text-primary my-10;
			}
			a {
				font-size: 18px;
				opacity: 60%;
				@apply text-primary font-bold uppercase;
				i {
					@apply align-middle;
				}
			}
		}
		.right {
			@apply ml-auto;
			.gr {
				@apply grid grid-cols-5 grid-rows-5 gap-4 max-w-sm;
				.img-1 {
					grid-area: 3 / 2 / 6 / 4;
				}
				.img-2 {
					grid-area: 1 / 1 / 3 / 4;
				}
				.img-3 {
					grid-area: 1 / 4 / 5 / 6;
				}
			}
		}
	}
</style>

<!-- svelte-ignore a11y-invalid-attribute -->
<div class="section">
	<div class="left">
		<h1 class="title">Why should you have a cat?</h1>
		<p class="text">
			Having a cat around you can actually trigger the release of calming
			chemicals in your body which lower your stress and anxiety leves
		</p>
		<a href="#">READ MORE <i class="material-icons">trending_flat</i></a>
	</div>
	<div class="right">
		<div class="gr">
			<img src={Img1} class="img-1" />
			<img src={Img2} class="img-2" />
			<img src={Img3} class="img-3" />
		</div>
	</div>
</div>
