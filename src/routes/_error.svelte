<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === "development";
</script>

<style lang="postcss">
	.\-404 {
		@apply flex items-center justify-center;
		.code {
			font-size: 26px;
			padding: 0 15px 0 15px;
			@apply text-center border-primary border-r-2;
		}
		.message {
			font-size: 18px;
			@apply text-center;
		}
	}
</style>

<div>
	<div class="-404">
		<div class="code">{status}</div>
		<div class="message" style="padding: 10px;">{error.message}</div>
	</div>
	{#if dev && error.stack}
		<pre>{error.stack}</pre>
	{/if}
</div>
