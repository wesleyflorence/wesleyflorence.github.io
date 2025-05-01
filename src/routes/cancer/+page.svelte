<script lang="ts">
  let transplantSublist = false; // State to manage visibility of the sublist
</script>

<svelte:head>
  <title>wesflorence :: cancer db</title>
</svelte:head>
<h1 class="text-4xl font-bold">Cancer</h1>
<p class="mb-5 font-mono">A dashboard for tracking health.</p>

<p class="mb-2">
  As of 04.23.25, I am in remission following treatment for recurrent disease. I am currently 
  undergoing an allogeneic stem cell transplant with a donor and will need approximately 100 days 
  for engraftment and 9 months or so for full immune system recovery.
</p>

<p class="mb-8">
  I created this dashboard to mindfully keep track of my treatment journey. The timeline below 
  documents both my initial diagnosis and treatment in 2023-2024, as well as the recurrence 
  and subsequent treatment in 2024-2025. Thanks for following along.
</p>

<div class="bg-zinc-900 shadow overflow-hidden rounded-lg mb-10">
  <div class="px-4 py-5 sm:px-6">
    <h3 class="text-lg leading-6 font-medium">Diagnosis</h3>
    <p class="mt-1 text-sm text-zinc-300">
      Stage IIB Classic <a
        href="https://en.wikipedia.org/wiki/Hodgkin_lymphoma"
        class="text-teal-300">Hodgkin's Disease</a
      >, Nodular Sclerosing type with
      <a
        href="https://en.wikipedia.org/wiki/Superior_vena_cava"
        class="text-teal-300">Superior Vena Cava</a
      > compression.
    </p>
  </div>

  <div class="px-4 pb-5 sm:px-6">
    <h3 class="text-lg leading-6 font-medium">Status</h3>
    <p class="mt-1 text-sm text-zinc-300">
      Remission after treatment for recurrent disease. Currently undergoing allogeneic stem cell transplant.
    </p>
  </div>

  <div class="px-4 pb-5 sm:px-6">
    <h3 class="text-lg leading-6 font-medium">Next Steps</h3>
    <p class="mt-1 text-sm text-zinc-300">
      Approximately 100 days of recovery for engraftment following allogeneic stem cell transplant. Monitoring for GVHD and other transplant-related complications.
    </p>
  </div>
</div>

<h2 class="text-xl font-bold mb-2">Narrative History</h2>
<p class="mb-2">
  In July 2023, I sought medical attention for a persistent, dry cough. Over time,
  additional symptoms emerged, including fatigue, vomiting, and facial swelling.
  These were later understood to be related to a large chest tumor, diagnosed as
  Hodgkin Lymphoma. The tumor was complicating blood flow back to my heart and
  causing many of my symptoms by pressing against my <a
    href="https://en.wikipedia.org/wiki/Phrenic_nerve"
    class="text-teal-300">phrenic nerve</a
  >.
</p>
<p class="mb-2">
  Treatment began with ABVD chemotherapy administered through IV due to the risks posed by my heart condition. 
  Once the tumor shrank, I was able to receive chemo via a port. A PET scan in October revealed that my cancer 
  was proving resistant to ABVD. I started Pembro-GVD, a combined immunotherapy and chemotherapy in response.
</p>
<p class="mb-2">
  A PET scan in December revealed a complete response, meaning the cancerous
  activity in the tumor decreased dramatically. To address concerns about potential recurrence and 
  wipe out any remaining cancer cells, I received a stem-cell transplant.
</p>
<p class="mb-8">
  The autologous transplant was completed successfully, and I entered remission in April 2024. 
  However, a follow-up PET-CT scan on 09.23.24 revealed disease recurrence. 
  I underwent treatment with Brentuximab + Nivolumab immunotherapy, followed by proton radiation 
  therapy. After achieving a complete response, I proceeded to an allogeneic (donor) stem cell 
  transplant in May 2025, which I am currently recovering from.
</p>

<h2 class="text-xl font-bold mb-2">Treatment Timeline</h2>

<h3 class="text-md font-bold">Diagnosis</h3>
<aside class="italic text-sm text-zinc-300 mb-2">
  <p>Summer 2023 initial findings.</p>
</aside>
<ul class="ml-4 mb-4">
  <li>
    <strong class="text-zinc-500">07.24.23</strong> Discovery of 15.7cm mediastinal
    mass via Chest X-Ray.
  </li>
  <li>
    <strong class="text-zinc-500">07.25.23</strong> CT scan confirms tumor extending
    into right chest, encasing SVC.
  </li>
  <li>
    <strong class="text-zinc-500">08.02.23</strong> CT-guided biopsy revealing atypical
    lymphohistiocytic infiltrate.
  </li>
  <li>
    <strong class="text-zinc-500">08.10.23</strong> Initial PET scan reveals extensive
    disease with high metabolic activity.
  </li>
  <li>
    <strong class="text-zinc-500">08.14.23</strong> Echocardiogram showing LVEF 65-70%
    with SVC collapse.
  </li>
  <li>
    <strong class="text-zinc-500">08.17.23</strong> Chest Biopsy to confirms Nodular
    Sclerosing Hodgkin Lymphoma.
  </li>
</ul>

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
    <strong class="text-zinc-500">08.21.23</strong> Initiation of ABVD
    chemotherapy. First infusion done via intravenous injection.
  </li>
  <li>
    <strong class="text-zinc-500">09.05.23</strong> Second IV infusion but I had
    significant pain in my arm due to Dacarbazine.
  </li>
  <li>
    <strong class="text-zinc-500">09.11.23</strong> Port placement for chemotherapy
    administration.
  </li>
  <li>
    <strong class="text-zinc-500">09.18.23</strong> First infusion with the
    <a href="https://en.wikipedia.org/wiki/Port_(medical)" class="text-teal-300"
      >Port</a
    >, much easier.
  </li>
  <li><strong class="text-zinc-500">10.02.23</strong> Routine infusion.</li>
  <li>
    <strong class="text-zinc-500">10.23.23</strong> Restaging PET scan post 2
    cycles of ABVD shows response with decreased mass size and metabolic
    activity but remains Deauville score 5 prompting reassessment of treatment.
    Treating as refractory.
  </li>
  <li>
    <strong class="text-zinc-500">10.24.23</strong> Infusion was delayed due to PET
    scan scheduling.
  </li>
  <li>
    <strong class="text-zinc-500">11.13.23</strong> CT-guided biopsy confirms persistent
    presence of Hodgkin cells and demonstrates the cancer's resistance to ABVD.
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
    It works by boosting the immune system's anti-cancer response by blocking
    "off signals" on your <a
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
    <strong class="text-zinc-500">11.15.23</strong> Initiation of Pembro-GVD
    chemotherapy. First infusion with a bit of pain from Doxorubicin at the
    start.
  </li>
  <li>
    <strong class="text-zinc-500">11.20.23</strong> GVD infusion. Really tough, and
    low blood count and high liver enzyme readings delayed my next chemo by a
    week.
  </li>
  <li>
    <strong class="text-zinc-500">12.11.23</strong> Pembro-GVD infusion. ~10% lower
    dose to adjust for last time.
  </li>
  <li>
    <strong class="text-zinc-500">12.18.23</strong> GVD infusion. Dose lowered
    slightly again.
  </li>
  <li>
    <strong class="text-zinc-500">12.22.23</strong> Hospitalized for 4 days with a
    <a
      href="https://en.wikipedia.org/wiki/Febrile_neutropenia"
      class="text-teal-300">neutropenic fever</a
    > peaking at 103°F.
  </li>
  <li>
    <strong class="text-zinc-500">12.28.23</strong> PET scan shows a "Complete
    Response" under new treatments, prompting final chemo dose and proceeding
    onto Stem-Cell Transplant.
  </li>
  <li>
    <strong class="text-zinc-500">01.02.24</strong> Pembro-GVD infusion. Following
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

<ul class="ml-4 mb-4">
  <li>
    <strong class="text-zinc-500">01.16.24</strong> Begin testing and orientation
    for transplant.
  </li>
  <li>
    <strong class="text-zinc-500">02.03.24</strong> G-CSF
    <a href="https://en.wikipedia.org/wiki/Filgrastim" class="text-teal-300"
      >Neupogen</a
    > injections to boost stem-cell count.
  </li>
  <li>
    <strong class="text-zinc-500">02.05.24</strong> Hickman line installation.
  </li>
  <li>
    <strong class="text-zinc-500">02.06.24</strong> Begining of stem-cell
    transplant.
    <a href="https://en.wikipedia.org/wiki/Apheresis" class="text-teal-300"
      >Peripheral Blood Stem Cell Apheresis</a
    >: the process of collecting stem cells from my blood. Stem cells are then
    frozen and stored for later transfusion.
  </li>
  <li>
    <strong class="text-zinc-500">02.14.24</strong> Hospitalized for 6 days of
    <a
      href="https://www.chemoexperts.com/beam-carmustine-etoposide-cytarabine-melphalan.html"
      class="text-teal-300">BEAM</a
    >
    chemotherapy in order to destroy any remaining cancer cells, as well as destroy
    or suppress my immune system entirely.
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
            <th class="px-4 py-2">02.14.24 (We)</th>
            <td class="px-4 py-2"
              ><a
                href="https://en.wikipedia.org/wiki/Carmustine"
                class="text-teal-300">BCNU</a
              ></td
            >
          </tr>
          <tr>
            <td class="px-4 py-2">Day -6</td>
            <th class="px-4 py-2">02.15.24 (Th)</th>
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
            <th class="px-4 py-2">02.16.24 (Fr)</th>
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
            <th class="px-4 py-2">02.17.24 (Sa)</th>
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
            <th class="px-4 py-2">02.18.24 (Su)</th>
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
            <th class="px-4 py-2">02.19.24 (Mo)</th>
            <td class="px-4 py-2"
              ><a
                href="https://en.wikipedia.org/wiki/Melphalan"
                class="text-teal-300">Melaphalan</a
              ></td
            >
          </tr>
          <tr>
            <td class="px-4 py-2">Day -1</td>
            <th class="px-4 py-2">02.20.24 (Tu)</th>
            <td class="px-4 py-2">Rest</td>
          </tr>
          <tr>
            <td class="px-4 py-2">Day 0</td>
            <th class="px-4 py-2">02.21.24 (We)</th>
            <td class="px-4 py-2">Stem-cell infusion</td>
          </tr>
        </tbody>
      </table>
    </li>
  {/if}
  <li>
    <strong class="text-zinc-500">02.21.24</strong> Transfusion of collected stem
    cells to replace destroyed bone marrow and restore the body's ability to
    make healthy blood cells again.
  </li>
  <li>
    <strong class="text-zinc-500">02.29.24</strong> <a
      href="https://en.wikipedia.org/wiki/Neutrophil"
      class="text-teal-300">Neutrophil</a
    > count bounced back from 0 to 40uL. By 03.02.24 they were at 4280uL, signaling
    successful engraftment.
  </li>
  <li>
    <strong class="text-zinc-500">03.06.24</strong> Discharged from the hospital.
  </li>
  <li>
    <strong class="text-zinc-500">03.20.24</strong> 30 days since transplant, daily
    clinic visits stop.
  </li>
  <li>
    <strong class="text-zinc-500">03.22.24</strong> Re-staging PET scan confirms no
    remaining disease.
  </li>
  <li>
    <strong class="text-zinc-500">03.27.24</strong> Removal of Hickman line.
  </li>
  <li>
    <strong class="text-zinc-500">04.05.24</strong> Discharge from transplant
    treatment.
  </li>
</ul>

<h3 class="text-md font-bold">Disease Recurrence and Second-Line Treatment</h3>
<h4 class="text-xs font-mono">
  <a href="https://en.wikipedia.org/wiki/Brentuximab_vedotin" class="hover:text-teal-300">Brentuximab</a> | 
  <a href="https://en.wikipedia.org/wiki/Nivolumab" class="hover:text-teal-300">Nivolumab</a>
</h4>
<aside class="italic text-sm text-zinc-300 mb-2">
  <p>Brentuximab is an antibody-drug conjugate targeting CD30+ cells. Nivolumab is a PD-1 immune checkpoint inhibitor.</p>
</aside>
<ul class="ml-4 mb-4">
  <li>
    <strong class="text-zinc-500">09.23.24</strong> PET-CT scan shows disease recurrence, requiring reassessment of treatment plan.
  </li>
  <li>
    <strong class="text-zinc-500">10.21.24</strong> CT-guided lung biopsy confirms recurrent Hodgkin lymphoma.
  </li>
  <li>
    <strong class="text-zinc-500">11.19.24</strong> First Brentuximab + Nivolumab infusion.
  </li>
  <li>
    <strong class="text-zinc-500">12.10.24</strong> Second Brentuximab + Nivolumab infusion.
  </li>
  <li>
    <strong class="text-zinc-500">12.31.24</strong> Third Brentuximab + Nivolumab infusion.
  </li>
  <li>
    <strong class="text-zinc-500">01.21.25</strong> Fourth Brentuximab + Nivolumab infusion.
  </li>
  <li>
    <strong class="text-zinc-500">02.11.25</strong> PET-CT confirms complete response (no metabolic disease).
  </li>
</ul>

<h3 class="text-md font-bold">Proton Radiation Therapy</h3>
<aside class="italic text-sm text-zinc-300 mb-2">
  <p>Advanced radiation treatment using <a href="https://en.wikipedia.org/wiki/Proton_therapy" class="text-teal-300">proton beams</a> that can precisely target the mediastinal area and lung while minimizing exposure to nearby critical organs like the heart, healthy lung tissue, and esophagus. This precision reduces long-term radiation side effects compared to conventional radiation therapy.</p>
</aside>
<ul class="ml-4 mb-4">
  <li>
    <strong class="text-zinc-500">03.06.25</strong> Begin proton radiation therapy of the mediastinum and lung.
  </li>
  <li>
    <strong class="text-zinc-500">03.07.25 - 03.28.25</strong> Completed 15 total doses of proton radiation (weekdays only, skipped weekends, March 19-20, and March 24).
  </li>
</ul>

<h3 class="text-md font-bold hover:text-teal-300">
  <a href="https://en.wikipedia.org/wiki/Allogeneic_hematopoietic_stem-cell_transplantation">Allogeneic Stem-Cell Transplant (Donor)</a>
</h3>
<aside class="italic text-sm text-zinc-300 mb-2">
  <p>
    Allogeneic transplant uses healthy stem cells from a donor to replace and effectively transplant a new immune system. 
    RIC (Reduced-Intensity Conditioning) is a less aggressive pre-transplant treatment.
  </p>
  <p>
    Unlike my first transplant, this approach focuses less on destroying cancer with high-dose chemotherapy. 
    Instead, it leverages the <a href="https://en.wikipedia.org/wiki/Graft-versus-tumor_effect" class="text-teal-300">graft-versus-lymphoma effect</a> 
    to achieve a more durable remission, given my disease's repeated favorable response to various immune therapies rather than conventional chemotherapy.
  </p>
  <p>
    I have a "perfect" 12/12 <a href="https://en.wikipedia.org/wiki/Human_leukocyte_antigen" class="text-teal-300">HLA</a> match donor 
    (who is also a blood type match), though not a sibling.
  </p>
</aside>
<ul class="ml-4 mb-10">
  <li>
    <strong class="text-zinc-500">04.15.25</strong> Admitted to allogeneic stem cell transplant clinic to begin testing process.
  </li>
  <li>
    <strong class="text-zinc-500">04.23.25</strong> PET-CT confirms remission/complete response (no active disease).
  </li>
  <li>
    <strong class="text-zinc-500">05.03.25</strong> Started <a href="https://en.wikipedia.org/wiki/Fludarabine" class="text-teal-300">Fludarabine</a> as part of RIC allo stem cell transplant (outpatient).
  </li>
  <li>
    <strong class="text-zinc-500">05.04.25</strong> Second dose of Fludarabine.
  </li>
  <li>
    <strong class="text-zinc-500">05.05.25</strong> Third dose of Fludarabine.
  </li>
  <li>
    <strong class="text-zinc-500">05.07.25</strong> Total body irradiation (with lung blocks).
  </li>
  <li>
    <strong class="text-zinc-500">05.07.25</strong> Stem cell transplant from donor completed.
  </li>
  <li>
    <strong class="text-zinc-500">05.10.25</strong> Hospital admission and first dose of <a href="https://en.wikipedia.org/wiki/Cyclophosphamide" class="text-teal-300">Cyclophosphamide</a> for <a href="https://en.wikipedia.org/wiki/Graft-versus-host_disease" class="text-teal-300">GVHD</a> prevention.
  </li>
  <li>
    <strong class="text-zinc-500">05.11.25</strong> Second dose of Cyclophosphamide.
  </li>
</ul>
