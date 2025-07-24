 // Tab functionality
 document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active', 'text-white', 'bg-blue-500', 'border-primary-blue');
                btn.classList.add('text-gray-600', 'border-transparent');
            });

            // Add active class to clicked button
            this.classList.add('active', 'text-white', 'bg-blue-500', 'border-primary-blue');
            this.classList.remove('text-gray-600', 'border-transparent');

            // Hide all tab contents
            tabContents.forEach(content => {
                content.style.display = 'none';
            });

            // Show target tab content
            document.getElementById(targetTab).style.display = 'block';
        });
    });
 });



// filtering government jobs

function toggleAdvancedSearch() {
    const section = document.querySelectorAll('.advancedSearch');
    const toggleText = document.getElementById('toggleSearchText');
  
    // Toggle hidden class
    section.forEach((s) => s.classList.toggle('hidden'));
  
    // Change the text
    section.forEach((s) => {
      if (s.classList.contains('hidden')) {
        toggleText.innerText = 'এ্যাডভ্যান্স সার্চ করুন';
      } else {
        toggleText.innerText = ' এ্যাডভ্যান্স সার্চ বন্ধ করুন';
      }
     });
  }
  
  function filterOptions(input, selectId) {
    const filter = input.value.toLowerCase();
    const select = document.getElementById(selectId);
    const options = select.options;

    for (let i = 0; i < options.length; i++) {
      const txt = options[i].text.toLowerCase();
      options[i].style.display = txt.includes(filter) ? '' : 'none';
    }
}
  

//   filtering with range
const minRange = document.getElementById('minRange');
const maxRange = document.getElementById('maxRange');
const minValue = document.getElementById('minValue');
const maxValue = document.getElementById('maxValue');
const sliderTrack = document.getElementById('sliderTrack');

function formatCurrency(value) {
    return '৳' + parseInt(value).toLocaleString('bn-BD');
}

function updateTrack() {
    const min = parseInt(minRange.min);
    const max = parseInt(minRange.max);
    const minVal = parseInt(minRange.value);
    const maxVal = parseInt(maxRange.value);
    
    const minPercent = ((minVal - min) / (max - min)) * 100;
    const maxPercent = ((maxVal - min) / (max - min)) * 100;
    
    sliderTrack.style.left = minPercent + '%';
    sliderTrack.style.width = (maxPercent - minPercent) + '%';
}

function updateValues() {
    let minVal = parseInt(minRange.value);
    let maxVal = parseInt(maxRange.value);
    
    if (minVal >= maxVal) {
        if (minRange === document.activeElement) {
            maxVal = minVal + 5000;
            maxRange.value = maxVal;
        } else {
            minVal = maxVal - 5000;
            minRange.value = minVal;
        }
    }
    
    minValue.textContent = formatCurrency(minVal);
    maxValue.textContent = formatCurrency(maxVal);
    updateTrack();
}

minRange.addEventListener('input', updateValues);
maxRange.addEventListener('input', updateValues);

updateValues();

// In your Javascript (external .js resource or <script> tag)
$(document).ready(function() {
    $('.js-example-basic-single').select2({
        width: '100%'
    });
});

$(document).ready(function () {
    $('.js-job-category').select2({
      width: '100%',
      placeholder: 'জব ক্যাটাগরি নির্বাচন করুন',
      minimumResultsForSearch: Infinity
    });
  });
  

  $(document).ready(function () {
    $('.js-job-multi-select').select2({
      width: '100%',
      placeholder: 'একাধিক ক্যাটাগরি নির্বাচন করুন',
      allowClear: true
    });
  });
  
