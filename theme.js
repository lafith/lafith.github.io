(function () {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");

  if (!toggle) return;

  function setTheme(theme) {
    const nextTheme = theme === "light" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    toggle.textContent = nextTheme === "light" ? "Theme: Light" : "Theme: Dark";
    toggle.setAttribute(
      "aria-label",
      nextTheme === "light"
        ? "Theme is light. Switch to dark theme"
        : "Theme is dark. Switch to light theme"
    );
    toggle.setAttribute("aria-pressed", String(nextTheme === "light"));
  }

  setTheme(root.dataset.theme);

  toggle.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
    try {
      localStorage.setItem("theme", nextTheme);
    } catch (_) {
      // The visual toggle should still work when storage is unavailable.
    }
    setTheme(nextTheme);
  });
})();
