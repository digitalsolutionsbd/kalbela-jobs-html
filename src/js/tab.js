const tabButtons = document.querySelectorAll(".tab-button");
const tabContainers = document.querySelectorAll(".tab-container");

if (tabButtons.length && tabContainers.length) {
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-tab");

      // Reset all buttons
      tabButtons.forEach((b) =>
        b.classList.remove(
          "border-gray-100",
          "text-gray-900",
          "bg-gray-200",
          "active"
        )
      );
      // Hide all containers
      tabContainers.forEach((pane) => pane.classList.add("hidden"));

      // Activate clicked tab
      btn.classList.add(
        "border-gray-100",
        "bg-gray-200",
        "text-gray-900",
        "active"
      );
      document.getElementById(target).classList.remove("hidden");
    });
  });
}
