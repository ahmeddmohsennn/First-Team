let hamburgerBtn = document.querySelector(".bars"),
  menuOpen = false,
  nav = document.querySelector("nav"),
  wrapper = document.querySelector(".wrapper");
hamburgerBtn.onclick = function () {
  if (!menuOpen) {
    hamburgerBtn.classList.add("open");
    menuOpen = true;
    nav.classList.add("open");
    wrapper.classList.add("active");
  } else {
    hamburgerBtn.classList.remove("open");
    menuOpen = false;
    nav.classList.remove("open");
    wrapper.classList.remove("active");
  }
};

let list = document.querySelectorAll(".list");
for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    let j = 0;
    while (j < list.length) {
      list[j++].classList = "list";
    }
    list[i].classList = "list active";
  };
}

let search = document.querySelector(".search"),
  searchBtn = document.querySelector(".search_btn"),
  searchInput = document.querySelector(".search_input"),
  searchOpen = false;
searchBtn.onclick = function () {
  if (!searchOpen) {
    search.classList.add("open");
    searchOpen = true;
  } else {
    search.classList.remove("open");
    searchInput.value = "";
    searchOpen = false;
  }
};

let header = document.querySelector("header");
lastScroll = 0;
window.onscroll = function () {
  let scroll = window.scrollY || document.documentElement.scrollTop;
  if (scroll > lastScroll) {
    header.style.top = "-80px";
  } else {
    header.style.top = "0";
  }
  lastScroll = scroll;
};

let btn = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 800) {
    btn.style.display = "grid";
  } else {
    btn.style.display = "none";
  }
});
btn.addEventListener("click", function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});
