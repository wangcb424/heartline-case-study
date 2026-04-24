(function heartlineUX(){
  // Scroll pop reveal (once per element)
  function initPopReveal() {
    const reveals = Array.from(document.querySelectorAll(".reveal"));
    if (!reveals.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;

        const el = e.target;

        // show + pop once
        el.classList.add("show");
        if (!el.dataset.popped) {
          el.classList.add("pop");
          el.dataset.popped = "1";

          // remove pop class after animation finishes
          setTimeout(() => el.classList.remove("pop"), 650);
        }

        // observe once
        io.unobserve(el);
      });
    }, { threshold: 0.18 });

    reveals.forEach(r => io.observe(r));
  }

  // Back to top
  function initToTop() {
    const btn = document.getElementById("toTop");
    if (!btn) return;

    const onScroll = () => btn.classList.toggle("show", window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Footer year
  function initFooter() {
    const year = new Date().getFullYear();
    const f = document.getElementById("footer");
    if (f) f.textContent = `© ${year} • Heartline UX Case Study`;
  }

  initPopReveal();
  initToTop();
  initFooter();
})();