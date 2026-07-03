// Dynamic Greeting

const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if(hour < 12){
    greeting.innerText = "Good Morning!";
}
else if(hour < 18){
    greeting.innerText = "Good Afternoon!";
}
else{
    greeting.innerText = "Good Evening!";
}


// Project Counter

const projects =
document.querySelectorAll(".project-card");

document.getElementById("projectCount").innerText =
projects.length;


// Dark Mode Toggle


const darkModeBtn =
document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        darkModeBtn.innerText = "Light Mode";
    }
    else{
        darkModeBtn.innerText = "Dark Mode";
    }

});


// Contact Button

const contactBtn =
document.getElementById("contactBtn");

contactBtn.addEventListener("click", () => {

    alert(
        "Thank you for visiting my portfolio! Feel free to contact me."
    );

});


// Scroll To Top Button

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});