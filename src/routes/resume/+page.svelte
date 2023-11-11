<script>
  import { onMount } from 'svelte';
  let resumeHtml = ''; // This will hold the HTML content of your resume

  onMount(async () => {
    const response = await fetch('https://raw.githubusercontent.com/wesleyflorence/resume/main/wesley_florence_resume.html');
    if (response.ok) {
      resumeHtml = await response.text();
    } else {
      console.error('Failed to fetch the resume.');
    }
  });
</script>

<div class="resume-container">
  {@html resumeHtml} <!-- Render the fetched HTML content -->
</div>

<style>
</style>
