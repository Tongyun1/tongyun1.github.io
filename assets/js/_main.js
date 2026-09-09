(() => {
  "use strict";

  const root = document.documentElement;
  const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");

  function savedTheme() {
    try {
      const value = localStorage.getItem("theme");
      return value === "dark" || value === "light" ? value : null;
    } catch (_error) {
      return null;
    }
  }

  function currentTheme() {
    return savedTheme() || (colorScheme.matches ? "dark" : "light");
  }

  function applyTheme(theme) {
    const dark = theme === "dark";
    root.toggleAttribute("data-theme", dark);
    if (!dark) root.removeAttribute("data-theme");

    const icon = document.getElementById("theme-icon");
    if (icon) {
      icon.classList.toggle("fa-moon", dark);
      icon.classList.toggle("fa-sun", !dark);
    }

    const toggle = document.querySelector("#theme-toggle > a");
    if (toggle) {
      toggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    }
  }

  function initTheme() {
    applyTheme(currentTheme());

    const toggle = document.getElementById("theme-toggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const next = root.hasAttribute("data-theme") ? "light" : "dark";
        try { localStorage.setItem("theme", next); } catch (_error) {}
        applyTheme(next);
      });
      const control = toggle.querySelector("a");
      if (control) {
        control.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggle.click();
          }
        });
      }
    }

    colorScheme.addEventListener("change", () => {
      if (!savedTheme()) applyTheme(currentTheme());
    });
  }

  function initGreedyNavigation() {
    const nav = document.getElementById("site-nav");
    if (!nav) return;

    const button = nav.querySelector("button");
    const visible = nav.querySelector(".visible-links");
    const hidden = nav.querySelector(".hidden-links");
    const tail = visible.querySelector(".persist.tail");
    const breaks = [];

    function availableWidth() {
      return nav.clientWidth - (button.classList.contains("hidden") ? 0 : button.offsetWidth + 30);
    }

    function update() {
      let available = availableWidth();

      while (visible.scrollWidth > available) {
        const movable = visible.querySelectorAll(":scope > li:not(.persist)");
        const item = movable[movable.length - 1];
        if (!item) break;
        breaks.push(visible.scrollWidth);
        hidden.insertBefore(item, hidden.firstChild);
        button.classList.remove("hidden");
        available = availableWidth();
      }

      while (breaks.length && available > breaks[breaks.length - 1]) {
        const item = hidden.firstElementChild;
        if (!item) break;
        if (tail) visible.insertBefore(item, tail);
        else visible.appendChild(item);
        breaks.pop();
        available = availableWidth();
      }

      const empty = hidden.children.length === 0;
      button.classList.toggle("hidden", empty);
      button.classList.toggle("close", !empty && !hidden.classList.contains("hidden"));
      button.setAttribute("aria-label", "More navigation links");
      button.setAttribute("aria-expanded", String(!hidden.classList.contains("hidden")));

      const masthead = document.querySelector(".masthead");
      const mastheadHeight = masthead ? masthead.offsetHeight : 0;
      document.body.style.paddingTop = `${mastheadHeight}px`;

      const sidebar = document.querySelector(".sidebar");
      const authorButton = document.querySelector(".author__urls-wrapper > button");
      if (sidebar && authorButton && getComputedStyle(authorButton).display === "none") {
        sidebar.style.paddingTop = `${mastheadHeight}px`;
      } else if (sidebar) {
        sidebar.style.removeProperty("padding-top");
      }
    }

    button.addEventListener("click", () => {
      hidden.classList.toggle("hidden");
      button.classList.toggle("close");
      button.setAttribute("aria-expanded", String(!hidden.classList.contains("hidden")));
    });

    if ("ResizeObserver" in window) new ResizeObserver(update).observe(nav);
    else window.addEventListener("resize", update, { passive: true });

    if (screen.orientation && screen.orientation.addEventListener) {
      screen.orientation.addEventListener("change", update);
    }
    update();
  }

  function initAuthorLinks() {
    const button = document.querySelector(".author__urls-wrapper > button");
    const links = document.querySelector(".author__urls");
    if (!button || !links) return;

    button.setAttribute("aria-expanded", "false");
    button.addEventListener("click", () => {
      const open = button.classList.toggle("open");
      links.classList.toggle("is-open", open);
      button.setAttribute("aria-expanded", String(open));
    });
  }

  function initFooterOffset() {
    const footer = document.querySelector(".page__footer");
    if (!footer) return;
    const update = () => { document.body.style.marginBottom = `${footer.offsetHeight}px`; };
    if ("ResizeObserver" in window) new ResizeObserver(update).observe(footer);
    else window.addEventListener("resize", update, { passive: true });
    update();
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initGreedyNavigation();
    initAuthorLinks();
    initFooterOffset();
  });
})();
