// ============================================================================
// 1. INTERACTIVE PAIN & SYMPTOM SELECTOR ("Gdzie odczuwasz ból?")
// ============================================================================
const PAIN_DATA = {
  ledzwia: {
    tag: 'Najczęstszy problem (ok. 48% pacjentów)',
    title: 'Odcinek lędźwiowy, dyskopatia i rwa kulszowa',
    price: '180 zł / 55 min',
    desc: 'Przeciążenie krążków międzykręgowych (najczęściej L4/L5 lub L5/S1) wywołuje ostry lub przewlekły ból krzyża, trudność z wyprostowaniem się rano oraz promieniowanie wzdłuż pośladka, uda lub łydki. Zamiast maskować problem tabletkami przeciwzapalnymi, odciążamy uciśnięty korzeń nerwowy i przywracamy prawidłową biomechanikę miednicy.',
    symptoms: [
      'Ostry ból blokujący ruch przy schylaniu lub wstawaniu z łóżka („postrzał")',
      'Promieniowanie bólu, pieczenie lub mrowienie do pośladka, uda i stopy',
      'Nasilenie bólu podczas siedzenia w aucie lub przy biurku'
    ],
    methods: [
      'Diagnostyka różnicowa McKenziego i testy neurologiczne',
      'Trakcja i mobilizacja stawów kręgosłupa (Kaltenborn-Evjenth)',
      'Terapia powięziowa FDM i neuromobilizacja nerwu kulszowego'
    ],
    sessions: '2–4 wizyty',
    serviceName: 'Terapia bólu kręgosłupa i rwy kulszowej'
  },
  szyja: {
    tag: 'Praca biurowa i stres (ok. 24% pacjentów)',
    title: 'Odcinek szyjny, kark, migreny i drętwienie dłoni',
    price: '180 zł / 50 min',
    desc: 'Przewlekłe napięcie mięśni podpotylicznych i przeciążenie segmentów C2–C7 prowadzi do napięciowych bólów głowy, zawrotów, szumów usznych oraz rwy barkowej (drętwienia palców dłoni w nocy). Pracuję delikatnymi, bezpiecznymi technikami mobilizacji bez siłowych manipulacji.',
    symptoms: [
      'Sztywność karku i ból przy obracaniu głowy (np. podczas cofania autem)',
      'Napięciowe bóle głowy promieniujące od potylicy do skroni i oczodołów',
      'Mrowienie lub drętwienie palców dłoni (szczególnie w nocy i nad ranem)'
    ],
    methods: [
      'Bezbolesne mobilizacje SNAGs wg koncepcji Mulligana',
      'Rozluźnianie mięśni podpotylicznych, pochyłych i obręczy barkowej',
      'Neuromobilizacja splotu ramiennego i korekcja ustawienia łopatek'
    ],
    sessions: '2–3 wizyty',
    serviceName: 'Terapia odcinka szyjnego i bólów głowy'
  },
  bark: {
    tag: 'Stawy kończyny górnej',
    title: 'Staw barkowy, stożek rotatorów i łokieć tenisisty',
    price: '170 zł / 55 min',
    desc: 'Ból barku przy sięganiu na półkę, ubieraniu kurtki lub spaniu na boku najczęściej wynika z konfliktu podbarkowego, przeciążenia ścięgien stożka rotatorów lub zaburzonego ślizgu łopatki. Przywracamy bezbolesny ślizg w stawie i odbudowujemy stabilizację.',
    symptoms: [
      'Kłujący ból barku przy unoszeniu ręki powyżej 90 stopni',
      'Nocny ból barku uniemożliwiający spanie na chorym boku',
      'Ból bocznej lub przyśrodkowej części łokcia przy chwytaniu przedmiotów'
    ],
    methods: [
      'Mobilizacje z ruchem (MWM) wg Mulligan Concept',
      'Głęboka terapia powięziowa FDM i terapia punktów spustowych',
      'Trening centrowania głowy kości ramiennej i stabilizacji łopatki'
    ],
    sessions: '3–5 wizyt',
    serviceName: 'Rehabilitacja stawów (bark, biodro, kolano)'
  },
  'biodro-kolano': {
    tag: 'Stawy kończyny dolnej i ortopedia',
    title: 'Staw biodrowy i kolanowy — zwyrodnienia i stany pooperacyjne',
    price: '170 zł / 55 min',
    desc: 'Zmiany zwyrodnieniowe biodra (koksartroza) i kolana (gonartroza), konflikt rzepkowo-udowy oraz stany po endoprotezoplastyce, rekonstrukcji ACL czy artroskopii wymagają przywrócenia ślizgu stawowego i odciążenia chrząstki.',
    symptoms: [
      'Ból w pachwinie lub kolanie podczas wchodzenia i schodzenia ze schodów',
      'Poranna sztywność stawu i ograniczenie wyprostu lub zgięcia',
      'Osłabienie siły mięśniowej i utykanie po zabiegu ortopedycznym'
    ],
    methods: [
      'Trakcja przeciwzwyrodnieniowa i mobilizacja torebki stawowej',
      'Terapia manualna rzepki, pasma biodrowo-piszczelowego i blizny',
      'Medyczny trening funkcjonalny i reedukacja prawidłowego chodu'
    ],
    sessions: '4–6 wizyt',
    serviceName: 'Rehabilitacja stawów (bark, biodro, kolano)'
  },
  piersiowy: {
    tag: 'Przeciążenia posturalne',
    title: 'Odcinek piersiowy, żebra i ból między łopatkami',
    price: '170 zł / 50 min',
    desc: 'Pieczące lub kłujące bóle między łopatkami (często nasilające się przy głębokim wdechu i mylone z bólem serca) wynikają z zablokowania stawów żebrowo-kręgowych oraz przeciążenia powięzi grzbietu.',
    symptoms: [
      'Kłucie między łopatkami lub pod łopatką przy głębokim oddechu',
      'Uczucie „sztywnego pancerza" w klatce piersiowej po pracy przy komputerze',
      'Ból promieniujący wzdłuż łuku żebrowego przy skręcie tułowia'
    ],
    methods: [
      'Mobilizacja stawów żebrowo-poprzecznych i kręgosłupa piersiowego',
      'Terapia powięziowa FDM i rozluźnianie przepony',
      'Ćwiczenia mobilności klatki piersiowej i ergonomia stanowiska pracy'
    ],
    sessions: '1–3 wizyty',
    serviceName: 'Terapia powięziowa FDM i igłoterapia'
  }
};

const painTabs = document.querySelectorAll('.pain-tab');
const painTag = document.getElementById('pain-tag');
const painTitle = document.getElementById('pain-title');
const painPrice = document.getElementById('pain-price');
const painDesc = document.getElementById('pain-desc');
const painSymptoms = document.getElementById('pain-symptoms');
const painMethods = document.getElementById('pain-methods');
const painSessions = document.getElementById('pain-sessions');
const painBookBtn = document.getElementById('pain-book-btn');

painTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const key = tab.dataset.pain;
    const data = PAIN_DATA[key];
    if (!data) return;

    painTabs.forEach((t) => {
      t.classList.remove('is-active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('is-active');
    tab.setAttribute('aria-selected', 'true');

    painTag.textContent = data.tag;
    painTitle.textContent = data.title;
    painPrice.textContent = data.price;
    painDesc.textContent = data.desc;
    painSessions.textContent = data.sessions;
    painBookBtn.dataset.service = data.serviceName;

    painSymptoms.innerHTML = data.symptoms.map((item) => `<li>${item}</li>`).join('');
    painMethods.innerHTML = data.methods.map((item) => `<li>${item}</li>`).join('');
  });
});

// ============================================================================
// 2. PRICING TIER SWITCHER (Single vs Pack 5 -12% vs Pack 10 -20%)
// ============================================================================
const pricingButtons = document.querySelectorAll('.pricing-switcher__btn');
const priceElements = document.querySelectorAll('.service-card__price');
const noteElements = document.querySelectorAll('.service-card__pack-note');

pricingButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const plan = btn.dataset.plan;
    pricingButtons.forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');

    priceElements.forEach((el) => {
      if (el.dataset[plan]) {
        el.textContent = el.dataset[plan];
      }
    });

    noteElements.forEach((el) => {
      const noteKey = `${plan}Note`;
      if (el.dataset[noteKey]) {
        el.textContent = el.dataset[noteKey];
      }
    });
  });
});

// ============================================================================
// 3. ONE-CLICK SERVICE PRE-SELECTION INTO BOOKING FORM
// ============================================================================
const bookServiceSelect = document.getElementById('book-service');
const bookLocationSelect = document.getElementById('book-location');
const bookNotesInput = document.getElementById('book-notes');
const bookingSection = document.getElementById('rezerwacja');

function scrollToBookingWithService(serviceName, locationName, extraNote) {
  if (serviceName && bookServiceSelect) {
    for (const option of bookServiceSelect.options) {
      if (option.value === serviceName) {
        bookServiceSelect.value = serviceName;
        break;
      }
    }
  }
  if (locationName && bookLocationSelect) {
    for (const option of bookLocationSelect.options) {
      if (option.value.includes(locationName)) {
        bookLocationSelect.value = option.value;
        break;
      }
    }
  }
  if (extraNote && bookNotesInput) {
    bookNotesInput.value = extraNote;
  }
  bookingSection?.scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => {
    document.getElementById('book-name')?.focus();
  }, 550);
}

document.querySelectorAll('.js-select-service').forEach((btn) => {
  btn.addEventListener('click', () => {
    const srv = btn.dataset.service;
    const loc = srv.includes('Wizyta domowa') ? 'Wizyta domowa — Ełk i okolice' : null;
    scrollToBookingWithService(srv, loc);
  });
});

painBookBtn?.addEventListener('click', () => {
  scrollToBookingWithService(painBookBtn.dataset.service);
});

// ============================================================================
// 4. CLINICAL CASE STUDIES FILTERING & NATIVE <dialog> MODAL
// ============================================================================
const CASE_DETAILS = {
  'case-1': {
    badge: 'Kręgosłup lędźwiowy & Rwa kulszowa',
    title: 'Ostra rwa kulszowa i przepuklina L5-S1 (9 mm) u kierowcy zawodowego',
    patient: 'Pacjent: Mężczyzna, 44 lata • Lokalizacja: Ełk (Gabinet stacjonarny)',
    vasBefore: 'VAS 9/10',
    vasAfter: 'VAS 1/10',
    duration: '4 wizyty (3 tygodnie)',
    diagnosis: 'Pacjent zgłosił się z ostrym bólem dolnego odcinka kręgosłupa promieniującym wzdłuż tylnej powierzchni uda i łydki aż do kostki bocznej. Obserwowano wyraźny shift boczny tułowia (ucieczkę od bólu), dodatni objaw Lasegue’a przy 30° oraz niemożność siedzenia dłużej niż 5 minut. Rezonans MRI wykazał tylno-boczną ekstruzję krążka L5/S1 (9 mm).',
    protocol: [
      'Wizyta 1: Korekcja shiftu bocznego i repozycja wg metody McKenziego oraz trakcja odbarczająca segment L5-S1 (redukcja bólu z 9/10 do 5/10).',
      'Wizyta 2: Mobilizacja stawów międzywyrostkowych Kaltenborn-Evjenth oraz terapia powięziowa FDM na paśmie pośladkowym i kulszowo-goleniowym.',
      'Wizyta 3: Neuromobilizacja ślizgowa nerwu kulszowego oraz aktywacja mięśnia poprzecznego brzucha.',
      'Wizyta 4: Trening stabilizacji centralnej i ergonomia fotela kierowcy ciężarówki.'
    ],
    outcome: 'Całkowite ustąpienie promieniowania do nogi, pełny bezbolesny wyprost kręgosłupa i powrót do pracy zawodowej za kierownicą bez konieczności interwencji neurochirurgicznej.',
    serviceName: 'Terapia bólu kręgosłupa i rwy kulszowej'
  },
  'case-2': {
    badge: 'Odcinek szyjny & Bóle głowy',
    title: 'Przewlekłe migreny szyjnopochodne i nocne drętwienie dłoni',
    patient: 'Pacjentka: Kobieta, 36 lat (księgowa) • Dojazd z: Giżycka do gabinetu w Ełku',
    vasBefore: 'VAS 8/10',
    vasAfter: 'VAS 0/10',
    duration: '3 wizyty (2 tygodnie)',
    diagnosis: 'Pacjentka od ponad 2 lat zmagała się z pulsującym bólem głowy wychodzącym od podstawy czaszki w stronę prawej skroni oraz budzącym w nocy drętwieniem IV i V palca prawej dłoni. Badanie wykazało zablokowanie segmentu C2/C3, nadmierne napięcie mięśni podpotylicznych i mięśni pochyłych szyi (zespół górnego otworu klatki piersiowej — TOS).',
    protocol: [
      'Bezbolesne mobilizacje SNAGs wg koncepcji Mulligana na poziomie C2–C6 przywracające rotację szyi.',
      'Rozluźnianie mięśniowo-powięziowe mięśni podpotylicznych, pochyłych oraz mięśnia piersiowego mniejszego.',
      'Neuromobilizacja nerwu łokciowego i splotu ramiennego + korekcja ustawienia monitora i podparcia przedramion.'
    ],
    outcome: 'Ustąpienie nocnego drętwienia palców już po pierwszej wizycie. Po 3 spotkaniach pacjentka odstawiła leki przeciwbólowe, a bóle głowy nie powróciły.',
    serviceName: 'Terapia odcinka szyjnego i bólów głowy'
  },
  'case-3': {
    badge: 'Staw barkowy & Łopatka',
    title: 'Zespół ciasnoty podbarkowej i uszkodzenie stożka rotatorów',
    patient: 'Pacjent: Mężczyzna, 52 lata • Dojazd z: Suwałk',
    vasBefore: 'Zakres 75° (VAS 7/10)',
    vasAfter: 'Zakres 175° (VAS 0/10)',
    duration: '5 wizyt (4 tygodnie)',
    diagnosis: 'Ból prawego barku trwający od 4 miesięcy, uniemożliwiający uniesienie kończyny powyżej linii barku (bolesny łuk 70°–120°) oraz spanie na prawym boku. W badaniu USG widoczne cechy tendinopatii ścięgna mięśnia nadgrzebieniowego i zapalenie kaletki podbarkowej.',
    protocol: [
      'Terapia powięziowa FDM (techniki continuum i triggerband) na obręczy barkowej.',
      'Mobilizacja ślizgu dolnego i tylnego głowy kości ramiennej wg Kaltenborn-Evjenth.',
      'Mobilizacje z ruchem (MWM Mulligan) przy odwodzeniu i zgięciu ramienia.',
      'Progresywny trening ekscentryczny stożka rotatorów i stabilizatorów łopatki.'
    ],
    outcome: 'Pełny, bezbolesny zakres ruchu (175° zgięcia i odwodzenia), spokojny sen przez całą noc i powrót do aktywności fizycznej.',
    serviceName: 'Rehabilitacja stawów (bark, biodro, kolano)'
  },
  'case-4': {
    badge: 'Wizyta domowa z dojazdem',
    title: 'Rehabilitacja domowa po endoprotezoplastyce biodra i bólu lędźwi',
    patient: 'Pacjentka: Kobieta, 68 lat • Wizyty domowe z dojazdem: Augustów',
    vasBefore: 'Chód o 2 kulach (VAS 8/10)',
    vasAfter: 'Samodzielny chód bez kul',
    duration: 'Pakiet 8 wizyt domowych (5 tygodni)',
    diagnosis: 'Pacjentka 14 dni po całkowitej endoprotezoplastyce lewego stawu biodrowego, z towarzyszącym przeciążeniowym bólem odcinka lędźwiowego kręgosłupa. Obawa przed obciążaniem operowanej nogi, przykurcz zgięciowy biodra i bolesny obrzęk wokół blizny pooperacyjnej.',
    protocol: [
      'Mobilizacja blizny pooperacyjnej i terapia przeciwobrzękowa uda w warunkach domowych na mobilnym stole.',
      'Terapia manualna odcinka lędźwiowego i stawu krzyżowo-biodrowego.',
      'Stopniowe zwiększanie wyprostu i odwodzenia stawu biodrowego oraz wzmacnianie mięśnia pośladkowego średniego.',
      'Praktyczna nauka bezpiecznego chodzenia po schodach w domu pacjentki i odstawiania kul.'
    ],
    outcome: 'Po 5 tygodniach pacjentka porusza się płynnie bez kul łokciowych w domu i na spacerach, bez bólu kręgosłupa lędźwiowego.',
    serviceName: 'Wizyta domowa z dojazdem do pacjenta'
  },
  'case-5': {
    badge: 'Kręgosłup lędźwiowy & Miednica',
    title: 'Zablokowanie stawu krzyżowo-biodrowego (SIJ) i przewlekły ból krzyża',
    patient: 'Pacjent: Mężczyzna, 39 lat • Wizyta domowa i gabinet: Olecko / Ełk',
    vasBefore: 'VAS 7/10',
    vasAfter: 'VAS 0/10',
    duration: '3 wizyty (2 tygodnie)',
    diagnosis: 'Jednostronny, kłujący ból w okolicy prawego kolca biodrowego tylnego górnego, nasilający się przy wstawaniu z krzesła, wsiadaniu do samochodu i przewracaniu z boku na bok. Dodatni klaster testów prowokacyjnych dla stawu krzyżowo-biodrowego (SIJ) oraz wzmożone napięcie mięśnia gruszkowatego.',
    protocol: [
      'Mobilizacja nutacji/kontrnutacji kości krzyżowej i korekcja ustawienia talerza biodrowego.',
      'Terapia punktów spustowych mięśnia gruszkowatego, pośladkowego średniego i czworobocznego lędźwi.',
      'Ćwiczenia stabilizacji miednicy i symetrycznego obciążania kończyn dolnych.'
    ],
    outcome: 'Całkowite ustąpienie bólu przy wstawaniu i jeździe samochodem już po 2 wizytach; 3. wizyta utrwaliła stabilizację miednicy.',
    serviceName: 'Terapia bólu kręgosłupa i rwy kulszowej'
  },
  'case-6': {
    badge: 'Staw kolanowy & Biodro',
    title: 'Zmiany zwyrodnieniowe kolana (gonartroza II°) i konflikt rzepkowo-udowy',
    patient: 'Pacjent: Mężczyzna, 58 lat • Dojazd z: Grajewa do gabinetu w Ełku',
    vasBefore: 'VAS 8/10 (schody)',
    vasAfter: 'VAS 1/10',
    duration: '4 wizyty (3 tygodnie)',
    diagnosis: 'Silny ból przednio-przyśrodkowego przedziału kolana podczas schodzenia ze schodów i kucania, trzeszczenie pod rzepką oraz ograniczenie pełnego wyprostu kolana o 10 stopni.',
    protocol: [
      'Mobilizacja ślizgu rzepki oraz trakcja i ślizg stawu piszczelowo-udowego wg Mulligana.',
      'Głęboka terapia powięziowa FDM na paśmie biodrowo-piszczelowym i mięśniu czworogłowym uda.',
      'Kinesiotaping odciążający więzadło rzepki oraz trening kontroli osi kończyny dolnej (biodro–kolano–stopa).'
    ],
    outcome: 'Odzyskanie pełnego wyprostu kolana i bezbolesne wchodzenie oraz schodzenie po schodach.',
    serviceName: 'Rehabilitacja stawów (bark, biodro, kolano)'
  }
};

const filterPills = document.querySelectorAll('.filter-pill');
const caseCards = document.querySelectorAll('.case-card');

filterPills.forEach((pill) => {
  pill.addEventListener('click', () => {
    const filter = pill.dataset.filter;
    filterPills.forEach((p) => p.classList.remove('is-active'));
    pill.classList.add('is-active');

    caseCards.forEach((card) => {
      const cat = card.dataset.category;
      const match = filter === 'all' || cat === filter;
      card.hidden = !match;
    });
  });
});

// Native <dialog> Modal + Mandatory Fallback for browsers without `closedBy`
const caseModal = document.getElementById('case-modal');
const modalBadge = document.getElementById('modal-case-badge');
const modalTitle = document.getElementById('modal-case-title');
const modalPatient = document.getElementById('modal-case-patient');
const modalVasBefore = document.getElementById('modal-vas-before');
const modalVasAfter = document.getElementById('modal-vas-after');
const modalDuration = document.getElementById('modal-duration');
const modalDiagnosis = document.getElementById('modal-diagnosis');
const modalProtocol = document.getElementById('modal-protocol');
const modalOutcome = document.getElementById('modal-outcome');
const modalBookSimilar = document.getElementById('modal-book-similar');

let activeModalService = 'Pierwsza wizyta diagnostyczno-terapeutyczna';

document.querySelectorAll('.js-open-case').forEach((btn) => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.caseId;
    const item = CASE_DETAILS[id];
    if (!item || !caseModal) return;

    modalBadge.textContent = item.badge;
    modalTitle.textContent = item.title;
    modalPatient.textContent = item.patient;
    modalVasBefore.textContent = item.vasBefore;
    modalVasAfter.textContent = item.vasAfter;
    modalDuration.textContent = item.duration;
    modalDiagnosis.textContent = item.diagnosis;
    modalOutcome.textContent = item.outcome;
    modalProtocol.innerHTML = item.protocol.map((step) => `<li>${step}</li>`).join('');
    activeModalService = item.serviceName;

    caseModal.showModal();
  });
});

modalBookSimilar?.addEventListener('click', () => {
  caseModal?.close('book');
  scrollToBookingWithService(activeModalService);
});

if (caseModal) {
  caseModal.addEventListener('close', () => {
    caseModal.returnValue = '';
  });

  // Fallback for browsers without native <dialog closedby="any"> support
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    const outside = (e, dialog) => {
      const r = dialog.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };
    let pressedOutside = false;
    caseModal.addEventListener('pointerdown', (e) => {
      pressedOutside = outside(e, caseModal);
    });
    caseModal.addEventListener('pointerup', (e) => {
      if (pressedOutside && outside(e, caseModal)) {
        caseModal.close();
      }
    });
  }
}

// ============================================================================
// 5. SERVICE AREA CITY PILLS & INTERACTIVE THERAPY + TRAVEL COST CALCULATOR
// ============================================================================
const cityPills = document.querySelectorAll('.city-pill');
const calcService = document.getElementById('calc-service');
const calcMode = document.getElementById('calc-mode');
const calcCity = document.getElementById('calc-city');
const calcVisits = document.getElementById('calc-visits');
const calcPerVisit = document.getElementById('calc-per-visit');
const calcLocationSummary = document.getElementById('calc-location-summary');
const calcTotal = document.getElementById('calc-total');
const calcSavingsBadge = document.getElementById('calc-savings-badge');
const calcApplyBtn = document.getElementById('calc-apply-btn');

function updateCalculator() {
  if (!calcService || !calcMode || !calcCity || !calcVisits) return;

  const basePrice = Number(calcService.value);
  const mode = calcMode.value; // 'clinic' or 'home'
  const selectedCityOpt = calcCity.options[calcCity.selectedIndex];
  const cityName = selectedCityOpt.dataset.city || 'Ełk i okolice';
  const zoneFee = Number(selectedCityOpt.value);
  const visitsCount = Number(calcVisits.value);

  // In clinic mode, travel fee is 0. In home mode: Ełk has +20 zł home setup (200 zł total for 180 zł therapy), outside Ełk adds zoneFee + 20 zł home setup.
  let homeSurcharge = 0;
  if (mode === 'home') {
    homeSurcharge = zoneFee === 0 ? 20 : 20 + zoneFee;
  }

  const singleRaw = basePrice + homeSurcharge;
  let discountRate = 0;
  if (visitsCount === 5) discountRate = 0.12;
  if (visitsCount === 10) discountRate = 0.20;

  const discountedPerVisit = Math.round(singleRaw * (1 - discountRate));
  const totalCost = discountedPerVisit * visitsCount;
  const totalSaved = singleRaw * visitsCount - totalCost;

  calcPerVisit.textContent = `${discountedPerVisit} zł`;
  if (mode === 'clinic') {
    calcLocationSummary.textContent = 'Gabinet stacjonarny w Ełku (dojazd 0 zł)';
  } else {
    calcLocationSummary.textContent =
      zoneFee === 0
        ? `Wizyta domowa: ${cityName} (dojazd 0 zł)`
        : `Wizyta domowa: ${cityName} (+${zoneFee} zł strefa dojazdu)`;
  }

  calcTotal.textContent = `${totalCost.toLocaleString('pl-PL')} zł`;

  if (totalSaved > 0) {
    calcSavingsBadge.textContent = `Oszczędzasz ${totalSaved} zł w pakiecie ${visitsCount} wizyt (-${discountRate * 100}%)`;
  } else {
    calcSavingsBadge.textContent = 'Cena pojedynczej wizyty • Faktura medyczna w cenie';
  }
}

cityPills.forEach((pill) => {
  pill.addEventListener('click', () => {
    const targetCity = pill.dataset.city;
    cityPills.forEach((p) => p.classList.remove('is-active'));
    pill.classList.add('is-active');

    // Switch calculator to home visit if a town outside Ełk is clicked, and select that town
    if (calcCity) {
      for (let i = 0; i < calcCity.options.length; i++) {
        if (calcCity.options[i].dataset.city === targetCity) {
          calcCity.selectedIndex = i;
          break;
        }
      }
    }
    if (calcMode && targetCity !== 'Ełk i okolice') {
      calcMode.value = 'home';
    }
    updateCalculator();
  });
});

[calcService, calcMode, calcCity, calcVisits].forEach((control) => {
  control?.addEventListener('change', () => {
    // Sync active city pill with dropdown
    const selectedCityName = calcCity.options[calcCity.selectedIndex]?.dataset.city;
    cityPills.forEach((pill) => {
      pill.classList.toggle('is-active', pill.dataset.city === selectedCityName);
    });
    updateCalculator();
  });
});

calcApplyBtn?.addEventListener('click', () => {
  const serviceOpt = calcService.options[calcService.selectedIndex];
  const serviceName = serviceOpt.dataset.name;
  const mode = calcMode.value;
  const cityName = calcCity.options[calcCity.selectedIndex].dataset.city;
  const visitsCount = calcVisits.value;
  const totalText = calcTotal.textContent;

  const targetLocation = mode === 'clinic' ? 'Gabinet stacjonarny — Ełk' : cityName;
  const summaryNote = `Wycena z kalkulatora: ${serviceName}, tryb: ${
    mode === 'clinic' ? 'Gabinet w Ełku' : `Wizyta domowa (${cityName})`
  }, liczba wizyt: ${visitsCount}, szacowany koszt: ${totalText}.`;

  scrollToBookingWithService(
    mode === 'home' && serviceName === 'Pierwsza wizyta diagnostyczno-terapeutyczna'
      ? 'Wizyta domowa z dojazdem do pacjenta'
      : serviceName,
    targetLocation,
    summaryNote
  );
});

updateCalculator();

// ============================================================================
// 6. BOOKING FORM SUBMISSION & VALIDATION
// ============================================================================
const bookingForm = document.getElementById('booking-form');
const formError = document.getElementById('form-error');
const bookingSuccess = document.getElementById('booking-success');
const bookingSuccessText = document.getElementById('booking-success-text');
const bookingResetBtn = document.getElementById('booking-reset-btn');

bookingForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('book-name').value.trim();
  const phone = document.getElementById('book-phone').value.trim();
  const service = document.getElementById('book-service').value;
  const location = document.getElementById('book-location').value;
  const time = document.getElementById('book-time').value;

  if (name.length < 2) {
    formError.textContent = 'Proszę wpisać swoje imię i nazwisko.';
    formError.hidden = false;
    document.getElementById('book-name').focus();
    return;
  }

  const digits = phone.replace(/\D/g, '');
  if (digits.length < 9) {
    formError.textContent = 'Proszę podać prawidłowy, 9-cyfrowy numer telefonu kontaktowego.';
    formError.hidden = false;
    document.getElementById('book-phone').focus();
    return;
  }

  formError.hidden = true;
  bookingForm.hidden = true;
  bookingSuccess.hidden = false;
  bookingSuccessText.innerHTML = `Dziękuję, <strong>${name}</strong>! Twoje zgłoszenie na usługę <strong>„${service}"</strong> (${location}, pora: ${time}) zostało zarejestrowane. Oddzwonię na numer <strong class="mono">${phone}</strong> w ciągu 30–45 minut w celu potwierdzenia terminu.`;
});

bookingResetBtn?.addEventListener('click', () => {
  bookingForm.reset();
  bookingSuccess.hidden = true;
  bookingForm.hidden = false;
});
