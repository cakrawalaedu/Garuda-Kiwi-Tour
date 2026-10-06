(() => {
  const form = document.getElementById("nzmay-reservation-form");
  if (!form) return;

  const trip = "South Island Open Trip 17–24 May 2027";
  const source = "NZMAY Reservation Form";
  const emit = (name, context = {}) => {
    window.dispatchEvent(
      new CustomEvent("gkt:conversion", {
        detail: { name, trip, source, ...context },
      }),
    );
  };

  document.addEventListener("DOMContentLoaded", () => emit("ViewMay2027"), {
    once: true,
  });

  let started = false;
  const startReservation = (placement) => {
    if (started) return;
    started = true;
    emit("StartReservation", { placement });
  };
  form.addEventListener("focusin", (event) => {
    if (event.target.matches("input:not([type='hidden']), select, textarea")) {
      startReservation("form");
    }
  });
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link) return;
    if (link.getAttribute("href") === "#reservation-form") {
      startReservation(link.dataset.placement || "reservation-link");
    }
    if (link.href.startsWith("https://wa.me/6282154465074")) {
      emit("ClickWhatsApp", {
        placement:
          link.dataset.placement ||
          link.closest("section")?.id ||
          (link.closest("footer") ? "footer" : "journey"),
      });
    }
    // This hook becomes active only when the final PDF button is replaced
    // with a real link after the confirmed file has been uploaded.
    if (
      link.matches("[data-itinerary-pdf]") &&
      link.getAttribute("aria-disabled") !== "true"
    ) {
      const pdf = new URL(link.href);
      if (
        pdf.origin === location.origin &&
        pdf.pathname.endsWith("/garuda-kiwi-tour-south-island-may-2027.pdf")
      ) {
        emit("DownloadItinerary");
      }
    }
  });

  const phone = form.elements.namedItem("whatsapp");
  const validatePhone = () => {
    // Count digits for validation only; preserve the original input and payload.
    const digits = phone.value.replace(/\D/g, "");
    phone.setCustomValidity(
      phone.value && (digits.length < 8 || digits.length > 15)
        ? "Masukkan nomor WhatsApp dengan 8–15 angka, termasuk kode negara bila digunakan."
        : "",
    );
  };
  phone.addEventListener("input", validatePhone);

  const status = document.getElementById("reservation-form-status");
  const submit = form.querySelector("button[type='submit']");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (submit.disabled) return;
    validatePhone();
    if (!form.reportValidity()) return;

    const payload = new FormData(form);
    payload.set("full_name", String(payload.get("full_name")).trim());
    submit.disabled = true;
    form.setAttribute("aria-busy", "true");
    status.dataset.state = "pending";
    status.textContent = "Submitting your enquiry…";
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Reservation enquiry not accepted");
      status.dataset.state = "success";
      status.textContent =
        "Thank you. Our team will contact you to confirm availability and the next reservation step.";
      form.reset();
      phone.setCustomValidity("");
      emit("SubmitReservation");
    } catch {
      status.dataset.state = "error";
      status.textContent =
        "Form belum terkirim. Silakan coba lagi atau hubungi tim melalui WhatsApp. Data Anda tetap tersedia di form ini.";
    } finally {
      submit.disabled = false;
      form.removeAttribute("aria-busy");
    }
  });
})();
