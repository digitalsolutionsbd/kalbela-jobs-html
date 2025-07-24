## Components
# 1.  Modals : 
1. connect modal.js file 
    ```
    <script src="/src/js/modal.js"></script> 
    ```
Or use this javascript for modal
   ```
    // Open modal
document.querySelectorAll(".open-modal").forEach(button => {
  button.addEventListener("click", function () {
    const modalId = this.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "block";
    }
  });
});

// Close modal
document.querySelectorAll(".modal").forEach(modal => {
  const closeButton = modal.querySelector(".close-button");
  
  // Close on X click
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close on outside click
  window.addEventListener("click", event => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
    
    // Close on Escape key press
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        modal.style.display = "none";
      }
    });
});

   ```

2. Insure correctly input.css file or copy this css for style modal.
    ```
    /* Modal Background */
    .modal {
    display: none; 
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.5);
    }

    /* Modal Box */
    .modal-content {
    background-color: white;
    margin: 10% auto;
    padding: 20px;
    border-radius: 8px;
    min-width: 300px;
    max-width: 800px;
    position: relative;
    animation: slideIn 0.3s ease-out;
    }

    /* Close Button */
    .close-button {
    color: #aaa;
    float: right;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    }

    /* Animation */
    @keyframes slideIn {
    from { transform: translateY(-20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
    }

    ```
    
# 2.  Tab : 
1. html 
    ```
    <!-- Tabs -->
                  <div class="tabs w-full max-w-2xl mx-auto my-8">
                    <!-- Tab headers -->
                    <div class="flex border-b" role="tablist">
                      <button
                        class="active bg-gray-200 text-gray-900 border-gray-100 tab-button px-4 py-2 text-sm font-medium  border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 rounded-t-md"
                        data-tab="tab1">
                        Tab 1
                      </button>
                      <button
                        class="tab-button px-4 py-2 text-sm font-medium text-gray-600 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 rounded-t-md"
                        data-tab="tab2">
                        Tab 2
                      </button>
                    </div>
                
                    <!-- Tab content -->
                    <div class="tab-content mt-4">
                      <div id="tab1" class="tab-container block">
                        <p>This is content for Tab 1.</p>
                      </div>
                      <div id="tab2" class="tab-container hidden">
                        <p>This is content for Tab 2.</p>
                      </div>
                    </div>
                  </div>
 
    ```

2. connect modal.js file 
    ```
    <script src="/src/js/tab.js"></script> 
    ```

3. tab.js.
    
    ```
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







# 3. Accordion : 
1. html 
    ```
       <div class="accordion-group space-y-2">
            <!-- Accordion Item 1 -->
            <div class="accordion-item border-b border-gray-400 overflow-hidden">
              <button
                class="accordion-header text-primary-blue w-full text-left py-2 font-semibold  flex justify-between items-center">
                <span>
                  Quick Filter
                </span>
                <svg class="w-4 h-4 transition-transform transform" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div class="accordion-body transition-all duration-300 ease-in-out overflow-hidden"
                style="max-height: 0; padding-top: 0; padding-bottom: 0;">
                  Accordion Body
              </div>
            </div>

          </div>
 
    ```

2. connect accordion.js file 
    ```
    <script src="/src/js/tab.js"></script> 
    ```

3. accordion.js.
  ``` 
  document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.closest('.accordion-item');
    const body = accordionItem.querySelector('.accordion-body');
    const icon = header.querySelector('svg');
    const isOpen = body.style.maxHeight && body.style.maxHeight !== '0px';

    // Close all
    document.querySelectorAll('.accordion-body').forEach(el => {
      el.style.maxHeight = '0px';
      // el.style.paddingTop = '0px';
      el.style.paddingBottom = '0px';
      el.previousElementSibling.querySelector('svg').classList.remove('rotate-180');
    });

    // Toggle clicked
    if (!isOpen) {
      // body.style.paddingTop = '0.5rem';
      body.style.paddingBottom = '0.5rem';
      body.style.maxHeight = body.scrollHeight + 'px';
      icon.classList.add('rotate-180');
    }
  });
});

// ✅ Open the first accordion on load
window.addEventListener('DOMContentLoaded', () => {
  const firstBody = document.querySelector('.accordion-body');
  const firstIcon = document.querySelector('.accordion-header svg');

  if (firstBody && firstIcon) {
    firstBody.style.maxHeight = firstBody.scrollHeight + 'px';
    // firstBody.style.paddingTop = '0.5rem';
    firstBody.style.paddingBottom = '0.5rem';
    firstIcon.classList.add('rotate-180');
  }
});
 

```

