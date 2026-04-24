(function heartlineUX(){
  function initPopReveal() {
    const reveals = Array.from(document.querySelectorAll(".reveal"));
    if (!reveals.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;

        const el = e.target;

        el.classList.add("show");
        if (!el.dataset.popped) {
          el.classList.add("pop");
          el.dataset.popped = "1";
          setTimeout(() => el.classList.remove("pop"), 650);
        }

        io.unobserve(el);
      });
    }, { threshold: 0.18 });

    reveals.forEach(r => io.observe(r));
  }

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

  function initFooter() {
    const year = new Date().getFullYear();
    const f = document.getElementById("footer");
    if (f) f.textContent = `© ${year} • Heartline UX Case Study`;
  }

  initPopReveal();
  initToTop();
  initFooter();
})();