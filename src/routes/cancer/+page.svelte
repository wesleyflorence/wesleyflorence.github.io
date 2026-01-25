<script lang="ts">
  let transplantSublist = $state(false);
</script>

<svelte:head>
  <title>wesflorence :: cancer db</title>
</svelte:head>

<div class="py-8 max-w-4xl">
  <h1 class="text-4xl font-bold mb-2">Cancer</h1>
  <p class="text-zinc-400 mb-8">A dashboard for tracking health.</p>

  <p class="text-zinc-300 mb-2">
    As of 04.23.25, I am in remission following treatment for recurrent disease. I am currently
    undergoing an allogeneic stem cell transplant with a donor and will need approximately 100 days
    for engraftment and 9 months or so for full immune system recovery.
  </p>

  <p class="text-zinc-300 mb-8">
    I created this dashboard to mindfully keep track of my treatment journey. The timeline below
    documents both my initial diagnosis and treatment in 2023–2024, as well as the recurrence
    and subsequent treatment in 2024–2025. Thanks for following along.
  </p>

  <!-- Status Cards -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-10">
    <div class="p-3 md:p-4 border border-zinc-800">
      <h3 class="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">Diagnosis</h3>
      <p class="text-sm text-zinc-300">
        Stage IIB Classic <a
          href="https://en.wikipedia.org/wiki/Hodgkin_lymphoma"
          class="underline hover:text-white">Hodgkin's Disease</a
        >, Nodular Sclerosing type with
        <a
          href="https://en.wikipedia.org/wiki/Superior_vena_cava"
          class="underline hover:text-white">Superior Vena Cava</a
        > compression.
      </p>
    </div>

    <div class="p-3 md:p-4 border border-zinc-800">
      <h3 class="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">Status</h3>
      <p class="text-sm text-zinc-300">
        Remission after treatment for recurrent disease. Currently undergoing allogeneic stem cell transplant.
      </p>
    </div>

    <div class="p-3 md:p-4 border border-zinc-800">
      <h3 class="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">Next Steps</h3>
      <p class="text-sm text-zinc-300">
        Approximately 100 days of recovery for engraftment following allogeneic stem cell transplant. Monitoring for GVHD and other transplant-related complications.
      </p>
    </div>
  </div>

  <h2 class="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-4">Narrative History</h2>
  <p class="text-zinc-300 mb-2">
    In July 2023, I sought medical attention for a persistent, dry cough. Over time,
    additional symptoms emerged, including fatigue, vomiting, and facial swelling.
    These were later understood to be related to a large chest tumor, diagnosed as
    Hodgkin Lymphoma. The tumor was complicating blood flow back to my heart and
    causing many of my symptoms by pressing against my <a
      href="https://en.wikipedia.org/wiki/Phrenic_nerve"
      class="underline hover:text-white">phrenic nerve</a
    >.
  </p>
  <p class="text-zinc-300 mb-2">
    Treatment began with ABVD chemotherapy administered through IV due to the risks posed by my heart condition.
    Once the tumor shrank, I was able to receive chemo via a port. A PET scan in October revealed that my cancer
    was proving resistant to ABVD. I started Pembro-GVD, a combined immunotherapy and chemotherapy in response.
  </p>
  <p class="text-zinc-300 mb-2">
    A PET scan in December revealed a complete response, meaning the cancerous
    activity in the tumor decreased dramatically. To address concerns about potential recurrence and
    wipe out any remaining cancer cells, I received a stem-cell transplant.
  </p>
  <p class="text-zinc-300 mb-8">
    The autologous transplant was completed successfully, and I entered remission in April 2024.
    However, a follow-up PET-CT scan on 09.23.24 revealed disease recurrence.
    I underwent treatment with Brentuximab + Nivolumab immunotherapy, followed by proton radiation
    therapy. After achieving a complete response, I proceeded to an allogeneic (donor) stem cell
    transplant in May 2025, which I am currently recovering from.
  </p>

  <h2 class="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-6">Treatment Timeline</h2>

  <!-- Diagnosis Section -->
  <div class="mb-6 p-3 md:p-4 border border-zinc-800">
    <h3 class="text-base font-medium text-white mb-1">Diagnosis</h3>
    <p class="text-xs text-zinc-500 italic mb-3">Summer 2023 initial findings.</p>
    <ul class="space-y-1.5 text-sm text-zinc-300">
      <li>
        <span class="text-xs text-zinc-500">07.24.23</span> — Discovery of 15.7cm mediastinal
        mass via Chest X-Ray.
      </li>
      <li>
        <span class="text-xs text-zinc-500">07.25.23</span> — CT scan confirms tumor extending
        into right chest, encasing SVC.
      </li>
      <li>
        <span class="text-xs text-zinc-500">08.02.23</span> — CT-guided biopsy revealing atypical
        lymphohistiocytic infiltrate.
      </li>
      <li>
        <span class="text-xs text-zinc-500">08.10.23</span> — Initial PET scan reveals extensive
        disease with high metabolic activity.
      </li>
      <li>
        <span class="text-xs text-zinc-500">08.14.23</span> — Echocardiogram showing LVEF 65-70%
        with SVC collapse.
      </li>
      <li>
        <span class="text-xs text-zinc-500">08.17.23</span> — Chest Biopsy confirms Nodular
        Sclerosing Hodgkin Lymphoma.
      </li>
    </ul>
  </div>

  <!-- ABVD Section -->
  <div class="mb-6 p-3 md:p-4 border border-zinc-800">
    <h3 class="text-base font-medium text-white mb-1">
      <a href="https://en.wikipedia.org/wiki/ABVD" class="hover:text-zinc-300">ABVD</a>
    </h3>
    <p class="text-xs font-mono text-zinc-500 mb-2">
      <a href="https://en.wikipedia.org/wiki/Doxorubicin" class="hover:text-zinc-300">Adriamycin</a> |
      <a href="https://en.wikipedia.org/wiki/Bleomycin" class="hover:text-zinc-300">Bleomycin</a> |
      <a href="https://en.wikipedia.org/wiki/Vincristine" class="hover:text-zinc-300">Vincristine</a> |
      <a href="https://en.wikipedia.org/wiki/Dacarbazine" class="hover:text-zinc-300">Dacarbazine</a>
    </p>
    <p class="text-xs text-zinc-500 italic mb-3">
      Chemotherapy regimen used in the first-line treatment of Hodgkin lymphoma.
      <a href="https://www.google.com/search?q=vinblastine+shortage" class="underline hover:text-zinc-300">There is an ongoing shortage of Vinblastine</a> so my treatment has used Vincristine as a substitute.
    </p>
    <ul class="space-y-1.5 text-sm text-zinc-300">
      <li>
        <span class="text-xs text-zinc-500">08.21.23</span> — Initiation of ABVD
        chemotherapy. First infusion done via intravenous injection.
      </li>
      <li>
        <span class="text-xs text-zinc-500">09.05.23</span> — Second IV infusion but I had
        significant pain in my arm due to Dacarbazine.
      </li>
      <li>
        <span class="text-xs text-zinc-500">09.11.23</span> — Port placement for chemotherapy
        administration.
      </li>
      <li>
        <span class="text-xs text-zinc-500">09.18.23</span> — First infusion with the
        <a href="https://en.wikipedia.org/wiki/Port_(medical)" class="underline hover:text-white">Port</a>, much easier.
      </li>
      <li><span class="text-xs text-zinc-500">10.02.23</span> — Routine infusion.</li>
      <li>
        <span class="text-xs text-zinc-500">10.23.23</span> — Restaging PET scan post 2
        cycles of ABVD shows response with decreased mass size and metabolic
        activity but remains Deauville score 5 prompting reassessment of treatment.
        Treating as refractory.
      </li>
      <li>
        <span class="text-xs text-zinc-500">10.24.23</span> — Infusion was delayed due to PET
        scan scheduling.
      </li>
      <li>
        <span class="text-xs text-zinc-500">11.13.23</span> — CT-guided biopsy confirms persistent
        presence of Hodgkin cells and demonstrates the cancer's resistance to ABVD.
      </li>
    </ul>
  </div>

  <!-- Pembro-GVD Section -->
  <div class="mb-6 p-3 md:p-4 border border-zinc-800">
    <h3 class="text-base font-medium text-white mb-1">
      <a href="https://lymphomahub.com/medical-information/efficacy-and-safety-of-pembro-gvd-as-second-line-therapy-for-patients-with-rr-chl" class="hover:text-zinc-300">Pembro-GVD</a>
    </h3>
    <p class="text-xs font-mono text-zinc-500 mb-2">
      <a href="https://en.wikipedia.org/wiki/Pembrolizumab" class="hover:text-zinc-300">Pembrolizumab</a> |
      <a href="https://en.wikipedia.org/wiki/Gemcitabine" class="hover:text-zinc-300">Gemcitabine</a> |
      <a href="https://en.wikipedia.org/wiki/Vinorelbine" class="hover:text-zinc-300">Vinorelbine</a> |
      <a href="https://en.wikipedia.org/?title=Liposomal_doxorubicin" class="hover:text-zinc-300">Liposomal Doxorubicin</a>
    </p>
    <div class="text-xs text-zinc-500 italic mb-3 space-y-1">
      <p>Combined immunotherapy and chemotherapy.</p>
      <p>
        It works by boosting the immune system's anti-cancer response by blocking
        "off signals" on your <a href="https://en.wikipedia.org/wiki/T_cell" class="underline hover:text-zinc-300">T-cells</a>.
      </p>
      <p>
        Treatment is 4 cycles. A cycle consists of 1 dose of Pembro-GVD, a dose of
        GVD, a week off.
      </p>
    </div>
    <ul class="space-y-1.5 text-sm text-zinc-300">
      <li>
        <span class="text-xs text-zinc-500">11.15.23</span> — Initiation of Pembro-GVD
        chemotherapy. First infusion with a bit of pain from Doxorubicin at the
        start.
      </li>
      <li>
        <span class="text-xs text-zinc-500">11.20.23</span> — GVD infusion. Really tough, and
        low blood count and high liver enzyme readings delayed my next chemo by a
        week.
      </li>
      <li>
        <span class="text-xs text-zinc-500">12.11.23</span> — Pembro-GVD infusion. ~10% lower
        dose to adjust for last time.
      </li>
      <li>
        <span class="text-xs text-zinc-500">12.18.23</span> — GVD infusion. Dose lowered
        slightly again.
      </li>
      <li>
        <span class="text-xs text-zinc-500">12.22.23</span> — Hospitalized for 4 days with a
        <a href="https://en.wikipedia.org/wiki/Febrile_neutropenia" class="underline hover:text-white">neutropenic fever</a> peaking at 103°F.
      </li>
      <li>
        <span class="text-xs text-zinc-500">12.28.23</span> — PET scan shows a "Complete
        Response" under new treatments, prompting final chemo dose and proceeding
        onto Stem-Cell Transplant.
      </li>
      <li>
        <span class="text-xs text-zinc-500">01.02.24</span> — Pembro-GVD infusion. Following
        positive PET-CT results this is my final infusion.
      </li>
    </ul>
  </div>

  <!-- Autologous Stem-Cell Transplant Section -->
  <div class="mb-6 p-3 md:p-4 border border-zinc-800">
    <h3 class="text-base font-medium text-white mb-1">
      <a href="https://en.wikipedia.org/wiki/Hematopoietic_stem_cell_transplantation#Autologous" class="hover:text-zinc-300">Autologous Stem-Cell Transplant</a>
    </h3>
    <div class="text-xs text-zinc-500 italic mb-3">
      <p>
        <a href="https://www.fredhutch.org/en/patient-care/treatments/blood-marrow-transplant.html" class="underline hover:text-zinc-300">Autologous Hematopoietic Stem Cell Transplantation</a> is a procedure where a patient's own stem cells are collected, stored, and
        then reinfused after intensive chemotherapy to help regenerate healthy blood
        cells and restore the immune system.
      </p>
    </div>
    <ul class="space-y-1.5 text-sm text-zinc-300">
      <li>
        <span class="text-xs text-zinc-500">01.16.24</span> — Begin testing and orientation
        for transplant.
      </li>
      <li>
        <span class="text-xs text-zinc-500">02.03.24</span> — G-CSF
        <a href="https://en.wikipedia.org/wiki/Filgrastim" class="underline hover:text-white">Neupogen</a> injections to boost stem-cell count.
      </li>
      <li>
        <span class="text-xs text-zinc-500">02.05.24</span> — Hickman line installation.
      </li>
      <li>
        <span class="text-xs text-zinc-500">02.06.24</span> — Beginning of stem-cell
        transplant.
        <a href="https://en.wikipedia.org/wiki/Apheresis" class="underline hover:text-white">Peripheral Blood Stem Cell Apheresis</a>: the process of collecting stem cells from my blood. Stem cells are then
        frozen and stored for later transfusion.
      </li>
      <li>
        <span class="text-xs text-zinc-500">02.14.24</span> — Hospitalized for 6 days of
        <a href="https://www.chemoexperts.com/beam-carmustine-etoposide-cytarabine-melphalan.html" class="underline hover:text-white">BEAM</a>
        chemotherapy in order to destroy any remaining cancer cells, as well as destroy
        or suppress my immune system entirely.
        <button
          class="ml-2 align-middle text-xs text-zinc-500 hover:text-zinc-300"
          onclick={() => (transplantSublist = !transplantSublist)}
        >
          [{transplantSublist ? "hide" : "details"}]
        </button>
      </li>
      {#if transplantSublist}
        <li class="mt-3 ml-4 p-3 border border-zinc-800 space-y-1.5">
          <div class="flex justify-between text-xs">
            <span class="text-zinc-500">Day -7</span>
            <span class="text-zinc-400">02.14.24</span>
            <a href="https://en.wikipedia.org/wiki/Carmustine" class="underline hover:text-white">BCNU</a>
          </div>
          <div class="flex justify-between text-xs">
            <span class="text-zinc-500">Day -6</span>
            <span class="text-zinc-400">02.15.24</span>
            <span><a href="https://en.wikipedia.org/wiki/Etoposide" class="underline hover:text-white">Etoposide</a> & <a href="https://en.wikipedia.org/wiki/Cytarabine" class="underline hover:text-white">AraC</a></span>
          </div>
          <div class="flex justify-between text-xs">
            <span class="text-zinc-500">Day -5</span>
            <span class="text-zinc-400">02.16.24</span>
            <span><a href="https://en.wikipedia.org/wiki/Etoposide" class="underline hover:text-white">Etoposide</a> & <a href="https://en.wikipedia.org/wiki/Cytarabine" class="underline hover:text-white">AraC</a></span>
          </div>
          <div class="flex justify-between text-xs">
            <span class="text-zinc-500">Day -4</span>
            <span class="text-zinc-400">02.17.24</span>
            <span><a href="https://en.wikipedia.org/wiki/Etoposide" class="underline hover:text-white">Etoposide</a> & <a href="https://en.wikipedia.org/wiki/Cytarabine" class="underline hover:text-white">AraC</a></span>
          </div>
          <div class="flex justify-between text-xs">
            <span class="text-zinc-500">Day -3</span>
            <span class="text-zinc-400">02.18.24</span>
            <span><a href="https://en.wikipedia.org/wiki/Etoposide" class="underline hover:text-white">Etoposide</a> & <a href="https://en.wikipedia.org/wiki/Cytarabine" class="underline hover:text-white">AraC</a></span>
          </div>
          <div class="flex justify-between text-xs">
            <span class="text-zinc-500">Day -2</span>
            <span class="text-zinc-400">02.19.24</span>
            <a href="https://en.wikipedia.org/wiki/Melphalan" class="underline hover:text-white">Melphalan</a>
          </div>
          <div class="flex justify-between text-xs">
            <span class="text-zinc-500">Day -1</span>
            <span class="text-zinc-400">02.20.24</span>
            <span class="text-zinc-500">Rest</span>
          </div>
          <div class="flex justify-between text-xs">
            <span class="text-zinc-500">Day 0</span>
            <span class="text-zinc-400">02.21.24</span>
            <span class="text-white">Stem-cell infusion</span>
          </div>
        </li>
      {/if}
      <li>
        <span class="text-xs text-zinc-500">02.21.24</span> — Transfusion of collected stem
        cells to replace destroyed bone marrow and restore the body's ability to
        make healthy blood cells again.
      </li>
      <li>
        <span class="text-xs text-zinc-500">02.29.24</span> — <a href="https://en.wikipedia.org/wiki/Neutrophil" class="underline hover:text-white">Neutrophil</a> count bounced back from 0 to 40uL. By 03.02.24 they were at 4280uL, signaling
        successful engraftment.
      </li>
      <li>
        <span class="text-xs text-zinc-500">03.06.24</span> — Discharged from the hospital.
      </li>
      <li>
        <span class="text-xs text-zinc-500">03.20.24</span> — 30 days since transplant, daily
        clinic visits stop.
      </li>
      <li>
        <span class="text-xs text-zinc-500">03.22.24</span> — Re-staging PET scan confirms no
        remaining disease.
      </li>
      <li>
        <span class="text-xs text-zinc-500">03.27.24</span> — Removal of Hickman line.
      </li>
      <li>
        <span class="text-xs text-zinc-500">04.05.24</span> — Discharge from transplant
        treatment.
      </li>
    </ul>
  </div>

  <!-- Disease Recurrence Section -->
  <div class="mb-6 p-3 md:p-4 border border-zinc-800">
    <h3 class="text-base font-medium text-white mb-1">Disease Recurrence and Second-Line Treatment</h3>
    <p class="text-xs font-mono text-zinc-500 mb-2">
      <a href="https://en.wikipedia.org/wiki/Brentuximab_vedotin" class="hover:text-zinc-300">Brentuximab</a> |
      <a href="https://en.wikipedia.org/wiki/Nivolumab" class="hover:text-zinc-300">Nivolumab</a>
    </p>
    <p class="text-xs text-zinc-500 italic mb-3">
      Brentuximab is an antibody-drug conjugate targeting CD30+ cells. Nivolumab is a PD-1 immune checkpoint inhibitor.
    </p>
    <ul class="space-y-1.5 text-sm text-zinc-300">
      <li>
        <span class="text-xs text-zinc-500">09.23.24</span> — PET-CT scan shows disease recurrence, requiring reassessment of treatment plan.
      </li>
      <li>
        <span class="text-xs text-zinc-500">10.21.24</span> — CT-guided lung biopsy confirms recurrent Hodgkin lymphoma.
      </li>
      <li>
        <span class="text-xs text-zinc-500">11.19.24</span> — First Brentuximab + Nivolumab infusion.
      </li>
      <li>
        <span class="text-xs text-zinc-500">12.10.24</span> — Second Brentuximab + Nivolumab infusion.
      </li>
      <li>
        <span class="text-xs text-zinc-500">12.31.24</span> — Third Brentuximab + Nivolumab infusion.
      </li>
      <li>
        <span class="text-xs text-zinc-500">01.21.25</span> — Fourth Brentuximab + Nivolumab infusion.
      </li>
      <li>
        <span class="text-xs text-zinc-500">02.11.25</span> — PET-CT confirms complete response (no metabolic disease).
      </li>
    </ul>
  </div>

  <!-- Proton Radiation Section -->
  <div class="mb-6 p-3 md:p-4 border border-zinc-800">
    <h3 class="text-base font-medium text-white mb-1">Proton Radiation Therapy</h3>
    <p class="text-xs text-zinc-500 italic mb-3">
      Advanced radiation treatment using <a href="https://en.wikipedia.org/wiki/Proton_therapy" class="underline hover:text-zinc-300">proton beams</a> that can precisely target the mediastinal area and lung while minimizing exposure to nearby critical organs like the heart, healthy lung tissue, and esophagus. This precision reduces long-term radiation side effects compared to conventional radiation therapy.
    </p>
    <ul class="space-y-1.5 text-sm text-zinc-300">
      <li>
        <span class="text-xs text-zinc-500">03.06.25</span> — Begin proton radiation therapy of the mediastinum and lung.
      </li>
      <li>
        <span class="text-xs text-zinc-500">03.07.25–03.28.25</span> — Completed 15 total doses of proton radiation (weekdays only, skipped weekends, March 19–20, and March 24).
      </li>
    </ul>
  </div>

  <!-- Allogeneic Stem-Cell Transplant Section -->
  <div class="mb-10 p-3 md:p-4 border border-zinc-800">
    <h3 class="text-base font-medium text-white mb-1">
      <a href="https://en.wikipedia.org/wiki/Allogeneic_hematopoietic_stem-cell_transplantation" class="hover:text-zinc-300">Allogeneic Stem-Cell Transplant (Donor)</a>
    </h3>
    <div class="text-xs text-zinc-500 italic mb-3 space-y-1">
      <p>
        Allogeneic transplant uses healthy stem cells from a donor to replace and effectively transplant a new immune system.
        RIC (Reduced-Intensity Conditioning) is a less aggressive pre-transplant treatment.
      </p>
      <p>
        Unlike my first transplant, this approach focuses less on destroying cancer with high-dose chemotherapy.
        Instead, it leverages the <a href="https://en.wikipedia.org/wiki/Graft-versus-tumor_effect" class="underline hover:text-zinc-300">graft-versus-lymphoma effect</a>
        to achieve a more durable remission, given my disease's repeated favorable response to various immune therapies rather than conventional chemotherapy.
      </p>
      <p>
        I have a "perfect" 12/12 <a href="https://en.wikipedia.org/wiki/Human_leukocyte_antigen" class="underline hover:text-zinc-300">HLA</a> match donor
        (who is also a blood type match), though not a sibling.
      </p>
    </div>
    <ul class="space-y-1.5 text-sm text-zinc-300">
      <li>
        <span class="text-xs text-zinc-500">04.15.25</span> — Admitted to allogeneic stem cell transplant clinic to begin testing process.
      </li>
      <li>
        <span class="text-xs text-zinc-500">04.23.25</span> — PET-CT confirms remission/complete response (no active disease).
      </li>
      <li>
        <span class="text-xs text-zinc-500">05.03.25</span> — Started <a href="https://en.wikipedia.org/wiki/Fludarabine" class="underline hover:text-white">Fludarabine</a> as part of RIC allo stem cell transplant (outpatient).
      </li>
      <li>
        <span class="text-xs text-zinc-500">05.04.25</span> — Second dose of Fludarabine.
      </li>
      <li>
        <span class="text-xs text-zinc-500">05.05.25</span> — Third dose of Fludarabine.
      </li>
      <li>
        <span class="text-xs text-zinc-500">05.07.25</span> — Total body irradiation (with lung blocks).
      </li>
      <li>
        <span class="text-xs text-zinc-500">05.07.25</span> — Stem cell transplant from donor completed.
      </li>
      <li>
        <span class="text-xs text-zinc-500">05.10.25</span> — Hospital admission and first dose of <a href="https://en.wikipedia.org/wiki/Cyclophosphamide" class="underline hover:text-white">Cyclophosphamide</a> for <a href="https://en.wikipedia.org/wiki/Graft-versus-host_disease" class="underline hover:text-white">GVHD</a> prevention.
      </li>
      <li>
        <span class="text-xs text-zinc-500">05.11.25</span> — Second dose of Cyclophosphamide.
      </li>
    </ul>
  </div>
</div>
