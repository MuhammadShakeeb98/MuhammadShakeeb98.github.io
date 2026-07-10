/* ===========================================
   PORTFOLIO JAVASCRIPT
   Muhammad Shakeeb Portfolio
===========================================*/

// ===========================================
// AOS Animation Initialization
// ===========================================

AOS.init({
    duration: 700,
    once: true,
    offset: 50,
    easing: "ease-out"
});

// ===========================================
// Mobile Menu Toggle
// ===========================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close menu after clicking a link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

// ===========================================
// Sticky Navbar + Scroll Effects
// ===========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (header) {

        if (window.scrollY > 50) {

            header.style.background = "rgba(5,8,22,0.85)";
            header.style.backdropFilter = "blur(15px)";
            header.style.transition = "0.3s";

        } else {

            header.style.background = "transparent";

        }

    }

});

// ===========================================
// Scroll Progress Bar
// ===========================================

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    if (progressBar) {

        let scrollTop = document.documentElement.scrollTop;

        let scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        let progress = (scrollTop / scrollHeight) * 100;

        progressBar.style.width = progress + "%";

    }

});

// ===========================================
// Scroll To Top Button
// ===========================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (topBtn) {

        if (window.scrollY > 400) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";

        }

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// ===========================================
// Vanilla Tilt
// ===========================================

const heroImage = document.querySelector(".hero-right img");

if (heroImage) {

    VanillaTilt.init(heroImage, {

        max: 10,

        speed: 400,

        glare: true,

        "max-glare": 0.25,

        scale: 1.02

    });

}

// ===========================================
// Active Navigation Link
// ===========================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===========================================
// Smooth Reveal for Cards
// ===========================================

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .service-card, .about-card, .stat"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

// ===========================================
// Console Welcome Message
// ===========================================

console.log("%cWelcome to Muhammad Shakeeb's Portfolio",
"color:#3B82F6;font-size:18px;font-weight:bold;");

console.log("%cDesigned & Developed with ❤️",
"color:#8B5CF6;font-size:14px;");
/* ==========================
   Loader
========================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},800);

},2000);

});
/* ==========================
   Cursor Glow
========================== */

const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

if(glow){

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

}

});
/* ==============================
   Developer Terminal
================================ */

const terminalInput = document.getElementById("terminalCommand");
const terminalOutput = document.getElementById("terminalOutput");

if (terminalInput && terminalOutput) {

    terminalInput.addEventListener("keydown", function(e) {

        if (e.key === "Enter") {

            let command = this.value.trim().toLowerCase();

            let response = "";

            switch(command){

                case "help":

                    response = `
                    <br>
                    Available Commands:
                    <br><br>

                    help
                    <br>

                    about
                    <br>

                    skills
                    <br>

                    projects
                    <br>

                    contact
                    <br>

                    education
                    <br>

                    clear
                    `;

                    break;

                case "about":

                    response = `
                    <br>

                    Muhammad Shakeeb

                    <br>

                    Software Engineer

                    <br>

                    AI & Full Stack Developer

                    `;

                    break;

                case "skills":

                    response = `
                    <br>

                    Python

                    <br>

                    C++

                    <br>

                    HTML

                    <br>

                    CSS

                    <br>

                    JavaScript

                    <br>

                    Machine Learning

                    <br>

                    MySQL

                    <br>

                    Git

                    `;

                    break;

                case "projects":

                    response = `
                    <br>

                    Digital Tourism Hub

                    <br>

                    AI Resume Analyzer

                    <br>

                    Face Detection System

                    `;

                    break;

                case "education":

                    response = `
                    <br>

                    BS Software Engineering

                    <br>

                    CUSIT (2022–2026)

                    `;

                    break;

                case "contact":

                    response = `
                    <br>

                    Email:

                    muhammadshakeeb9898@gmail.com

                    <br>

                    Phone:

                    0310-9755022

                    `;

                    break;

                case "clear":

                    terminalOutput.innerHTML = "";

                    this.value = "";

                    return;

                default:

                    response = `
                    <br>

                    Command not found.

                    <br>

                    Type help

                    `;

            }

            terminalOutput.innerHTML += `

            <p>

            <span class="command">

            $ ${command}

            </span>

            </p>

            <p>

            ${response}

            </p>

            `;

            terminalOutput.scrollTop = terminalOutput.scrollHeight;

            this.value = "";

        }

    });

}
/* ==========================
   Dark / Light Theme
========================== */

const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {

    // Load saved theme
    if (localStorage.getItem("theme") === "light") {

        document.body.classList.add("light");
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {

            localStorage.setItem("theme", "light");
            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "dark");
            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';

        }

    });

}
/* ==========================
   Counter Animation
========================== */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = Math.ceil(target / 50);

        if (current < target) {

            counter.innerText = current + increment;

            setTimeout(updateCounter, 40);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});
/* ==========================
   EmailJS Contact Form
========================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.send(
            "service_tprgxl9",
            "template_6128he9",
            {
                from_name: document.getElementById("name").value,
                from_email: document.getElementById("email").value,
                message: document.getElementById("message").value
            }
        )

        .then(() => {

            Swal.fire({
    icon: "success",
    title: "Message Sent!",
    text: "Thank you for contacting me. I'll get back to you soon.",
    confirmButtonColor: "#3B82F6"
});

            contactForm.reset();

        })

        .catch((error) => {

            console.error(error);

            Swal.fire({
    icon: "error",
    title: "Oops!",
    text: "Something went wrong. Please try again later.",
    confirmButtonColor: "#EF4444"
});

        });

    });

}
window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

document.getElementById("loader").style.visibility="hidden";

},2500);

});