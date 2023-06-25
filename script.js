var slideIndex = 0;

var slides = document.getElementsByClassName("slide");
let slideControl = document.getElementById("slideControl");


// for (i = 0; i < slides.length; i++) {
//     // slides[i].style.display = "none";

//     let newB = document.createElement("button");
//     newB.addEventListener("click", showSlide);
//     newB.setAttribute("data-index", i);
//     slideControl.appendChild(newB);
// }

// slides[slideIndex].style.display = "block";

function showSlide(e, i) {
    let n = i;
    if (i == null) {
        e.preventDefault();
        n = e.target.getAttribute('data-index');
    }
    slides[slideIndex].style.display = "none";
    slideIndex = n;
    if (n > slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length -1 };

    slides[slideIndex].style.display = "block";
}


carousel()
function carousel() {
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.opacity = 1;
    setTimeout(carousel, 5000); // Change image every 2 seconds
}