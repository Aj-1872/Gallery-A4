const mainImg = document.getElementById("main_img"); // Get the element with the ID "main_img"
const callImg = document.getElementsByClassName("call_img"); // Get all elements with the class "call_img"
let num = 0; // Initialize a variable to keep track of the current image index

for (let i = 0; i < callImg.length; i++) {
  callImg[i].addEventListener("click", () => {
    mainImg.src = callImg[i].src; // Set the source of the main image to the clicked image
    num = i; // Update the current image index
  });
}



const rightButton = document.getElementById("btn1"); // Get the element with the ID "btn1"
const leftButton = document.getElementById("btn2"); // Get the element with the ID "btn2"

// Function to change the displayed image
const change = (x) => {
  var num2 = num + x; // Calculate the new image index

  if (num2 >= 0 && num2 < callImg.length) {
    mainImg.src = callImg[num2].src; // Set the source of the main image to the new image
    num = num2; // Update the current image index
  } else if (num2 === callImg.length) {
    num = 0; // Reset the image index to the first image
    mainImg.src = callImg[num].src; // Set the source of the main image to the first image
  } else if (num2 === -1) {
    num = callImg.length - 1; // Set the image index to the last image
    mainImg.src = callImg[num].src; // Set the source of the main image to the last image
  }

  console.log(num2); // Output the new image index to the console
};

const exit = document.getElementById("exit_btn"); // Get the element with the ID "exit_btn"

// Event handler for the exit button click
exit.onclick = () => {
  window.close(); // Close the current window
};

  // rightButton.addEventListener("mouseover", ()=>{

    //     const num2 = num + 1;
    
    //         if (num2 >= 0 && num2 < callImg.length) {
    //           mainImg.src = callImg[num2].src;
    //           num = num2;
    //         }
    
    //         if (num2 === callImg.length) {
    //           num = -1;
    //         } else if (num2 === -1) {
    //           num = callImg.length;
    //         }
    
    // })
