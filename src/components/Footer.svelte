<script>
	import Logo from "./Logo.svelte";
</script>

<style lang="postcss">
	.footer {
		border-radius: 42px;
		@apply bg-black rounded-bl-none rounded-br-none p-5 px-10 flex flex-col justify-between items-center mt-auto;
		@screen md {
			@apply flex-row;
		}
		.text {
			@apply text-white text-sm mt-3;
			@screen md {
				@apply mt-0;
			}
		}
	}
</style>

<div class="footer">
	<Logo color="#ffffff" width={100} />
	<p class="text">© Haruaki - devchallenge.io 2020</p>
</div>
