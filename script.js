"use strict";

const modalGuess = document.querySelector(".modalGuess");
const modalRolling = document.querySelector(".modalRolling");
const btnCloseModal = document.querySelector(".close-modalGuess");
const btnCloseRolling = document.querySelector(".close-modalRolling");
const btnOpenModalGuess = document.querySelector(".show-modalGuess");
const btnOpenModalRolling = document.querySelector(".show-modalRollingFun");
const overlay = document.querySelector(".overlay");

const openModalGuess = function () {
    console.log("Button clicked");
    modalGuess.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const openModalRolling = function () {
    console.log("Button clicked");
    modalRolling.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function () {
    console.log("tombol close ditekan");
    if (!modalGuess.classList.contains("hidden")) {
        modalGuess.classList.add("hidden");
    }

    if (!modalRolling.classList.contains("hidden")) {
        modalRolling.classList.add("hidden");
    }

    overlay.classList.add("hidden");
};

btnOpenModalGuess.addEventListener("click", openModalGuess);
btnOpenModalRolling.addEventListener("click", openModalRolling);

btnCloseModal.addEventListener("click", closeModal);
btnCloseRolling.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    console.log(e.key);

    if (e.key === "Escape" && !modalGuess.classList.contains("hidden")) {
    closeModal();
    }
});

