document.addEventListener('DOMContentLoaded', function() {
  setDarkModeIfEnabled();
});

function switchColorMode() {
  if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
    localStorage.removeItem('dark');
    document.documentElement.setAttribute('data-bs-theme', 'light');
  } else {
    localStorage.setItem('dark', true);
    document.documentElement.setAttribute('data-bs-theme', 'dark');
  }
  toggleModeSwitchIcon();
}

function setDarkModeIfEnabled() {
  if (localStorage.getItem('dark')) {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    toggleModeSwitchIcon();
  }
}

function toggleModeSwitchIcon() {
  let modeIcon = document.getElementById('modeIcon');
  if (modeIcon.classList.contains('fa-moon')) {
    modeIcon.classList.remove('fa-moon');
    modeIcon.classList.add('fa-sun');
  } else {
    modeIcon.classList.remove('fa-sun');
    modeIcon.classList.add('fa-moon');
  }
}


/* Following code has been taken from 
https://www.w3schools.com/howto/howto_js_scroll_to_top.asp */

let toTopButton = document.getElementById("back-to-top-btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// end of taken code