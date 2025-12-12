// ============================================
// 1. CONFIGURATION & CONSTANTS
// ============================================
const CONFIG = {
  ANIMATION_DURATION: 300,
  YOUTUBE_EMBED: 'https://www.youtube.com/embed/',
  YOUTUBE_PARAMS: '?autoplay=1&rel=0&showinfo=0&modestbranding=1',
  WHATSAPP_PHONE: '6289513170863',
  STORE_URL: 'https://academy.devatastudio.com/blender3d/procedural-environment/',
  DISCOUNT_CODE: 'DEVATA',
  
  // Language translations
  TRANSLATIONS: {
    en: {
      // Profile
      profile_subtitle: '3D Render & Animation',
      
      // Section titles
      section_addon: 'Addon',
      section_course: 'Course',
      section_services: 'Services',
      section_works: 'Works',
      section_portfolio: 'Creative Portfolio',
      section_assets: 'Assets',
      
      // Switch labels
      switch_links: 'Links',
      switch_assets: 'Assets',
      
      // Card descriptions
      addon_release: 'New Release v1.2.2 (FREE)',
      course_platform: 'Devata Academy',
      commission_title: 'Open Commission/Work',
      renderfarm_title: 'Renderfarm Services',
      portfolio_title: 'Portfolio Web',
      
      // Modal titles
      modal_subscribe_title: 'Subscribe to rafpictures',
      modal_subscribe_desc: 'Stay up to date with everything important.',
      modal_subscribe_btn: 'Subscribe',
      modal_commission_title: 'Open Commission',
      modal_commission_desc: 'Send me a message for work inquiries.',
      modal_commission_btn: 'Send',
      modal_course_title: 'Procedural Environment Course Discount',
      modal_course_desc: 'Copy the code and visit the store to claim your discount',
      modal_store_btn: 'Go to store',
      modal_asset_title: 'Blender Asset Management Addon',
      modal_asset_desc: 'Organize and manage your 3D assets efficiently in Blender.',
      modal_download_btn: 'Free Download',
      modal_doc_btn: 'Documentation',
      
      // Form labels
      form_name: 'Name',
      form_email: 'Email',
      form_phone: 'Phone',
      form_message: 'Describe your project here...',
      
      // Video modal
      video_watch_full: 'Watch Full Video',
      
      // Greeting modal
      greeting_thanks: 'Thank You!',
      greeting_subscribe: 'Thank you for subscribing!',
      greeting_commission: 'Your message has been sent successfully!',
      greeting_close: 'Close',
      
      // Footer
      footer_rights: 'All rights reserved.',
      
      // Card titles and descriptions
      card_addon_title: 'Blender Asset Management Addon',
      card_addon_desc: 'New Release v1.2.2 (FREE)',
      card_course_title: 'Procedural Environment Course',
      card_course_desc: 'Devata Academy',
      card_commission_title: 'Open Commission/Work',
      card_renderfarm_title: 'Renderfarm Services',
      card_portfolio_title: 'Portfolio Web',
      card_jumbo_trailer: 'OFFICIAL TRAILER 1 JUMBO',
      card_jumbo_teaser: 'OFFICIAL TEASER TRAILER JUMBO',
      card_nussa_movie: 'NUSSA SHORT MOVIE SPECIAL EDITION',
      card_baraju_ep6: 'EP06 - BoBoiBoy Galaxy Baraju',
      card_baraju_ep5: 'EP05 - BoBoiBoy Galaxy Baraju',
      card_youtube_desc: 'YouTube',
      
      // Video preview modal titles and descriptions
      video_jumbo_trailer_title: 'JUMBO - Official Trailer 1',
      video_jumbo_trailer_desc: 'Watch the thrilling official trailer of JUMBO from Visinema Pictures. Experience the excitement and drama in stunning visuals.',
      video_jumbo_teaser_title: 'JUMBO - Official Teaser Trailer',
      video_jumbo_teaser_desc: 'Get a first glimpse of JUMBO with this exciting teaser trailer from Visinema Pictures.',
      video_nussa_title: 'NUSSA - Short Movie Special Edition',
      video_nussa_desc: 'Join Nussa and friends in this heartwarming special edition short movie filled with valuable life lessons.',
      video_baraju_ep6_title: 'EP06 - BoBoiBoy Galaxy Baraju | Baraju Bersatu',
      video_baraju_ep6_desc: 'Watch Episode 6 of BoBoiBoy Galaxy Baraju as Baraju unites! Witness the epic transformation and powerful teamwork in this thrilling episode.',
      video_baraju_ep5_title: 'EP05 - BoBoiBoy Galaxy Baraju | Musuh Dalam Selimut',
      video_baraju_ep5_desc: 'Experience Episode 5 of BoBoiBoy Galaxy Baraju - Musuh Dalam Selimut! Discover hidden threats and unexpected betrayals in this intense episode.',
      card_asset_pack_title: 'Asset Course Pack',
      card_asset_pack_desc: 'Free Gobos Sequence, Trees & Plants assets (366MB)',
      card_lineart_title: 'LineArt Assets Pack',
      card_lineart_desc: 'Free Dot-Highlight & Shadow-Line (100KB)',
      card_kitbash_title: 'Kitbash Cyberpunk Jakarta City',
      card_kitbash_desc: 'Free 8 Cyberpunk Cityscapes Asset Jakarta Series (229MB)',
      
      // Renderfarm page
      render_title: 'Render Price Calculator',
      render_subtitle: 'Calculate your rendering costs',
      render_engine: 'Render Engine',
      render_resolution: 'Resolution',
      render_custom: 'Custom Resolution',
      render_width: 'Width (px)',
      render_height: 'Height (px)',
      render_frames: 'Total Frames',
      render_calculate: 'Calculate Price',
      render_result_title: 'Calculation Result',
      render_total_price: 'Total Price',
      render_total_time: 'Estimated Time',
      render_order: 'Order via WhatsApp',
      render_loading: 'Calculating...',
      render_note_title: 'Important Notes',
      render_note_1: 'Recommended file size is under 2GB for optimal render time.',
      render_note_2: 'Files over 2GB may require slightly longer rendering times.',
      render_note_3: 'Available render formats: MP4, PNG, EXR.',
      
      // WhatsApp order template
      whatsapp_greeting: 'Hello, I would like to order a 3D render project:',
      whatsapp_engine: 'Render Engine',
      whatsapp_blender: 'Blender Version',
      whatsapp_resolution: 'Resolution',
      whatsapp_frames: 'Frame Count',
      whatsapp_custom: 'Custom'
    },
    id: {
      // Profile
      profile_subtitle: 'Render 3D & Animasi',
      
      // Section titles
      section_addon: 'Addon',
      section_course: 'Kursus',
      section_services: 'Layanan',
      section_works: 'Karya',
      section_portfolio: 'Portfolio Kreatif',
      section_assets: 'Aset',
      
      // Switch labels
      switch_links: 'Tautan',
      switch_assets: 'Aset',
      
      // Card descriptions
      addon_release: 'Rilis Baru v1.2.2 (GRATIS)',
      course_platform: 'Akademi Devata',
      commission_title: 'Buka Komisi/Proyek',
      renderfarm_title: 'Layanan Renderfarm',
      portfolio_title: 'Web Portfolio',
      
      // Modal titles
      modal_subscribe_title: 'Berlangganan rafpictures',
      modal_subscribe_desc: 'Tetap update dengan semua yang penting.',
      modal_subscribe_btn: 'Berlangganan',
      modal_commission_title: 'Buka Komisi',
      modal_commission_desc: 'Kirim saya pesan untuk pertanyaan pekerjaan.',
      modal_commission_btn: 'Kirim',
      modal_course_title: 'Diskon Kursus Procedural Environment',
      modal_course_desc: 'Salin kode dan kunjungi toko untuk klaim diskon Anda',
      modal_store_btn: 'Ke toko',
      modal_asset_title: 'Addon Manajemen Aset Blender',
      modal_asset_desc: 'Atur dan kelola aset 3D Anda secara efisien di Blender.',
      modal_download_btn: 'Unduh Gratis',
      modal_doc_btn: 'Dokumentasi',
      
      // Form labels
      form_name: 'Nama',
      form_email: 'Email',
      form_phone: 'Telepon',
      form_message: 'Deskripsikan proyek Anda di sini...',
      
      // Video modal
      video_watch_full: 'Tonton Video Lengkap',
      
      // Greeting modal
      greeting_thanks: 'Terima Kasih!',
      greeting_subscribe: 'Terima kasih telah berlangganan!',
      greeting_commission: 'Pesan Anda telah terkirim dengan sukses!',
      greeting_close: 'Tutup',
      
      // Footer
      footer_rights: 'Hak cipta dilindungi.',
      
      // Card titles and descriptions
      card_addon_title: 'Addon Manajemen Aset Blender',
      card_addon_desc: 'Rilis Baru v1.2.2 (GRATIS)',
      card_course_title: 'Kursus Procedural Environment',
      card_course_desc: 'Akademi Devata',
      card_commission_title: 'Buka Komisi/Proyek',
      card_renderfarm_title: 'Layanan Renderfarm',
      card_portfolio_title: 'Web Portfolio',
      card_jumbo_trailer: 'TRAILER RESMI 1 JUMBO',
      card_jumbo_teaser: 'TEASER TRAILER RESMI JUMBO',
      card_nussa_movie: 'FILM PENDEK NUSSA EDISI SPESIAL',
      card_baraju_ep6: 'EP06 - BoBoiBoy Galaxy Baraju',
      card_baraju_ep5: 'EP05 - BoBoiBoy Galaxy Baraju',
      card_youtube_desc: 'YouTube',
      
      // Video preview modal titles and descriptions
      video_jumbo_trailer_title: 'JUMBO - Trailer Resmi 1',
      video_jumbo_trailer_desc: 'Saksikan trailer resmi yang mendebarkan dari film JUMBO karya Visinema Pictures. Rasakan keseruan dan drama dalam visual yang memukau.',
      video_jumbo_teaser_title: 'JUMBO - Teaser Trailer Resmi',
      video_jumbo_teaser_desc: 'Dapatkan gambaran pertama film JUMBO dengan teaser trailer yang menarik dari Visinema Pictures.',
      video_nussa_title: 'NUSSA - Film Pendek Edisi Spesial',
      video_nussa_desc: 'Bergabunglah dengan Nussa dan teman-teman dalam film pendek edisi spesial yang menghangatkan hati penuh dengan pelajaran hidup yang berharga.',
      video_baraju_ep6_title: 'EP06 - BoBoiBoy Galaxy Baraju | Baraju Bersatu',
      video_baraju_ep6_desc: 'Saksikan Episode 6 BoBoiBoy Galaxy Baraju saat Baraju bersatu! Saksikan transformasi epik dan kerja sama tim yang kuat dalam episode yang mendebarkan ini.',
      video_baraju_ep5_title: 'EP05 - BoBoiBoy Galaxy Baraju | Musuh Dalam Selimut',
      video_baraju_ep5_desc: 'Rasakan Episode 5 BoBoiBoy Galaxy Baraju - Musuh Dalam Selimut! Temukan ancaman tersembunyi dan pengkhianatan tak terduga dalam episode yang intens ini.',
      card_asset_pack_title: 'Paket Aset Kursus',
      card_asset_pack_desc: 'Gratis Gobos Sequence, Pohon & Tanaman (366MB)',
      card_lineart_title: 'Paket Aset LineArt',
      card_lineart_desc: 'Gratis Dot-Highlight & Shadow-Line (100KB)',
      card_kitbash_title: 'Kitbash Cyberpunk Jakarta City',
      card_kitbash_desc: 'Gratis 8 Aset Cityscapes Cyberpunk Jakarta (229MB)',
      
      // Renderfarm page
      render_title: 'Kalkulator Harga Render',
      render_subtitle: 'Hitung biaya rendering Anda',
      render_engine: 'Mesin Render',
      render_resolution: 'Resolusi',
      render_custom: 'Resolusi Kustom',
      render_width: 'Lebar (px)',
      render_height: 'Tinggi (px)',
      render_frames: 'Total Frame',
      render_calculate: 'Hitung Harga',
      render_result_title: 'Hasil Perhitungan',
      render_total_price: 'Total Harga',
      render_total_time: 'Estimasi Waktu',
      render_order: 'Pesan via WhatsApp',
      render_loading: 'Menghitung...',
      render_note_title: 'Catatan Penting',
      render_note_1: 'Ukuran file yang direkomendasikan di bawah 2GB untuk waktu render optimal.',
      render_note_2: 'File lebih dari 2GB mungkin memerlukan waktu rendering sedikit lebih lama.',
      render_note_3: 'Format render yang tersedia: MP4, PNG, EXR.',
      
      // WhatsApp order template
      whatsapp_greeting: 'Halo, saya ingin memesan proyek render 3D:',
      whatsapp_engine: 'Mesin Render',
      whatsapp_blender: 'Versi Blender',
      whatsapp_resolution: 'Resolusi',
      whatsapp_frames: 'Jumlah Frame',
      whatsapp_custom: 'Kustom'
    }
  },
  
  // Video data for preview modal
  // Function to get video data based on current language
  getVideoData(videoId, lang = 'en') {
    const t = this.TRANSLATIONS[lang];
    const videos = {
      '6sbUuHw0Y-4': {
        gif: 'assets/images/previews/jumbo-trailer.gif',
        title: t.video_jumbo_trailer_title,
        description: t.video_jumbo_trailer_desc
      },
      'YW3sQ16oksY': {
        gif: 'assets/images/previews/jumbo-teaser.gif',
        title: t.video_jumbo_teaser_title,
        description: t.video_jumbo_teaser_desc
      },
      'PfIuJwcl60E': {
        gif: 'assets/images/previews/nussa-movie.gif',
        title: t.video_nussa_title,
        description: t.video_nussa_desc
      },
      'wuZnM5o-zMM': {
        gif: 'assets/images/previews/baraju-ep6.gif',
        title: t.video_baraju_ep6_title,
        description: t.video_baraju_ep6_desc
      },
      'OTQDuKtemzc': {
        gif: 'assets/images/previews/baraju-ep5.gif',
        title: t.video_baraju_ep5_title,
        description: t.video_baraju_ep5_desc
      }
    };
    return videos[videoId];
  }
};

const FRAME_PRICES = {
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

// ============================================
// 2. UTILITY FUNCTIONS
// ============================================
const Utils = {

  preloadImage(imgEl, src) {
    if (!imgEl) return;
    try {
      const img = new Image();
      img.onload = () => { imgEl.src = src; };
      img.onerror = () => { imgEl.src = src; };
      img.src = src;
    } catch (e) {
      try { imgEl.src = src; } catch (_) {}
    }
  },


  getElement(id) {
    return document.getElementById(id);
  },


  querySelector(selector) {
    return document.querySelector(selector);
  },


  querySelectorAll(selector) {
    return document.querySelectorAll(selector);
  },


  getLocalStorage(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.warn(`LocalStorage access failed for key "${key}":`, error);
      return null;
    }
  },


  setLocalStorage(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.warn(`LocalStorage set failed for key "${key}":`, error);
    }
  },


  formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  }
};

// ============================================
// 3. LANGUAGE MANAGER
// ============================================
const LanguageManager = {
  currentLang: 'en',

  init() {
    const savedLang = Utils.getLocalStorage('language') || 'en';
    this.setLanguage(savedLang, false);
    this.setupDropdown();
  },

  setupDropdown() {
    const languageBtn = Utils.getElement('languageBtn');
    const languageDropdown = Utils.getElement('languageDropdown');
    const languageOptions = Utils.querySelectorAll('.language-option');

    if (!languageBtn || !languageDropdown) return;

    // Toggle dropdown
    languageBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      languageDropdown.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
        languageDropdown.classList.remove('show');
      }
    });

    // Language selection
    languageOptions.forEach(option => {
      option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        this.setLanguage(lang, true);
        languageDropdown.classList.remove('show');
      });
    });

    // Update active state
    this.updateActiveOption();
  },

  setLanguage(lang, saveToStorage = true) {
    this.currentLang = lang;
    
    if (saveToStorage) {
      Utils.setLocalStorage('language', lang);
    }

    this.updateFlag();
    this.translatePage();
    this.updateActiveOption();
  },

  updateFlag() {
    const currentLangFlag = Utils.getElement('currentLangFlag');
    if (currentLangFlag) {
      currentLangFlag.src = this.currentLang === 'en' ? 'assets/icons/us.png' : 'assets/icons/id.png';
      currentLangFlag.alt = this.currentLang === 'en' ? 'English' : 'Indonesia';
    }
  },

  updateActiveOption() {
    const languageOptions = Utils.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
      if (option.getAttribute('data-lang') === this.currentLang) {
        option.classList.add('active');
      } else {
        option.classList.remove('active');
      }
    });
  },

  translatePage() {
    const translations = CONFIG.TRANSLATIONS[this.currentLang];
    if (!translations) return;

    // Translate elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translations[key];
        } else {
          element.textContent = translations[key];
        }
      }
    });

    // Special handling for input placeholders by ID
    const customWidth = Utils.getElement('customWidth');
    const customHeight = Utils.getElement('customHeight');
    if (customWidth) customWidth.placeholder = translations.render_width || 'Width (px)';
    if (customHeight) customHeight.placeholder = translations.render_height || 'Height (px)';
  },

  t(key) {
    return CONFIG.TRANSLATIONS[this.currentLang]?.[key] || key;
  }
};

// ============================================
// 4. THEME/DARK MODE MANAGER
// ============================================
const ThemeManager = {
  IMG_PATHS: {
    logo_light: 'assets/images/branding/logo_black.png',
    logo_dark: 'assets/images/branding/logo_white.png',
    home_light: 'assets/icons/home-day.png',
    home_dark: 'assets/icons/home-night.png',
  },


  initPreloader() {
    const preloader = Utils.getElement('preloader');
    const mainContent = Utils.getElement('main-content');
    const savedTheme = Utils.getLocalStorage('theme');

    if (preloader) {
      if (savedTheme === 'dark') preloader.classList.add('dark-mode');
      else preloader.classList.remove('dark-mode');
    }

    setTimeout(() => {
      if (preloader) preloader.classList.add('hidden');
      if (mainContent) mainContent.classList.remove('hidden');
    }, 1000);
  },

  apply(isDark) {
    const body = document.body;
    const profileImage = Utils.getElement('profileImage');
    const modalProfileImage = Utils.getElement('modalProfileImage');
    const homeIcon = Utils.getElement('homeIcon');

    try {
      if (isDark) {
        body.classList.add('dark-mode');
        if (profileImage) Utils.preloadImage(profileImage, this.IMG_PATHS.logo_dark);
        if (modalProfileImage) Utils.preloadImage(modalProfileImage, this.IMG_PATHS.logo_dark);
        if (homeIcon) homeIcon.src = this.IMG_PATHS.home_dark;
        Utils.setLocalStorage('theme', 'dark');
      } else {
        body.classList.remove('dark-mode');
        if (profileImage) Utils.preloadImage(profileImage, this.IMG_PATHS.logo_light);
        if (modalProfileImage) Utils.preloadImage(modalProfileImage, this.IMG_PATHS.logo_light);
        if (homeIcon) homeIcon.src = this.IMG_PATHS.home_light;
        Utils.setLocalStorage('theme', 'light');
      }
    } catch (error) {
      console.error('Error applying theme:', error);
    }
  },


  syncModalImage() {
    const saved = Utils.getLocalStorage('theme') || 
                  (document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    const modal = Utils.getElement('modalProfileImage');
    if (!modal) return;
    const logoPath = saved === 'dark' ? this.IMG_PATHS.logo_dark : this.IMG_PATHS.logo_light;
    Utils.preloadImage(modal, logoPath);
  },


  initToggle() {
    const toggle = Utils.getElement('darkModeToggle');
    if (!toggle) return;

    const savedTheme = Utils.getLocalStorage('theme');
    this.apply(savedTheme === 'dark');
    toggle.checked = (savedTheme === 'dark');
    toggle.addEventListener('change', (e) => this.apply(e.target.checked));
  }
};

// ============================================
// 5. MODAL MANAGER
// ============================================
const ModalManager = {

  open(modalId, onOpen = null) {
    const modal = Utils.getElement(modalId);
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

    if (onOpen) onOpen();
  },


  close(modalId) {
    const modal = Utils.getElement(modalId);
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
    }, CONFIG.ANIMATION_DURATION);
  },


  setupBackgroundClose(modalId, closeFunction) {
    const modal = Utils.getElement(modalId);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeFunction();
      });
    }
  },


  setupEscapeClose(closeFunction) {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeFunction();
    });
  },


  // Step 1: Open preview modal with GIF
  openPreview(videoId) {
    const videoData = CONFIG.getVideoData(videoId, LanguageManager.currentLang);
    if (!videoData) return;

    const modal = Utils.getElement('videoPreviewModal');
    const gif = Utils.getElement('previewGif');
    const title = Utils.getElement('previewTitle');
    const description = Utils.getElement('previewDescription');
    const watchBtn = Utils.getElement('watchFullButton');

    if (modal && gif && title && description && watchBtn) {
      gif.src = videoData.gif;
      title.textContent = videoData.title;
      description.textContent = videoData.description;
      
      // Store videoId for Watch Full button
      watchBtn.setAttribute('data-video-id', videoId);
      
      modal.classList.remove('hidden');
      modal.classList.add('modal-open');
      document.body.classList.add('modal-open');
    }
  },

  closePreview() {
    const modal = Utils.getElement('videoPreviewModal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('modal-open');
      document.body.classList.remove('modal-open');
    }
  },

  // Step 2: Open fullscreen YouTube embed
  openYoutubeFullscreen(videoId) {
    const modal = Utils.getElement('youtubeModal');
    const iframe = Utils.getElement('youtubeIframe');

    if (iframe && modal) {
      iframe.src = CONFIG.YOUTUBE_EMBED + videoId + CONFIG.YOUTUBE_PARAMS;
      modal.classList.remove('hidden');
      modal.classList.add('modal-open');
      document.body.classList.add('modal-open');
      
      // Request fullscreen after short delay
      setTimeout(() => {
        this.requestFullscreen(modal);
      }, 300);
    }
  },

  closeYoutube() {
    const modal = Utils.getElement('youtubeModal');
    const iframe = Utils.getElement('youtubeIframe');

    if (modal) {
      // Exit fullscreen if active
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(err => console.debug('Exit fullscreen error:', err));
      }
      
      modal.classList.add('hidden');
      modal.classList.remove('modal-open');
      document.body.classList.remove('modal-open');
      if (iframe) iframe.src = '';
    }
  },

  requestFullscreen(element) {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (element.requestFullscreen) {
      element.requestFullscreen().then(() => {
        // Lock orientation to landscape on mobile
        if (isMobile && screen.orientation && screen.orientation.lock) {
          screen.orientation.lock('landscape').catch(err => {
            console.debug('Orientation lock failed:', err);
          });
        }
      }).catch(err => console.debug('Fullscreen request failed:', err));
    }
  }
};

// ============================================
// 6. RENDER CALCULATOR MANAGER
// ============================================
const RenderCalculator = {

  calculate() {
    const frameCountInput = Utils.getElement('frameCount');
    const resultDiv = Utils.getElement('result');
    const loadingDiv = Utils.getElement('loading');
    const resolution = Utils.getElement('resolution')?.value || '';

    if (!frameCountInput || !resultDiv || !loadingDiv) return;

    // Validate custom resolution if selected
    if (resolution === 'custom') {
      const customWidth = Utils.getElement('customWidth');
      const customHeight = Utils.getElement('customHeight');
      const warningDiv = Utils.getElement('customResolutionWarning');
      
      if (!customWidth?.value || !customHeight?.value) {
        warningDiv?.classList.remove('hidden');
        return;
      } else {
        warningDiv?.classList.add('hidden');
      }
    }

    resultDiv.classList.add('hidden');
    loadingDiv.classList.remove('hidden');

    setTimeout(() => {
      const frameCount = parseInt(frameCountInput.value, 10);
      const renderEngine = Utils.getElement('renderEngine')?.value || '';
      const totalPriceEl = Utils.getElement('totalPrice');
      const totalTimeEl = Utils.getElement('totalTime');

      let pricePerFrame = FRAME_PRICES[renderEngine]?.[resolution] || 0;
      
      // Handle custom resolution pricing based on pixel count
      if (resolution === 'custom') {
        const customWidth = parseInt(Utils.getElement('customWidth')?.value || 1920, 10);
        const customHeight = parseInt(Utils.getElement('customHeight')?.value || 1080, 10);
        const customPixels = customWidth * customHeight;

        // Reference resolutions with pixel counts
        const resolutions = {
          'HD (1280x720)': 1280 * 720,           // 921,600
          'Full HD (1920x1080)': 1920 * 1080,     // 2,073,600
          '2K (2048x1080)': 2048 * 1080,          // 2,211,840
          '4K (3840x2160)': 3840 * 2160           // 8,294,400
        };

        // Find closest reference resolution for pricing
        let closestKey = 'Full HD (1920x1080)';
        let minDifference = Math.abs(customPixels - resolutions['Full HD (1920x1080)']);

        for (const [key, pixels] of Object.entries(resolutions)) {
          const difference = Math.abs(customPixels - pixels);
          if (difference < minDifference) {
            minDifference = difference;
            closestKey = key;
          }
        }

        // Use pricing dari reference resolution terdekat
        pricePerFrame = FRAME_PRICES[renderEngine]?.[closestKey] || 0;
      }
      
      const totalPrice = pricePerFrame * frameCount;

      if (totalPriceEl) totalPriceEl.textContent = Utils.formatRupiah(totalPrice);
      if (totalTimeEl) totalTimeEl.textContent = "Rendering time will vary.";

      loadingDiv.classList.add('hidden');
      resultDiv.classList.remove('hidden');
    }, 1000);
  },

  /**
   * Order via WhatsApp with pre-filled message
   */
  orderViaWhatsapp() {
    const renderEngine = Utils.getElement('renderEngine')?.value || '';
    const blenderVersion = Utils.getElement('blenderVersion')?.value || '';
    let resolution = Utils.getElement('resolution')?.value || '';
    const frameCount = Utils.getElement('frameCount')?.value || '';

    // Get current language
    const lang = LanguageManager.currentLang;
    const t = CONFIG.TRANSLATIONS[lang];

    // If custom resolution is selected, add custom dimensions
    if (resolution === 'custom') {
      const customWidth = Utils.getElement('customWidth')?.value || '';
      const customHeight = Utils.getElement('customHeight')?.value || '';
      resolution = `${t.whatsapp_custom} (${customWidth}x${customHeight})`;
    }

    const message = encodeURIComponent(
      `${t.whatsapp_greeting}\n\n*${t.whatsapp_engine}:* ${renderEngine}\n*${t.whatsapp_blender}:* ${blenderVersion}\n*${t.whatsapp_resolution}:* ${resolution}\n*${t.whatsapp_frames}:* ${frameCount}`
    );

    const whatsappUrl = `https://wa.me/${CONFIG.WHATSAPP_PHONE}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  },

  updateFrameCountDisplay() {
    const slider = Utils.getElement('frameCount');
    const display = Utils.getElement('frameCountValue');

    if (slider && display) {
      slider.addEventListener('input', (e) => {
        display.textContent = e.target.value;
      });
    }
  }
};

// ============================================
// 7. FILTER/TAB MANAGER
// ============================================
const FilterManager = {

  initToggle() {
    const toggle = Utils.getElement('filter');
    const linksSection = Utils.querySelector('.shared-card-main');
    const assetsSection = Utils.querySelector('.assets-card-main');

    if (!toggle || !linksSection) return;

    const updateVisibility = () => {
      if (toggle.checked) {
        linksSection.classList.add('hidden');
        if (assetsSection) assetsSection.classList.remove('hidden');
      } else {
        linksSection.classList.remove('hidden');
        if (assetsSection) assetsSection.classList.add('hidden');
      }
    };

    updateVisibility();
    toggle.addEventListener('change', updateVisibility);
  },


  initTabs() {
    const linksTab = Utils.getElement('links-tab');
    const assetsTab = Utils.getElement('assets-tab');
    const linksContent = Utils.getElement('links-content');
    const assetsContent = Utils.getElement('assets-content');
    const pill = Utils.getElement('pill');

    if (!linksTab || !assetsTab || !linksContent || !assetsContent || !pill) return;

    const setActiveTab = (activeTab, inactiveTab, activeContent, inactiveContent, pillPos) => {
      activeTab.classList.add('active-link');
      inactiveTab.classList.remove('active-link');
      activeContent.classList.remove('hidden');
      inactiveContent.classList.add('hidden');
      pill.style.transform = pillPos;
    };

    setActiveTab(linksTab, assetsTab, linksContent, assetsContent, 'translateX(0%)');
    linksTab.addEventListener('click', () => 
      setActiveTab(linksTab, assetsTab, linksContent, assetsContent, 'translateX(0%)')
    );
    assetsTab.addEventListener('click', () => 
      setActiveTab(assetsTab, linksTab, assetsContent, linksContent, 'translateX(100%)')
    );
  }
};

// ============================================
// 8. FORM SUBMISSION MANAGER
// ============================================
const FormManager = {

  async submitForm(formEl, modalId, messages = {}) {
    if (!formEl) return;

    const submitBtn = formEl.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.textContent : '';
    const sendingMsg = messages.sending || 'Sending...';
    const successMsg = messages.success || '✓ Success!';
    const errorMsg = messages.error || '✗ Error. Try again';

    try {
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = sendingMsg;
      }

      const formData = new FormData(formEl);
      const response = await fetch(formEl.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        if (submitBtn) submitBtn.textContent = successMsg;
        setTimeout(() => {
          if (modalId) ModalManager.close(modalId);
          formEl.reset();
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
          }
        }, 1500);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error(`Form submission error:`, error);
      if (submitBtn) {
        submitBtn.textContent = errorMsg;
        submitBtn.disabled = false;
        setTimeout(() => { submitBtn.textContent = originalText; }, 3000);
      }
    }
  }
};

// ============================================
// 9. MODAL SETUP HELPERS
// ============================================
const ModalSetup = {

  setupModal(modalId, triggerSelector, closeSelector) {
    const trigger = Utils.getElement(triggerSelector.replace('#', ''));
    const modal = Utils.getElement(modalId);
    const closeBtn = Utils.getElement(closeSelector.replace('#', ''));

    if (trigger && modal) {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        ModalManager.open(modalId);
      });
    }

    ModalManager.setupBackgroundClose(modalId, () => ModalManager.close(modalId));
    ModalManager.setupEscapeClose(() => {
      if (modal && modal.classList.contains('modal-open')) {
        ModalManager.close(modalId);
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => ModalManager.close(modalId));
    }
  },


  setupModalWithForm(modalId, triggerSelector, closeSelector, messages = {}) {
    this.setupModal(modalId, triggerSelector, closeSelector);

    const modal = Utils.getElement(modalId);
    const form = modal ? modal.querySelector('form') : null;

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        await FormManager.submitForm(form, modalId, messages);
      });
    }
  }
};

// ============================================
// 10. UTILITY INTERACTIONS
// ============================================
const UIInteractions = {

  setupYoutubeModals() {
    const triggers = Utils.querySelectorAll('.youtube-modal-trigger');
    const closePreviewBtn = Utils.getElement('closePreviewModal');
    const closeYoutubeBtn = Utils.getElement('closeYoutubeModal');
    const watchFullBtn = Utils.getElement('watchFullButton');

    // Step 1: Click video link -> Open preview modal
    if (triggers.length) {
      triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          const videoId = trigger.getAttribute('data-video-id');
          if (videoId) ModalManager.openPreview(videoId);
        });
      });
    }

    // Close preview modal
    if (closePreviewBtn) {
      closePreviewBtn.addEventListener('click', () => ModalManager.closePreview());
    }

    // Step 2: Click Watch Full -> Close preview, open fullscreen YouTube
    if (watchFullBtn) {
      watchFullBtn.addEventListener('click', () => {
        const videoId = watchFullBtn.getAttribute('data-video-id');
        if (videoId) {
          ModalManager.closePreview();
          setTimeout(() => {
            ModalManager.openYoutubeFullscreen(videoId);
          }, 100);
        }
      });
    }

    // Close YouTube modal
    if (closeYoutubeBtn) {
      closeYoutubeBtn.addEventListener('click', () => ModalManager.closeYoutube());
    }

    // Background click closes
    ModalManager.setupBackgroundClose('videoPreviewModal', () => ModalManager.closePreview());
    ModalManager.setupBackgroundClose('youtubeModal', () => ModalManager.closeYoutube());
    
    // Escape key closes
    ModalManager.setupEscapeClose(() => {
      const previewModal = Utils.getElement('videoPreviewModal');
      const youtubeModal = Utils.getElement('youtubeModal');
      
      if (youtubeModal && youtubeModal.classList.contains('modal-open')) {
        ModalManager.closeYoutube();
      } else if (previewModal && previewModal.classList.contains('modal-open')) {
        ModalManager.closePreview();
      }
    });
    
    // Exit fullscreen handler
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        const youtubeModal = Utils.getElement('youtubeModal');
        if (youtubeModal && youtubeModal.classList.contains('modal-open')) {
          ModalManager.closeYoutube();
        }
      }
    });
  },

  setupCopyCode() {
    const btn = Utils.getElement('copyCodeBtn');
    if (btn) {
      btn.addEventListener('click', () => {
        navigator.clipboard.writeText(CONFIG.DISCOUNT_CODE).then(() => {
          const span = btn.querySelector('span');
          if (span) span.textContent = 'Copied';
          setTimeout(() => { if (span) span.textContent = 'Copy'; }, 2000);
        }).catch(err => { console.error('Copy failed:', err); });
      });
    }
  },


  setupStoreButton() {
    const btn = Utils.getElement('goToStore');
    if (btn) {
      btn.addEventListener('click', () => {
        window.open(CONFIG.STORE_URL, '_blank');
      });
    }
  },

  setupPortfolioModal() {
    const modal = Utils.getElement('portfolioModal');
    const closeBtn = Utils.getElement('closePortfolioModal');
    const openBtn = Utils.getElement('portfolioModalLink');
    
    if (!modal) return;

    const isMobile = () => window.innerWidth <= 768;

    const requestFullscreenLandscape = () => {
      if (!isMobile()) return;
      
      modal.classList.add('fullscreen-mobile');
      
      // Request fullscreen
      if (modal.requestFullscreen) {
        modal.requestFullscreen().then(() => {
          // Lock to landscape orientation
          if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock('landscape').catch(err => {
              console.debug('Orientation lock not supported:', err);
            });
          }
        }).catch(err => {
          console.debug('Fullscreen not supported:', err);
        });
      }
    };

    const exitFullscreenLandscape = () => {
      modal.classList.remove('fullscreen-mobile');
      
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(err => {
          console.debug('Exit fullscreen error:', err);
        });
      }
      
      // Unlock orientation
      if (screen.orientation && screen.orientation.unlock) {
        try {
          screen.orientation.unlock();
        } catch (err) {
          console.debug('Orientation unlock error:', err);
        }
      }
    };

    // Open modal handler
    if (openBtn) {
      openBtn.addEventListener('click', () => {
        setTimeout(() => {
          requestFullscreenLandscape();
        }, 300);
      });
    }

    // Close button handler
    if (closeBtn) {
      const originalClick = closeBtn.onclick;
      closeBtn.addEventListener('click', () => {
        exitFullscreenLandscape();
      });
    }

    // Fullscreen change handler
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement && modal.classList.contains('modal-open')) {
        modal.classList.remove('fullscreen-mobile');
      }
    });

    // Background click handler
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        exitFullscreenLandscape();
      }
    });
  }
};

// ============================================
// 11. INITIALIZATION
// ============================================
const App = {

  init() {
    // Language
    LanguageManager.init();
    
    // Theme & Preloader
    ThemeManager.initPreloader();
    ThemeManager.initToggle();

    // Modals - Subscribe
    ModalSetup.setupModal('subscribeModal', 'subscribeBtn', 'closeModal');
    const subscribeBtn = Utils.getElement('subscribeBtn');
    if (subscribeBtn) {
      subscribeBtn.addEventListener('click', () => ThemeManager.syncModalImage());
    }

    // Modals - Course
    ModalSetup.setupModal('courseModal', 'courseModalLink', 'closeCourseModal');

    // Modals - Portfolio
    ModalSetup.setupModal('portfolioModal', 'portfolioModalLink', 'closePortfolioModal');
    UIInteractions.setupPortfolioModal();

    // Modals - Commission
    ModalSetup.setupModal('commissionModal', 'commissionModalLink', 'closeCommissionModal');

    // Modals - Asset Management
    ModalSetup.setupModal('assetManagementModal', 'assetManagementModalLink', 'closeAssetManagementModal');

    // Modals - YouTube
    UIInteractions.setupYoutubeModals();

    // Filters & Tabs
    FilterManager.initToggle();
    FilterManager.initTabs();

    // Calculator
    RenderCalculator.updateFrameCountDisplay();

    // Utilities
    UIInteractions.setupCopyCode();
    UIInteractions.setupStoreButton();
  }
};

// ============================================
// 12. LIFECYCLE
// ============================================
window.addEventListener('load', () => ThemeManager.initPreloader());

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

// ============================================
// 13. GLOBAL API (for inline handlers)
// ============================================
window.calculatePrice = () => RenderCalculator.calculate();
window.orderViaWhatsapp = () => RenderCalculator.orderViaWhatsapp();

// Custom Resolution Functions
window.toggleCustomResolution = () => {
  const resolutionSelect = document.getElementById('resolution');
  const customResolutionForm = document.getElementById('customResolutionForm');
  
  if (resolutionSelect.value === 'custom') {
    customResolutionForm.classList.remove('hidden');
  } else {
    customResolutionForm.classList.add('hidden');
  }
};

// ============================================
// FORMSPREE CUSTOM SUBMISSION HANDLER
// ============================================
async function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const submitButton = form.querySelector('button[type="submit"]');
  const buttonText = submitButton.querySelector('.button-text');
  const spinner = submitButton.querySelector('.spinner');

  // Show loading state with smooth transition
  const iconWrapper = submitButton.querySelector('.w-0');
  
  buttonText.classList.add('opacity-0');
  if (iconWrapper) iconWrapper.classList.add('hidden');
  
  setTimeout(() => {
    buttonText.classList.add('hidden');
    spinner.classList.remove('hidden');
    submitButton.disabled = true;
  }, 100);

  const data = new FormData(form);
  
  // Add 1 second minimum delay for smooth UX
  const delayedFetch = new Promise((resolve) => {
    setTimeout(() => {
      fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      }).then(resolve);
    }, 1000);
  });

  try {
    const response = await delayedFetch;
    console.debug('[Formspree] Response status:', response && response.status);

    if (response && response.ok) {
      // Add closing animation to current modal
      const currentModal = form.closest('.fixed');
      if (currentModal) {
        currentModal.classList.add('modal-closing');
        
        // Wait for animation to complete before hiding
        setTimeout(() => {
          currentModal.style.display = 'none';
          currentModal.classList.add('hidden');
          currentModal.classList.remove('modal-closing');
        }, 300); // Match animation duration
      }

      // Show greeting modal after 0.5s delay (300ms close animation + 200ms gap)
      setTimeout(() => {
        const greetingModal = document.getElementById('greetingModal');
        const greetingMessage = document.getElementById('greetingModalMessage');
        
        if (form.id === 'subscribeForm') {
          greetingMessage.textContent = LanguageManager.t('greeting_subscribe');
        } else if (form.id === 'commissionForm') {
          greetingMessage.textContent = LanguageManager.t('greeting_commission');
        }
        
        greetingModal.classList.remove('hidden');
      }, 500);
      
      // Reset form
      form.reset();
    } else {
      console.warn('[Formspree] Non-OK response, showing greeting fallback');
      const currentModal = form.closest('.fixed');
      if (currentModal) {
        currentModal.style.display = 'none';
        currentModal.classList.add('hidden');
      }

      setTimeout(() => {
        const greetingModal = document.getElementById('greetingModal');
        const greetingMessage = document.getElementById('greetingModalMessage');
        greetingMessage.textContent = form.id === 'subscribeForm'
          ? LanguageManager.t('greeting_subscribe')
          : LanguageManager.t('greeting_commission');
        greetingModal.classList.remove('hidden');
      }, 100);
    }
  } catch (error) {
    console.error('[Formspree] Fetch error:', error);
    // Show greeting as a graceful fallback
    const currentModal = form.closest('.fixed');
    if (currentModal) {
      currentModal.style.display = 'none';
      currentModal.classList.add('hidden');
    }

    setTimeout(() => {
      const greetingModal = document.getElementById('greetingModal');
      const greetingMessage = document.getElementById('greetingModalMessage');
      greetingMessage.textContent = form.id === 'subscribeForm'
        ? LanguageManager.t('greeting_subscribe')
        : LanguageManager.t('greeting_commission');
      greetingModal.classList.remove('hidden');
    }, 100);
  } finally {
    // Hide loading state with smooth transition
    const iconWrapper = submitButton.querySelector('.w-0');
    
    setTimeout(() => {
      spinner.classList.add('hidden');
      buttonText.classList.remove('hidden');
      buttonText.classList.remove('opacity-0');
      if (iconWrapper) iconWrapper.classList.remove('hidden');
      submitButton.disabled = false;
    }, 300);
  }
}

// Initialize form submission handlers when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeFormSubmissionHandlers);
} else {
  initializeFormSubmissionHandlers();
}

function initializeFormSubmissionHandlers() {
  const subscribeForm = document.getElementById('subscribeForm');
  const commissionForm = document.getElementById('commissionForm');
  
  if (subscribeForm) {
    subscribeForm.addEventListener("submit", handleFormSubmit);
  }
  if (commissionForm) {
    commissionForm.addEventListener("submit", handleFormSubmit);
  }

  // Greeting modal close button
  const closeGreetingModal = document.getElementById('closeGreetingModal');
  const greetingModal = document.getElementById('greetingModal');
  if (closeGreetingModal) {
    closeGreetingModal.addEventListener('click', () => {
      greetingModal.classList.add('hidden');
    });
  }
}