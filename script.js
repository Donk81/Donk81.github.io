document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const success = document.getElementById("form-success");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      success.textContent = "Thanks! Your message has been received.";
      form.reset();
    });
  }
});
