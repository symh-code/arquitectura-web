"use client";

import { useEffect } from "react";

function scrollToHash() {
  const { hash } = window.location;

  if (!hash) {
    return;
  }

  const element = document.querySelector(hash);

  if (!(element instanceof HTMLElement)) {
    return;
  }

  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function SmoothHashScroll() {
  useEffect(() => {
    if (window.location.hash) {
      requestAnimationFrame(scrollToHash);
    }

    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return null;
}
