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
      <div class="flex flex-col items-center md:items-start text-left py-4"> 
        I like to build and learn things. I am concerned with doing things with beauty and purpose, but above all, with doing things at all. I enjoy trying on different ideas and practices. Some recent interests include 3D printing and modeling, cellular biology, and sailing. Professionally, I build data ingestion systems at Nordstrom. Happy to be here.
        <p class="mb-2"></p>
      </div>
    </div>
  </div>

  <div class="container mx-auto px-4">
    <div class="relative">
      <h2 class="text-lg font-bold mb-4 text-center text-white">Timeline</h2> 
      <div class="border-2 absolute border-opacity-20 border-zinc-700 h-full border z-0" style="left: 49.9%; width: 2px;"></div>

      <!-- West Virginia -->
      <div class="mb-4 flex items-center w-full text-right"> 
        <div class="w-6/12 flex justify-end">
          <div class="bg-black rounded-lg shadow-xl px-2 py-1 mr-4"> 
            <h3 class="font-bold text-white text-md"><a href="https://en.wikipedia.org/wiki/West_Virginia">West Virginia</a></h3> 
            <p class="text-xs text-zinc-400">Born</p> 
          </div>
        </div>
        <div class="z-20 flex items-center w-4 h-8 bg-black rounded-full">
          <h1 class="mx-auto text-white font-semibold text-sm">✦</h1> 
        </div>
        <div class="w-6/12"></div>
      </div>

      <!-- West Virginia University -->
      <div class="mb-4 flex items-center w-full text-left"> 
        <div class="w-6/12"></div>
        <div class="z-20 flex items-center w-4 h-8 bg-black rounded-full">
          <h1 class="mx-auto text-white font-semibold text-sm">✦</h1> 
        </div>
        <div class="w-6/12">
          <div class="bg-black rounded-lg shadow-xl px-2 py-1 ml-4"> 
            <h3 class="font-bold text-white text-md"><a href="http://catalog.wvu.edu/undergraduate/collegeofbusinessandeconomics/economics/">West Virginia University</a></h3> 
            <p class="text-xs leading-snug tracking-wide text-zinc-300">2013 - 2016</p> 
            <p class="text-xs text-zinc-400">BS Economics, Minor Philosophy</p> 
          </div>
        </div>
      </div>

      <!-- The Ohio State University -->
      <div class="mb-4 flex items-center w-full text-right"> 
        <div class="w-6/12 flex justify-end">
          <div class="bg-black rounded-lg shadow-xl px-2 py-1 mr-4"> 
            <h3 class="font-bold text-white text-md"><a href="https://moritzlaw.osu.edu/">The Ohio State University</a></h3> 
            <p class="text-xs leading-snug tracking-wide text-zinc-300">2016 - 2017</p> 
            <p class="text-xs text-zinc-400">JD Candidate</p> 
          </div>
        </div>
        <div class="z-20 flex items-center w-4 h-8 bg-black rounded-full">
          <h1 class="mx-auto text-white font-semibold text-sm">✦</h1> 
        </div>
        <div class="w-6/12"></div>
      </div>

      <!-- Northeastern University -->
      <div class="mb-4 flex items-center w-full text-left"> 
        <div class="w-6/12"></div>
        <div class="z-20 flex items-center w-4 h-8 bg-black rounded-full">
          <h1 class="mx-auto text-white font-semibold text-sm">✦</h1> 
        </div>
        <div class="w-6/12">
          <div class="bg-black rounded-lg shadow-xl px-2 py-1 ml-4"> 
            <h3 class="font-bold text-white text-md"><a href="https://www.khoury.northeastern.edu/">Northeastern University</a></h3> 
            <p class="text-xs leading-snug tracking-wide text-zinc-300">2018 - 2020</p> 
            <p class="text-xs text-zinc-400">MS Computer Science</p> 
          </div>
        </div>
      </div>

      <!-- Polyverse -->
      <div class="mb-4 flex items-center w-full text-right"> 
      <div class="w-6/12 flex justify-end">
        <div class="bg-black rounded-lg shadow-xl px-2 py-1 mr-4"> 
          <h3 class="font-bold text-white text-md"><a href="https://www.linkedin.com/company/polyversecorp">Polyverse</a></h3> 
          <p class="text-xs leading-snug tracking-wide text-zinc-300">2019</p> 
          <p class="text-xs text-zinc-400">SDE Intern</p> 
        </div>
      </div>
      <div class="z-20 flex items-center w-4 h-8 bg-black rounded-full">
        <h1 class="mx-auto text-white font-semibold text-sm">✦</h1> 
      </div>
      <div class="w-6/12"></div>
    </div>

      <!-- Nordstrom -->
      <div class="mb-4 flex items-center w-full text-left"> 
        <div class="w-6/12"></div>
        <div class="z-20 flex items-center w-4 h-8 bg-black rounded-full">
          <h1 class="mx-auto text-white font-semibold text-sm">✦</h1> 
        </div>
        <div class="w-6/12">
          <div class="bg-black rounded-lg shadow-xl px-2 py-1 ml-4"> 
            <h3 class="font-bold text-white text-md"><a href="https://www.nordstrom.com/">Nordstrom</a></h3> 
            <p class="text-xs leading-snug tracking-wide text-zinc-300">2020 - Present</p> 
            <p class="text-xs text-zinc-400">SDE 2</p> 
          </div>
        </div>
      </div>

      <!-- Cancer Treatment -->
      <div class="mb-4 flex items-center w-full text-right"> 
        <div class="w-6/12 flex justify-end">
          <div class="bg-black rounded-lg shadow-xl px-2 py-1 mr-4"> 
            <h3 class="font-bold text-white text-md"><a href="cancer">Cancer Treatment</a></h3> 
            <p class="text-xs leading-snug tracking-wide text-zinc-300">2023 - 2024</p> 
            <p class="text-xs text-zinc-400">Remission</p> 
          </div>
        </div>
        <div class="z-20 flex items-center w-4 h-8 bg-black rounded-full">
          <h1 class="mx-auto text-white font-semibold text-sm">✦</h1> 
        </div>
        <div class="w-6/12"></div>
      </div>
    </div>
  </div>
  <div class="flex flex-col items-center text-center mt-20 p-10">
  <a href="https://raw.githubusercontent.com/wesleyflorence/resume/main/wesley_florence_resume.pdf" class="font-mono text-xs hover:text-zinc-50">[+] full resume.pdf</a>
    </div>
</div>
