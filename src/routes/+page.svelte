<script lang="ts">
import { onMount } from 'svelte';

interface Book {
  name: string;
  authors: string;
  link: string | null;
}

let books: Book[] = $state([]);
let completedBooks: Book[] = $state([]);
let showAllCompleted = $state(false);

onMount(async () => {
  try {
    const [readingRes, completedRes] = await Promise.all([
      fetch('https://raw.githubusercontent.com/wesleyflorence/library/main/reading_books.json'),
      fetch('https://raw.githubusercontent.com/wesleyflorence/library/main/completed_books.json')
    ]);
    books = await readingRes.json();
    completedBooks = await completedRes.json();
  } catch (error) {
    console.error('Failed to fetch reading list:', error);
  }
});

const timeline = [
  { place: 'West Virginia University', period: '2013 - 2016', detail: 'BS Economics, Minor Philosophy', href: 'http://catalog.wvu.edu/undergraduate/collegeofbusinessandeconomics/economics/' },
  { place: 'The Ohio State University', period: '2016 - 2017', detail: 'JD Candidate', href: 'https://moritzlaw.osu.edu/' },
  { place: 'Northeastern University', period: '2018 - 2020', detail: 'MS Computer Science', href: 'https://www.khoury.northeastern.edu/' },
  { place: 'Polyverse', period: '2019', detail: 'SDE Intern', href: 'https://www.linkedin.com/company/polyversecorp' },
  { place: 'Nordstrom', period: '2020 - Present', detail: 'SDE 2', href: 'https://www.nordstrom.com/' },
  { place: 'Cancer Treatment', period: '2023 - 2025', detail: 'Remission', href: '/cancer' },
];
</script>

<svelte:head>
  <title>wesflorence</title>
</svelte:head>

<div class="py-8 grid grid-cols-1 lg:grid-cols-4 gap-12">
  <!-- Timeline Grid -->
  <div class="lg:col-span-3">
    <h2 class="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-8">Timeline</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
      {#each timeline as item}
        <a href={item.href} class="group block p-3 md:p-4 border border-zinc-800 hover:border-zinc-600 transition-colors">
          <p class="text-xs text-zinc-500 mb-0.5 md:mb-1">{item.period}</p>
          <h3 class="text-white text-sm md:text-base font-medium group-hover:text-zinc-300">{item.place}</h3>
          {#if item.detail}
            <p class="text-xs md:text-sm text-zinc-400 mt-0.5 md:mt-1">{item.detail}</p>
          {/if}
        </a>
      {/each}
    </div>
  </div>

  <!-- Reading -->
  <div class="lg:col-span-1 space-y-8">
    <div>
      <h2 class="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-4">Reading</h2>
      {#if books.length > 0}
        <div class="space-y-3">
          {#each books as book}
            <div class="border-l-2 border-zinc-800 pl-4">
              {#if book.link}
                <a href={book.link} class="text-white text-sm hover:text-zinc-300">{book.name}</a>
              {:else}
                <p class="text-white text-sm">{book.name}</p>
              {/if}
              <p class="text-zinc-500 text-xs mt-0.5">{book.authors}</p>
            </div>
          {/each}
        </div>
      {:else}
        <p class="text-zinc-500 text-sm">Loading...</p>
      {/if}
    </div>

    <div>
      <h2 class="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-4">Completed</h2>
      {#if completedBooks.length > 0}
        <div class="space-y-3">
          {#each showAllCompleted ? completedBooks : completedBooks.slice(0, 5) as book}
            <div class="border-l-2 border-zinc-800 pl-4">
              {#if book.link}
                <a href={book.link} class="text-white text-sm hover:text-zinc-300">{book.name}</a>
              {:else}
                <p class="text-white text-sm">{book.name}</p>
              {/if}
              <p class="text-zinc-500 text-xs mt-0.5">{book.authors}</p>
            </div>
          {/each}
        </div>
        {#if completedBooks.length > 5}
          <button
            onclick={() => showAllCompleted = !showAllCompleted}
            class="mt-4 text-xs text-zinc-500 hover:text-white transition-colors"
          >
            {showAllCompleted ? '− show less' : `+ ${completedBooks.length - 5} more`}
          </button>
        {/if}
      {:else}
        <p class="text-zinc-500 text-sm">Loading...</p>
      {/if}
    </div>
  </div>
</div>
