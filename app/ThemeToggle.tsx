"use client";

import { useEffect, useState } from "react";

function ThemeIcon({ light }: { light: boolean }) {
  if (light) {
    return <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.5" /><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" /></svg>;
  }
  return <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.4A8.2 8.2 0 0 1 8.6 4a8.4 8.4 0 1 0 11.4 11.4Z" /></svg>;
}

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("acanets-theme");
    const preferredTheme = storedTheme ?? (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    document.documentElement.dataset.theme = preferredTheme;
    window.requestAnimationFrame(() => setIsLight(preferredTheme === "light"));
  }, []);

  const toggleTheme = () => {
    const nextTheme = isLight ? "dark" : "light";
    document.documentElement.classList.remove("theme-transitioning");
    window.requestAnimationFrame(() => document.documentElement.classList.add("theme-transitioning"));
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("acanets-theme", nextTheme);
    setIsLight(!isLight);
    window.setTimeout(() => document.documentElement.classList.remove("theme-transitioning"), 760);
  };

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-pressed={isLight} aria-label={`Cambiar a modo ${isLight ? "oscuro" : "claro"}`} title={`Modo ${isLight ? "claro" : "oscuro"}`}>
      <span className="theme-toggle-icon"><ThemeIcon light={isLight} /></span>
      <span className="theme-toggle-label">{isLight ? "Claro" : "Oscuro"}</span>
    </button>
  );
}
