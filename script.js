/* ========================================
   VELOCITY MOTORS — script.js
   ======================================== */

// ── Car Data ──────────────────────────────────────────────────────────────
const CARS = [
  {
    id: 1,
    brand: "BMW",
    model: "M4 Competition",
    year: 2024,
    price: 89900,
    hp: 503,
    torque: "479 lb-ft",
    zeroToSixty: "3.8s",
    topSpeed: "180 mph",
    category: "Sports Cars",
    badge: "Popular",
    desc: "The apex predator of the compact segment, with a twin-turbocharged inline-six that sings all the way to 7,200 rpm.",
    fullDesc: "The BMW M4 Competition represents the absolute pinnacle of the compact sports car segment. Its hand-built S58 twin-turbocharged 3.0-litre inline-six engine produces a staggering 503 bhp, launching the M4 from 0-60 mph in just 3.8 seconds. The M-tuned chassis and active M differential ensure that every single horsepower is translated into driving drama and precision. Available with xDrive all-wheel drive or classic rear-wheel drive, the M4 Competition is as at home on a racetrack as it is on the Autobahn.",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: 2,
    brand: "BMW",
    model: "M8 Competition",
    year: 2024,
    price: 138900,
    hp: 617,
    torque: "553 lb-ft",
    zeroToSixty: "2.8s",
    topSpeed: "190 mph",
    category: "Luxury Cars",
    badge: "Luxury",
    desc: "Where grand touring elegance collides with supercar performance. The M8 redefines what a luxury coupe can be.",
    fullDesc: "The BMW M8 Competition Gran Coupé is a masterwork of contrasts — a car that can effortlessly devour a continent in cosseted comfort, then demolish a racetrack lap. The 4.4-litre twin-turbocharged V8 M TwinPower Turbo engine produces 617 bhp, delivered seamlessly through an 8-speed M Steptronic gearbox and the legendary M xDrive all-wheel-drive system. The result is 0–60 mph in 2.8 seconds, all wrapped in a supremely elegant four-door silhouette.",
    img: "https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: 3,
    brand: "Mercedes",
    model: "AMG GT",
    year: 2024,
    price: 159900,
    hp: 577,
    torque: "590 lb-ft",
    zeroToSixty: "3.1s",
    topSpeed: "197 mph",
    category: "Sports Cars",
    badge: "Featured",
    desc: "Born on the racetrack, bred for the road. The AMG GT is Mercedes-Benz's most emotional expression of performance.",
    fullDesc: "The Mercedes-AMG GT is the purest expression of AMG's performance philosophy. Developed entirely in-house at Affalterbach, this sports car features a hand-built AMG 4.0-litre V8 biturbo engine producing 577 bhp and a colossal 590 lb-ft of torque. The transaxle layout — engine at front, gearbox at rear — delivers near-perfect 47:53 weight distribution, resulting in handling that is both precise and deeply involving.",
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: 4,
    brand: "Mercedes",
    model: "G63 AMG",
    year: 2024,
    price: 187500,
    hp: 577,
    torque: "627 lb-ft",
    zeroToSixty: "4.5s",
    topSpeed: "149 mph",
    category: "SUVs",
    badge: "Iconic",
    desc: "An unstoppable icon. 45 years of military DNA wrapped in a hand-crafted luxury body with a twin-turbo V8.",
    fullDesc: "The Mercedes-AMG G 63 is the ultimate expression of the legendary G-Wagen formula: unstoppable off-road capability married to outrageous on-road performance. Its 4.0-litre AMG V8 biturbo engine produces 577 bhp and 627 lb-ft of torque, delivering 0–62 mph in just 4.5 seconds despite the vehicle's formidable mass. Three locking differentials and ultra-short overhangs make the G63 virtually indestructible off road. The interior is pure AMG luxury.",
    img: "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: 5,
    brand: "Audi",
    model: "R8 V10",
    year: 2023,
    price: 173000,
    hp: 562,
    torque: "406 lb-ft",
    zeroToSixty: "3.2s",
    topSpeed: "205 mph",
    category: "Sports Cars",
    badge: "V10",
    desc: "One of the last naturally-aspirated supercar V10s. The R8 is raw, visceral, and absolutely magnificent.",
    fullDesc: "The Audi R8 is a farewell letter to the naturally-aspirated supercar. Its 5.2-litre V10 FSI engine — shared with Lamborghini — produces 562 bhp and delivers one of the greatest acoustic experiences in the automotive world. The mid-mounted layout and Quattro all-wheel drive result in poise and traction that allows extraordinary everyday usability alongside supercar performance. Audi's space frame construction keeps weight minimal, and the interior is driver-focused yet supremely refined.",
    img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: 6,
    brand: "Audi",
    model: "RS7 Sportback",
    year: 2024,
    price: 121000,
    hp: 591,
    torque: "590 lb-ft",
    zeroToSixty: "3.5s",
    topSpeed: "190 mph",
    category: "Luxury Cars",
    badge: "Flagship",
    desc: "The ultimate four-door sports coupé. 591 bhp of twin-turbo muscle in a sharply styled executive fastback.",
    fullDesc: "The Audi RS 7 Sportback Performance represents the zenith of the executive fastback formula. A 4.0-litre TFSI V8 biturbo engine producing 591 bhp and 590 lb-ft of torque — dispatching 0–62 mph in 3.5 seconds — is mated to an 8-speed Tiptronic gearbox and the legendary Quattro all-wheel-drive system. Mild hybrid technology ensures extraordinary efficiency between the blistering performance runs, while the interior is a technological marvel.",
    img: "https://images.unsplash.com/photo-1544979590-37e9b47eb705?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: 7,
    brand: "Porsche",
    model: "911 Turbo S",
    year: 2024,
    price: 231250,
    hp: 650,
    torque: "590 lb-ft",
    zeroToSixty: "2.6s",
    topSpeed: "205 mph",
    category: "Sports Cars",
    badge: "Pinnacle",
    desc: "The ultimate 911. Six decades of evolution distilled into 650 horsepower of electrifying rear-engine perfection.",
    fullDesc: "The Porsche 911 Turbo S is the definitive expression of 60 years of relentless 911 evolution. Its 3.8-litre twin-turbocharged flat-six engine produces 650 bhp, launching the car from 0–60 mph in an almost absurd 2.6 seconds — yet it remains utterly approachable and driveable. The combination of rear-engine character, Porsche Active Suspension Management, rear-axle steering, and PDK gearbox creates a car that is simultaneously the most exciting and the most reassuring on the planet.",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: 8,
    brand: "Porsche",
    model: "Taycan Turbo S",
    year: 2024,
    price: 190700,
    hp: 750,
    torque: "774 lb-ft",
    zeroToSixty: "2.4s",
    topSpeed: "161 mph",
    category: "Electric Cars",
    badge: "Electric",
    desc: "The electric future, Porsche-style. Instantaneous 750-horsepower thrust in a supremely elegant saloon.",
    fullDesc: "The Porsche Taycan Turbo S Cross Turismo is the purest proof that electric performance can be deeply emotional. Two permanent magnet synchronous motors produce a combined 750 bhp in overboost, launching the Taycan from 0–60 mph in just 2.4 seconds. Porsche's proprietary 800V architecture enables 270 kW rapid charging, and the innovative 2-speed rear gearbox gives the Taycan real-world performance that sustained EVs simply cannot match. It looks extraordinary and drives even better.",
    img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: 9,
    brand: "Ferrari",
    model: "SF90 Stradale",
    year: 2024,
    price: 507000,
    hp: 986,
    torque: "590 lb-ft",
    zeroToSixty: "2.5s",
    topSpeed: "211 mph",
    category: "Sports Cars",
    badge: "Hypercar",
    desc: "Ferrari's most powerful road car ever. A 986 bhp plug-in hybrid that blurs the boundary between road and track.",
    fullDesc: "The Ferrari SF90 Stradale is the most powerful production Ferrari ever built. Its plug-in hybrid system combines a 4.0-litre twin-turbocharged V8 with three electric motors to produce a combined 986 bhp — sufficient for 0–60 mph in 2.5 seconds and a 211 mph top speed. The SF90 is also the first Ferrari to feature an electric four-wheel-drive layout, with two of the three motors driving the front axle. The result is a car that redefines what a Ferrari can be, without compromising on soul.",
    img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: 10,
    brand: "Ferrari",
    model: "296 GTB",
    year: 2024,
    price: 322986,
    hp: 830,
    torque: "546 lb-ft",
    zeroToSixty: "2.9s",
    topSpeed: "205 mph",
    category: "Sports Cars",
    badge: "New",
    desc: "A new V6 era for Ferrari. The 296 GTB delivers 830 bhp of hybrid fury in an achingly beautiful mid-engine body.",
    fullDesc: "The Ferrari 296 GTB heralds a new era for Prancing Horse performance. Its entirely new 3.0-litre twin-turbocharged V6 — Ferrari's first production V6 — is supplemented by a 166 bhp electric motor to produce a total system output of 830 bhp. The result is a car that is at once more accessible than the SF90 and more emotionally rewarding to drive. The carbon fibre body is one of the most beautiful shapes Ferrari has ever penned, and the chassis balance is extraordinary.",
    img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: 11,
    brand: "Lamborghini",
    model: "Huracán EVO",
    year: 2023,
    price: 261274,
    hp: 630,
    torque: "443 lb-ft",
    zeroToSixty: "2.9s",
    topSpeed: "202 mph",
    category: "Sports Cars",
    badge: "Classic",
    desc: "A naturally-aspirated V10 masterpiece. The Huracán EVO is pure, undiluted supercar theatre.",
    fullDesc: "The Lamborghini Huracán EVO is the last of its kind — a naturally-aspirated mid-engine supercar with a proper V10 howling behind the driver's head. The 5.2-litre V10 produces 630 bhp and 443 lb-ft of torque, all delivered through a 7-speed dual-clutch gearbox and Lamborghini's LDVI all-wheel-drive system. The Huracán EVO's Predictive Logic integrates all dynamic systems into a single brain that monitors the driver's inputs and the road ahead, creating a sensation of man and machine working in perfect concert.",
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: 12,
    brand: "Lamborghini",
    model: "Revuelto",
    year: 2024,
    price: 608359,
    hp: 1001,
    torque: "535 lb-ft",
    zeroToSixty: "2.5s",
    topSpeed: "217 mph",
    category: "Sports Cars",
    badge: "1,001 HP",
    desc: "The successor to the Aventador. Over 1,000 bhp of hybrid V12 fury in Lamborghini's most dramatic shape ever.",
    fullDesc: "The Lamborghini Revuelto is the most significant Lamborghini in decades. Succeeding the legendary Aventador, the Revuelto combines a revised 6.5-litre V12 with three electric motors to produce a combined 1,001 bhp. The three-motor hybrid system allows true electric four-wheel-drive launch control, and the new dual-clutch gearbox finally replaces the old ISR unit. The body design is breathtaking — aggressive, aerodynamically sophisticated, and unmistakably Lamborghini. This is the future of the raging bull.",
    img: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: 13,
    brand: "McLaren",
    model: "720S",
    year: 2024,
    price: 299000,
    hp: 710,
    torque: "568 lb-ft",
    zeroToSixty: "2.8s",
    topSpeed: "212 mph",
    category: "Sports Cars",
    badge: "Pure",
    desc: "McLaren's masterclass in aerodynamics and lightness. The 720S sets the standard for supercar dynamics.",
    fullDesc: "The McLaren 720S is, by any objective measure, one of the greatest driver's cars ever built. Its twin-turbocharged 4.0-litre V8 produces 710 bhp and 568 lb-ft of torque, channelled through a 7-speed SSG gearbox to the rear wheels alone. McLaren's commitment to low weight — the 720S weighs just 1,419 kg dry — is obsessive and rewarding. The monocoque carbon fibre chassis is supremely stiff, and the Proactive Chassis Control II suspension reads the road surface 1,000 times per second. The 720S is simply extraordinary.",
    img: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: 14,
    brand: "Tesla",
    model: "Model S Plaid",
    year: 2024,
    price: 89990,
    hp: 1020,
    torque: "1050 lb-ft",
    zeroToSixty: "1.99s",
    topSpeed: "200 mph",
    category: "Electric Cars",
    badge: "Quickest",
    desc: "The world's quickest production saloon. Zero to 60 in under 2 seconds — without a drop of fuel.",
    fullDesc: "The Tesla Model S Plaid is the most compelling argument for electric performance yet produced. Three electric motors produce a combined 1,020 bhp and a staggering 1,050 lb-ft of torque, delivering 0–60 mph in just 1.99 seconds with rollout subtracted. The quarter mile is dispatched in 9.23 seconds. Range is 396 miles on a single charge. Inside, the 17-inch cinematic display and 22-speaker audio system create an environment that is simultaneously minimalist and decadent. The Plaid renders every combustion saloon on earth obsolete.",
    img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80&auto=format&fit=crop"
  },
  {
    id: 15,
    brand: "Nissan",
    model: "GT-R Nismo",
    year: 2024,
    price: 212985,
    hp: 600,
    torque: "481 lb-ft",
    zeroToSixty: "2.7s",
    topSpeed: "196 mph",
    category: "Sports Cars",
    badge: "Legend",
    desc: "Godzilla in Nismo trim. The GT-R Nismo is a hand-built track weapon with decades of motorsport DNA.",
    fullDesc: "The Nissan GT-R Nismo is the ultimate expression of Godzilla — Nissan's legendary twin-turbocharged, all-wheel-drive supercar. The Nismo version uses hand-assembled VR38DETT engines, each matched to its specific car, producing 600 bhp and 481 lb-ft of torque. Each engine takes approximately 6 hours to build. The GT-R Nismo has lapped the Nürburgring Nordschleife faster than some dedicated track cars, thanks in part to its advanced ATTESA E-TS all-wheel-drive system that can vector torque between all four wheels in milliseconds.",
    img: "https://images.unsplash.com/photo-1596566699370-caa5ac7f1e83?w=800&q=80&auto=format&fit=crop"
  }
];

// ── State ──────────────────────────────────────────────────────────────────
let activeFilters = { brand: "", category: "", sort: "", search: "" };
let testimonialIndex = 0;

// ── DOM Ready ──────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderCars();
  populateCompareDropdowns();
  initNavbar();
  initSearch();
  initHamburger();
  initFilters();
  initScrollReveal();
  initStats();
  initTestimonials();
  initFAQ();
  initScrollTop();
  initModal();
  initCompare();
});

// ── Render Cars ────────────────────────────────────────────────────────────
function renderCars(cars = CARS) {
  const grid = document.getElementById("carsGrid");
  const noResults = document.getElementById("noResults");

  if (cars.length === 0) {
    grid.innerHTML = "";
    noResults.classList.remove("hidden");
    return;
  }
  noResults.classList.add("hidden");

  grid.innerHTML = cars.map(car => `
    <div class="car-card reveal" data-id="${car.id}" onclick="openModal(${car.id})">
      <div class="car-card-img">
        <img src="${car.img}" alt="${car.brand} ${car.model}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80'" />
        <span class="car-card-badge">${car.badge}</span>
      </div>
      <div class="car-card-body">
        <p class="car-card-brand">${car.brand} · ${car.year}</p>
        <h3 class="car-card-name">${car.model}</h3>
        <div class="car-card-specs">
          <div class="car-spec">
            <span class="car-spec-val">${car.hp.toLocaleString()}</span>
            <span class="car-spec-key">BHP</span>
          </div>
          <div class="car-spec">
            <span class="car-spec-val">${car.zeroToSixty}</span>
            <span class="car-spec-key">0–60 mph</span>
          </div>
          <div class="car-spec">
            <span class="car-spec-val">${car.topSpeed}</span>
            <span class="car-spec-key">Top Speed</span>
          </div>
        </div>
        <p class="car-card-desc">${car.desc}</p>
        <div class="car-card-footer">
          <span class="car-price">$${car.price.toLocaleString()}</span>
          <button class="btn-gold btn-sm" onclick="event.stopPropagation(); openModal(${car.id})">View Details</button>
        </div>
      </div>
    </div>
  `).join("");

  // Re-trigger reveal on new cards
  setTimeout(() => {
    document.querySelectorAll(".car-card.reveal").forEach(el => {
      observer.observe(el);
    });
  }, 50);
}

// ── Filtering ──────────────────────────────────────────────────────────────
function applyFilters() {
  let filtered = [...CARS];

  if (activeFilters.brand) {
    filtered = filtered.filter(c => c.brand.toLowerCase() === activeFilters.brand.toLowerCase());
  }
  if (activeFilters.category) {
    filtered = filtered.filter(c => c.category === activeFilters.category);
  }
  if (activeFilters.search) {
    const q = activeFilters.search.toLowerCase();
    filtered = filtered.filter(c =>
      c.model.toLowerCase().includes(q) ||
      c.brand.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q)
    );
  }
  if (activeFilters.sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  if (activeFilters.sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
  if (activeFilters.sort === "hp-desc") filtered.sort((a, b) => b.hp - a.hp);

  renderCars(filtered);
}

function initFilters() {
  document.getElementById("filterBrand").addEventListener("change", e => {
    activeFilters.brand = e.target.value;
    applyFilters();
    scrollToCars();
  });
  document.getElementById("filterCategory").addEventListener("change", e => {
    activeFilters.category = e.target.value;
    applyFilters();
    scrollToCars();
  });
  document.getElementById("filterSort").addEventListener("change", e => {
    activeFilters.sort = e.target.value;
    applyFilters();
  });
  document.getElementById("resetFilters").addEventListener("click", () => {
    activeFilters = { brand: "", category: "", sort: "", search: "" };
    document.getElementById("filterBrand").value = "";
    document.getElementById("filterCategory").value = "";
    document.getElementById("filterSort").value = "";
    document.getElementById("searchInput").value = "";
    renderCars();
  });
}

function filterByBrand(brand) {
  activeFilters.brand = brand;
  document.getElementById("filterBrand").value = brand;
  applyFilters();
  scrollToCars();
}

function filterByCategory(cat) {
  activeFilters.category = cat;
  document.getElementById("filterCategory").value = cat;
  applyFilters();
  scrollToCars();
}

function scrollToCars() {
  document.getElementById("featured-cars").scrollIntoView({ behavior: "smooth", block: "start" });
}

// ── Search ─────────────────────────────────────────────────────────────────
function initSearch() {
  const toggle = document.getElementById("searchToggle");
  const bar = document.getElementById("searchBar");
  const input = document.getElementById("searchInput");
  const close = document.getElementById("searchClose");

  toggle.addEventListener("click", () => {
    bar.classList.toggle("open");
    if (bar.classList.contains("open")) input.focus();
  });
  close.addEventListener("click", () => {
    bar.classList.remove("open");
    input.value = "";
    activeFilters.search = "";
    applyFilters();
  });
  input.addEventListener("input", e => {
    activeFilters.search = e.target.value.trim();
    applyFilters();
    if (activeFilters.search) scrollToCars();
  });
}

// ── Navbar ─────────────────────────────────────────────────────────────────
function initNavbar() {
  const nav = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  });
}

// ── Hamburger ─────────────────────────────────────────────────────────────
function initHamburger() {
  const btn = document.getElementById("hamburger");
  const links = document.getElementById("navLinks");
  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    links.classList.toggle("open");
  });
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      btn.classList.remove("open");
      links.classList.remove("open");
    });
  });
}

// ── Scroll Reveal ─────────────────────────────────────────────────────────
let observer;
function initScrollReveal() {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, (entry.target.dataset.delay || 0) * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.dataset.delay = i % 4;
    observer.observe(el);
  });
}

// ── Animated Counters ─────────────────────────────────────────────────────
function initStats() {
  const statNums = document.querySelectorAll(".stat-num");
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        animateCounter(el, target);
        statObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => statObserver.observe(el));
}

function animateCounter(el, target) {
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current).toLocaleString();
    }
  }, 16);
}

// ── Testimonials Slider ───────────────────────────────────────────────────
function initTestimonials() {
  const track = document.getElementById("testimonialsTrack");
  const cards = track.querySelectorAll(".testimonial-card");
  const dotsContainer = document.getElementById("sliderDots");
  const prev = document.getElementById("prevTestimonial");
  const next = document.getElementById("nextTestimonial");

  const visibleCount = () => window.innerWidth < 700 ? 1 : window.innerWidth < 1100 ? 2 : 3;
  const totalSlides = () => Math.ceil(cards.length / visibleCount());

  function buildDots() {
    dotsContainer.innerHTML = "";
    for (let i = 0; i < totalSlides(); i++) {
      const dot = document.createElement("button");
      dot.className = "slider-dot" + (i === testimonialIndex ? " active" : "");
      dot.addEventListener("click", () => goTo(i));
      dotsContainer.appendChild(dot);
    }
  }

  function goTo(idx) {
    testimonialIndex = Math.max(0, Math.min(idx, totalSlides() - 1));
    const cardWidth = track.querySelector(".testimonial-card").offsetWidth + 24;
    track.style.transform = `translateX(-${testimonialIndex * visibleCount() * cardWidth}px)`;
    buildDots();
  }

  prev.addEventListener("click", () => goTo(testimonialIndex - 1));
  next.addEventListener("click", () => goTo(testimonialIndex + 1));
  window.addEventListener("resize", () => { testimonialIndex = 0; buildDots(); goTo(0); });

  buildDots();

  // Auto-advance
  setInterval(() => {
    const next = (testimonialIndex + 1) % totalSlides();
    goTo(next);
  }, 6000);
}

// ── FAQ ────────────────────────────────────────────────────────────────────
function initFAQ() {
  document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(i => i.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });
}

// ── Scroll To Top ─────────────────────────────────────────────────────────
function initScrollTop() {
  const btn = document.getElementById("scrollTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("hidden", window.scrollY < 500);
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// ── Modal ─────────────────────────────────────────────────────────────────
function initModal() {
  const backdrop = document.getElementById("carModal");
  const closeBtn = document.getElementById("modalClose");

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", e => {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });
}

function openModal(id) {
  const car = CARS.find(c => c.id === id);
  if (!car) return;

  const content = document.getElementById("modalContent");
  content.innerHTML = `
    <div class="modal-img">
      <img src="${car.img}" alt="${car.brand} ${car.model}" onerror="this.src='https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80'" />
    </div>
    <div class="modal-body">
      <p class="modal-brand">${car.brand} · ${car.year} · ${car.category}</p>
      <h2 class="modal-name">${car.model}</h2>
      <p class="modal-price">$${car.price.toLocaleString()}</p>
      <p class="modal-desc">${car.fullDesc}</p>
      <div class="modal-specs-grid">
        <div class="modal-spec-item">
          <span class="modal-spec-val">${car.hp.toLocaleString()}</span>
          <span class="modal-spec-key">Horsepower</span>
        </div>
        <div class="modal-spec-item">
          <span class="modal-spec-val">${car.torque}</span>
          <span class="modal-spec-key">Torque</span>
        </div>
        <div class="modal-spec-item">
          <span class="modal-spec-val">${car.zeroToSixty}</span>
          <span class="modal-spec-key">0–60 mph</span>
        </div>
        <div class="modal-spec-item">
          <span class="modal-spec-val">${car.topSpeed}</span>
          <span class="modal-spec-key">Top Speed</span>
        </div>
      </div>
      <div class="modal-actions">
        <a href="#contact" class="btn-gold" onclick="closeModal()">Book Test Drive</a>
        <a href="#contact" class="btn-outline" onclick="closeModal()">Request Quote</a>
      </div>
    </div>
  `;

  const backdrop = document.getElementById("carModal");
  backdrop.classList.remove("hidden");
  setTimeout(() => backdrop.classList.add("visible"), 10);
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const backdrop = document.getElementById("carModal");
  backdrop.classList.remove("visible");
  setTimeout(() => {
    backdrop.classList.add("hidden");
    document.body.style.overflow = "";
  }, 300);
}

// ── Compare ────────────────────────────────────────────────────────────────
function populateCompareDropdowns() {
  const options = CARS.map(c => `<option value="${c.id}">${c.brand} ${c.model}</option>`).join("");
  ["cmp1", "cmp2", "cmp3"].forEach(id => {
    document.getElementById(id).innerHTML = '<option value="">— Select —</option>' + options;
  });
}

function initCompare() {
  document.getElementById("compareBtn").addEventListener("click", () => {
    const ids = ["cmp1", "cmp2", "cmp3"]
      .map(id => parseInt(document.getElementById(id).value))
      .filter(id => !isNaN(id));

    if (ids.length < 2) {
      alert("Please select at least 2 vehicles to compare.");
      return;
    }

    const cars = ids.map(id => CARS.find(c => c.id === id));
    renderCompareTable(cars);
  });
}

function renderCompareTable(cars) {
  const result = document.getElementById("compareResult");

  const maxVal = (key) => {
    const vals = cars.map(c => parseFloat(c[key]) || 0);
    return Math.max(...vals);
  };
  const minVal = (key) => {
    const vals = cars.map(c => parseFloat(c[key]) || 0);
    return Math.min(...vals.filter(v => v > 0));
  };

  const rows = [
    { label: "Price", key: "price", format: v => "$" + v.toLocaleString(), bestFn: "min" },
    { label: "Horsepower", key: "hp", format: v => v.toLocaleString() + " bhp", bestFn: "max" },
    { label: "Torque", key: "torque", format: v => v, bestFn: null },
    { label: "0–60 mph", key: "zeroToSixty", format: v => v, bestFn: "min" },
    { label: "Top Speed", key: "topSpeed", format: v => v, bestFn: "max" },
    { label: "Category", key: "category", format: v => v, bestFn: null },
  ];

  const header = `<tr>
    <th style="text-align:left">Specification</th>
    ${cars.map(c => `
      <th>
        <img class="compare-car-img" src="${c.img}" alt="${c.model}" />
        <div>${c.brand}</div>
        <div style="font-size:0.8rem;color:var(--text-muted)">${c.model}</div>
      </th>
    `).join("")}
  </tr>`;

  const body = rows.map(row => {
    const vals = cars.map(c => c[row.key]);
    const numVals = vals.map(v => parseFloat(v) || 0);
    let bestIdx = -1;
    if (row.bestFn === "max") bestIdx = numVals.indexOf(Math.max(...numVals));
    if (row.bestFn === "min") bestIdx = numVals.indexOf(Math.min(...numVals.filter(v => v > 0)));

    return `<tr>
      <td>${row.label}</td>
      ${vals.map((v, i) => `
        <td class="${i === bestIdx ? 'best' : ''}">${row.format(v)}</td>
      `).join("")}
    </tr>`;
  }).join("");

  result.innerHTML = `
    <table class="compare-table">
      <thead>${header}</thead>
      <tbody>${body}</tbody>
    </table>
    <p style="margin-top:12px;font-size:0.78rem;color:var(--text-muted);text-align:center">
      <span style="color:var(--gold)">Gold</span> indicates the best value in each category
    </p>
  `;
}

// ── Contact Form ───────────────────────────────────────────────────────────
function handleFormSubmit(e) {
  e.preventDefault();
  const success = document.getElementById("formSuccess");
  success.classList.remove("hidden");
  const btn = e.target;
  btn.textContent = "Sent ✓";
  btn.style.opacity = "0.6";
  btn.disabled = true;
  setTimeout(() => {
    success.classList.add("hidden");
    btn.textContent = "Send Enquiry";
    btn.style.opacity = "";
    btn.disabled = false;
  }, 5000);
}
