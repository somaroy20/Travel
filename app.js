const trips = [
  {
    id: "bali-slow-luxe",
    title: "Goa",
    location: "Ubud · Uluwatu · Canggu, Indonesia",
    duration: "7 days · 6 nights",
    theme: "beach",
    image:
      "images/beach2.jpeg",
    imageAlt: "A tropical Bali shoreline with palm trees and blue water.",
    bestFor: "Slow travel, couples, wellness",
    priceHint: "From $1,450 per person (land only)",
    tags: ["Sunrise trek", "Private pool villa", "Balinese spa ritual"],
    highlight: "Mornings in a jungle villa, evenings on clifftop sunsets.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Jungle Welcome",
        summary: "Settle into your private pool villa in Ubud.",
        items: [
          "Private airport pickup and scenic transfer to Ubud",
          "Check-in at boutique jungle villa with private pool",
          "Welcome drink and trip briefing with local host",
          "Evening stroll through Ubud center & dinner reservation",
        ],
      },
      {
        day: 2,
        title: "Temples & Rice Terraces",
        summary: "Culture, waterfalls, and iconic rice terrace views.",
        items: [
          "Guided visit to Tirta Empul water temple",
          "Coffee tasting at a local plantation",
          "Afternoon at Tegalalang rice terraces",
          "Optional Balinese massage back at the villa",
        ],
      },
      {
        day: 3,
        title: "Sunrise Volcano & Spa",
        summary: "Mount Batur sunrise followed by a spa afternoon.",
        items: [
          "Early morning trek to Mount Batur for sunrise",
          "Breakfast overlooking the volcano and lake",
          "Hot springs soak to unwind tired muscles",
          "Slow afternoon & sunset dinner in Ubud",
        ],
      },
      {
        day: 4,
        title: "Move to Uluwatu Clifftops",
        summary: "From jungle to ocean-facing clifftops.",
        items: [
          "Transfer from Ubud to Uluwatu",
          "Check-in at ocean-view boutique hotel",
          "Free time at beach club or cliffside pool",
          "Kecak fire dance at Uluwatu Temple (optional)",
        ],
      },
      {
        day: 5,
        title: "Ocean Day & Beach Hopping",
        summary: "Sandy toes and turquoise water.",
        items: [
          "Morning beach time at Padang Padang or Melasti",
          "Optional surfing lesson with a local instructor",
          "Sunset cocktails at a clifftop bar",
          "Seafood dinner on the beach",
        ],
      },
      {
        day: 6,
        title: "Canggu Cafés & Boutiques",
        summary: "Day trip to café culture and boutiques.",
        items: [
          "Drive to Canggu for brunch at a trendy café",
          "Time to explore boutiques and beach bars",
          "Optional yoga class or co-working visit (workation-friendly)",
          "Return to Uluwatu for a relaxed final evening",
        ],
      },
      {
        day: 7,
        title: "Departure Day",
        summary: "Easy checkout with optional last-minute shopping.",
        items: [
          "Flexible morning depending on flight time",
          "Private transfer to Denpasar airport",
          "Assistance with check-in and onward connections",
        ],
      },
    ],
  },
  {
    id: "paris-lisbon-city-duo",
    title: "Paris & Lisbon City Duo",
    location: "Paris, France · Lisbon & Sintra, Portugal",
    duration: "8 days · 7 nights",
    theme: "city",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=70",
    imageAlt: "Eiffel Tower view in Paris at sunset.",
    bestFor: "First-timers, food lovers, friends",
    priceHint: "From €1,780 per person (land only)",
    tags: ["Sunrise at Eiffel Tower", "Fado night", "Sintra castles"],
    highlight: "From Seine-side picnics to pastel sunsets over Lisbon.",
    itinerary: [
      {
        day: 1,
        title: "Bonjour Paris",
        summary: "Arrival and first sunset over the Seine.",
        items: [
          "Private arrival transfer to central Paris hotel",
          "Time to freshen up and walk your neighborhood",
          "Sunset Seine river cruise with welcome drink",
        ],
      },
      {
        day: 2,
        title: "Icons of Paris",
        summary: "Eiffel Tower, Louvre exteriors, and café culture.",
        items: [
          "Guided small-group tour around Eiffel Tower area",
          "Photo stops at Trocadéro and Champ de Mars",
          "Afternoon Louvre courtyard & Tuileries gardens stroll",
          "Classic Parisian bistro dinner reservation",
        ],
      },
      {
        day: 3,
        title: "Montmartre & Hidden Corners",
        summary: "Artistic neighborhoods and secret viewpoints.",
        items: [
          "Funicular or walk up to Sacré-Cœur",
          "Guided Montmartre walk including artists' square",
          "Hidden passages and covered galleries exploration",
          "Optional speakeasy cocktail bar experience",
        ],
      },
      {
        day: 4,
        title: "To Sunny Lisbon",
        summary: "Swap croissants for pastel de nata.",
        items: [
          "Morning train or short flight to Lisbon",
          "Check-in at boutique hotel in Bairro Alto or Chiado",
          "Tram ride & sunset viewpoint at Miradouro São Pedro de Alcântara",
          "Dinner with live Fado performance",
        ],
      },
      {
        day: 5,
        title: "Tiles, Tram 28 & Time Out Market",
        summary: "Classic Lisbon icons and food hall delights.",
        items: [
          "Guided walking tour of Alfama and Baixa",
          "Ride historic Tram 28",
          "Pastel de nata tasting at a famous bakery",
          "Dinner at Time Out Market with curated recommendations",
        ],
      },
      {
        day: 6,
        title: "Sintra Castles & Atlantic Coast",
        summary: "Colorful palaces and dramatic coastline.",
        items: [
          "Private day trip to Sintra & Cascais",
          "Entry to Pena Palace and Quinta da Regaleira",
          "Stop at Cabo da Roca (westernmost point of Europe)",
          "Evening free in Lisbon",
        ],
      },
      {
        day: 7,
        title: "Free Day for Your Style",
        summary: "Museums, shopping, or a beach tram—your choice.",
        items: [
          "Optional experiences: cooking class, tile workshop, or surf lesson",
          "Local neighborhood suggestions tailored to your interests",
          "Farewell dinner at a viewpoint restaurant",
        ],
      },
      {
        day: 8,
        title: "Até logo, Lisboa",
        summary: "Departure with airport assistance.",
        items: [
          "Free morning depending on flight time",
          "Private transfer to Lisbon airport",
        ],
      },
    ],
  },
  {
    id: "kenya-safari-sundowners",
    title: "Kenya Safari & Sundowners",
    location: "Nairobi · Maasai Mara, Kenya",
    duration: "6 days · 5 nights",
    theme: "adventure",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1400&q=70",
    imageAlt: "A safari jeep watching wildlife during golden hour.",
    bestFor: "Wildlife, photographers, small groups",
    priceHint: "From $2,350 per person (land only)",
    tags: ["Big Five safari", "Bush breakfast", "Maasai village visit"],
    highlight: "Golden-hour game drives and rooftop Nairobi sunsets.",
    itinerary: [
      {
        day: 1,
        title: "Nairobi Arrival",
        summary: "Welcome to East Africa.",
        items: [
          "Meet & greet at Jomo Kenyatta International Airport",
          "Private transfer to city hotel",
          "Optional visit to local market or rooftop bar",
        ],
      },
      {
        day: 2,
        title: "Into the Maasai Mara",
        summary: "Scenic drive and first game drive.",
        items: [
          "Drive or short flight to Maasai Mara",
          "Check-in at tented safari camp",
          "Afternoon game drive in the Mara",
          "Campfire dinner under the stars",
        ],
      },
      {
        day: 3,
        title: "Full-Day Game Drives",
        summary: "Track the Big Five with expert guides.",
        items: [
          "Early morning game drive with bush breakfast",
          "Midday rest at camp",
          "Golden hour drive and sundowner drinks",
        ],
      },
      {
        day: 4,
        title: "Maasai Culture & Balloon (Optional)",
        summary: "Cultural encounters and optional balloon safari.",
        items: [
          "Visit to a Maasai village",
          "Optional hot air balloon safari at sunrise",
          "Evening storytelling by the fire",
        ],
      },
      {
        day: 5,
        title: "Final Morning Safari",
        summary: "Last chance to spot your favorites.",
        items: [
          "Sunrise game drive",
          "Relaxed brunch at camp",
          "Return to Nairobi for final night",
        ],
      },
      {
        day: 6,
        title: "Departure",
        summary: "Airport transfer and onward journey.",
        items: [
          "Hotel breakfast and checkout",
          "Private transfer to the airport",
        ],
      },
    ],
  },
  {
    id: "santorini-sunset-escape",
    title: "Santorini Sunset Escape",
    location: "Oia · Fira, Greece",
    duration: "5 days · 4 nights",
    theme: "romantic",
    image:
      "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=1400&q=70",
    imageAlt: "Santorini white buildings and blue domes overlooking the sea.",
    bestFor: "Honeymoons, anniversaries",
    priceHint: "From €1,280 per person (land only)",
    tags: ["Caldera views", "Private cruise", "Wine tasting"],
    highlight: "Blue-domed churches and private sunset sails.",
    itinerary: [
      {
        day: 1,
        title: "Caldera Arrival",
        summary: "Check into your whitewashed cave suite.",
        items: [
          "Airport or port pickup",
          "Check-in at caldera-view boutique hotel",
          "Sunset welcome drink on your private balcony",
        ],
      },
      {
        day: 2,
        title: "Island Overview",
        summary: "Explore Oia and Fira at your pace.",
        items: [
          "Guided orientation walk in Oia",
          "Photo stops at iconic blue domes",
          "Cable car or walk to Fira's old port",
        ],
      },
      {
        day: 3,
        title: "Private Sunset Cruise",
        summary: "Sail the caldera with onboard dinner.",
        items: [
          "Late start and pool time",
          "Afternoon pick-up for semi-private or private catamaran cruise",
          "Onboard BBQ dinner and sunset views from the water",
        ],
      },
      {
        day: 4,
        title: "Wine & Villages",
        summary: "Santorini wines and hidden villages.",
        items: [
          "Half-day wine-tasting tour at 2–3 wineries",
          "Visit to Pyrgos or Megalochori village",
          "Free evening for a special dinner reservation",
        ],
      },
      {
        day: 5,
        title: "Departure",
        summary: "One last coffee with a view.",
        items: [
          "Leisurely morning depending on ferry/flight",
          "Transfer to port or airport",
        ],
      },
    ],
  },
];

function smoothScrollTo(targetSelector) {
  const el = document.querySelector(targetSelector);
  if (!el) return;
  window.scrollTo({
    top: el.offsetTop - 80,
    behavior: "smooth",
  });
}

function renderTrips(filter = "all") {
  const container = document.getElementById("trip-list");
  if (!container) return;

  container.innerHTML = "";

  const filteredTrips =
    filter === "all" ? trips : trips.filter((trip) => trip.theme === filter);

  filteredTrips.forEach((trip) => {
    const card = document.createElement("article");
    card.className = "trip-card";
    card.dataset.tripId = trip.id;
    card.innerHTML = `
      <div class="trip-thumb">
        <img
          src="${trip.image}"
          alt="${trip.imageAlt || trip.title}"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="trip-card-body">
      <div class="trip-card-header">
        <div>
          <h3 class="trip-title">${trip.title}</h3>
          <p class="trip-location">${trip.location}</p>
        </div>
        <span class="pill">${trip.duration}</span>
      </div>
      <div class="trip-meta-row">
        <span>${trip.bestFor}</span>
        <span>${trip.priceHint}</span>
      </div>
      <p class="day-summary">${trip.highlight}</p>
      <div class="trip-tags">
        ${trip.tags.map((t) => `<span>#${t}</span>`).join("")}
      </div>
      <div class="trip-cta">
        <span>
          View itinerary
          <span aria-hidden="true">↗</span>
        </span>
        <span>Download inside</span>
      </div>
      </div>
    `;

    card.addEventListener("click", () => openTripModal(trip.id));
    container.appendChild(card);
  });
}

function updateFilterChips(activeFilter) {
  const chips = document.querySelectorAll("#trip-filters .chip");
  chips.forEach((chip) => {
    const filter = chip.dataset.filter;
    if (filter === activeFilter) {
      chip.classList.add("chip-active");
    } else {
      chip.classList.remove("chip-active");
    }
  });
}

function setupFilters() {
  const filtersContainer = document.getElementById("trip-filters");
  if (!filtersContainer) return;

  filtersContainer.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (!target.matches(".chip")) return;
    const filter = target.dataset.filter || "all";
    updateFilterChips(filter);
    renderTrips(filter);
  });
}

function openTripModal(tripId) {
  const trip = trips.find((t) => t.id === tripId);
  if (!trip) return;

  const modal = document.getElementById("trip-modal");
  const titleEl = document.getElementById("modal-title");
  const subtitleEl = document.getElementById("modal-subtitle");
  const durationEl = document.getElementById("modal-duration");
  const themeEl = document.getElementById("modal-theme");
  const itineraryEl = document.getElementById("modal-itinerary");
  const downloadBtn = document.getElementById("download-btn");
  const modalImage = document.getElementById("modal-image");

  if (
    !modal ||
    !titleEl ||
    !subtitleEl ||
    !durationEl ||
    !themeEl ||
    !itineraryEl ||
    !downloadBtn ||
    !modalImage
  ) {
    return;
  }

  titleEl.textContent = trip.title;
  subtitleEl.textContent = trip.location;
  durationEl.textContent = trip.duration;
  themeEl.textContent = trip.theme.charAt(0).toUpperCase() + trip.theme.slice(1);

  modalImage.src = trip.image;
  modalImage.alt = trip.imageAlt || trip.title;

  itineraryEl.innerHTML = "";
  trip.itinerary.forEach((day) => {
    const dayBlock = document.createElement("section");
    dayBlock.className = "day-block";
    const itemsList = day.items
      .map((item) => `<li>${item}</li>`)
      .join("");
    dayBlock.innerHTML = `
      <h3 class="day-title">Day ${day.day} · ${day.title}</h3>
      <p class="day-summary">${day.summary}</p>
      <ul class="day-items">
        ${itemsList}
      </ul>
    `;
    itineraryEl.appendChild(dayBlock);
  });

  downloadBtn.onclick = () => downloadItinerary(trip);

  modal.dataset.open = "true";
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeTripModal() {
  const modal = document.getElementById("trip-modal");
  if (!modal) return;
  modal.dataset.open = "false";
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function setupModal() {
  const modal = document.getElementById("trip-modal");
  if (!modal) return;

  modal.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.hasAttribute("data-close-modal")) {
      closeTripModal();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeTripModal();
    }
  });
}

function downloadItinerary(trip) {
  const lines = [];
  lines.push(`Trip: ${trip.title}`);
  lines.push(`Location: ${trip.location}`);
  lines.push(`Duration: ${trip.duration}`);
  lines.push(`Best for: ${trip.bestFor}`);
  lines.push(`Price hint: ${trip.priceHint}`);
  lines.push("");
  lines.push("Itinerary:");
  trip.itinerary.forEach((day) => {
    lines.push("");
    lines.push(`Day ${day.day} - ${day.title}`);
    lines.push(day.summary);
    day.items.forEach((item) => {
      lines.push(` • ${item}`);
    });
  });
  lines.push("");
  lines.push("Note: This sample itinerary can be customized by WanderNest Journeys for your exact dates, pace, and preferences.");

  const textContent = lines.join("\n");
  const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  const safeTitle = trip.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  link.download = `${safeTitle}-itinerary.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function setupScrollButtons() {
  const buttons = document.querySelectorAll("[data-scroll-target]");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-scroll-target");
      if (!target) return;
      smoothScrollTo(target);
    });
  });

  const navCta = document.querySelector(".nav-cta");
  if (navCta) {
    navCta.addEventListener("click", () => smoothScrollTo("#contact"));
  }
}

function setYear() {
  const yearSpan = document.getElementById("year");
  if (!yearSpan) return;
  yearSpan.textContent = new Date().getFullYear().toString();
}

document.addEventListener("DOMContentLoaded", () => {
  setYear();
  renderTrips("all");
  setupFilters();
  setupModal();
  setupScrollButtons();
});






