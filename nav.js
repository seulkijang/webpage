const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    // navLinks.forEach((link, index) => {
    //   if (link.style.animation) {
    //     link.style.animation = "";
    //   } else {
    //     link.style.animation = `navLinkFade 0.5s ease forwards ${index / 3 +
    //       0.3}s`;
    //   }
    // });
    burger.classList.toggle("toggle");
  });
};
navSlide();

const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");
// Select tab content item
function selectItem(e) {
  // Remove all show and border classes
  removeBorder();
  removeShow();
  // Add border to current tab item
  this.classList.add("tab-border");
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add("show");
} // Remove bottom borders from all tab items
function removeBorder() {
  tabItems.forEach(item => {
    item.classList.remove("tab-border");
  });
}
// Remove show class from all content items
function removeShow() {
  tabContentItems.forEach(item => {
    item.classList.remove("show");
  });
}
// Listen for tab item click
tabItems.forEach(item => {
  item.addEventListener("click", selectItem);
});
