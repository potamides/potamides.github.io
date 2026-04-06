---
layout: default
permalink: /cv/
title: CV
nav: true
nav_order: 4
---

<link rel="stylesheet" href="{{ site.third_party_libraries.pdfjs.url.css }}">

<style>
  .container {
    margin-top: 0 !important;
    overflow: clip;
  }
  #viewerContainer {
    position: absolute;
    overflow-x: clip;
    left: 0;
    right: 0;
  }
  #viewerContainer .pdfViewer .page:last-child {
    margin-bottom: var(--footer-height, 0px);
  }
</style>

<div id="viewerContainer">
  <div id="viewer" class="pdfViewer"></div>
</div>

<script id="script" type="module">
  import * as pdfjsLib from "{{ site.third_party_libraries.pdfjs.url.js }}";
  import { EventBus, PDFLinkService, PDFViewer, LinkTarget } from "{{ site.third_party_libraries.pdfjs.url.viewer }}";
  pdfjsLib.GlobalWorkerOptions.workerSrc = "{{ site.third_party_libraries.pdfjs.url.worker }}";

  const eventBus = new EventBus();
  const linkService = new PDFLinkService({ eventBus, externalLinkTarget: LinkTarget.BLANK });
  const container = document.getElementById("viewerContainer");

  const viewer = new PDFViewer({
    container,
    eventBus,
    linkService,
  });

  const url = "{{ site.url | append: site.baseurl | append: '/assets/pdf/' | append: site.cv_pdf }}";
  const pdf = await pdfjsLib.getDocument(url).promise;
  const pageWidth = (await pdf.getPage(1)).getViewport({ scale: 1 }).width;

  function computeScale() {
    const style = getComputedStyle(document.querySelector(".container"));
    const padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    const border = 2 * parseFloat(getComputedStyle(container).getPropertyValue("--page-border"));

    // exclude pdf margins when computing the desired width
    const desiredWidth = (21/18.2) * parseFloat("{{ site.max_width }}") - padding + border;
    const viewerWidth = document.getElementById("viewer").clientWidth;

    const CSS_TO_PDF_UNITS = 72 / 96;
    const targetWidth = Math.min(desiredWidth, viewerWidth);
    return CSS_TO_PDF_UNITS * targetWidth / pageWidth;
  }

  // use _currentScale to prevent scroll trigger
  viewer._currentScale = computeScale();
  viewer.setDocument(pdf);
  linkService.setViewer(viewer);
  linkService.setDocument(pdf);

  // trigger resize to repair progress bar
  eventBus.on("pagesloaded", () => window.dispatchEvent(new Event("resize")));
  window.addEventListener("resize", () => viewer.currentScale = computeScale());
</script>

<script>
  window.addEventListener("load", () => {
    const footerHeight = document.querySelector('footer').offsetHeight;
    document.documentElement.style.setProperty("--footer-height", footerHeight + "px");
  });
</script>
