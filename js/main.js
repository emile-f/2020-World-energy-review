var drawer;

// Function to add a click handler to a given element
function addClickHandler(elementId, functionName) {
  var element = document.getElementById(elementId);
  if (element) {
    element.addEventListener("click", functionName);
  } else {
    console.warn("Failed to add click handler to element with id:", elementId);
  }
}

// listen to the window load event so we can start getting elements from the page
window.addEventListener("load", function () {
  // mobile menu
  // id: open-mobile-menu, close-mobile-menu
  addClickHandler("open-mobile-menu", openDrawer);
  addClickHandler("close-mobile-menu", openDrawer);

  drawer = document.getElementById("drawer");

  // scroll to next section on page
  // id: scroll-down
  addClickHandler("scroll-down", scrollDown);

  // Get header
  var scrollHeader = document.getElementById("scroll-header");
  var scrollBody = document.getElementById("scroll-body");

  if (scrollBody.scrollHeight < window.innerHeight) {
    scrollHeader.classList.add("active");
  }

  // Listen to scroll
  if (scrollHeader) {
    window.addEventListener("scroll", function () {
      // if we scroll over the first page then change background color to white
      if (
        window.scrollY > window.innerHeight ||
        scrollBody.scrollHeight < window.innerHeight
      ) {
        scrollHeader.classList.add("active");
      } else {
        // If not remove the active class again
        scrollHeader.classList.remove("active");
      }
    });
  }
});

// Open mobile hamburger menu
function openDrawer() {
  if (drawer) {
    if (drawer.className.includes("open")) {
      drawer.classList.remove("open");
    } else {
      drawer.classList.add("open");
    }
  }
}

// Play audio file on click
function playAudioFile() {
  HelloThereAudio.play();
}

// Cover page scroll down to second part of the page
function scrollDown() {
  window.scrollBy(0, window.innerHeight);
}
