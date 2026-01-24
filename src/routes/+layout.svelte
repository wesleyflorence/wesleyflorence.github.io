<script>
  import '../app.css';
	import Header from '$lib/components/Header.svelte';

  let { children } = $props();
</script>

<Header />

<main class="mx-auto max-w-5xl p-8">
  {@render children()}
</main>
