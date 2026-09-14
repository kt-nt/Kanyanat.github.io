const menuButton =
    document.querySelector(".menu-button");

const navMenu =
    document.querySelector(".nav-menu");


if (menuButton && navMenu) {

    menuButton.addEventListener("click", () => {

        navMenu.classList.toggle("open");

    });


    const navLinks =
        navMenu.querySelectorAll("a");


    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

        });

    });

}



/* =========================================================
   AUTO AGE
========================================================= */

function calculateAge() {

    const birthday =
        new Date(2009, 9, 22);

    const today =
        new Date();


    let age =
        today.getFullYear()
        -
        birthday.getFullYear();


    const monthDifference =
        today.getMonth()
        -
        birthday.getMonth();


    if (
        monthDifference < 0
        ||
        (
            monthDifference === 0
            &&
            today.getDate() < birthday.getDate()
        )
    ) {

        age--;

    }


    return age;

}



const ageElements =
    document.querySelectorAll(".auto-age");


ageElements.forEach(element => {

    element.textContent =
        calculateAge();

});
