document.addEventListener("DOMContentLoaded", function () {
    console.log("scripts.js loaded successfully!");
    // You can add interactivity here
});

//ABOUT TABS:
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__active');
        });

        target.classList.add('tab__active');

        tabs.forEach((tab) => {
            tab.classList.remove('tab__active');
        });

        tab.classList.add('tab__active');
    });
});



//Services:
document.addEventListener("DOMContentLoaded", function () {
    const serviceCards = document.querySelectorAll(".service-card");

    function revealOnScroll() {
        serviceCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardTop < windowHeight - 100) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            } else {
                card.style.opacity = "0";
                card.style.transform = "translateY(20px)";
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger once to reveal already visible elements
});



//Contact

const scriptURL = 'https://script.google.com/macros/s/AKfycbzEiMvMrd5rxiY9irLcGRXEda5Jq5Lrwz7xhx5_MjXLvt_vRC81B77l-4hC-KWcVfKz/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault(); // Prevent the default form submission
    msg.innerHTML = "Sending..."; // Show "Sending..." message

    // Debugging logs
    console.log('Form Submitted');

    // Send the form data to Google Apps Script
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
        .then(response => {
            console.log("Response:", response); // Log the response to the console
            if (response.ok) {
                msg.innerHTML = "Message sent successfully!"; // Success message
                msg.style.color = "#61b752"; // Green color
            } else {
                msg.innerHTML = "There was an error sending the message."; // Error message
                msg.style.color = "#f44336"; // Red color
            }
        })
        .catch(error => {
            console.error('Error:', error); // Log the error to the console
            msg.innerHTML = "There was an error sending the message."; // Error message
            msg.style.color = "#f44336"; // Red color
        });
});

// Hamburger Menu Toggle
const hamburger = document.createElement("div");
hamburger.classList.add("hamburger");
hamburger.innerHTML = "&#9776;"; // Hamburger icon
document.querySelector(".header").appendChild(hamburger);

const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

