(function () {
  const config = Object.assign(
    {
      googleTagManagerId: '',
      ga4MeasurementId: '',
      googleAdsConversionId: '',
      googleAdsPhoneClickLabel: '',
      googleAdsEmailClickLabel: '',
      googleAdsFormSubmitLabel: '',
      debug: false
    },
    window.NEUSKALE_ANALYTICS || {}
  );

  const state = {
    formStarts: new WeakSet(),
    trackerMode: 'queue'
  };

  const preInitQueue = Array.isArray(window.neuskaleAnalyticsEventQueue)
    ? window.neuskaleAnalyticsEventQueue
    : [];
  const debugQueue = Array.isArray(window.neuskaleAnalyticsDebugQueue)
    ? window.neuskaleAnalyticsDebugQueue
    : [];

  window.neuskaleAnalyticsEventQueue = preInitQueue;
  window.neuskaleAnalyticsDebugQueue = debugQueue;
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  function hasValue(value) {
    return typeof value === 'string' && value.trim() !== '';
  }

  function log(eventName, payload) {
    if (config.debug && window.console) {
      window.console.info('[Neuskale analytics]', eventName, payload || '');
    }
  }

  function injectScript(src) {
    const script = document.createElement('script');
    script.async = true;
    script.src = src;
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }
  }

  function initTracking() {
    if (hasValue(config.googleTagManagerId)) {
      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      injectScript(
        'https://www.googletagmanager.com/gtm.js?id=' +
          encodeURIComponent(config.googleTagManagerId)
      );
      state.trackerMode = 'gtm';
      return;
    }

    if (hasValue(config.ga4MeasurementId) || hasValue(config.googleAdsConversionId)) {
      const primaryId = config.ga4MeasurementId || config.googleAdsConversionId;
      injectScript(
        'https://www.googletagmanager.com/gtag/js?id=' +
          encodeURIComponent(primaryId)
      );
      window.gtag('js', new Date());

      if (hasValue(config.ga4MeasurementId)) {
        window.gtag('config', config.ga4MeasurementId, { send_page_view: true });
      }

      if (hasValue(config.googleAdsConversionId)) {
        window.gtag('config', config.googleAdsConversionId);
      }

      state.trackerMode = 'gtag';
      return;
    }

    state.trackerMode = 'queue';
    log('config_missing', 'No live analytics IDs configured yet.');
  }

  function slugify(value) {
    return String(value || '')
      .trim()
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '')
      .slice(0, 40);
  }

  function cleanParams(params) {
    return Object.entries(params).reduce((cleaned, [key, value]) => {
      if (value === undefined || value === null || value === '') return cleaned;
      if (typeof value === 'string') {
        const trimmed = value.trim();
        if (!trimmed) return cleaned;
        cleaned[key] = trimmed.slice(0, 100);
        return cleaned;
      }
      cleaned[key] = value;
      return cleaned;
    }, {});
  }

  function getPageType() {
    const path = window.location.pathname.toLowerCase();

    if (path === '/' || path.endsWith('/index.html')) return 'home';
    if (path.endsWith('/blog.html')) return 'blog_hub';
    if (path.includes('/blog/')) return 'blog_article';
    if (path.endsWith('/pricing.html')) return 'pricing';
    if (path.endsWith('/contact.html')) return 'contact';
    if (path.endsWith('/title-search.html')) return 'services';
    if (path.endsWith('/about.html')) return 'about';
    if (path.endsWith('/faq.html')) return 'faq';
    if (path.endsWith('/best-title-search-companies.html')) return 'comparison';

    return 'site_page';
  }

  function getBaseParams() {
    return {
      page_type: getPageType(),
      page_path: window.location.pathname,
      page_title: document.title
    };
  }

  function emitEvent(eventName, params) {
    const payload = Object.assign(getBaseParams(), cleanParams(params || {}));

    if (state.trackerMode === 'gtm') {
      window.dataLayer.push(Object.assign({ event: eventName }, payload));
    } else if (state.trackerMode === 'gtag') {
      window.gtag('event', eventName, payload);
    } else {
      window.neuskaleAnalyticsDebugQueue.push({ event: eventName, payload: payload });
    }

    log(eventName, payload);
  }

  function trackAdsConversion(label) {
    if (
      state.trackerMode !== 'gtag' ||
      !hasValue(config.googleAdsConversionId) ||
      !hasValue(label)
    ) {
      return;
    }

    window.gtag('event', 'conversion', {
      send_to: config.googleAdsConversionId + '/' + label
    });
  }

  function getElementText(element) {
    const source = element.getAttribute('aria-label') || element.textContent || '';
    return slugify(source).slice(0, 40) || 'untitled';
  }

  function getLocationLabel(element) {
    if (element.closest('.mobile-sticky-cta')) return 'mobile_sticky';
    if (element.closest('header')) return 'header';
    if (element.closest('footer')) return 'footer';
    if (element.closest('.cta-section')) return 'page_cta';
    if (element.closest('.contact-info-card')) return 'contact_info';
    if (element.closest('.pricing-card, .pricing-plan-card, .service-pricing-card')) return 'pricing_card';

    const section = element.closest('section');
    if (!section) return 'page_body';
    if (section.id) return slugify(section.id);

    const heading = section.querySelector('h1, h2, h3');
    return heading ? slugify(heading.textContent) : 'section';
  }

  function getCtaTarget(element) {
    const href = (element.getAttribute('href') || '').toLowerCase();

    if (!href) return 'button';
    if (href.startsWith('#')) return 'page_anchor';
    if (href.indexOf('contact.html') !== -1) return 'contact_page';
    if (href.indexOf('pricing.html') !== -1) return 'pricing_page';
    if (href.indexOf('best-title-search-companies.html') !== -1) return 'comparison_page';
    if (href.indexOf('title-search.html') !== -1) return 'services_page';
    if (href.indexOf('blog.html') !== -1 || href.indexOf('/blog/') !== -1) return 'content_page';
    if (href.startsWith('http')) return 'external_page';

    return 'internal_page';
  }

  function isCtaElement(element) {
    return (
      element.matches('.btn, .nav-cta, .mobile-sticky-action, .spc-cta') ||
      Boolean(element.closest('.cta-buttons, .mobile-sticky-cta'))
    );
  }

  function getFormName(form) {
    return slugify(form.getAttribute('data-analytics-form') || form.id || form.name || 'site_form');
  }

  function getSelectValue(form, name) {
    const field = form.querySelector('[name="' + name + '"]');
    return field ? slugify(field.value) : '';
  }

  function getRadioValue(form, name) {
    const field = form.querySelector('input[name="' + name + '"]:checked');
    return field ? slugify(field.value) : '';
  }

  function getSafeFormParams(form) {
    const payload = {
      form_name: getFormName(form)
    };

    if (form.id === 'orderForm') {
      payload.lead_type = getRadioValue(form, 'order_intent');
      payload.search_type = getSelectValue(form, 'search_type');
      payload.property_state = getSelectValue(form, 'state');
    }

    return cleanParams(payload);
  }

  function flushPreInitEvents() {
    while (window.neuskaleAnalyticsEventQueue.length) {
      const queued = window.neuskaleAnalyticsEventQueue.shift();
      if (!queued || !queued.eventName) continue;
      emitEvent(queued.eventName, queued.params);
    }
  }

  const analyticsApi = {
    track: emitEvent
  };

  window.neuskaleAnalytics = analyticsApi;

  initTracking();
  flushPreInitEvents();

  document.addEventListener('focusin', function (event) {
    if (!event.target.matches('input, select, textarea')) return;

    const form = event.target.closest('form');
    if (!form || state.formStarts.has(form)) return;

    state.formStarts.add(form);
    emitEvent('form_start', getSafeFormParams(form));
  });

  document.addEventListener('submit', function (event) {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;

    const params = Object.assign(getSafeFormParams(form), {
      contact_method: 'form'
    });

    emitEvent('generate_lead', params);
    trackAdsConversion(config.googleAdsFormSubmitLabel);
  });

  document.addEventListener('click', function (event) {
    const target = event.target.closest('a, button');
    if (!target) return;

    const href = target.getAttribute('href') || '';

    if (href.indexOf('tel:') === 0) {
      emitEvent('phone_click', {
        click_location: getLocationLabel(target),
        cta_text: getElementText(target),
        contact_method: 'phone'
      });
      trackAdsConversion(config.googleAdsPhoneClickLabel);
      return;
    }

    if (href.indexOf('mailto:') === 0) {
      emitEvent('email_click', {
        click_location: getLocationLabel(target),
        cta_text: getElementText(target),
        contact_method: 'email'
      });
      trackAdsConversion(config.googleAdsEmailClickLabel);
      return;
    }

    if (target.closest('form')) return;
    if (!isCtaElement(target)) return;

    emitEvent('cta_click', {
      cta_text: getElementText(target),
      cta_location: getLocationLabel(target),
      cta_target: getCtaTarget(target),
      cta_variant: slugify(target.className || target.tagName.toLowerCase())
    });
  });
})();
