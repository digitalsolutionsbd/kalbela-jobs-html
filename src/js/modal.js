// // Open modal
// document.querySelectorAll(".open-modal").forEach(button => {
//   button.addEventListener("click", function () {
//     const modalId = this.getAttribute("data-modal");
//     const modal = document.getElementById(modalId);
//     if (modal) {
//       modal.style.display = "block";
//     }
//   });
// });

// // Close modal
// document.querySelectorAll(".modal").forEach(modal => {
//   const closeButton = modal.querySelector(".close-button");
  
//   // Close on X click
//   closeButton.addEventListener("click", () => {
//     modal.style.display = "none";
//   });

//   // Close on outside click
//   window.addEventListener("click", event => {
//     if (event.target === modal) {
//       modal.style.display = "none";
//     }
//   });
    
//     // Close on Escape key press
//     document.addEventListener("keydown", event => {
//       if (event.key === "Escape") {
//         modal.style.display = "none";
//       }
//     });
// });


// Event delegation to open modal
document.addEventListener("click", function (e) {
  const openBtn = e.target.closest(".open-modal");
  if (openBtn) {
    const modalId = openBtn.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "block";
    }
  }

  // Close modal on X button click
  if (e.target.classList.contains("close-button")) {
    const modal = e.target.closest(".modal");
    if (modal) {
      modal.style.display = "none";
    }
  }

  // Close modal on outside click
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});

// Close modal on Escape key press
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal").forEach(modal => {
      modal.style.display = "none";
    });
  }
});
