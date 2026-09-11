"use strict";

window.addEventListener("error", (e) => {
  const box = document.createElement("div");
  box.style.cssText = "position:fixed;bottom:12px;left:12px;z-index:99999;background:#7f1d1d;color:#fff;padding:8px 12px;border-radius:8px;font:12px sans-serif;max-width:80vw";
  box.textContent = "Page error: " + (e.message || "unknown") + " @ " + (e.filename || "?") + ":" + e.lineno;
  document.body.appendChild(box);
});
window.addEventListener("unhandledrejection", (e) => {
  const box = document.createElement("div");
  box.style.cssText = "position:fixed;bottom:76px;left:12px;z-index:99999;background:#7f1d1d;color:#fff;padding:8px 12px;border-radius:8px;font:12px sans-serif;max-width:80vw";
  box.textContent = "Async error: " + (e.reason && e.reason.message ? e.reason.message : e.reason);
  document.body.appendChild(box);
});

/* ================= DATA ================= */

const services = [
  {
    icon: "bi-inbox-fill",
    title: "Inbox & Email Management",
    description: "Email triage, filters and labels, drafted replies, and a daily summary of what actually needs YOU."
  },
  {
    icon: "bi-calendar-check-fill",
    title: "Calendar & Scheduling",
    description: "Meeting scheduling, appointment booking, travel and event logistics, and follow-ups that never slip through."
  },
  {
    icon: "bi-database-fill",
    title: "Data Entry & CRM Cleanup",
    description: "Messy notes cleaned into accurate, CRM-ready rows — duplicates merged, gaps flagged, nothing invented."
  },
  {
    icon: "bi-megaphone-fill",
    title: "Social Media & Content",
    description: "Content calendars, community replies, and small-budget paid campaigns with honest tracking."
  },
  {
    icon: "bi-calendar2-event-fill",
    title: "Event Coordination",
    description: "Planning, logistics, vendor and crew coordination, speaker comms — from setup to smooth teardown."
  },
  {
    icon: "bi-headset",
    title: "Customer Service & Support",
    description: "Quick, polite responses to inquiries and on-the-spot problem solving, informed by years on the front line."
  }
];

const skills = [
  { name: "HTML", logo: "img/skills/html5.png", category: "Web Dev" },
  { name: "JavaScript", logo: "img/skills/javascript.png", category: "Web Dev" },
  { name: "TypeScript", logo: "img/skills/typescript.png", category: "Web Dev" },
  { name: "React", logo: "img/skills/react.png", category: "Web Dev" },
  { name: "Next.js", logo: "img/skills/nextdotjs.jpg", category: "Web Dev" },
  { name: "Tailwind CSS", logo: "img/skills/tailwindcss.png", category: "Web Dev" },
  { name: "PostgreSQL", logo: "img/skills/postgresql.png", category: "Web Dev" },
  { name: "MySQL", logo: "img/skills/mysql.jpg", category: "Web Dev" },
  { name: "PHP", logo: "img/skills/php.jpg", category: "Web Dev" },
  { name: "Laravel", logo: "img/skills/laravel.png", category: "Web Dev" },
  { name: "Java", logo: "img/skills/java.png", category: "Web Dev" },
  { name: "Email Management", logo: "img/skills/email-management.jpg", category: "Virtual Assistant" },
  { name: "Calendar Management", logo: "img/skills/calendar-management.png", category: "Virtual Assistant" },
  { name: "Data Entry", logo: "img/skills/data-entry.jpg", category: "Virtual Assistant" },
  { name: "Research", logo: "img/skills/research.jpg", category: "Virtual Assistant" },
  { name: "Customer Support", logo: "img/skills/customer-support.jpg", category: "Virtual Assistant" },
  { name: "File Management", logo: "img/skills/file-management.jpg", category: "Virtual Assistant" },
  { name: "Content Scheduling", logo: "img/skills/content-scheduling.jpg", category: "Virtual Assistant" },
  { name: "Content Creation", logo: "img/skills/content-creation.png", category: "Virtual Assistant" },
  { name: "API Integration", logo: "img/skills/api-integration.jpg", category: "Web Dev" },
  { name: "Caption Writing", logo: "img/skills/caption-writing.jpg", category: "Virtual Assistant" },
  { name: "Transcription", logo: "img/skills/transcription.png", category: "Virtual Assistant" },
  { name: "Trend Monitoring", logo: "img/skills/trend-monitoring.jpg", category: "Virtual Assistant" },
  { name: "Brand Awareness Support", logo: "img/skills/brand-awareness.png", category: "Virtual Assistant" },
  { name: "Community Engagement", logo: "img/skills/community-engagement.jpg", category: "Virtual Assistant" },
  { name: "CSS", logo: "img/skills/css3.png", category: "Web Dev" },
  { name: "Graphic Design", icon: "bi-palette-fill", category: "Virtual Assistant" },
  { name: "Video Editing", icon: "bi-film", category: "Virtual Assistant" }
];

const tools = [
  { name: "VS Code", logo: "img/tools/vscode.jpg", category: "Web Dev" },
  { name: "GitHub", logo: "img/tools/github.png", category: "Web Dev" },
  { name: "Vercel", logo: "img/tools/vercel.png", category: "Web Dev" },
  { name: "Trello", logo: "img/tools/trello.jpg", category: "Virtual Assistant" },
  { name: "Google Docs", logo: "img/tools/googledocs.png", category: "Virtual Assistant" },
  { name: "ChatGPT", logo: "img/tools/chatgpt.png", category: "Virtual Assistant" },
  { name: "Canva", logo: "img/tools/canva.jpg", category: "Virtual Assistant" },
  { name: "Zoom", logo: "img/tools/zoom.png", category: "Virtual Assistant" },
  { name: "Cursor", logo: "img/tools/cursor.jpg", category: "Web Dev" },
  { name: "Google Calendar", logo: "img/tools/googlecalendar.png", category: "Virtual Assistant" },
  { name: "Calendly", logo: "img/tools/calendly.png", category: "Virtual Assistant" },
  { name: "Google Sheet", logo: "img/tools/googlesheets.jpg", category: "Virtual Assistant" },
  { name: "Capcut", logo: "img/tools/capcut.png", category: "Virtual Assistant" },
  { name: "Buffer", logo: "img/tools/buffer.png", category: "Virtual Assistant" },
  { name: "Meta Business Suite", logo: "img/tools/meta.png", category: "Virtual Assistant" },
  { name: "Stitch AI", logo: "img/tools/stitch-ai.jpg", category: "Web Dev" },
  { name: "Google Meet", logo: "img/tools/googlemeet.png", category: "Virtual Assistant" },
  { name: "Gdrive", logo: "img/tools/gdrive.jpg", category: "Virtual Assistant" },
  { name: "Pinterest", logo: "img/tools/pinterest.jpg", category: "Virtual Assistant" },
  { name: "Remove BG", logo: "img/tools/removebg.png", category: "Virtual Assistant" },
  { name: "Metricool", logo: "img/tools/metricool.png", category: "Virtual Assistant" }
];

const projects = [];

const gallery = [
  { image: "img/gallery-realtalk.jpg", title: "REALTALK Conference", description: "Technical Head — 2025", category: "Conferences" },
  { image: "img/PAMANA.jpg", title: "PAMANA Exhibit", description: "Technical Head — 2024", category: "Exhibits" },
  { image: "img/gallery-paraluman.jpg", title: "PARALUMAN Event", description: "Technical Head — 2023", category: "Events" },
  { image: "img/MARLIM.jpg", title: "Tigtingan Fair", description: "Ticket Sales — front line", category: "Events" }
];



/* ================= HELPERS ================= */

function initialOf(name) {
  return name.charAt(0).toUpperCase();
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

/* ================= LOADING SPLASH ================= */

function hideSplash() {
  const splash = document.getElementById("loadingSplash");
  if (!splash || splash.dataset.done) return;
  splash.dataset.done = "1";
  splash.classList.add("hide");
  setTimeout(() => splash && splash.remove(), 500);
}
window.addEventListener("load", () => setTimeout(hideSplash, 400));
setTimeout(hideSplash, 3000);

/* ================= PARTICLE CANVAS ================= */

(function initParticles() {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas || window.innerWidth < 768) return;
  const ctx = canvas.getContext("2d");
  const isDark = () => document.documentElement.getAttribute("data-theme") !== "light";

  let points = [];
  let mouse = { x: -9999, y: -9999 };
  let raf;

  function setup() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    points = [];
    for (let x = 0; x < canvas.width; x += 28) {
      for (let y = 0; y < canvas.height; y += 28) {
        points.push({ rx: x, ry: y, cx: x, cy: y, vx: 0, vy: 0 });
      }
    }
  }

  function draw() {
    const dark = isDark();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)";
    points.forEach((p) => {
      const dx = p.cx - mouse.x;
      const dy = p.cy - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        const force = (120 - dist) / 120;
        p.vx += (dx / (dist || 1)) * force * 3;
        p.vy += (dy / (dist || 1)) * force * 3;
      }
      p.cx += (p.rx - p.cx) * 0.08 + p.vx;
      p.cy += (p.ry - p.cy) * 0.08 + p.vy;
      p.vx *= 0.85;
      p.vy *= 0.85;
      ctx.beginPath();
      ctx.arc(p.cx, p.cy, 1.8, 0, 2 * Math.PI);
      ctx.fill();
    });
    raf = requestAnimationFrame(draw);
  }

  window.addEventListener("mousemove", (e) => {
    mouse = { x: e.clientX, y: e.clientY };
  });
  window.addEventListener("resize", setup);

  setup();
  draw();
})();

/* ================= THEME ================= */

function toggleTheme() {
  const html = document.documentElement;
  const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}

/* ================= NAV / DRAWER ================= */

function goTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth" });
}

function openDrawer() {
  document.getElementById("drawer").classList.add("open");
  document.getElementById("drawerOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  document.getElementById("drawer").classList.remove("open");
  document.getElementById("drawerOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("navHamburger").addEventListener("click", openDrawer);

const siteHeader = document.getElementById("siteHeader");
window.addEventListener("scroll", () => {
  siteHeader.classList.toggle("scrolled", window.scrollY > 10);
}, { passive: true });

const sectionIds = ["hero", "about", "services", "skills", "tools", "projects", "gallery", "resume", "certifications", "contact"];

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      document.querySelectorAll(".nav-item").forEach((b) => {
        b.classList.toggle("active", b.dataset.section === id);
      });
      document.querySelectorAll(".drawer-item").forEach((b) => {
        b.classList.toggle("active", b.dataset.section === id);
      });
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sectionIds.forEach((id) => {
  const el = document.getElementById(id);
  if (el) sectionObserver.observe(el);
});

/* ================= REVEAL ON SCROLL ================= */

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add("visible");
        el.addEventListener("animationend", () => el.classList.remove("reveal"), { once: true });
        revealObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ================= TILT CARD ================= */

(function initTilt() {
  const card = document.getElementById("tiltCard");
  if (!card) return;
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateY(${x * 12}deg) rotateX(${y * -12}deg)`;
    card.style.animation = "none";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
    card.style.animation = "";
  });
})();

/* ================= SECTION RENDERERS ================= */

function renderServices() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;
  grid.innerHTML = services
    .map(
      (s, i) => `
      <div class="service-card reveal">
        <div class="service-icon"><i class="bi ${s.icon}"></i></div>
        <h3>${escapeHtml(s.title)}</h3>
        <p>${escapeHtml(s.description)}</p>
      </div>`
    )
    .join("");
  observeReveals(grid);
}

function renderFilteredGrid(gridId, filterId, items) {
  const grid = document.getElementById(gridId);
  const filter = document.getElementById(filterId);
  if (!grid || !filter) return;

  const cats = ["all", ...Array.from(new Set(items.map((i) => i.category).filter(Boolean)))];
  let active = "all";

  filter.innerHTML = cats
    .map((c) => {
      const count = c === "all" ? items.length : items.filter((i) => i.category === c).length;
      return `<button class="filter-chip ${c === "all" ? "active" : ""}" data-cat="${c}">${c === "all" ? `All (${count})` : `${c} (${count})`}</button>`;
    })
    .join("");

  function paint() {
    const shown = active === "all" ? items : items.filter((i) => i.category === active);
    grid.innerHTML = shown
      .map(
        (i, idx) => `
        <div class="skill-card reveal" style="animation-delay:${(idx % 8) * 40}ms">
          ${i.logo
            ? `<img src="${i.logo}" alt="${escapeHtml(i.name)}" class="skill-logo" loading="lazy" />`
            : i.icon
              ? `<div class="skill-icon"><i class="bi ${i.icon}"></i></div>`
              : `<div class="skill-initial">${initialOf(i.name)}</div>`}
          <div class="skill-name">${escapeHtml(i.name)}</div>
        </div>`
      )
      .join("");
    observeReveals(grid);
  }

  filter.addEventListener("click", (e) => {
    const chip = e.target.closest(".filter-chip");
    if (!chip) return;
    active = chip.dataset.cat;
    filter.querySelectorAll(".filter-chip").forEach((c) => c.classList.toggle("active", c === chip));
    paint();
  });

  paint();
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  grid.innerHTML = projects
    .map(
      (p, i) => `
      <div class="project-card reveal" style="animation-delay:${(i % 3) * 80}ms" data-img="${p.image}" data-title="${escapeHtml(p.title)}" data-desc="${escapeHtml(p.description)}">
        <div class="project-cover-wrap">
          <img src="${p.image}" alt="${escapeHtml(p.title)}" class="project-cover" loading="lazy" />
        </div>
        <div class="project-body">
          <h3>${escapeHtml(p.title)}</h3>
          <p class="project-desc">${escapeHtml(p.description)}</p>
          <a href="${p.url}" target="_blank" rel="noreferrer" onclick="event.stopPropagation()" class="project-link"><i class="bi bi-box-arrow-up-right"></i> View</a>
        </div>
      </div>`
    )
    .join("");
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".project-card");
    if (!card || e.target.closest("a")) return;
    openLightbox(card.dataset.img, card.dataset.title, card.dataset.desc);
  });
  observeReveals(grid);
}

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  const filter = document.getElementById("galleryFilter");
  if (!grid || !filter) return;

  const cats = ["all", ...Array.from(new Set(gallery.map((i) => i.category)))];
  let active = "all";

  filter.innerHTML = cats
    .map(
      (c) => `
      <button class="filter-chip ${c === "all" ? "active" : ""}" data-cat="${c}">${c === "all" ? "All" : c}</button>`
    )
    .join("");

function paint() {
    const shown = active === "all" ? gallery : gallery.filter((i) => i.category === active);
    grid.innerHTML = shown
      .map(
        (i, idx) => `
        <div class="gallery-item reveal" style="animation-delay:${(idx % 4) * 50}ms" data-img="${i.image}" data-title="${escapeHtml(i.title)}" data-desc="${escapeHtml(i.description)}">
          <img src="${i.image}" alt="${escapeHtml(i.title)}" class="gallery-img" loading="lazy" />
          <div class="gallery-caption">
            <div class="gallery-title">${escapeHtml(i.title)}</div>
            <div class="gallery-desc">${escapeHtml(i.description)}</div>
          </div>
        </div>`
      )
      .join("");
    observeReveals(grid);
  }

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".gallery-item");
    if (!card) return;
    openLightbox(card.dataset.img, card.dataset.title, card.dataset.desc);
  });

  filter.addEventListener("click", (e) => {
    const chip = e.target.closest(".filter-chip");
    if (!chip) return;
    active = chip.dataset.cat;
    filter.querySelectorAll(".filter-chip").forEach((c) => c.classList.toggle("active", c === chip));
    paint();
  });

  paint();
}

function observeReveals(container) {
  container.querySelectorAll(".reveal:not(.visible)").forEach((el) => revealObserver.observe(el));
}

/* ================= LIGHTBOX ================= */

const lightbox = document.getElementById("lightbox");

function openLightbox(image, title, desc) {
  document.getElementById("lightboxImage").src = image;
  document.getElementById("lightboxImage").alt = title || "";
  document.getElementById("lightboxTitle").textContent = title || "";
  document.getElementById("lightboxDesc").textContent = desc || "";
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
    closeDrawer();
  }
});



/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("cfName").value.trim();
    const email = document.getElementById("cfEmail").value.trim();
    const subject = document.getElementById("cfSubject").value.trim();
    const message = document.getElementById("cfMessage").value.trim();

    const status = document.getElementById("formStatus");
    const btn = document.getElementById("formSubmit");

    const body = `Hi Andrei,${"\n\n"}${message}${"\n\n"}— ${name}${email ? ` (${email})` : ""}`;
    const mailto = `mailto:andreitorres0924@gmail.com?subject=${encodeURIComponent(subject || "Portfolio Inquiry")}&body=${encodeURIComponent(body)}`;

    status.hidden = false;
    status.className = "form-status ok";
    status.textContent = "Opening your email app…";
    btn.disabled = true;
    btn.textContent = "Opening…";

    setTimeout(() => {
      window.location.href = mailto;
      contactForm.reset();
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = "Send Message";
        status.textContent = "Message ready to send! If nothing opened, email me at andreitorres0924@gmail.com";
      }, 800);
    }, 300);
  });
}

/* ================= INIT ================= */

renderServices();
renderFilteredGrid("skillsGrid", "skillsFilter", skills);
renderFilteredGrid("toolsGrid", "toolsFilter", tools);
renderProjects();
renderGallery();
observeReveals(document);
