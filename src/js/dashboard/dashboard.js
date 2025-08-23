import { initSmartDropdown, setupGlobalDropdownEvents } from "../dropdown.js";
import { initTheme } from "../theme.js";

window.addEventListener("DOMContentLoaded", () => {
     initSmartDropdown();
      setupGlobalDropdownEvents();
initTheme();
   // Delete Functionality
   document.addEventListener('click', function (event) {
    const deleteButton = event.target.closest('.delete-item');

    if (!deleteButton) {
        return;
    }
    const id = deleteButton.dataset.id;    
    Swal.fire({
        title: 'আপনি কি নিশ্চিত?',
        html: `
            <div style="font-size: 16px; color: #4B5563; margin-top: 10px;">
              একবার ডিলিট করলে এটি আর ফেরত আনা যাবে না!
            </div>
        `,
        icon: 'warning',
        iconHtml: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert-icon lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
        showCancelButton: true,
        confirmButtonText: 'হ্যাঁ, ডিলিট করুন',
        cancelButtonText: 'না, রাখুন',
        customClass: {
            popup: 'swal2-border-radius',
            confirmButton: 'swal2-confirm-button-custom',
            cancelButton: 'swal2-cancel-button-custom',
            title: 'swal2-title-custom'
        },
        buttonsStyling: false,
    }).then((result) => {
        if (result.isConfirmed) {
         console.log("Delete ID:", id);

            Swal.fire(
              'ডিলিট!',
              'আপনার তথ্য সফলভাবে ডিলিট করা হয়েছে।',
              'success'
            )
        }
    });
});
})
 
// Progress bar animation
let progress = 40; 
const destination = 100; 
const border = document.getElementById("progress-border");

function updateProgressBar() {
  if (progress <= destination) {
    const remaining = 100 - progress;
    border.style.clipPath = `inset(0 ${remaining}% 0 0)`;
    const text = document.getElementById("progress-text");
    if (text) {
      text.textContent = `${progress}%`;
    }

    progress++;
    requestAnimationFrame(updateProgressBar);
  }
}

updateProgressBar();