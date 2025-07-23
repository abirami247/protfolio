function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
});
