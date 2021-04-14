// Sticky menu background
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

// // random image
window.onload = choosePic;

var images = new Array(
  "images/random1.png",
  "images/random2.png",
  "images/random3.png",
  "images/random4.png",
  "images/random5.png",
  "images/random6.png",
  "images/random7.png",
  "images/random8.png",
  "images/random9.png",
  "images/random10.PNG",
  "images/random11.PNG",
  "images/random12.PNG",
  "images/random13.PNG"
);

function choosePic() {
  var randomNum = Math.floor(Math.random() * images.length);
  document.getElementById("random-image").src = images[randomNum];
}

// Smooth scrolling
$("#navbar a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 65,
      },
      1200
    );
  }
});
