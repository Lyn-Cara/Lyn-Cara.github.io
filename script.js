let slideIndex = 0;
let $slides = document.getElementsByClassName("slide");
let $slideControlWrapper = document.getElementById("slideControlWrapper");

// Create buttons for each slide
for (i = 0; i < $slides.length; i++) {
    // slides[i].style.display = "none";

    let newB = document.createElement("button");
    newB.addEventListener("click", showSlide);
    newB.setAttribute("data-index", i);
    newB.classList.add("slideControl");

    $slideControlWrapper.appendChild(newB);
}

let $slideControls = document.getElementsByClassName("slideControl");

showSlide(null, slideIndex)

function showSlide(e, i) {
    let n = i;
    if (!i) {
        e.preventDefault();
        n = e.target.getAttribute('data-index');
    }

    $slides[slideIndex].style.opacity = 0;
    $slideControls[slideIndex].classList.remove("active");

    slideIndex = n;
    if (n > $slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = $slides.length -1 };

    $slides[slideIndex].style.opacity = 1;
    $slideControls[slideIndex].classList.add("active");
}


// carousel()
// function carousel() {
//     var i;
//     for (i = 0; i < $slides.length; i++) {
//         $slides[i].style.opacity = 0;
//     }
//     slideIndex++;
//     if (slideIndex > $slides.length) { slideIndex = 1 }
//     $slides[slideIndex - 1].style.opacity = 1;
//     setTimeout(carousel, 5000); // Change image every 2 seconds
// }