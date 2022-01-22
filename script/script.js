document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("nav-ul").classList.toggle("show");

    if (document.getElementById("menu-icon").getAttribute("src") === "images/icon-hamburger.svg") {
        document.getElementById("menu-icon").setAttribute("src", "images/icon-close.svg");
    } else {
        document.getElementById("menu-icon").setAttribute("src", "images/icon-hamburger.svg");
    };
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}

const form = document.getElementsByTagName("form")[0];
const email = document.getElementById("email");
const error = document.querySelector(".error");

email.addEventListener("input", function (event) {
    if (email.validity.valid) {
        error.textContent = "";
        error.className = "error";
        email.style.border = "1px solid rgb(29, 30, 37)";
    } else {
        showError;
    }
});

form.addEventListener("submit", function (event) {
    if (!email.validity.valid) {
        showError();
    }
    event.preventDefault();
});

function showError() {
    if (email.validity.valueMissing) {
        error.textContent = "You need to enter an email address.";
        email.style.border = "1px solid rgb(242, 95, 58)";
    } else if (email.validity.typeMismatch) {
        error.textContent = "Please provide a valid email.";
        email.style.border = "1px solid rgb(242, 95, 58)";
    }

    error.className = "error";
}