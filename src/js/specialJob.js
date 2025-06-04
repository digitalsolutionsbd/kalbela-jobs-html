document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");
  
    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetTab = btn.dataset.tab;
  
        // Remove active class from all buttons
        tabButtons.forEach((b) => b.classList.remove("active-tab", "text-white", "bg-blue-800", "hover:bg-blue-900"));
        tabButtons.forEach((b) => b.classList.add("text-gray-700", "bg-gray-50", "hover:bg-gray-100"));
  
        // Hide all tab contents
        tabContents.forEach((content) => content.classList.add("hidden"));
  
        // Activate clicked tab and show content
        btn.classList.add("active-tab", "text-white", "bg-blue-800", "hover:bg-blue-900");
        btn.classList.remove("text-gray-700", "bg-gray-50", "hover:bg-gray-100");
        document.querySelector(`.tab-content[data-tab="${targetTab}"]`).classList.remove("hidden");
      });
    });
  });
  