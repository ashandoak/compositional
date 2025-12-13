(function () {
  function showToast(msg) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => toast.classList.remove("show"), 2000);
  }

  function wireNav() {
    const prevHref = document.body.dataset.prev || "";
    const nextHref = document.body.dataset.next || "";

    const backBtn = document.getElementById("backBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (backBtn) {
      backBtn.disabled = !prevHref;
      backBtn.addEventListener("click", () => {
        if (!prevHref) return;
        window.location.href = prevHref;
      });
    }

    if (nextBtn) {
      nextBtn.disabled = !nextHref;
      nextBtn.addEventListener("click", () => {
        if (!nextHref) return;
        window.location.href = nextHref;
      });
    }

    // expose toast helper (optional use from pages)
    window.__uiToast = showToast;
  }

  document.addEventListener("DOMContentLoaded", wireNav);
})();
