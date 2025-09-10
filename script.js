// Typing effect for About Me

const text = "Hi, I’m Subin! I love directing and acting, and I enjoy bringing stories to life. Alongside my passion for films, I’m also working toward becoming a software engineer. My goal is to blend creativity with technology and grow in both fields.";

let i = 0;

function typeEffect() {

  if (i < text.length) {

    document.getElementById("typing").textContent += text.charAt(i);

    i++;

    setTimeout(typeEffect, 40);

  }

}

window.onload = typeEffect;

// Auto year

document.getElementById("year").textContent = new Date().getFullYear();

// Form validation

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){

  e.preventDefault();

  const id = form.querySelector("input[name='id']").value.trim();

  const subject = form.querySelector("input[name='subject']").value.trim();

  const message = form.querySelector("textarea[name='message']").value.trim();

  if(!id || !subject || !message){

    alert("Please fill in all fields!");

    return;

  }

  alert("Message sent successfully!");

  form.reset();

});