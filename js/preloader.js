window.addEventListener("load", () => {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("hide"); // Trigger CSS fade and slide transitions

    // After transition, hide the preloader and display main content
    setTimeout(() => {
      preloader.style.display = "none";
      document.querySelector(".main-wrapper").style.display = "block";
      document.body.style.overflow = "auto"; // Restore scrolling for full content view
    }, 500); // Matches the CSS transition duration (0.5s)
  }, 5000); // Wait 5 seconds before starting the preloader fade out
});
