<script lang="ts">
  import { onMount } from "svelte";

  interface Book {
    name: string;
    authors: string;
    review: string;
    isbn: string;
    link: string;
  }

  let books: Book[] = [];

  onMount(async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/wesleyflorence/library/main/books.json"
    );
    if (response.ok) {
      books = await response.json();
    } else {
      console.error("Failed to fetch books");
    }
  });
</script>

<h1 class="text-4xl font-bold mb-5">Library</h1>
<p class="bg-zinc-900 text-zinc-200 text-md rounded mb-8 p-5">
  Books on my reading list should not be seen as reflective of my personal or
  political beliefs. This list is not exhaustive and is continually updated <a
    href="https://github.com/wesleyflorence/library"
    class="text-rose-700 italic hover:font-bold"
  >
    (here!)</a
  >, representing a snapshot of my journey. We are learning.
</p>
{#if books.length > 0}
  <ul>
    {#each books as book}
      <li class="font-mono text-sm">
        <a href={book.link} target="_blank"
          ><strong class="hover:text-rose-700">{book.name}</strong></a
        >
        :: {book.authors}
        <br /><i class="text-rose-700 mx-7">{book.review || ""}</i>
        <br />
        <br />
      </li>
    {/each}
  </ul>
{:else}
  <p>No books found.</p>
{/if}
