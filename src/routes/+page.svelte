<script lang="ts">
const timeline = [
  { place: 'West Virginia', period: 'Born', detail: '', href: 'https://en.wikipedia.org/wiki/West_Virginia' },
  { place: 'West Virginia University', period: '2013 - 2016', detail: 'BS Economics, Minor Philosophy', href: 'http://catalog.wvu.edu/undergraduate/collegeofbusinessandeconomics/economics/' },
  { place: 'The Ohio State University', period: '2016 - 2017', detail: 'JD Candidate', href: 'https://moritzlaw.osu.edu/' },
  { place: 'Northeastern University', period: '2018 - 2020', detail: 'MS Computer Science', href: 'https://www.khoury.northeastern.edu/' },
  { place: 'Polyverse', period: '2019', detail: 'SDE Intern', href: 'https://www.linkedin.com/company/polyversecorp' },
  { place: 'Nordstrom', period: '2020 - Present', detail: 'SDE 2', href: 'https://www.nordstrom.com/' },
  { place: 'Cancer Treatment', period: '2023 - 2024', detail: 'Remission', href: '/cancer' },
];
</script>

<svelte:head>
  <title>wesflorence</title>
</svelte:head>

<!-- Timeline Grid -->
<div class="py-8">
  <h2 class="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-8">Timeline</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each timeline as item}
      <a href={item.href} class="group block p-4 border border-zinc-800 hover:border-zinc-600 transition-colors">
        <p class="text-xs text-zinc-500 mb-1">{item.period}</p>
        <h3 class="text-white font-medium group-hover:text-zinc-300">{item.place}</h3>
        {#if item.detail}
          <p class="text-sm text-zinc-400 mt-1">{item.detail}</p>
        {/if}
      </a>
    {/each}
  </div>
</div>
