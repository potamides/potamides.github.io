---
layout: fullscreen
permalink: /cv/
title: CV
nav: true
nav_order: 4
scrollable: true
---

<style>
  #pdf-viewer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0;
  }
  #pdf-viewer > canvas {
    margin-inline: 0.5rem;
  }
</style>

<div id="pdf-viewer"/>

<script id="script" type="module">
  import * as pdfjsLib from "{{ site.third_party_libraries.pdfjs.url.js }}";
  pdfjsLib.GlobalWorkerOptions.workerSrc = "{{ site.third_party_libraries.pdfjs.url.worker }}";

  const url = "{{ site.url | append: site.baseurl | append: '/assets/pdf/' | append: site.cv_pdf }}";
  const pdf = await pdfjsLib.getDocument(url).promise
  const pages = [];

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++){
    pages.push(await pdf.getPage(pageNum));
    drawPage(pages[pages.length - 1]);
  }

  window.addEventListener("resize", () => {
    const pdfViewer = document.getElementById("pdf-viewer");
    const canvases = pdfViewer.querySelectorAll("canvas");
    canvases.forEach((canvas, i) => {
      drawPage(pages[i], canvas);
    });
  });

  function getViewport(page, viewerWidth){
    const style = getComputedStyle(document.querySelector(".container"));
    const padding = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);

    // exclude pdf margins when computing the desired width
    const desiredWidth = (21/18.2) * parseFloat("{{ site.max_width }}") - padding;
    const pageWidth = page.getViewport({ scale: 1 }).width;

    let scale = desiredWidth > viewerWidth ? viewerWidth / pageWidth : desiredWidth / pageWidth;
    return page.getViewport({ scale: scale });
  }

  function drawPage(page, canvas){
    const pdfViewer = document.getElementById("pdf-viewer");

    if (canvas === undefined){
      canvas = document.createElement("canvas")
      pdfViewer.appendChild(canvas);
    }

    const viewerWidth = pdfViewer.clientWidth - 2 * parseFloat(getComputedStyle(canvas).marginInline)
    const viewport = getViewport(page, viewerWidth);
    // Support HiDPI-screens.
    const outputScale = window.devicePixelRatio || 1;

    canvas.width = Math.floor(viewport.width * outputScale);
    canvas.height = Math.floor(viewport.height * outputScale);
    canvas.style.width = Math.floor(viewport.width) + "px";
    canvas.style.height = Math.floor(viewport.height) + "px";

    const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;

    page.render({
      canvasContext: canvas.getContext("2d"),
      transform,
      viewport,
    });
  }
</script>
