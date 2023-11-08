<svelte:head>
	<title>wesflorence :: cancer db</title>
</svelte:head>
<h1 class="text-4xl font-bold">Cancer</h1>
<p class="mb-5 font-mono">A dasboard for tracking health.</p>
<p>On July 24, 2023 I was diagnosed with Stage 2B Nodular Sclerosing Hodgkin Lymphoma with a 15.7cm Anterior Mediastinal mass causing SVC compression. I began a chemotherapy of ABVD on August 21, 2023.</p>

<br/>

<h1 class="text-lg font-bold mb-4">PET-CT Findings</h1>
<div class="overflow-x-auto rounded-lg overflow-hidden">
  <table class="min-w-full text-xs font-mono">
    <thead>
      <tr>
        <th class="bg-zinc-900 p-2">Data Point</th>
        <th class="bg-zinc-900 p-2">2023.08.10</th>
        <th class="bg-zinc-900 p-2">2023.10.23</th>
        <th class="bg-zinc-900 p-2">Change</th>
        <th class="bg-zinc-900 p-2 hidden md:table-cell">Explanation</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-zinc-900">
      <tr>
        <td class="p-2">Anterior Mediastinal Mass Size</td>
        <td class="p-2">13.5 x 9.1cm</td>
        <td class="p-2">7.6 x 6.0cm</td>
        <td class="p-2">Decreased</td>
        <td class="p-2 hidden md:table-cell">Size of the tumor in the chest, smaller size indicates positive response to treatment.</td>
      </tr>
      <tr class="md:hidden">
        <td colspan="4" class="p-2 text-zinc-500">Size of the tumor in the chest, smaller size indicates positive response to treatment.</td>
      </tr>
      <tr>
        <td class="p-2">Hypermetabolism within Mass</td>
        <td class="p-2">Max SUV 23.8</td>
        <td class="p-2">Max SUV 13.3</td>
        <td class="p-2">Decreased</td>
        <td class="p-2 hidden md:table-cell">Amount of radiotracer uptake, less uptake suggests a decrease in cancer activity.</td>
      </tr>
      <tr class="md:hidden">
        <td colspan="4" class="p-2 text-zinc-500">Amount of radiotracer uptake, less uptake suggests a decrease in cancer activity.</td>
      </tr>

      <tr>
        <td class="p-2">Right Hilum Metabolism</td>
        <td class="p-2">Max SUV 11.1</td>
        <td class="p-2">Max SUV 10.4</td>
        <td class="p-2">Slightly Decreased</td>
        <td class="p-2 hidden md:table-cell">Indicator of cancer's metabolic activity in the right lung area.</td>
      </tr>
      <tr class="md:hidden">
        <td colspan="4" class="p-2 text-zinc-500">Indicator of cancer's metabolic activity in the right lung area.</td>
      </tr>

      <tr>
        <td class="p-2">Pericardial Lymph Node Size</td>
        <td class="p-2">2.1 x 1.5cm</td>
        <td class="p-2">1.6 x 0.8cm</td>
        <td class="p-2">Decreased</td>
        <td class="p-2 hidden md:table-cell">Size of lymph node near the heart, with a decrease often indicating treatment effectiveness.</td>
      </tr>
      <tr class="md:hidden">
        <td colspan="4" class="p-2 text-zinc-500">Size of lymph node near the heart, with a decrease often indicating treatment effectiveness.</td>
      </tr>

      <tr>
        <td class="p-2">Pleural Effusion Presence</td>
        <td class="p-2">Right side present</td>
        <td class="p-2">Resolved</td>
        <td class="p-2">Improved</td>
        <td class="p-2 hidden md:table-cell">Fluid accumulation in chest cavity associated with disease, its resolution is a positive sign.</td>
      </tr>
      <tr class="md:hidden">
        <td colspan="4" class="p-2 text-zinc-500">Fluid accumulation in chest cavity associated with disease, its resolution is a positive sign.</td>
      </tr>

      <tr>
        <td class="p-2">Deauville Score</td>
        <td class="p-2">None</td>
        <td class="p-2">5</td>
        <td class="p-2">Assessed</td>
        <td class="p-2 hidden md:table-cell">Score used to measure treatment response in lymphoma, with 5 suggesting active disease.</td>
      </tr>
      <tr class="md:hidden">
        <td colspan="4" class="p-2 text-zinc-500">Score used to measure treatment response in lymphoma, with 5 suggesting active disease.</td>
      </tr>
    </tbody>
  </table>
</div>
