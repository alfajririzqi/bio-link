// ============================================
// FILTER/TAB MANAGER
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
// MODAL SETUP HELPERS
// ============================================
const ModalSetup = {

  setupModal(modalId, triggerSelector, closeSelector) {
    const trigger = Utils.getElement(triggerSelector.replace('#', ''));
    const modal = Utils.getElement(modalId);
    const closeBtn = Utils.getElement(closeSelector.replace('#', ''));

    if (trigger && modal) {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        // Sync modal image for subscribe modal before opening
        if (modalId === 'subscribeModal') {
          ThemeManager.syncModalImage();
        }
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
  }
};

// ============================================
// UI INTERACTIONS
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

// ============================================
// APP INITIALIZATION
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
// LIFECYCLE
// ============================================
window.addEventListener('load', () => ThemeManager.initPreloader());

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
