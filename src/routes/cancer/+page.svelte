<script lang="ts">
  import heartImg from "$lib/assets/RestingHeartRate.png";

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

  let transplantSublist = false; // State to manage visibility of the sublist
</script>

<svelte:head>
  <title>wesflorence :: cancer db</title>
</svelte:head>
<h1 class="text-4xl font-bold">Cancer</h1>
<p class="mb-5 font-mono">A dasboard for tracking health.</p>

<p class="mb-2">
  In July, I sought medical attention for a persistent, dry cough. Over time,
  additional symptoms emerged, including fatigue, vomiting, and facial swelling.
  These were later understood to be related to a large chest tumor, diagnosed as
  Hodgkin Lymphoma. The tumor was complicating blood flow back to my heart and
  causing many of my symptoms by pressing against my <a
    href="https://en.wikipedia.org/wiki/Phrenic_nerve"
    class="text-teal-300">phrenic nerve</a
  >.
</p>
<p class="mb-2">
  Treatment began with ABVD chemotherapy administered through IV due to the
  risks posed by my heart condition. Once the tumor shrank, I was able to
  receive chemo via a port. A PET scan in October revealed that my cancer was
  proving resistant to ABVD. I started Pembro-GVD, a combined immunotherapy and
  chemotherapy in response.
</p>
<p class="mb-2">
  A PET scan in December revealed a complete response, meaning the cancerous
  activity in the tumor decreased dramatically. Still, the previous resistance
  indicates that the cancer could mount a comeback if given time to do so. To
  address this concern, and wipe out any remaining cancer cells, I received
  a stem-cell transplant.
</p>
<p class="mb-2">
  The transplant was successful, and I'm now entering a recovery period. The transplant will be truely complete after 30 days, but it will take up to a year for my immune system to fully recover. This means I'll have to follow some dietary and social restrictions, but they shouldn't be too severe. Additionally, I might undergo maintenance immunotherapy treatment, which is relatively gentle and will allow me to resume a more normal lifestyle.
</p>
<p class="mb-8">
  I've created this dashboard to mindfully keep track of my timeline. It is also
  useful for sharing with friends and family who might be curious about the
  status of my treatment. I will continue to update it when I have the energy
  and will.
</p>

<div class="bg-zinc-900 shadow overflow-hidden rounded-lg mb-10">
  <div class="px-4 py-5 sm:px-6">
    <h3 class="text-lg leading-6 font-medium">Summary</h3>
    <p class="mt-1 max-w-2xl text-sm text-zinc-400">
      Progression and treatment Hodgkin Lymphoma.
    </p>
  </div>
  <div>
    <dl>
      <!-- Diagnosis-->
      <div
        class="bg-zinc-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
      >
        <dt class="text-lg font-medium">Diagnosis</dt>
        <dd class="mt-1 text-sm text-zinc-300 sm:col-span-2 sm:mt-0">
          Stage IIB Classic <a
            href="https://en.wikipedia.org/wiki/Hodgkin_lymphoma"
            class="text-teal-300">Hodgkin's Disease</a
          >, Nodular Sclerosing type with
          <a
            href="https://en.wikipedia.org/wiki/Superior_vena_cava"
            class="text-teal-300">Superior Vena Cava</a
          > compression.
        </dd>
      </div>
      <!-- Time Ordered Events & Findings -->
      <div
        class="bg-zinc-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
      >
        <dt class="text-lg font-medium">Timeline of Events</dt>
        <dd class="mt-1 text-sm text-zinc-300 sm:col-span-2 sm:mt-0">
          <ul class="list-none space-y-1">
            <li>
              <strong class="text-zinc-500">07.24</strong> Discovery of 15.7cm mediastinal
              mass via Chest X-Ray.
            </li>
            <li>
              <strong class="text-zinc-500">07.25</strong> CT scan confirms tumor
              extending into right chest, encasing SVC.
            </li>
            <li>
              <strong class="text-zinc-500">08.02</strong> CT-guided biopsy revealing
              atypical lymphohistiocytic infiltrate.
            </li>
            <li>
              <strong class="text-zinc-500">08.10</strong> Initial PET scan reveals
              extensive disease with high metabolic activity.
            </li>
            <li>
              <strong class="text-zinc-500">08.14</strong> Echocardiogram showing
              LVEF 65-70% with SVC collapse.
            </li>
            <li>
              <strong class="text-zinc-500">08.17</strong> Chest Biopsy to confirms
              Nodular Sclerosing Hodgkin Lymphoma.
            </li>
            <li>
              <strong class="text-zinc-500">08.21</strong> Initiation of ABVD chemotherapy.
            </li>
            <li>
              <strong class="text-zinc-500">09.11</strong> Port placement for chemotherapy
              administration.
            </li>
            <li>
              <strong class="text-zinc-500">10.23</strong> Restaging PET scan post
              2 cycles of ABVD shows response with decreased mass size and metabolic
              activity but remains Deauville score 5 prompting reassessment of treatment.
              Treating as refractory.
            </li>
            <li>
              <strong class="text-zinc-500">11.13</strong> CT-guided biopsy confirms
              persistent presence of Hodgkin cells.
            </li>
            <li>
              <strong class="text-zinc-500">11.15</strong> Initiation of Pembro-GVD
              chemotherapy.
            </li>
            <li>
              <strong class="text-zinc-500">12.22</strong> Hospitalized with a
              <a
                href="https://en.wikipedia.org/wiki/Febrile_neutropenia"
                class="text-teal-300">neutropenic fever</a
              > for 4 days.
            </li>
            <li>
              <strong class="text-zinc-500">12.28</strong> PET scan shows a "Complete
              Response" under new treatments, prompting final chemo dose and proceeding
              onto Stem-Cell Transplant.
            </li>
            <li>
              <strong class="text-zinc-500">02.06</strong> Begining of
              <a
                href="https://en.wikipedia.org/wiki/Hematopoietic_stem_cell_transplantation"
                class="text-teal-300">stem-cell transplant</a
              >.
            </li>
            <li>
              <strong class="text-zinc-500">03.06</strong> Successful transplant
              complete, discharged from hospital.
            </li>
            <li>
              <strong class="text-zinc-500">03.20</strong> Day 30 since tranplant,
              marks the end of the process.
            </li>
          </ul>
        </dd>
      </div>
      <div
        class="bg-zinc-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
      >
        <dt class="text-lg font-medium">Next Steps</dt>
        <dd class="mt-1 text-sm text-zinc-300 sm:col-span-2 sm:mt-0">
          Recovery from transplant, removal of hickman line, potentially
          immunotherapy to increase the odds of the remission sticking.
        </dd>
      </div>
    </dl>
  </div>
</div>

<h2 class="text-xl font-bold mb-2">Treatment</h2>
<h3 class="text-md font-bold hover:text-teal-300">
  <a href="https://en.wikipedia.org/wiki/ABVD">ABVD</a>
</h3>
<h4 class="text-xs font-mono">
  <a
    href="https://en.wikipedia.org/wiki/Doxorubicin"
    class="hover:text-teal-300">Adriamycin</a
  >
  |
  <a href="https://en.wikipedia.org/wiki/Bleomycin" class="hover:text-teal-300"
    >Bleomycin</a
  >
  |
  <a
    href="https://en.wikipedia.org/wiki/Vincristine"
    class="hover:text-teal-300">Vincristine</a
  >
  |
  <a
    href="https://en.wikipedia.org/wiki/Dacarbazine"
    class="hover:text-teal-300">Dacarbazine</a
  >
</h4>
<aside class="italic text-sm text-zinc-300 mb-2">
  <p>
    Chemotherapy regimen used in the first-line treatment of Hodgkin lymphoma.
  </p>
  <a
    href="https://www.google.com/search?q=vinblastine+shortage"
    class="text-teal-300">There is an ongoing shortage of Vinblastine</a
  > so my treatment has used Vinchristine as a substitue.
</aside>

<ul class="ml-4 mb-4">
  <li>
    <strong class="text-zinc-500">08.21 </strong>First chemotherapy infusion,
    done via intravenous injection.
  </li>
  <li>
    <strong class="text-zinc-500">09.05 </strong>Second IV infusion but I had
    significant pain in my arm due to Dacarbazine.
  </li>
  <li>
    <strong class="text-zinc-500">09.18 </strong>First infusion with the
    <a href="https://en.wikipedia.org/wiki/Port_(medical)" class="text-teal-300"
      >Port</a
    >, much easier.
  </li>
  <li><strong class="text-zinc-500">10.02 </strong>Routine infusion.</li>
  <li>
    <strong class="text-zinc-500">10.24 </strong>Infusion was delayed due to PET
    scan scheduling.
  </li>
</ul>
<h3 class="text-md font-bold hover:text-teal-300">
  <a
    href="https://lymphomahub.com/medical-information/efficacy-and-safety-of-pembro-gvd-as-second-line-therapy-for-patients-with-rr-chl"
    >Pembro-GVD</a
  >
</h3>
<h4 class="text-xs font-mono">
  <a
    href="https://en.wikipedia.org/wiki/Pembrolizumab"
    class="hover:text-teal-300">Pembrolizumab</a
  >
  |
  <a
    href="https://en.wikipedia.org/wiki/Gemcitabine"
    class="hover:text-teal-300">Gemcitabine</a
  >
  |
  <a
    href="https://en.wikipedia.org/wiki/Vinorelbine"
    class="hover:text-teal-300">Vinorelbine</a
  >
  |
  <a
    href="https://en.wikipedia.org/?title=Liposomal_doxorubicin"
    class="hover:text-teal-300">Liposomal Doxorubicin</a
  >
</h4>
<aside class="italic text-sm text-zinc-300 mb-2">
  <p>Combined immunotherapy and chemotherapy.</p>
  <p>
    It works by boosting the immune system’s anti-cancer response by blocking
    “off signals” on your <a
      href="https://en.wikipedia.org/wiki/T_cell"
      class="text-teal-300">T-cells</a
    >
  </p>
  <p>
    Treatment is 4 cycles. A cycle consists of 1 dose of Pembro-GVD, a dose of
    GVD, a week off.
  </p>
</aside>
<ul class="ml-4 mb-4">
  <li>
    <strong class="text-zinc-500">11.15 </strong>First Pembro-GVD Infusion. Bit
    of pain of Doxorubicin at the start.
  </li>
  <li>
    <strong class="text-zinc-500">11.20 </strong>GVD infusion. Really tough, and
    low blood count and high liver enzyme readings delayed my next chemo by a
    week.
  </li>
  <li>
    <strong class="text-zinc-500">12.11 </strong>Pembro-GVD infusion. ~10% lower
    dose to adjust for last time.
  </li>
  <li>
    <strong class="text-zinc-500">12.18 </strong>GVD infusion. Dose lowered
    slightly again. Resulted in a fever of 103°F and a short stay at the
    hospital.
  </li>
  <li>
    <strong class="text-zinc-500">01.02 </strong>Pembro-GVD infusion. Following
    positive PET-CT results this is my final infusion.
  </li>
</ul>

<h3 class="text-md font-bold hover:text-teal-300">
  <a
    href="https://en.wikipedia.org/wiki/Hematopoietic_stem_cell_transplantation#Autologous"
    >Autologous Stem-Cell Transplant</a
  >
</h3>
<aside class="italic text-sm text-zinc-300 mb-2">
  <p>
    <a
      href="https://www.fredhutch.org/en/patient-care/treatments/blood-marrow-transplant.html"
      class="text-teal-300"
      >Autologous Hematopoietic Stem Cell Transplantation</a
    > is a procedure where a patient's own stem cells are collected, stored, and
    then reinfused after intensive chemotherapy to help regenerate healthy blood
    cells and restore the immune system.
  </p>
</aside>

<ul class="ml-4 mb-10">
  <li>
    <strong class="text-zinc-500">01.16 </strong>Begin testing and orientation
    for transplant.
  </li>
  <li>
    <strong class="text-zinc-500">02.03 </strong>G-CSF
    <a href="https://en.wikipedia.org/wiki/Filgrastim" class="text-teal-300"
      >Neupogen</a
    > injections to boost stem-cell count.
  </li>
  <li>
    <strong class="text-zinc-500">02.05 </strong>Hickman line installation.
  </li>
  <li>
    <strong class="text-zinc-500">02.06 </strong><a
      href="https://en.wikipedia.org/wiki/Apheresis"
      class="text-teal-300">Peripheral Blood Stem Cell Apheresis</a
    >: the process of of collecting stem-cells from my blood. Stem-cells are
    then frozen and stored for later transfusion.
  </li>
  <li>
    <strong class="text-zinc-500">02.14 </strong>Hospitalized for 6 days of
    <a
      href="https://www.chemoexperts.com/beam-carmustine-etoposide-cytarabine-melphalan.html"
      class="text-teal-300">BEAM</a
    >
    chemotherapy in order to destroy any remaining cancer cells, as well as destroy
    or supress my immune system entirely.
    <button
      class="ml-2 align-middle rounded-sm text-xs font-mono px-2 py-0.5 bg-teal-500 text-zinc-900"
      on:click={() => (transplantSublist = !transplantSublist)}
    >
      {transplantSublist ? "Hide Details" : "Show Details"}
    </button>
  </li>
  {#if transplantSublist}
    <li class="ml-4">
      <table class="table-auto w-full mt-2 font-mono">
        <thead class="text-xs bg-zinc-900">
          <tr>
            <th class="px-4 py-2">Countdown</th>
            <th class="px-4 py-2">Date</th>
            <th class="px-4 py-2">Treatment</th>
          </tr>
        </thead>
        <tbody class="text-sm divide-y divide-zinc-900">
          <tr>
            <td class="px-4 py-2">Day -7</td>
            <th class="px-4 py-2">02.14 (We)</th>
            <td class="px-4 py-2"
              ><a
                href="https://en.wikipedia.org/wiki/Carmustine"
                class="text-teal-300">BCNU</a
              ></td
            >
          </tr>
          <tr>
            <td class="px-4 py-2">Day -6</td>
            <th class="px-4 py-2">02.15 (Th)</th>
            <td class="px-4 py-2"
              ><a
                href="https://en.wikipedia.org/wiki/Etoposide"
                class="text-teal-300">Etoposide</a
              >
              &
              <a
                href="https://en.wikipedia.org/wiki/Cytarabine"
                class="text-teal-300">AraC</a
              ></td
            >
          </tr>
          <tr>
            <td class="px-4 py-2">Day -5</td>
            <th class="px-4 py-2">02.16 (Fr)</th>
            <td class="px-4 py-2"
              ><a
                href="https://en.wikipedia.org/wiki/Etoposide"
                class="text-teal-300">Etoposide</a
              >
              &
              <a
                href="https://en.wikipedia.org/wiki/Cytarabine"
                class="text-teal-300">AraC</a
              ></td
            >
          </tr>
          <tr>
            <td class="px-4 py-2">Day -4</td>
            <th class="px-4 py-2">02.17 (Sa)</th>
            <td class="px-4 py-2"
              ><a
                href="https://en.wikipedia.org/wiki/Etoposide"
                class="text-teal-300">Etoposide</a
              >
              &
              <a
                href="https://en.wikipedia.org/wiki/Cytarabine"
                class="text-teal-300">AraC</a
              ></td
            >
          </tr>
          <tr>
            <td class="px-4 py-2">Day -3</td>
            <th class="px-4 py-2">02.18 (Su)</th>
            <td class="px-4 py-2"
              ><a
                href="https://en.wikipedia.org/wiki/Etoposide"
                class="text-teal-300">Etoposide</a
              >
              &
              <a
                href="https://en.wikipedia.org/wiki/Cytarabine"
                class="text-teal-300">AraC</a
              ></td
            >
          </tr>
          <tr>
            <td class="px-4 py-2">Day -2</td>
            <th class="px-4 py-2">02.19 (Mo)</th>
            <td class="px-4 py-2"
              ><a
                href="https://en.wikipedia.org/wiki/Melphalan"
                class="text-teal-300">Melaphalan</a
              ></td
            >
          </tr>
          <tr>
            <td class="px-4 py-2">Day -1</td>
            <th class="px-4 py-2">02.20 (Tu)</th>
            <td class="px-4 py-2">Rest</td>
          </tr>
          <tr>
            <td class="px-4 py-2">Day 0</td>
            <th class="px-4 py-2">02.21 (We)</th>
            <td class="px-4 py-2">Stem-cell infusion</td>
          </tr>
        </tbody>
      </table>
    </li>
  {/if}
  <li>
    <strong class="text-zinc-500">02.21 </strong>Transfusion of collected
    stemcells to replace destroyed bone-marrow and restore the bodies ability to
    make healthy blood cells again.
  </li>
  <li>
    <strong class="text-zinc-500">02.29 </strong><a
      href="https://en.wikipedia.org/wiki/Neutrophil"
      class="text-teal-300">Neutriphil</a
    > count bounced back from 0 to 40uL. By 03.02 they were at 4280uL, signaling
    successful engraftment.
  </li>
  <li>
    <strong class="text-zinc-500">03.06 </strong>Discharged from the hospital.
  </li>
  <li>
    <strong class="text-zinc-500">03.20 </strong>30 days since transplant, daily
    clinic visits should stop.
  </li>
</ul>

<h2 class="text-xl font-bold mb-4">Resting Heart Rate</h2>
<a href={heartImg}>
  <img
    src={heartImg}
    class="rounded-lg"
    alt="Chart showing changes in my resting heart rate as a result of DVC compression and subsequent chemo"
  />
</a>
<p class="mb-10 text-xs text-zinc-300">
  A side effect of my Superior Vena Cava compression was the elevation of my
  resting heart rate (occasionally hitting 130bpm.) You can see the immediate
  impact of chemo therapy here.
</p>

<h2 class="text-xl font-bold mb-4">PET-CT Findings</h2>
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
