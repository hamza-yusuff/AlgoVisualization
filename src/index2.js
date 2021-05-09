const cards_left = document.querySelectorAll(".card-left");
const cards_right = document.querySelectorAll(".card-right");
const titles = document.querySelectorAll(".card-title");
const texts = document.querySelectorAll(".card-text");
const buttons = document.querySelectorAll(".btn");
const images = document.querySelectorAll(".icon");

// 3D animation of cards

cards_left.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${-xAxis - 10}deg)`;
  });
  card.addEventListener("mouseenter", (e) => {
    card.style.transition = "all 0.2s ease";
    titles.forEach((title) => {
      title.style.transform = "translateZ(150px)";
    });
    texts.forEach((text) => {
      text.style.transform = "translateZ(150px)";
    });
    buttons.forEach((button) => {
      button.style.transform = "translateZ(150px)";
    });
    images.forEach((image) => {
      image.style.transform = "translateZ(150px)";
    });
  });
  card.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 1.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    const titles = document.querySelectorAll(".card-title");

    titles.forEach((title) => {
      title.style.transform = "translateZ(0px)";
    });
    const texts = document.querySelectorAll(".card-text");
    texts.forEach((text) => {
      text.style.transform = "translateZ(0px)";
    });
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
      button.style.transform = "translateZ(0px)";
    });
    const images = document.querySelectorAll(".icon");
    imagess.forEach((image) => {
      image.style.transform = "translateZ(0px)";
    });
  });
});

// Animation of left cards
cards_right.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
    card.style.transform = `rotateY(${-xAxis}deg) rotateX(${xAxis - 10}deg)`;
  });
  card.addEventListener("mouseenter", (e) => {
    card.style.transition = "all 0.2s ease";
    titles.forEach((title) => {
      title.style.transform = "translateZ(150px)";
    });
    texts.forEach((text) => {
      text.style.transform = "translateZ(150px)";
    });
    buttons.forEach((button) => {
      button.style.transform = "translateZ(150px)";
    });
    images.forEach((image) => {
      image.style.transform = "translateZ(150px)";
    });
  });
  card.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 1.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    const titles = document.querySelectorAll(".card-title");

    titles.forEach((title) => {
      title.style.transform = "translateZ(0px)";
    });
    const texts = document.querySelectorAll(".card-text");
    texts.forEach((text) => {
      text.style.transform = "translateZ(0px)";
    });
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
      button.style.transform = "translateZ(0px)";
    });
    const images = document.querySelectorAll(".icon");
    imagess.forEach((image) => {
      image.style.transform = "translateZ(0px)";
    });
  });
});
