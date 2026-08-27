/* ==========================================================================
   PORTFOLIO DATA CONFIGURATION (12 UNIQUE PROJECTS)
   ========================================================================== */
const portfolioProjects = [
  {
    id: 1,
    title: "Luxury Real Estate Walkthrough",
    client: "Real Estate Brand",
    categoryLabel: "REAL ESTATE",
    videoUrl: "https://res.cloudinary.com/tf0gxhob/video/upload/v1787648597/to_web3.mov",
    description: "Smooth architectural video showcase featuring fluid camera stabilization, ambient audio layering, and elegant pacing.",
    tools: ["Adobe Premiere Pro", "Photoshop"],
    year: "2026"
  },
  {
    id: 2,
    title: "Automobile & Automotive Showcase",
    client: "Automobile Showcase",
    categoryLabel: "AUTOMOBILE",
    videoUrl: "https://res.cloudinary.com/tf0gxhob/video/upload/v1787648596/to_web.mov",
    description: "Cinematic automotive commercial cut with speed ramps, aggressive sound design, precision color grading, and showroom-grade finish.",
    tools: ["Adobe Premiere Pro", "Color Grading", "Audio Sync"],
    year: "2026"
  },
  {
    id: 3,
    title: "The Man Company — Date Night Campaign",
    client: "The Man Company",
    categoryLabel: "GROOMING",
    videoUrl: "https://res.cloudinary.com/tf0gxhob/video/upload/v1787645464/Aaa_The_Man_Company___Date.mp4",
    description: "High-impact commercial video edit featuring punchy sound design, seamless lifestyle pacing, and high-conversion visual storytelling.",
    tools: ["Adobe Premiere Pro", "CapCut", "Sound Design"],
    year: "2025"
  },
  {
    id: 4,
    title: "The Man Company — Product Spotlight",
    client: "The Man Company",
    categoryLabel: "GROOMING",
    videoUrl: "https://res.cloudinary.com/tf0gxhob/video/upload/v1787645463/Aaa1_Man_Company_D1R01.mov",
    description: "Fast-paced D2C ad edit with split-second dynamic cuts, crisp motion framing, and high-retention product placement.",
    tools: ["Adobe Premiere Pro", "Color Grading"],
    year: "2025"
  },
  {
    id: 5,
    title: "Salon & Modern Grooming Experience",
    client: "Salon & Grooming",
    categoryLabel: "GROOMING",
    videoUrl: "https://res.cloudinary.com/tf0gxhob/video/upload/v1787645459/Grooming.mp4",
    description: "Snappy social-first edit highlighting salon craft, client transformations, and energetic background rhythm.",
    tools: ["CapCut", "Adobe Premiere Pro"],
    year: "2025"
  },
  {
    id: 6,
    title: "SaaS & Tech Product Launch",
    client: "IT / Tech / Startup",
    categoryLabel: "TECH & STARTUPS",
    videoUrl: "https://res.cloudinary.com/tf0gxhob/video/upload/v1787645460/HQ_Final.mov",
    description: "Polished tech startup promotional video showcasing product UI workflow, sleek kinetic typography, and corporate narrative.",
    tools: ["Adobe Premiere Pro", "Motion Graphics", "Photoshop"],
    year: "2026"
  },
  {
    id: 7,
    title: "Tech Innovation & Founder Story",
    client: "Tech Client",
    categoryLabel: "TECH & STARTUPS",
    videoUrl: "https://res.cloudinary.com/tf0gxhob/video/upload/v1787645471/Subham.mp4",
    description: "Engaging talking-head and B-roll tech video engineered for maximum audience retention with clean lower-thirds and audio leveling.",
    tools: ["Adobe Premiere Pro", "CapCut"],
    year: "2025"
  },
  {
    id: 8,
    title: "Veda Mandir Devotional Series (Hindi)",
    client: "Veda Mandir",
    categoryLabel: "DEVOTIONAL & CULTURE",
    videoUrl: "https://res.cloudinary.com/tf0gxhob/video/upload/v1787645462/Aaa_Vedamandir_Hindi_d01.mov",
    description: "Serene cultural and spiritual video edit combining traditional aesthetic grading, layered chants, and smooth transitions.",
    tools: ["Adobe Premiere Pro", "Color Grading"],
    year: "2025"
  },
  {
    id: 9,
    title: "Kannada Devotional & Cultural Film",
    client: "Regional Cultural Series",
    categoryLabel: "DEVOTIONAL & CULTURE",
    videoUrl: "https://res.cloudinary.com/tf0gxhob/video/upload/v1787645464/Kannada.mov",
    description: "Vibrant regional narrative editing balanced with devotional soundtracks, color correction, and culturally aligned typography.",
    tools: ["Adobe Premiere Pro", "Audio Sync"],
    year: "2025"
  },
  {
    id: 10,
    title: "Tamil Devotional & Temple Feature",
    client: "Regional Cultural Series",
    categoryLabel: "DEVOTIONAL & CULTURE",
    videoUrl: "https://res.cloudinary.com/tf0gxhob/video/upload/v1787645468/Tamil.mov",
    description: "Rich devotional storytelling featuring sacred temple architectural footage, traditional instrument sync, and warm tone curves.",
    tools: ["Adobe Premiere Pro", "Color Correction"],
    year: "2025"
  },
  {
    id: 11,
    title: "Healthcare Awareness (Assamese)",
    client: "Healthcare Partner",
    categoryLabel: "HEALTHCARE",
    videoUrl: "https://res.cloudinary.com/tf0gxhob/video/upload/v1787648609/to_web2.mov",
    description: "Educational regional health awareness video structured with clean subtitles, authoritative pacing, and patient trust cues.",
    tools: ["Adobe Premiere Pro", "Canva", "Audio Mastering"],
    year: "2026"
  },
  {
    id: 12,
    title: "Creative Motion Graphics Introduction",
    client: "Creative Portfolio Showcase",
    categoryLabel: "MOTION GRAPHICS",
    videoUrl: "https://res.cloudinary.com/tf0gxhob/video/upload/v1787645465/Sample_Introduction.mp4",
    description: "Dynamic title animations, shape morphs, kinetic text reveal sequences, and modern visual branding.",
    tools: ["Motion Graphics", "Photoshop", "Premiere Pro"],
    year: "2026"
  }
];

function initPortfolioSite() {
  /* ==========================================================================
     DYNAMIC ROLE ROTATION
     ========================================================================== */
  const roles = [
    "VIDEO EDITING",
    "HIGH RETENTION REELS",
    "COMMERCIAL ADS",
    "MOTION GRAPHICS"
  ];
  let currentRoleIndex = 0;
  const dynamicRoleEl = document.getElementById("dynamicRole");

  if (dynamicRoleEl) {
    setInterval(function() {
      dynamicRoleEl.style.opacity = "0";
      setTimeout(function() {
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        dynamicRoleEl.textContent = roles[currentRoleIndex];
        dynamicRoleEl.style.opacity = "1";
      }, 300);
    }, 2800);
  }

  /* ==========================================================================
     CUSTOM CURSOR
     ========================================================================== */
  const cursorDot = document.getElementById("cursorDot");
  const cursorOutline = document.getElementById("cursorOutline");

  if (cursorDot && cursorOutline) {
    window.addEventListener("mousemove", function(e) {
      cursorDot.style.left = e.clientX + "px";
      cursorDot.style.top = e.clientY + "px";

      if (cursorOutline.animate) {
        cursorOutline.animate({
          left: e.clientX + "px",
          top: e.clientY + "px"
        }, { duration: 400, fill: "forwards" });
      }
    });

    document.querySelectorAll(".project-card, .btn, .social-btn").forEach(function(el) {
      el.addEventListener("mouseenter", function() {
        cursorOutline.style.width = "54px";
        cursorOutline.style.height = "54px";
        cursorOutline.style.backgroundColor = "rgba(91, 92, 255, 0.15)";
      });
      el.addEventListener("mouseleave", function() {
        cursorOutline.style.width = "32px";
        cursorOutline.style.height = "32px";
        cursorOutline.style.backgroundColor = "transparent";
      });
    });
  }

  /* ==========================================================================
     STICKY NAVBAR & MOBILE MENU
     ========================================================================== */
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function() {
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });

  const mobileToggle = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", function() {
      navLinks.classList.toggle("mobile-open");
    });
  }

  /* ==========================================================================
     DUAL HORIZONTAL INFINITE AUTO-SCROLLING WORK ROWS
     ========================================================================== */
  const track1 = document.getElementById("scrollTrack1");
  const track2 = document.getElementById("scrollTrack2");

  if (track1 && track2) {
    // Split 12 unique projects into 2 distinct groups (6 each)
    const row1Projects = portfolioProjects.slice(0, 6);
    const row2Projects = portfolioProjects.slice(6, 12);

    function createCardHTML(project) {
      return (
        '<div class="project-card">' +
          '<div class="project-card-thumb">' +
            '<video src="' + project.videoUrl + '" autoplay muted loop playsinline preload="none"></video>' +
            '<span class="project-tag-badge">' + project.categoryLabel + '</span>' +
          '</div>' +
          '<div class="project-card-info">' +
            '<h3>' + project.title + '</h3>' +
            '<p class="project-client">' + project.client + '</p>' +
            '<p class="project-desc">' + project.description + '</p>' +
          '</div>' +
        '</div>'
      );
    }

    // Populate tracks twice to allow seamless CSS infinite looping
    let html1 = "";
    let html2 = "";

    row1Projects.forEach(function(p) { html1 += createCardHTML(p); });
    row1Projects.forEach(function(p) { html1 += createCardHTML(p); }); // duplicate for loop

    row2Projects.forEach(function(p) { html2 += createCardHTML(p); });
    row2Projects.forEach(function(p) { html2 += createCardHTML(p); }); // duplicate for loop

    track1.innerHTML = html1;
    track2.innerHTML = html2;

    // Attach click events and video autoplay triggers to generated cards
    document.querySelectorAll(".project-card").forEach(function(card, index) {
      const actualIndex = index % portfolioProjects.length;
      const project = portfolioProjects[actualIndex];
      
      card.onclick = function() {
        openProjectModal(project);
      };

      const videoEl = card.querySelector("video");
      if (videoEl) {
        videoEl.play().catch(function() {});
      }
    });
  }

  /* ==========================================================================
     PROJECT MODAL
     ========================================================================== */
  const projectModal = document.getElementById("projectModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalClose = document.getElementById("modalClose");

  function openProjectModal(project) {
    if (!projectModal) return;

    const modalCat = document.getElementById("modalCat");
    const modalTitle = document.getElementById("modalTitle");
    const modalClient = document.getElementById("modalClient");
    const modalDesc = document.getElementById("modalDesc");
    const toolsContainer = document.getElementById("modalTools");
    const videoSlot = document.getElementById("modalVideoSlot");

    if (modalCat) modalCat.textContent = project.categoryLabel;
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalClient) modalClient.innerHTML = 'Client / Brand: <strong>' + project.client + '</strong>';
    if (modalDesc) modalDesc.textContent = project.description;

    if (toolsContainer) {
      toolsContainer.innerHTML = "";
      project.tools.forEach(function(tool) {
        const chip = document.createElement("span");
        chip.className = "tool-chip";
        chip.textContent = tool;
        toolsContainer.appendChild(chip);
      });
    }

    if (videoSlot) {
      videoSlot.innerHTML = 
        '<video controls autoplay playsinline style="width:100%; max-height:480px; border-radius:8px; background:#000;">' +
          '<source src="' + project.videoUrl + '" type="video/mp4">' +
          'Your browser does not support the video tag.' +
        '</video>';
    }

    projectModal.classList.add("active");
  }

  function closeModal() {
    if (!projectModal) return;
    projectModal.classList.remove("active");
    const videoSlot = document.getElementById("modalVideoSlot");
    if (videoSlot) videoSlot.innerHTML = "";
  }

  if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);
  if (modalClose) modalClose.addEventListener("click", closeModal);

  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && projectModal && projectModal.classList.contains("active")) {
      closeModal();
    }
  });

  /* ==========================================================================
     SHOWREEL PLAYER
     ========================================================================== */
  const playShowreelBtn = document.getElementById("playShowreelBtn");
  const mainShowreelVideo = document.getElementById("mainShowreelVideo");

  if (playShowreelBtn && mainShowreelVideo) {
    playShowreelBtn.addEventListener("click", function() {
      playShowreelBtn.style.display = "none";
      mainShowreelVideo.controls = true;
      mainShowreelVideo.muted = false;
      mainShowreelVideo.play();
    });
  }
}

// Initialise safely
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPortfolioSite);
} else {
  initPortfolioSite();
}
