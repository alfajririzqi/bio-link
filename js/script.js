// ==============================
// ---------- Constants & Helpers ----------
const ANIMATION_DURATION = 300; // ms for modal animation
const BASE_YT_EMBED = 'https://www.youtube.com/embed/';
const YT_PARAMS = '?autoplay=1&rel=0&showinfo=0&modestbranding=1';

function preloadAndSetImg(imgEl, src) {
  if (!imgEl) return;
  try {
    const pre = new Image();
    pre.onload = () => { imgEl.src = src; };
    pre.onerror = () => { imgEl.src = src; };
    pre.src = src;
  } catch (e) {
    try { imgEl.src = src; } catch (_) {}
  }
}

// ---------- Preloader (single) ----------
function handlePreloader() {
  const preloader = document.getElementById('preloader');
  const mainContent = document.getElementById('main-content');
  const savedTheme = localStorage.getItem('theme');

  // apply dark-mode visual to preloader if needed
  if (preloader) {
    if (savedTheme === 'dark') preloader.classList.add('dark-mode');
    else preloader.classList.remove('dark-mode');
  }

  // hide after a short delay (keeps UX consistent)
  setTimeout(() => {
    if (preloader) preloader.classList.add('hidden');
    if (mainContent) mainContent.classList.remove('hidden');
  }, 1000);
}

// ---------- Dark Mode (single robust version) ----------
function applyDarkMode(isDark) {
  const body = document.body;
  const profileImage = document.getElementById('profileImage');
  const modalProfileImage = document.getElementById('modalProfileImage');
  const homeIcon = document.getElementById('homeIcon');
  const whitePath = 'img/logo_white.png';
  const blackPath = 'img/logo_black.png';

  if (isDark) {
    body.classList.add('dark-mode');
    if (profileImage) preloadAndSetImg(profileImage, whitePath);
    if (modalProfileImage) preloadAndSetImg(modalProfileImage, whitePath);
    if (homeIcon) homeIcon.src = 'icon/home-night.png';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    if (profileImage) preloadAndSetImg(profileImage, blackPath);
    if (modalProfileImage) preloadAndSetImg(modalProfileImage, blackPath);
    if (homeIcon) homeIcon.src = 'icon/home-day.png';
    localStorage.setItem('theme', 'light');
  }
}

// Ensure modal image matches theme when modal opens
function syncModalImageToTheme() {
  const saved = localStorage.getItem('theme') || (document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  const m = document.getElementById('modalProfileImage');
  if (!m) return;
  if (saved === 'dark') preloadAndSetImg(m, 'img/logo_white.png');
  else preloadAndSetImg(m, 'img/logo_black.png');
}

// ---------- Generic modal open/close ----------
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  const modalContent = modal ? modal.querySelector('.modal-content') : null;
  if (!modal || !modalContent) {
    console.error(`Modal ${modalId} not found`);
    return;
  }
  modalContent.classList.remove('animate-out');
  modalContent.classList.add('animate-in');
  modal.classList.remove('hidden');
  modal.classList.add('modal-open');
  document.body.classList.add('modal-open');

  // sync modal image for subscribe modal
  if (modalId === 'subscribeModal') syncModalImageToTheme();
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  const modalContent = modal ? modal.querySelector('.modal-content') : null;
  if (!modal || !modalContent) {
    console.error(`Modal ${modalId} not found`);
    return;
  }
  modalContent.classList.remove('animate-in');
  modalContent.classList.add('animate-out');

  setTimeout(() => {
    modal.classList.add('hidden');
    modal.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
    modalContent.classList.remove('animate-out');
  }, ANIMATION_DURATION);
}

// ---------- Specific modal close helpers (animated) ----------
function closeCourseModalAnimated() {
  closeModal('courseModal');
}
function closePortfolioModalAnimated() {
  closeModal('portfolioModal');
}
function closeCommissionModalAnimated() {
  closeModal('commissionModal');
}

// ---------- Youtube modal (special: stop iframe) ----------
function openYoutubeModal(videoId) {
  const youtubeModal = document.getElementById('youtubeModal');
  const youtubeIframe = document.getElementById('youtubeIframe');
  const youtubeModalContent = youtubeModal ? youtubeModal.querySelector('.modal-content') : null;
  if (youtubeIframe && youtubeModal && youtubeModalContent) {
    youtubeIframe.src = BASE_YT_EMBED + videoId + YT_PARAMS;
    youtubeModalContent.classList.remove('animate-out');
    youtubeModalContent.classList.add('animate-in');
    youtubeModal.classList.remove('hidden');
    youtubeModal.classList.add('modal-open');
    document.body.classList.add('modal-open');
  }
}
function closeYoutubeModalAnimated() {
  const youtubeModal = document.getElementById('youtubeModal');
  const youtubeModalContent = youtubeModal ? youtubeModal.querySelector('.modal-content') : null;
  const youtubeIframe = document.getElementById('youtubeIframe');
  if (youtubeModal && youtubeModalContent) {
    youtubeModalContent.classList.remove('animate-in');
    youtubeModalContent.classList.add('animate-out');
    setTimeout(() => {
      if (youtubeModal) youtubeModal.classList.add('hidden');
      if (youtubeModal) youtubeModal.classList.remove('modal-open');
      document.body.classList.remove('modal-open');
      if (youtubeModalContent) youtubeModalContent.classList.remove('animate-out');
      if (youtubeIframe) youtubeIframe.src = '';
    }, ANIMATION_DURATION);
  }
}

// ---------- Price calculator config ----------
const framePrices = {
  'Cycles': {
    'HD (1280x720)': 380,
    'Full HD (1920x1080)': 480, 
    '2K (2048x1080)': 580, 
    '4K (3840x2160)': 680  
  },
  'Eevee': {
    'HD (1280x720)': 300,
    'Full HD (1920x1080)': 400, 
    '2K (2048x1080)': 500, 
    '4K (3840x2160)': 600  
  }
};

function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(number);
}

function calculatePrice() {
  const frameCountSlider = document.getElementById('frameCount');
  const resultDiv = document.getElementById('result');
  const loadingDiv = document.getElementById('loading');
  if (!frameCountSlider || !resultDiv || !loadingDiv) return;
  resultDiv.classList.add('hidden');
  loadingDiv.classList.remove('hidden');

  setTimeout(() => {
    const frameCount = parseInt(frameCountSlider.value, 10);
    const renderEngine = document.getElementById('renderEngine').value;
    const resolution = document.getElementById('resolution').value;
    const totalPriceP = document.getElementById('totalPrice');
    const totalTimeP = document.getElementById('totalTime');
    const pricePerFrame = framePrices[renderEngine][resolution];
    const totalPrice = pricePerFrame * frameCount;
    if (totalPriceP) totalPriceP.textContent = formatRupiah(totalPrice);
    if (totalTimeP) totalTimeP.textContent = "Waktu rendering akan bervariasi.";
    loadingDiv.classList.add('hidden');
    resultDiv.classList.remove('hidden');
  }, 1000);
}

function orderViaWhatsapp() {
  const renderEngine = document.getElementById('renderEngine') ? document.getElementById('renderEngine').value : '';
  const blenderVersion = document.getElementById('blenderVersion') ? document.getElementById('blenderVersion').value : '';
  const resolution = document.getElementById('resolution') ? document.getElementById('resolution').value : '';
  const frameCount = document.getElementById('frameCount') ? document.getElementById('frameCount').value : '';
  const message = encodeURIComponent(
    `Halo, saya ingin order render proyek 3D:\n*Render Engine:* ${renderEngine}\n*Blender Version:* ${blenderVersion}\n*Resolusi:* ${resolution}\n*Jumlah Frame:* ${frameCount}`
  );
  const whatsappUrl = `https://wa.me/6289513170863?text=${message}`;
  window.open(whatsappUrl, '_blank');
}

// ---------- Consolidated DOMContentLoaded (single) ----------
document.addEventListener('DOMContentLoaded', () => {
  // ---------- Dark Mode init ----------
  const savedTheme = localStorage.getItem('theme');
  const darkModeToggle = document.getElementById('darkModeToggle');
  if (darkModeToggle) {
    applyDarkMode(savedTheme === 'dark');
    darkModeToggle.checked = (savedTheme === 'dark');
    darkModeToggle.addEventListener('change', (e) => { applyDarkMode(e.target.checked); });
  } else {
    // if no toggle in DOM, still apply saved theme
    if (savedTheme === 'dark') applyDarkMode(true);
  }

// ---------- Filter Toggle (Links/Assets) ----------
const filterToggle = document.getElementById('filter');
const linksMain = document.querySelector('.shared-card-main');
const assetsMain = document.querySelector('.assets-card-main');

if (filterToggle && linksMain) {
  // Fungsi untuk memperbarui visibilitas kedua section
  const updateVisibility = () => {
    if (filterToggle.checked) {
      // Saat toggle di posisi "Assets"
      linksMain.classList.add('hidden');
      if (assetsMain) assetsMain.classList.remove('hidden');
    } else {
      // Saat toggle di posisi "Links"
      linksMain.classList.remove('hidden');
      if (assetsMain) assetsMain.classList.add('hidden');
    }
  };

  // Setel tampilan awal berdasarkan status toggle
  updateVisibility();

  // Tambahkan event listener untuk mengubah tampilan saat toggle diubah
  filterToggle.addEventListener('change', updateVisibility);
}

  // ---------- Subscribe Modal handlers ----------
  const subscribeBtn = document.getElementById("subscribeBtn");
  const subscribeModal = document.getElementById("subscribeModal");
  const closeModalBtn = document.getElementById("closeModal");
  if (subscribeBtn && subscribeModal && closeModalBtn) {
    subscribeBtn.addEventListener("click", () => openModal('subscribeModal'));
    closeModalBtn.addEventListener("click", () => closeModal('subscribeModal'));
    subscribeModal.addEventListener("click", (e) => { if (e.target === subscribeModal) closeModal('subscribeModal'); });
  }

  // ---------- Course Modal ----------
  const courseModalLink = document.getElementById('courseModalLink');
  const courseModal = document.getElementById('courseModal');
  const closeCourseModalBtn = document.getElementById('closeCourseModal');
  const courseModalContent = courseModal ? courseModal.querySelector('.modal-content') : null;
  if (courseModalLink && courseModalContent) {
    courseModalLink.addEventListener('click', (e) => {
      e.preventDefault();
      if (courseModal) {
        courseModalContent.classList.remove('animate-out');
        courseModalContent.classList.add('animate-in');
        courseModal.classList.remove('hidden');
        courseModal.classList.add('modal-open');
        document.body.classList.add('modal-open');
      }
    });
  }
  if (courseModal) {
    courseModal.addEventListener('click', (e) => { if (e.target === courseModal) closeCourseModalAnimated(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && courseModal.classList.contains('modal-open')) closeCourseModalAnimated(); });
  }
  if (closeCourseModalBtn) closeCourseModalBtn.addEventListener('click', closeCourseModalAnimated);

  // ---------- Portfolio Modal ----------
  const portfolioModalLink = document.getElementById('portfolioModalLink');
  const portfolioModal = document.getElementById('portfolioModal');
  const closePortfolioModalBtn = document.getElementById('closePortfolioModal');
  const portfolioModalContent = portfolioModal ? portfolioModal.querySelector('.modal-content') : null;
  if (portfolioModalLink && portfolioModalContent) {
    portfolioModalLink.addEventListener('click', (e) => {
      e.preventDefault();
      portfolioModalContent.classList.remove('animate-out');
      portfolioModalContent.classList.add('animate-in');
      portfolioModal.classList.remove('hidden');
      portfolioModal.classList.add('modal-open');
      document.body.classList.add('modal-open');
    });
  }
  if (portfolioModal) {
    portfolioModal.addEventListener('click', (e) => { if (e.target === portfolioModal) closePortfolioModalAnimated(); });
  }
  if (closePortfolioModalBtn) closePortfolioModalBtn.addEventListener('click', closePortfolioModalAnimated);

  // ---------- Commission Modal ----------
  const commissionModalLink = document.getElementById('commissionModalLink');
  const commissionModal = document.getElementById('commissionModal');
  const closeCommissionModalBtn = document.getElementById('closeCommissionModal');
  const commissionModalContent = commissionModal ? commissionModal.querySelector('.modal-content') : null;
  if (commissionModalLink && commissionModalContent) {
    commissionModalLink.addEventListener('click', (e) => {
      e.preventDefault();
      commissionModalContent.classList.remove('animate-out');
      commissionModalContent.classList.add('animate-in');
      commissionModal.classList.remove('hidden');
      commissionModal.classList.add('modal-open');
      document.body.classList.add('modal-open');
    });
  }
  if (commissionModal) {
    commissionModal.addEventListener('click', (e) => { if (e.target === commissionModal) closeCommissionModalAnimated(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && commissionModal.classList.contains('modal-open')) closeCommissionModalAnimated(); });
  }
  if (closeCommissionModalBtn) closeCommissionModalBtn.addEventListener('click', closeCommissionModalAnimated);

  // ---------- Youtube modal triggers ----------
  const youtubeTriggers = document.querySelectorAll('.youtube-modal-trigger');
  const closeYoutubeModalBtn = document.getElementById('closeYoutubeModal');
  const youtubeModal = document.getElementById('youtubeModal');
  if (youtubeTriggers.length) {
    youtubeTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const videoId = trigger.getAttribute('data-video-id');
        if (videoId) openYoutubeModal(videoId);
      });
    });
  }
  if (closeYoutubeModalBtn) closeYoutubeModalBtn.addEventListener('click', closeYoutubeModalAnimated);
  if (youtubeModal) youtubeModal.addEventListener('click', (e) => { if (e.target === youtubeModal) closeYoutubeModalAnimated(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && youtubeModal && youtubeModal.classList.contains('modal-open')) closeYoutubeModalAnimated(); });

  // ---------- Frame count slider (price calc) ----------
  const frameCountSlider = document.getElementById('frameCount');
  const frameCountValue = document.getElementById('frameCountValue');
  if (frameCountSlider && frameCountValue) {
    frameCountSlider.addEventListener('input', (e) => { frameCountValue.textContent = e.target.value; });
  }

  // ---------- Copy discount code ----------
  const copyCodeBtn = document.getElementById('copyCodeBtn');
  if (copyCodeBtn) {
    copyCodeBtn.addEventListener('click', () => {
      const discountCode = 'DEVATA';
      navigator.clipboard.writeText(discountCode).then(() => {
        const span = copyCodeBtn.querySelector('span');
        if (span) span.textContent = 'Copied';
        setTimeout(() => { if (span) span.textContent = 'Copy'; }, 2000);
      }).catch(err => { console.error('Gagal menyalin:', err); });
    });
  }

  // ---------- Go to store button ----------
  const goToStoreBtn = document.getElementById('goToStore');
  if (goToStoreBtn) {
    goToStoreBtn.addEventListener('click', () => {
      window.open('https://academy.devatastudio.com/blender3d/procedural-environment/', '_blank');
    });
  }

  // ---------- Links/Assets Tab (if present) ----------
  const linksTab = document.getElementById('links-tab'); // or tab IDs used in your markup
  const assetsTab = document.getElementById('assets-tab');
  const linksContent = document.getElementById('links-content');
  const assetsContent = document.getElementById('assets-content');
  const pill = document.getElementById('pill');
  if (linksTab && assetsTab && linksContent && assetsContent && pill) {
    function setActiveTab(activeTab, inactiveTab, activeContent, inactiveContent, pillPos) {
      activeTab.classList.add('active-link');
      inactiveTab.classList.remove('active-link');
      activeContent.classList.remove('hidden');
      inactiveContent.classList.add('hidden');
      pill.style.transform = pillPos;
    }
    setActiveTab(linksTab, assetsTab, linksContent, assetsContent, 'translateX(0%)');
    linksTab.addEventListener('click', () => setActiveTab(linksTab, assetsTab, linksContent, assetsContent, 'translateX(0%)'));
    assetsTab.addEventListener('click', () => setActiveTab(assetsTab, linksTab, assetsContent, linksContent, 'translateX(100%)'));
  }

  // ---------- Subscribe modal: ensure modal image matches theme on open ----------
  if (subscribeBtn) {
    subscribeBtn.addEventListener('click', () => { syncModalImageToTheme(); });
  }
});

// ---------- Load & Preloader bind (single) ----------
window.addEventListener('load', handlePreloader);

// ---------- Exposed functions for inline handlers (if any) ----------
window.calculatePrice = calculatePrice;
window.orderViaWhatsapp = orderViaWhatsapp;
