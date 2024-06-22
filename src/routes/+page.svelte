<script lang="ts">
function scrollToResume(): void {
  const resumeElement = document.getElementById('resume');
  if (resumeElement) {
    resumeElement.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.error('Element with ID "resume" not found.');
  }
}
</script>

<svelte:head>
  <title>wesflorence</title>
</svelte:head>

<!-- Full-height section -->
<div class="min-h-screen flex flex-col items-center">
  <video src="w-loop.webm" autoplay loop muted playsinline class="w-full h-auto"></video>
  <div class="flex flex-col items-center text-center">
    <h1 class="text-4xl font-bold mb-2">Wes Florence</h1>
    <p>Software Developer living in Seattle, WA.</p>
    <div class="text-zinc-400 mt-2">
      <a href="https://github.com/wesleyflorence" class="hover:text-zinc-50">Github</a>
      |
      <a href="https://www.linkedin.com/in/wesflorence" class="hover:text-zinc-50">LinkedIn</a>
    </div>
    <!-- Button container with absolute positioning -->
    <div class="absolute bottom-10 flex justify-center w-full">
      <button on:click={scrollToResume} class="px-4 py-2 text-white rounded-full bg-zinc-800 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500">
        <span class="flex items-center">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </span>
      </button>
    </div>
  </div>
</div>

<!-- Content below the fold -->
<div id="resume" class="bg-black text-zinc-300">
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row items-center mb-8">
      <img src="sqr.png" alt="Wes Florence" class="w-48 h-48 rounded-lg shadow-lg md:mb-0 md:mr-8" />
      <div class="flex flex-col items-center md:items-start text-center md:text-left py-9">
        I like to build and learn things. I am concerned with doing things with beauty and purpose, but above all, with doing things at all. I enjoy trying on different ideas and practices. Some recent interests include 3D printing and modeling, cellular biology, and sailing. Professionally, I build data ingestion systems at Nordstrom. Happy to be here.
        <p class="mb-2"></p>
      </div>
    </div>
  </div>

  <div class="container mx-auto px-4">
    <div class="relative">
      <h2 class="text-md font-mono mb-8 text-center text-white">Timeline</h2>
      <div class="border-2 absolute border-opacity-20 border-zinc-700 h-full border z-0" style="left: 49.9%; width: 2px;"></div>

      <!-- West Virginia -->
      <div class="mb-8 flex flex-col md:flex-row items-center w-full text-center md:text-left">
        <div class="z-20 flex items-center order-1 md:order-2 w-6 h-12 mx-auto bg-black rounded-full">
          <h1 class="mx-auto text-white font-semibold text-lg">✦</h1>
        </div>
        <div class="z-10 flex flex-col items-end md:w-6/12 order-1 md:order-1 mt-10">
          <div class="bg-black rounded-lg shadow-xl px-4 py-2 md:mr-4">
            <h3 class="font-bold text-white text-lg"><a href="https://en.wikipedia.org/wiki/West_Virginia">West Virginia</a></h3>
            <p class="text-sm text-zinc-400">Born</p>
          </div>
        </div>
        <div class="md:w-6/12 order-1 md:order-3"></div>
      </div>

      <!-- West Virginia University -->
      <div class="mb-8 flex flex-col md:flex-row items-center w-full text-center md:text-left">
        <div class="md:w-6/12 order-1"></div>
        <div class="z-20 flex items-center order-1 md:order-2 w-6 h-12 mx-auto bg-black rounded-full">
          <h1 class="mx-auto text-white font-semibold text-lg">✦</h1>
        </div>
        <div class="z-10 flex flex-col md:w-6/12 order-1 md:order-3 mt-10">
          <div class="bg-black rounded-lg shadow-xl px-4 py-2 md:ml-4">
            <h3 class="font-bold text-white text-lg"><a href="http://catalog.wvu.edu/undergraduate/collegeofbusinessandeconomics/economics/">West Virginia University</a></h3>
            <p class="text-sm leading-snug tracking-wide text-zinc-300">2013 - 2016</p>
            <p class="text-sm text-zinc-400">BS Economics, Minor Philosophy</p>
          </div>
        </div>
      </div>

      <!-- The Ohio State University -->
      <div class="mb-8 flex flex-col md:flex-row items-center w-full text-center md:text-left">
        <div class="z-20 flex items-center order-1 md:order-2 w-6 h-12 mx-auto bg-black rounded-full">
          <h1 class="mx-auto text-white font-semibold text-lg">✦</h1>
        </div>
        <div class="z-10 flex flex-col items-end md:w-6/12 order-1 md:order-1 mt-10">
          <div class="bg-black rounded-lg shadow-xl px-4 py-2 md:mr-4">
            <h3 class="font-bold text-white text-lg"><a href="https://moritzlaw.osu.edu/">The Ohio State University</a></h3>
            <p class="text-sm leading-snug tracking-wide text-zinc-300">2016 - 2017</p>
            <p class="text-sm text-zinc-400">JD Candidate</p>
          </div>
        </div>
        <div class="md:w-6/12 order-1 md:order-3"></div>
      </div>

      <!-- Northeastern University -->
      <div class="mb-8 flex flex-col md:flex-row items-center w-full text-center md:text-left">
        <div class="md:w-6/12 order-1"></div>
        <div class="z-20 flex items-center order-1 md:order-2 w-6 h-12 mx-auto bg-black rounded-full">
          <h1 class="mx-auto text-white font-semibold text-lg">✦</h1>
        </div>
        <div class="z-10 flex flex-col md:w-6/12 order-1 md:order-3 mt-10">
          <div class="bg-black rounded-lg shadow-xl px-4 py-2 md:ml-4">
            <h3 class="font-bold text-white text-lg"><a href="https://www.khoury.northeastern.edu/">Northeastern University</a></h3>
            <p class="text-sm leading-snug tracking-wide text-zinc-300">2018 - 2020</p>
            <p class="text-sm text-zinc-400">MS Computer Science</p>
          </div>
        </div>
      </div>

      <!-- Polyverse -->
      <div class="mb-8 flex flex-col md:flex-row items-center w-full text-center md:text-left">
        <div class="z-20 flex items-center order-1 md:order-2 w-6 h-12 mx-auto bg-black rounded-full">
          <h1 class="mx-auto text-white font-semibold text-lg">✦</h1>
        </div>
        <div class="z-10 flex flex-col items-end md:w-6/12 order-1 md:order-1 mt-10">
          <div class="bg-black rounded-lg shadow-xl px-4 py-2 md:mr-4">
            <h3 class="font-bold text-white text-lg"><a href="https://www.linkedin.com/company/polyversecorp">Polyverse</a></h3>
            <p class="text-sm leading-snug tracking-wide text-zinc-300">2019</p>
            <p class="text-sm text-zinc-400">SDE Intern</p>
          </div>
        </div>
        <div class="md:w-6/12 order-1 md:order-3"></div>
      </div>

      <!-- Nordstrom -->
      <div class="mb-8 flex flex-col md:flex-row items-center w-full text-center md:text-left">
        <div class="md:w-6/12 order-1"></div>
        <div class="z-20 flex items-center order-1 md:order-2 w-6 h-12 mx-auto bg-black rounded-full">
          <h1 class="mx-auto text-white font-semibold text-lg">✦</h1>
        </div>
        <div class="z-10 flex flex-col md:w-6/12 order-1 md:order-3 mt-10">
          <div class="bg-black rounded-lg shadow-xl px-4 py-2 md:ml-4">
            <h3 class="font-bold text-white text-lg"><a href="https://www.nordstrom.com/">Nordstrom</a></h3>
            <p class="text-sm leading-snug tracking-wide text-zinc-300">2020 - Present</p>
            <p class="text-sm text-zinc-400">SDE 2</p>
          </div>
        </div>
      </div>

      <!-- Cancer Treatment -->
      <div class="mb-8 flex flex-col md:flex-row items-center w-full text-center md:text-left">
        <div class="z-20 flex items-center order-1 md:order-2 w-6 h-12 mx-auto bg-black rounded-full">
          <h1 class="mx-auto text-white font-semibold text-lg">✦</h1>
        </div>
        <div class="z-10 flex flex-col items-end md:w-6/12 order-1 md:order-1 mt-10">
          <div class="bg-black rounded-lg shadow-xl px-4 py-2 md:mr-4">
            <h3 class="font-bold text-white text-lg"><a href="cancer">Cancer Treatment</a></h3>
            <p class="text-sm leading-snug tracking-wide text-zinc-300">2023 - 2024</p>
            <p class="text-sm text-zinc-400">Hodgkin Lymphoma - Remission</p>
          </div>
        </div>
        <div class="md:w-6/12 order-1 md:order-3"></div>
      </div>
    </div>
  </div>
</div>

