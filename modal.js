/*  simple steps of project
 simple modal => click = >
 opacity => 1 ; backdrop => block;
*/

// define our variables to access tag
const showModalBtn = document.querySelector(".show-modal");
const modal = document.querySelector(".modal");
const backDrop = document.querySelector(".backdrop");
const closeModalBtn = document.querySelector(".close-modal");
const confirmBtn = document.querySelector(".confirm-modal");
// Add our listener for showing modal when user click on btn
showModalBtn.addEventListener("click", () => {
  modal.style.opacity = "1";
  modal.style.transform = " translateY(20vh)";
  backDrop.style.display = "block";
});

// close modal function
function closeModalFun() {
  modal.style.opacity = "0";
  modal.style.transform = " translateY(-100vh)";
  backDrop.style.display = "none";
}

// click on the close button to close modal
closeModalBtn.addEventListener("click", closeModalFun);

// click on the blured area to close modal
backDrop.addEventListener("click", closeModalFun);

// click on the confirm btn to show alert and ...
confirmBtn.addEventListener("click", () => {
  modal.style.opacity = "0";
  modal.style.transform = "translateY(-100vh)";
  backDrop.style.display = "none";
  alert("Hello! welcome to our website :)");
});
