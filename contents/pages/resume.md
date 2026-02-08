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
</script>
