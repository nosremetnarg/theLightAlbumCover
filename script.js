const picture1 = document.getElementById("picture1");
const picture2 = document.getElementById("picture2");
const body = document.querySelector("body");
const picture3 = document.querySelector("#picture1");


function changeDisplay() {
    console.log("clicked");
    console.log(picture3.style.display);
    if (picture3.style.display === "block" ) {
        console.log('p1 display block');
        picture3.style.display = "none";
        picture2.style.display = "block";
    } else if (picture3.style.display === "none") {
        picture3.style.display = "block";
        picture2.style.display = "none";
    }

}

document.body.addEventListener('click', changeDisplay)

// document.body.addEventListener("click", function () {
//     console.log('clicked');
//   document.getElementById("picture1").classList.toggle("showMe");
// }, false);
