"use strict";

// test email
const info = document.querySelector(".infor");
const forms = document.querySelector(".forms-hidden");

const btnSubmit = document.getElementById("submit");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

btnSubmit.addEventListener("click", function () {
  const emails = document.getElementById("email").value;
  if (emails.match(regex)) {
    info.classList.remove("hidden");
    forms.classList.add("hidden");
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
});

// show more
const btnShowlink = document.querySelectorAll(".show-link");
const more = document.querySelectorAll(".more");
const btnShowhide = document.querySelectorAll(".show-hide");

for (let i = 0; i < btnShowlink.length; i++) {
  btnShowlink[i].addEventListener("click", function () {
    more[i].classList.remove("hidden");
    btnShowlink[i].classList.add("hidden");
    btnShowlink[i].classList.toggle("btn-hide");
  });
  btnShowhide[i].addEventListener("click", function () {
    btnShowlink[i].classList.remove("hidden");
    more[i].classList.add("hidden");
    btnShowlink[i].classList.toggle("btn-hide");
  });
}
