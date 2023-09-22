// Open Nav List In Small Screens
document.getElementById("nav-icon").onclick = function () {
  this.classList.toggle("opened");
  document.getElementById("nav-list").classList.toggle("opened");
};

// Fixed NavBar
const navbar = document.querySelector(".navbar"),
  main = document.querySelector("main .container"),
  navTop = navbar.offsetTop;

window.onload = () => {
  let height = navbar.clientHeight + parseFloat(getComputedStyle(navbar).getPropertyValue("top")) * 2;
  main.style.paddingTop = height + "px";
};

window.onscroll = () => {
  window.scrollY >= navTop ? navbar.classList.add("fixed") : navbar.classList.remove("fixed");
};

// Apply Slider Components
class Slider {
  constructor(slider) {
    this.slider = slider;
    this.cardsContainer = slider.querySelector(".cards-container");
    this.cards = Array.from(this.cardsContainer.children);
    this.count;
    this.gap;
    this.containerWidth;
    this.cardWidth;
    (this.prevBtn = slider.querySelector(".slider-controls .prev")),
      (this.nextBtn = slider.querySelector(".slider-controls .next"));
    this.moves = 0;
  }

  resizeSlides = () => {
    this.count = parseInt(getComputedStyle(this.cardsContainer).getPropertyValue("--images-count"));
    this.gap = parseFloat(getComputedStyle(this.cardsContainer).getPropertyValue("gap"));
    this.containerWidth = parseFloat(getComputedStyle(this.cardsContainer).getPropertyValue("width"));

    this.cardWidth = (this.containerWidth - this.gap * (this.count - 1)) / this.count;

    // set width for cards
    this.cards.forEach((card) => {
      card.style.width = this.cardWidth + "px";
    });
    // reset value when changing content
    this.cardsContainer.style.height = null;
    // get the height of the heigher card
    let height =
      this.cards.reduce((acc, cur) => {
        let h = parseFloat(getComputedStyle(cur).getPropertyValue("height"));
        if (isNaN(acc)) {
          acc = parseFloat(getComputedStyle(acc).getPropertyValue("height"));
        }
        return h > acc ? h : acc;
      }) + "px";
    this.cardsContainer.style.height = height;
    // Move Images
    this.slide();
  };

  moveBack = () => {
    this.moves--;
    this.slide();
    this.nextBtn.classList.remove("disabled");
    if (this.moves <= 0) {
      this.prevBtn.classList.add("disabled");
    } else {
      this.prevBtn.classList.remove("disabled");
    }
  };

  moveForward = () => {
    this.moves++;
    this.slide();
    this.prevBtn.classList.remove("disabled");
    if (this.moves >= this.cards.length - this.count) {
      this.nextBtn.classList.add("disabled");
    } else {
      this.nextBtn.classList.remove("disabled");
    }
  };

  slide = () => {
    this.cards.forEach((card, i) => {
      card.style.setProperty("--space", (i - this.moves) * (this.cardWidth + this.gap) + "px");
      // stop controls till animation ends
      this.prevBtn.onclick = null;
      this.nextBtn.onclick = null;
      setTimeout(() => {
        this.prevBtn.onclick = this.moveBack;
        this.nextBtn.onclick = this.moveForward;
      }, 333);
    });
  };

  start = () => {
    this.resizeSlides();
    window.addEventListener("resize", this.resizeSlides);

    this.prevBtn.onclick = this.moveBack;
    this.nextBtn.onclick = this.moveForward;
  };
}

let testimonialsSlider = new Slider(document.querySelector("#testimonials .slider"));
window.addEventListener("load", testimonialsSlider.start);
