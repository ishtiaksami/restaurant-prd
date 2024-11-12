// header scrolled down
$(window).on("scroll", function () {
  const header = $("header");
  if ($(this).scrollTop() > 0) {
    header.addClass("scrolled");
  } else {
    header.removeClass("scrolled");
  }
});

// toggleMenu function

function toggleMenu() {
  const menu = document.querySelector(".mobile-menu");
  const menuButton = document.querySelector(".mobile-menu-button");
  const lines = menuButton.querySelectorAll("span");

  // Toggle menu visibility
  if (menu.classList.contains("hidden")) {
    // Open the menu
    menu.classList.remove("hidden");
    menu.style.maxHeight = `${menu.scrollHeight}px`; // Slide down animation

    // Transform the burger icon to X
    lines[0].classList.add("rotate-45");
    lines[0].classList.add("translate-y-1.5");
    lines[1].classList.add("opacity-0");
    lines[2].classList.add("-rotate-45");
    lines[2].classList.add("-translate-y-1.5");

    // Change the margin when the menu is open
    lines.forEach((line) => (line.style.margin = "-2px 0"));
  } else {
    // Close the menu
    menu.style.maxHeight = "0px"; // Slide up animation
    setTimeout(() => menu.classList.add("hidden"), 500); // Wait for animation

    // Reset the burger icon back to original
    lines[0].classList.remove("rotate-45");
    lines[0].classList.remove("translate-y-1.5");
    lines[1].classList.remove("opacity-0");
    lines[2].classList.remove("-rotate-45");
    lines[2].classList.remove("-translate-y-1.5");

    // Reset the margin when the menu is closed
    lines.forEach((line) => (line.style.margin = "5px 0"));
  }
}



// swiper Slider
new Swiper(".mySwiper", {
  slidesPerView: 1, // Default to 4 slides at once
  spaceBetween: 10, // Adjust spacing between slides as needed
  speed: 700, // Adjust speed (in ms) for smoother navigation, e.g., 700ms
  loop: true,
  // autoplay: {
  //   delay: 2000,
  // },
  navigation: {
    nextEl: ".promo-next",
    prevEl: ".promo-prev",
  },
  breakpoints: {
    767: {
      slidesPerView: 3, // Show 1 slide at once when width is 767px or greater
    },
    1024: {
      slidesPerView: 4, // Show 1 slide at once when width is 767px or greater
    },
  },
});

new Swiper(".mySwiper2", {
  slidesPerView: 1, // Show 4 slides at once
  spaceBetween: 10, // Adjust spacing between slides as needed
  speed: 700, // Adjust speed (in ms) for smoother navigation, e.g., 700ms
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

// Get all tab elements and content blocks
$(document).ready(function () {
  $(".tab").on("click", function () {
    const target = $(this).data("tab");

    // Remove active classes
    $(".tab").removeClass("active-tab");
    $(".tab-content").addClass("hidden");

    // Add active classes
    $(this).addClass("active-tab");
    $("#" + target).removeClass("hidden");
  });
});

// Detect when the element is in view and apply the animation
function isInView(element) {
  const rect = $(element)[0].getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= $(window).height();
}

function checkScroll() {
  $(".fade-up-scroll").each(function () {
    if (isInView(this)) {
      $(this).addClass("show"); // Apply the show class to trigger the animation
    }
  });
}

// Check scroll position on load and when scrolling
$(window).on("scroll", checkScroll);
$(window).on("load", checkScroll);

// Initial check in case elements are already in view when the page loads
checkScroll();

$(".playVideoContent").each(function () {
  var videoContent = $(this).siblings(".videoContent");
  var playVideoContent = $(this);

  $(this).on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("group");
    $(this).find(".playIcon").toggleClass("opacity-0");

    if (videoContent[0].paused) {
      videoContent[0].play();
    } else {
      videoContent[0].pause();
    }
  });

  videoContent.on("ended", function () {
    playVideoContent.removeClass("group");
    playVideoContent.find(".playIcon").removeClass("opacity-0");
  });
});
