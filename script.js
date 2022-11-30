const shareLinks = document.querySelector(".share--links");
const shareButton = document.querySelector(".btn-share");

shareButton.addEventListener("click", () => {
  shareLinks.classList.toggle("active");
});
