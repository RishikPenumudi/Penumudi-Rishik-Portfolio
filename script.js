/**
 * RISHIK PENUMUDI — NEXT-GENERATION PERSONAL PORTFOLIO
 * Interaction & Motion Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Mobile Navigation Menu ---
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (menuToggle && mobileMenu) {
    const toggleMenu = () => {
      const isOpen = mobileMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.innerHTML = isOpen 
        ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
        : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    menuToggle.addEventListener('click', toggleMenu);

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (mobileMenu.classList.contains('open')) {
          toggleMenu();
        }
      });
    });
  }

  // --- 2. Active Navigation Scrollspy ---
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-links .nav-link');

  const updateActiveNavLink = () => {
    let currentId = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    desktopNavLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  // --- 3. Copy Email to Clipboard with Toast Notification ---
  const copyButtons = document.querySelectorAll('.copy-email-trigger');
  const toast = document.getElementById('toastNotice');
  const emailToCopy = 'penumudirishik48@gmail.com';

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  };

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(emailToCopy);
        } else {
          // Fallback for non-https / legacy
          const textArea = document.createElement('textarea');
          textArea.value = emailToCopy;
          textArea.style.position = 'fixed';
          textArea.style.left = '-9999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }
        showToast('Email address copied: penumudirishik48@gmail.com');
      } catch (err) {
        showToast('Direct email: penumudirishik48@gmail.com');
      }
    });
  });

  // --- 4. Certifications Category Filtering ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const certCards = document.querySelectorAll('.cert-card');

  if (filterBtns.length > 0 && certCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        certCards.forEach(card => {
          const category = card.dataset.category;
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 200);
          }
        });
      });
    });
  }

  // --- 5. Interactive Modal Dialogs (Case Studies & Cert Viewer) ---
  const modalBackdrop = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const openModalTriggers = document.querySelectorAll('[data-modal-target]');

  // Modal case studies content data
  const modalCaseStudies = {
    'sahaj': {
      title: 'SAHAJ — Smart Automated Heritage Artisan Natural Dyeing System',
      html: `
        <div style="line-height: 1.75; color: var(--text-secondary);">
          <div style="display:flex; align-items:center; gap:10px; margin-bottom: 20px;">
            <span style="font-family:var(--font-mono); font-size:0.75rem; font-weight:700; color:var(--accent-primary); background:var(--bg-accent-subtle); padding:4px 10px; border-radius:4px;">SIH'25 NATIONAL FINALIST</span>
            <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">TEAM ZYRIC</span>
          </div>

          <h4 style="font-size:1.125rem; font-weight:700; color:var(--text-primary); margin-bottom:8px;">1. The Problem Space</h4>
          <p style="margin-bottom:16px;">The global textile industry is among the largest polluters of freshwater due to toxic synthetic chemical dyes, heavy metals, and high-temperature waste effluent. Natural dyes offer an eco-friendly alternative, but traditional artisan practices struggle with <strong>consistency, precise temperature management, extraction timing, and batch repeatability</strong>.</p>

          <h4 style="font-size:1.125rem; font-weight:700; color:var(--text-primary); margin-bottom:8px;">2. Prototype Architecture & Hardware</h4>
          <p style="margin-bottom:12px;">The physical prototype developed by Team Zyric integrates a stainless-steel extraction chamber, automated heating and temperature regulation, motorized stirring, and liquid level sensors:</p>
          <ul style="list-style:disc; margin-left:20px; margin-bottom:16px; font-size:0.9rem;">
            <li><strong>Controller:</strong> Raspberry Pi 4 (core processing and touchscreen interface); earlier prototypes validated on Arduino UNO.</li>
            <li><strong>Temperature Sensing:</strong> DS18B20 digital waterproof thermal sensor for continuous broth monitoring.</li>
            <li><strong>Liquid Control:</strong> High-temperature solid-state relay (SSR) module, solenoid valves, and peristaltic pumps for dye transfer.</li>
            <li><strong>Sensors:</strong> TCS34725 I2C RGB colour sensor for initial liquid chromaticity checks, plus flow and float sensors.</li>
          </ul>

          <h4 style="font-size:1.125rem; font-weight:700; color:var(--text-primary); margin-bottom:8px;">3. AI Integration Workflow (Proposed System)</h4>
          <div style="background:var(--bg-subtle); padding:16px; border-radius:8px; margin-bottom:16px; border:1px solid var(--border-subtle);">
            <p style="font-size:0.875rem; margin-bottom:8px;"><strong>Goal 1 — Colour Palette Identification:</strong> Neural colour matching maps artisan target RGB/Hex to validated botanical recipes (e.g. madder, marigold, indigo).</p>
            <p style="font-size:0.875rem; margin-bottom:8px;"><strong>Goal 2 — Biomass & Water Measurement:</strong> Formulates exact solvent-to-weight ratios based on batch volume and fabric weight.</p>
            <p style="font-size:0.875rem; margin-bottom:8px;"><strong>Goal 3 — Dye Output & Yield Prediction:</strong> Predicts absorption index and calculates expected error deviation prior to immersion.</p>
            <p style="font-size:0.875rem; margin-bottom:0;"><strong>Goal 4 — Process Completion Guidance:</strong> Evaluates extraction equilibrium and prompts automated fabric dye bath cycle.</p>
          </div>

          <h4 style="font-size:1.125rem; font-weight:700; color:var(--text-primary); margin-bottom:8px;">4. Sustainable Development Goals (SDGs)</h4>
          <p style="margin-bottom:8px;">Primary Alignment: <strong>UN SDG 12 (Responsible Consumption and Production)</strong>.</p>
          <p style="margin-bottom:16px;">Supporting Alignment: SDG 6 (Clean Water and Sanitation), SDG 9 (Industry, Innovation & Infrastructure), and SDG 13 (Climate Action).</p>

          <h4 style="font-size:1.125rem; font-weight:700; color:var(--text-primary); margin-bottom:8px;">5. Business Model Strategy</h4>
          <p>Crucially, the enterprise vision does not rely on high-barrier hardware sales. The business model centres on <strong>supplying certified, pre-measured, standardized natural dye pods/cartridges</strong>, making the machine accessible to artisan cooperatives and sustainable fashion micro-studios.</p>
        </div>
      `
    },
        'stock-pipeline': {
      title: 'Real-Time Stock Market Data Pipeline — Architecture',
      html: `
        <div style="line-height: 1.75; color: var(--text-secondary);">
          <div style="display:flex; align-items:center; gap:10px; margin-bottom: 20px;">
            <span style="font-family:var(--font-mono); font-size:0.75rem; font-weight:700; color:var(--accent-primary); background:var(--bg-accent-subtle); padding:4px 10px; border-radius:4px;">PYTHON · KAFKA · SPARK</span>
            <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">POSTGRESQL</span>
          </div>

          <h4 style="font-size:1.125rem; font-weight:700; color:var(--text-primary); margin-bottom:8px;">1. Project Overview</h4>
          <p style="margin-bottom:16px;">Designed a distributed data pipeline capable of ingesting financial market ticker data via REST APIs, buffering stream spikes through Apache Kafka topics, transforming moving average metrics using Apache Spark, and writing to PostgreSQL for real-time analytics.</p>

          <h4 style="font-size:1.125rem; font-weight:700; color:var(--text-primary); margin-bottom:8px;">2. Data Architecture</h4>
          <ul style="list-style:disc; margin-left:20px; margin-bottom:16px; font-size:0.9rem;">
            <li><strong>Producer Service:</strong> Python async daemon polling market price APIs and publishing partitioned Kafka events.</li>
            <li><strong>Message Broker:</strong> Multi-partition Apache Kafka cluster ensuring decoupled fault tolerance.</li>
            <li><strong>Stream Processor:</strong> Apache Spark streaming job computing 5-minute rolling averages and volume spikes.</li>
            <li><strong>Database:</strong> PostgreSQL with partition tables for fast analytical time-series querying.</li>
          </ul>
        </div>
      `
    },
    'foodlink': {
      title: 'FoodLink — Food Waste Management & Donation Platform',
      html: `
        <div style="line-height: 1.75; color: var(--text-secondary);">
          <div style="display:flex; align-items:center; gap:10px; margin-bottom: 20px;">
            <span style="font-family:var(--font-mono); font-size:0.75rem; font-weight:700; color:var(--accent-primary); background:var(--bg-accent-subtle); padding:4px 10px; border-radius:4px;">REACT · SPRING BOOT · REST</span>
            <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">SUSTAINABILITY · UN SDG 2 & 12</span>
          </div>

          <h4 style="font-size:1.125rem; font-weight:700; color:var(--text-primary); margin-bottom:8px;">1. Core Purpose</h4>
          <p style="margin-bottom:16px;">Bridges commercial food surplus (hostels, cafeterias, event banquet halls) with local non-profit shelter networks, cutting down landfill methane while feeding vulnerable communities.</p>

          <h4 style="font-size:1.125rem; font-weight:700; color:var(--text-primary); margin-bottom:8px;">2. System Features</h4>
          <ul style="list-style:disc; margin-left:20px; margin-bottom:16px; font-size:0.9rem;">
            <li><strong>Real-time Food Listings:</strong> Donors post available food batches with cooked timestamps, dietary categories, and shelf-life expiry countdowns.</li>
            <li><strong>Logistics Dispatch:</strong> Push notifications alert nearby verified NGOs to accept and schedule direct pickup.</li>
            <li><strong>Impact Tracking:</strong> Automated dashboard tracking cumulative kilograms of food rescued and estimated carbon emissions prevented.</li>
          </ul>
        </div>
      `
    },
    'campus-analytics': {
      title: 'Smart Campus Analytics — Academic & Placement Forecasting',
      html: `
        <div style="line-height: 1.75; color: var(--text-secondary);">
          <div style="display:flex; align-items:center; gap:10px; margin-bottom: 20px;">
            <span style="font-family:var(--font-mono); font-size:0.75rem; font-weight:700; color:var(--accent-primary); background:var(--bg-accent-subtle); padding:4px 10px; border-radius:4px;">PYTHON · POSTGRESQL · ML</span>
          </div>

          <h4 style="font-size:1.125rem; font-weight:700; color:var(--text-primary); margin-bottom:8px;">1. Problem Solved</h4>
          <p style="margin-bottom:16px;">Universities maintain disconnected departmental silos: attendance registers, semester exam marks, and campus placement readiness. This solution unifies them into a coherent predictive data pipeline.</p>

          <h4 style="font-size:1.125rem; font-weight:700; color:var(--text-primary); margin-bottom:8px;">2. Technical Implementation</h4>
          <ul style="list-style:disc; margin-left:20px; margin-bottom:16px; font-size:0.9rem;">
            <li><strong>Automated ETL Pipeline:</strong> Ingests periodic attendance logs and grades, cleaning inconsistencies via Pandas.</li>
            <li><strong>Predictive Risk Flagging:</strong> Machine learning classification identifies students at risk of attendance shortages or placement ineligibility weeks before cutoffs.</li>
            <li><strong>Actionable Insights:</strong> Department faculty receive targeted intervention recommendations rather than reactive end-of-semester penalties.</li>
          </ul>
        </div>
      `
    },
    'parking': {
      title: 'Smart Parking Management System — Architecture Overview',
      html: `
        <div style="line-height: 1.75; color: var(--text-secondary);">
          <div style="display:flex; align-items:center; gap:10px; margin-bottom: 20px;">
            <span style="font-family:var(--font-mono); font-size:0.75rem; font-weight:700; color:var(--accent-primary); background:var(--bg-accent-subtle); padding:4px 10px; border-radius:4px;">SPRING BOOT · MICROSERVICES</span>
            <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">POSTGRESQL</span>
          </div>

          <h4 style="font-size:1.125rem; font-weight:700; color:var(--text-primary); margin-bottom:8px;">1. Problem Definition</h4>
          <p style="margin-bottom:16px;">Urban drivers spend up to 20 minutes finding vacant parking spaces, intensifying urban congestion and carbon emissions. Traditional parking lots lack centralized visibility, dynamic reservation, and automated payment settlement.</p>

          <h4 style="font-size:1.125rem; font-weight:700; color:var(--text-primary); margin-bottom:8px;">2. Microservices Architecture</h4>
          <p style="margin-bottom:12px;">Designed using Spring Cloud architecture to maintain decoupled scaling and high availability:</p>
          <ul style="list-style:disc; margin-left:20px; margin-bottom:16px; font-size:0.9rem;">
            <li><strong>Spring Cloud API Gateway:</strong> Central routing, rate limiting, and request validation.</li>
            <li><strong>Eureka Service Registry:</strong> Dynamic service discovery for zero-downtime microservice instances.</li>
            <li><strong>Authentication Service:</strong> Role-based access control (Admin vs Driver) secured with stateless JSON Web Tokens (JWT).</li>
            <li><strong>Parking Lot Service:</strong> Real-time slot inventory, multi-tier layout mapping, and availability status.</li>
            <li><strong>Booking & Reservation Service:</strong> Slot reservation concurrency control, expiration timers, and check-in confirmation.</li>
            <li><strong>Billing Service:</strong> Automated duration-based fee calculation, invoicing, and receipt generation.</li>
            <li><strong>Database:</strong> Dedicated PostgreSQL relational instances for ACID transaction integrity.</li>
          </ul>

          <h4 style="font-size:1.125rem; font-weight:700; color:var(--text-primary); margin-bottom:8px;">3. Roadmap & Planned IoT Integration</h4>
          <p>Next engineering phase: Integration with ESP32-based ultrasonic or magnetic sensors for automatic entry/exit barrier triggering and ML-powered occupancy forecasting.</p>
        </div>
      `
    },
    'city': {
      title: 'Vijayawada Smart City Portal — Digital Governance Concept',
      html: `
        <div style="line-height: 1.75; color: var(--text-secondary);">
          <div style="display:flex; align-items:center; gap:10px; margin-bottom: 20px;">
            <span style="font-family:var(--font-mono); font-size:0.75rem; font-weight:700; color:var(--accent-primary); background:var(--bg-accent-subtle); padding:4px 10px; border-radius:4px;">CIVIC TECH · FULL-STACK WEB</span>
          </div>

          <h4 style="font-size:1.125rem; font-weight:700; color:var(--text-primary); margin-bottom:8px;">1. Project Vision</h4>
          <p style="margin-bottom:16px;">A centralized citizen portal concept designed for the Vijayawada municipal region to streamline public grievance redressal, sanitation reports, utility applications, and civic communication.</p>

          <h4 style="font-size:1.125rem; font-weight:700; color:var(--text-primary); margin-bottom:8px;">2. Core Functional Modules</h4>
          <ul style="list-style:disc; margin-left:20px; margin-bottom:16px; font-size:0.9rem;">
            <li><strong>Grievance Lodging & Ticket Workflow:</strong> Citizens submit geo-tagged complaints with photo attachments and receive real-time SMS/email status notifications.</li>
            <li><strong>Municipal Department Routing:</strong> Automatic ticket triage to relevant departments (Roads, Sanitation, Electricity, Water).</li>
            <li><strong>Admin Command Dashboard:</strong> Heatmaps of unresolved grievances, SLA tracking, and departmental performance indicators.</li>
            <li><strong>Accessibility & Inclusivity:</strong> Clean high-contrast typography designed for regional accessibility across mobile devices.</li>
          </ul>
        </div>
      `
    },
    'attendance': {
      title: 'Student Attendance Tracker — Frontend Architecture',
      html: `
        <div style="line-height: 1.75; color: var(--text-secondary);">
          <div style="display:flex; align-items:center; gap:10px; margin-bottom: 20px;">
            <span style="font-family:var(--font-mono); font-size:0.75rem; font-weight:700; color:var(--accent-primary); background:var(--bg-accent-subtle); padding:4px 10px; border-radius:4px;">REACT · VITE · MATERIAL UI</span>
          </div>

          <h4 style="font-size:1.125rem; font-weight:700; color:var(--text-primary); margin-bottom:8px;">1. Overview & Problem Solved</h4>
          <p style="margin-bottom:16px;">Built as a responsive Single Page Application (SPA) to eliminate tedious manual roll-call registers during academic seminars and project teams. Provides immediate attendance metrics and warning indicators for attendance below 75% thresholds.</p>

          <h4 style="font-size:1.125rem; font-weight:700; color:var(--text-primary); margin-bottom:8px;">2. Technical Implementation</h4>
          <ul style="list-style:disc; margin-left:20px; margin-bottom:16px; font-size:0.9rem;">
            <li><strong>State Architecture:</strong> Reactive state management handling real-time percentage recalculations, bulk mark-all actions, and filter-by-status views.</li>
            <li><strong>Client Persistence:</strong> Uses browser LocalStorage for instant state saving without requiring server authentication during offline classroom sessions.</li>
            <li><strong>Material UI Design System:</strong> Clean responsive data tables, modal dialogs for new student registration, and progress rings.</li>
          </ul>
        </div>
      `
    }
  };

  if (modalBackdrop && modalTitle && modalContent && modalCloseBtn) {
    const closeModal = () => {
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    };

    openModalTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const targetKey = trigger.dataset.modalTarget;
        const data = modalCaseStudies[targetKey];
        if (data) {
          modalTitle.textContent = data.title;
          modalContent.innerHTML = data.html;
          modalBackdrop.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    modalCloseBtn.addEventListener('click', closeModal);

    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
        closeModal();
      }
    });
  }

  // --- 6. Set Dynamic Footer Year ---
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
