---
layout: fullscreen
permalink: /resume/
title: CV
nav: true
nav_order: 4
---

<div id="pdf-viewer" style="height: 100vh; overflow: hidden;"></div>

<script type="module">
  import EmbedPDF from '{{ site.third_party_libraries.embedpdf.url.js }}';

  function getTheme() {
    const style = getComputedStyle(document.documentElement);
    const theme = {
      accent: {
        primary: style.getPropertyValue('--global-theme-color')
      },
      background: {
        app: style.getPropertyValue('--global-bg-color'),
        surface: style.getPropertyValue('--global-bg-color'),
        input: style.getPropertyValue('--global-card-bg-color')
      },
      foreground: {
        primary: style.getPropertyValue('--global-text-color'),
        secondary: style.getPropertyValue('--global-text-color-light')
      },
      border: {
        default: style.getPropertyValue('--global-card-bg-color')
      },
      scrollbar: {
        track: style.getPropertyValue('--global-divider-color'),
        thumb: style.getPropertyValue('--global-text-color'),
        thumbHover: style.getPropertyValue('--global-hover-text-color')
      }
    };

    return { preference: determineThemeSetting(), light: theme, dark: theme };
  }

  const viewer = EmbedPDF.init({
    type: 'container',
    target: document.getElementById('pdf-viewer'),
    src: '{{ site.url | append: site.baseurl | append: '/assets/pdf/' | append: site.cv_pdf }}',
    pan: { defaultMode: 'always' },
    disabledCategories: ['annotation'],
    zoom: { defaultZoomLevel: 'fit-width' },
    theme: getTheme()
  });

  // add event listener to the theme toggle button
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("light-toggle").addEventListener("click", function () {
      viewer.setTheme(getTheme());
    });
  });

  // close toolbars
  const registry = await viewer.registry;
  const ui = registry.getPlugin('ui').provides();
  ui.forDocument().closeToolbarSlot("top", "main");

  // adapt PDF zoom to max width (see https://github.com/embedpdf/embed-pdf-viewer/issues/271)
  const zoom = registry.getPlugin('zoom').provides(), zoomConfig = registry.getPluginConfig('zoom');
  const cm_to_pt = 72 / 2.54, max_width = parseFloat("{{ site.max_width }}");
  zoom.onZoomChange(({ documentId, level, viewport }) => {
    if (level === zoomConfig.defaultZoomLevel && viewport.width >= max_width + 2.8 * cm_to_pt) {
      const style = getComputedStyle(document.querySelector('.container'));
      const contentWidth = max_width - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
      zoom.forDocument(documentId).requestZoom(contentWidth / (18.2 * cm_to_pt), { vx: 0, vy: 0 });
    }
  });

  // make link annotations navigate directly
  const annotation = registry.getPlugin('annotation').provides();
  annotation.onStateChange(({ documentId, state }) => {
    if (state.selectedUids.length === 1) {
      const selected = state.byUid[state.selectedUids[0]];
      if (selected && selected.object.type === 2) { // 2 = LINK
        const target = selected.object.target;
        queueMicrotask(annotation.forDocument(documentId).deselectAnnotation);
        if (target && target.type === 'action' && target.action.type === 3) { // 3 = URI
          window.open(target.action.uri, '_blank');
        }
      }
    }
  });
</script>
