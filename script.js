// Javascript for navigation bar effects on scroll

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Javascript for responsive navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
    })
})


// Send Email

document.querySelector(".emailForm").addEventListener("submit", sendEmail);

const name = document.querySelector(".senderName").value;
const email = document.querySelector(".senderEmail").value;
const message = document.querySelector(".senderMessage").value;

const sendEmail = (name, email, message) => {
    email.send({
        Host: "smtp.gmail.com",
        Username: "adefemisultan808@gmail.com",
        Password: "",
        To: "adefemisultan808@gmail.com",
        From: `${email}`
    })
}