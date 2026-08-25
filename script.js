/* ==========================================================================
   PORTFOLIO DATA CONFIGURATION
   Easily add or update your video editing work here.
   ========================================================================== */
const portfolioProjects = [
  {
    id: 1,
    title: "High-Retention Fitness Promo Reel",
    client: "Anvex Media / Fitness Partner",
    category: "reels",
    categoryLabel: "REELS",
    thumbnail: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    videoUrl: "YOUR_PROJECT_VIDEO_LINK_1.mp4", // Drop your MP4 link, YouTube/Vimeo Embed, or Drive Link
    description: "Designed with explosive sound design, dynamic zoom ramps, and kinetic subtitle motion to achieve >80% average watch duration.",
    tools: ["Premiere Pro", "CapCut", "Photoshop"],
    year: "2026"
  },
  {
    id: 2,
    title: "Direct-to-Consumer UGC Ad",
    client: "E-Commerce Brand Campaign",
    category: "ads",
    categoryLabel: "ADS & UGC",
    thumbnail: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
    videoUrl: "YOUR_PROJECT_VIDEO_LINK_2.mp4",
    description: "Authentic pacing with pattern interrupts, split-screen proof demonstrations, and high-conversion hooks.",
    tools: ["Premiere Pro", "CapCut"],
    year: "2025"
  },
  {
    id: 3,
    title: "Commercial Product Spotlight",
    client: "Commercial Client",
    category: "brand",
    categoryLabel: "BRAND CONTENT",
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    videoUrl: "YOUR_PROJECT_VIDEO_LINK_3.mp4",
    description: "Cinematic color grading, speed ramping, and pristine vocal and ambient audio mastering.",
    tools: ["Premiere Pro", "Photoshop", "Canva"],
    year: "2025"
  },
  {
    id: 4,
    title: "Educational Hook & Retention Reel",
    client: "Digital Creator",
    category: "reels",
    categoryLabel: "REELS",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    videoUrl: "YOUR_PROJECT_VIDEO_LINK_4.mp4",
    description: "Fast-paced storytelling with custom sound cues, smooth transitions, and animated infographics.",
    tools: ["CapCut", "Premiere Pro"],
    year: "2026"
  }
];

/* ==========================================================================
   DYNAMIC ROLE ROTATION
   ========================================================================== */
const roles = [
  "VIDEO EDITOR",
  "CONTENT CREATOR",
  "CREATIVE STORYTELLER",
  "MOTION DESIGNER"
];
let currentRoleIndex = 0;
const dynamicRoleEl = document.getElementById("dynamicRole");

setInterval(() => {
  if (!dynamicRoleEl) return;
  dynamicRoleEl.style.opacity = "0";
  setTimeout(() => {
    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
    dynamicRoleEl.textContent = roles[currentRoleIndex];
    dynamicRoleEl.style.opacity = "1";
  }, 300);
}, 2800);

/* ==========================================================================
   CUSTOM CURSOR LOGIC
   ========================================================================== */
const cursorDot = document.getElementById("cursorDot");
const cursorOutline = document.getElementById("cursorOutline");

window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, { duration: 400, fill: "forwards" });
});

// Magnetic effect on interactive elements
document.querySelectorAll(".magnetic, .filter-tab, .project-card, .btn").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursorOutline.style.width = "54px";
    cursorOutline.style.height = "54px";
    cursorOutline.style.backgroundColor = "rgba(91, 92, 255, 0.15)";
  });
  el.addEventListener("mouseleave", () => {
    cursorOutline.style.width = "32px";
    cursorOutline.style.height = "32px";
    cursorOutline.style.backgroundColor = "transparent";
  });
});

/* ==========================================================================
   STICKY NAVBAR BACKGROUND BLUR
   ========================================================================== */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const mobileToggle = document.getElementById("mobileToggle");
const navLinks = document.querySelector(".nav-links");
mobileToggle.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-open");
});

/* ==========================================================================
   PORTFOLIO RENDERING & FILTERING
   ========================================================================== */
const portfolioGrid = document.getElementById("portfolioGrid");
const filterTabs = document.querySelectorAll(".filter-tab");

function renderPortfolio(filter = "all") {
  if (!portfolioGrid) return;
  portfolioGrid.innerHTML = "";

  const filtered = filter === "all" 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === filter);

  filtered.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.onclick = () => openProjectModal(project);

    card.innerHTML = `
      <div class="project-card-thumb">
        <img src="${project.thumbnail}" alt="${project.title}" loading="lazy" />
        <span class="project-tag-badge">${project.categoryLabel}</span>
      </div>
      <div class="project-card-info">
        <h3>${project.title}</h3>
        <p class="project-client">${project.client}</p>
        <p class="project-desc">${project.description}</p>
      </div>
    `;
    portfolioGrid.appendChild(card);
  });
}

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    filterTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderPortfolio(tab.dataset.filter);
  });
});

/* ==========================================================================
   PROJECT MODAL POPUP
   ========================================================================== */
const projectModal = document.getElementById("projectModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");

function openProjectModal(project) {
  document.getElementById("modalCat").textContent = project.categoryLabel;
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalClient").innerHTML = `Client: <strong>${project.client}</strong>`;
  document.getElementById("modalDesc").textContent = project.description;

  const toolsContainer = document.getElementById("modalTools");
  toolsContainer.innerHTML = "";
  project.tools.forEach(tool => {
    const chip = document.createElement("span");
    chip.className = "tool-chip";
    chip.textContent = tool;
    toolsContainer.appendChild(chip);
  });

  const videoSlot = document.getElementById("modalVideoSlot");
  if (project.videoUrl.endsWith(".mp4")) {
    videoSlot.innerHTML = `
      <video controls autoplay style="width:100%; max-height:450px; border-radius:8px;">
        <source src="${project.videoUrl}" type="video/mp4">
      </video>
    `;
  } else {
    // If embedding an iframe (e.g., YouTube/Vimeo)
    videoSlot.innerHTML = `
      <div style="padding: 2rem; color: #a1a1a1; text-align: center;">
        <p>Video Source: <strong>${project.videoUrl}</strong></p>
        <small>Replace this placeholder URL in script.js with your hosted MP4 or YouTube embed.</small>
      </div>
    `;
  }

  projectModal.classList.add("active");
}

function closeModal() {
  projectModal.classList.remove("active");
  document.getElementById("modalVideoSlot").innerHTML = "";
}

modalBackdrop.addEventListener("click", closeModal);
modalClose.addEventListener("click", closeModal);

/* ==========================================================================
   SHOWREEL PLAYER INTERACTION
   ========================================================================== */
const playShowreelBtn = document.getElementById("playShowreelBtn");
const mainShowreelVideo = document.getElementById("mainShowreelVideo");

if (playShowreelBtn && mainShowreelVideo) {
  playShowreelBtn.addEventListener("click", () => {
    playShowreelBtn.style.display = "none";
    mainShowreelVideo.controls = true;
    mainShowreelVideo.muted = false;
    mainShowreelVideo.play();
  });
}

/* ==========================================================================
   CONTACT FORM SUBMISSION HANDLER
   ========================================================================== */
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  alert(`Thank you, ${name}! Your project message has been submitted. Protim will get back to you shortly.`);
  e.target.reset();
}

// Initial render
renderPortfolio();
