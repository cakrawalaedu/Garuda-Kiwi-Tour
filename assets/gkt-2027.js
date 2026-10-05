(() => {
  const button = document.querySelector(".menu-toggle");
  const nav = document.getElementById("main-nav");
  const setMenu = (open) => {
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute(
      "aria-label",
      open ? "Tutup menu navigasi" : "Buka menu navigasi",
    );
    nav.classList.toggle("is-open", open);
  };
  button.addEventListener("click", () =>
    setMenu(button.getAttribute("aria-expanded") !== "true"),
  );
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      button.getAttribute("aria-expanded") === "true"
    ) {
      setMenu(false);
      button.focus();
    }
  });
  window
    .matchMedia("(min-width: 900px)")
    .addEventListener("change", () => setMenu(false));
  document.getElementById("copyright-year").textContent = String(
    new Date().getFullYear(),
  );

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const submit = form.querySelector('button[type="submit"]');
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (submit.disabled) return;
    submit.disabled = true;
    form.setAttribute("aria-busy", "true");
    status.dataset.state = "pending";
    status.textContent = "Pesan sedang dikirim…";
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Message not accepted");
      status.dataset.state = "success";
      status.textContent =
        "Terima kasih. Pesan Anda sudah diterima; tim kami akan menghubungi Anda melalui email.";
      form.reset();
    } catch {
      status.dataset.state = "error";
      status.textContent =
        "Pesan belum terkirim. Silakan coba lagi, atau hubungi kami melalui WhatsApp atau email. Pesan Anda tetap tersimpan di formulir ini.";
    } finally {
      submit.disabled = false;
      form.removeAttribute("aria-busy");
    }
  });
})();
