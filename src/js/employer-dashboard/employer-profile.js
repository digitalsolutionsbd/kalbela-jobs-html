document.addEventListener('DOMContentLoaded', function () {
    const profileUploadBox = document.querySelectorAll('.profile-upload-box');
    profileUploadBox.forEach((box, index) => {
        box.addEventListener('click', function () {
            const input = this.querySelectorAll('.profile-input')[index];
            if (input) {
                input.click();
            }
        });
    });

    
    let selectedIndustries = [];

  const industryCheckBoxes = document.querySelectorAll('.industry-type-checkbox');
  const displaySelectedIndustries = document.getElementById('displaySelectedIndustries');

  function renderSelectedIndustries() {
    displaySelectedIndustries.innerHTML = '';

    selectedIndustries.forEach((industry) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="bg-indigo-100 text-indigo-800 p-2 rounded-full flex items-center space-x-2">
          <span class="pl-1">${industry}</span>
          <button
            class="remove-industry bg-indigo-700 hover:bg-indigo-800 text-white w-6 h-6 rounded-full flex items-center justify-center"
            data-industry="${industry}">
            <i class="ri-close-line"></i>
          </button>
        </div>
      `;
      displaySelectedIndustries.appendChild(li);
    });

    const removeButtons = displaySelectedIndustries.querySelectorAll('.remove-industry');
    removeButtons.forEach((btn) => {
      btn.addEventListener('click', function () {
        const industryToRemove = this.getAttribute('data-industry');

        selectedIndustries = selectedIndustries.filter(item => item !== industryToRemove);

        const relatedCheckbox = document.querySelector(`.industry-type-checkbox[data-industry="${industryToRemove}"]`);
        if (relatedCheckbox) relatedCheckbox.checked = false;

        renderSelectedIndustries();
      });
    });
  }

  industryCheckBoxes.forEach((box) => {
    box.addEventListener('change', function () {
      const industryValue = this.getAttribute('data-industry');

      if (this.checked) {
        if (!selectedIndustries.includes(industryValue)) {
          selectedIndustries.push(industryValue);
        }
      } else {
        selectedIndustries = selectedIndustries.filter(item => item !== industryValue);
      }

      renderSelectedIndustries();
    });
  });

});