<script>
  import '../app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />

<main class="mx-auto max-w-xl p-4">
  <slot />
</main>
