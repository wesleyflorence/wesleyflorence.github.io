<script lang="ts">
  type Finding = {
    dataPoint: string;
    firstDateValue: string;
    secondDateValue: string;
    thirdDateValue: string;
    change: string;
    explanation: string;
  };

  const findings: Finding[] = [
    {
      dataPoint: "Anterior Mediastinal Mass Size",
      firstDateValue: "13.5 x 9.1cm",
      secondDateValue: "7.6 x 6.0cm",
      thirdDateValue: "4.6 x 2.1cm",
      change: "Decreased",
      explanation:
        "Size of the tumor in the chest, smaller size indicates positive response to treatment.",
    },
    {
      dataPoint: "Anterior Mediastinal Mass SUV",
      firstDateValue: "SUV 23.8",
      secondDateValue: "SUV 13.3",
      thirdDateValue: "SUV 2.0",
      change: "Decreased",
      explanation:
        "SUV stands for Standard Uptake Value, a measure of how much glucose the tissue is using; higher values can indicate more active or aggressive disease. A lower SUV means the mass is less active, which is good.",
    },
    {
      dataPoint: "Right Hilum SUV",
      firstDateValue: "SUV 11.1",
      secondDateValue: "SUV 10.4",
      thirdDateValue: "Resolved",
      change: "Resolved",
      explanation:
        "The hilum is an area of the lung where blood vessels and airways enter and exit. Indicator of metabolic activity here.",
    },
    {
      dataPoint: "Right Pericardial Lymph Node Size",
      firstDateValue: "2.1 x 1.5cm",
      secondDateValue: "1.6 x 0.8cm",
      thirdDateValue: "0.8 x 0.7cm",
      change: "Decreased",
      explanation:
        "Size of lymph node near the heart, with a decrease often indicating treatment effectiveness.",
    },
    {
      dataPoint: "Right Pericardial Node SUV",
      firstDateValue: "SUV 13.1",
      secondDateValue: "SUV 8.3",
      thirdDateValue: "SUV 1.5",
      change: "Decreased",
      explanation: "A lower SUV in these nodes means they are less active.",
    },
    {
      dataPoint: "Right Pleural Effusion",
      firstDateValue: "Small with SUV 2.0",
      secondDateValue: "Resolved",
      thirdDateValue: "Resolved",
      change: "Resolved",
      explanation:
        "Fluid accumulation in chest cavity associated with disease, its resolution is a positive sign.",
    },
    {
      dataPoint: "Trace Left Pleural Effusion",
      firstDateValue: "Present",
      secondDateValue: "Resolved",
      thirdDateValue: "Resolved",
      change: "Resolved",
      explanation:
        "Not mentioned in the later scan, it's gone or too minor to note.",
    },
    {
      dataPoint: "Tracer Activity in Rib",
      firstDateValue: "Not Mentioned",
      secondDateValue: "Trace accumulation, SUV 2.3",
      thirdDateValue: "Resolved",
      change: "Resolved",
      explanation:
        "Tracer accumulation in the rib might suggest the presence of cancer cells, an infection, or other bone conditions, but is indeterminate without a clear lesion on CT. Attention is needed in follow-up exams.",
    },
    {
      dataPoint: "Spleen Size and Activity",
      firstDateValue: "Normal",
      secondDateValue: "Normal",
      thirdDateValue: "Normal",
      change: "Stable",
      explanation:
        "The spleen's size and activity being normal means it's functioning as it should without evidence of disease affecting it.",
    },
    {
      dataPoint: "Liver Lesion",
      firstDateValue: "Tiny cyst",
      secondDateValue: "Tiny cyst",
      thirdDateValue: "Not Mentioned",
      change: "Stable",
      explanation:
        "A cyst in the liver is a small, fluid-filled sac that hasn't changed over time, indicating it's likely not cancerous and is stable, which is usually not a concern.",
    },
    {
      dataPoint: "Pelvic Lymphnodes",
      firstDateValue: "None",
      secondDateValue: "None",
      thirdDateValue: "None",
      change: "Stable",
      explanation:
        "No lymphadenopathy, meaning no abnormal lymph nodes were found in the pelvis area.",
    },
    {
      dataPoint: "Mediastinal Blood Pool",
      firstDateValue: "SUV 2.0",
      secondDateValue: "SUV 1.7",
      thirdDateValue: "SUV 1.9",
      change: "None",
      explanation:
        "Measures radiotracer uptake in mediastinal blood vessels. Stable SUV indicates consistent blood flow and metabolic activity in this area. Minor fluctuations in SUV are typically not significant.",
    },
    {
      dataPoint: "Background Liver SUV",
      firstDateValue: "SUV 2.9",
      secondDateValue: "SUV 2.9",
      thirdDateValue: "SUV 3.2",
      change: "None",
      explanation:
        "Reflects the metabolic activity of the liver. Consistent SUV suggests stable liver function. Slight variations usually don't indicate significant pathological changes.",
    },
    {
      dataPoint: "Deauville Score",
      firstDateValue: "None",
      secondDateValue: "5",
      thirdDateValue: "3",
      change: "Improved",
      explanation:
        "Score used to measure treatment response in lymphoma, with 3 suggesting response to treatment or indeterminate activity. Uptake SUV > mediastinal blood pool SUV but ≤ liver SUV in this case.",
    },
  ];
</script>

<div class="overflow-x-auto rounded-lg overflow-hidden">
  <table class="min-w-full text-xs font-mono">
    <thead>
      <tr>
        <th class="bg-zinc-900 p-2 hidden md:table-cell">Data Point</th>
        <th class="bg-zinc-900 p-2">2023.08.10</th>
        <th class="bg-zinc-900 p-2">2023.10.23</th>
        <th class="bg-zinc-900 p-2">2023.12.28</th>
        <th class="bg-zinc-900 p-2 hidden md:table-cell">Change</th>
        <th class="bg-zinc-900 p-2 hidden md:table-cell">Explanation</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-zinc-900 text-center">
      {#each findings as finding}
        <tr class="md:hidden">
          <td colspan="4" class="p-2">{finding.dataPoint}</td>
        </tr>
        <tr>
          <td class="p-2 text-left hidden md:table-cell">{finding.dataPoint}</td
          >
          <td class="p-2">{finding.firstDateValue}</td>
          <td class="p-2">{finding.secondDateValue}</td>
          <td class="p-2">{finding.thirdDateValue}</td>
          <td class="p-2 hidden md:table-cell">{finding.change}</td>
          <td class="p-2 text-left hidden md:table-cell"
            >{finding.explanation}</td
          >
        </tr>
        <tr class="md:hidden">
          <td colspan="4" class="p-2 text-zinc-500"
            >{finding.change} :: {finding.explanation}</td
          >
        </tr>
      {/each}
    </tbody>
  </table>
</div>
