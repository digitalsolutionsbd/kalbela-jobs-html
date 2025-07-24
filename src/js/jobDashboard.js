


  
  function filterOptions(input, selectId) {
    const filter = input.value.toLowerCase();
    const select = document.getElementById(selectId);
    const options = select.options;

    for (let i = 0; i < options.length; i++) {
      const txt = options[i].text.toLowerCase();
      options[i].style.display = txt.includes(filter) ? '' : 'none';
    }
}
  
function formatCurrency(value) {
  return '৳' + parseInt(value).toLocaleString();
}

function initRangeSlider(type, minLabel, maxLabel, currency = false, suffix = '') {
  const minInput = document.getElementById(`minRange-${type}`);
  const maxInput = document.getElementById(`maxRange-${type}`);
  const minValue = document.getElementById(`minValue-${type}`);
  const maxValue = document.getElementById(`maxValue-${type}`);
  const sliderTrack = document.getElementById(`sliderTrack-${type}`);

  function updateTrack() {
    const min = parseInt(minInput.min);
    const max = parseInt(minInput.max);
    const minVal = parseInt(minInput.value);
    const maxVal = parseInt(maxInput.value);
    const minPercent = ((minVal - min) / (max - min)) * 100;
    const maxPercent = ((maxVal - min) / (max - min)) * 100;
    sliderTrack.style.left = minPercent + '%';
    sliderTrack.style.width = (maxPercent - minPercent) + '%';
  }

  function updateValues() {
    let minVal = parseInt(minInput.value);
    let maxVal = parseInt(maxInput.value);

    if (minVal >= maxVal) {
      if (document.activeElement === minInput) {
        maxVal = minVal + 1;
        maxInput.value = maxVal;
      } else {
        minVal = maxVal - 1;
        minInput.value = minVal;
      }
    }

    minValue.value = currency ? formatCurrency(minVal) : minVal + suffix;
    maxValue.value = currency ? formatCurrency(maxVal) : maxVal + suffix;
    updateTrack();
  }

  minInput.addEventListener('input', updateValues);
  maxInput.addEventListener('input', updateValues);
  updateValues();
}

// Initialize each range
initRangeSlider('salary', '৳', '৳', true);
initRangeSlider('age', '', '', false, ' ');
initRangeSlider('exp', '', '', false, ' ');

// Toggle filter menu
if (document.querySelector('.filter-button')) {
  document.querySelector('.filter-button').addEventListener('click', () => {
    const filterPanel = document.getElementById('filterPanel');
  
    if (filterPanel.classList.contains('translate-x-0', 'md:translate-x-0')) {
      filterPanel.classList.remove('translate-x-0');
      filterPanel.classList.add('translate-x-full');
    } else {
      filterPanel.classList.remove('translate-x-full');
      filterPanel.classList.add('translate-x-0');
    }
  });
  }

// Close filter menu
if (document.querySelector('.close-filter-btn')) {
  document.querySelector('.close-filter-btn').addEventListener('click', () => {
    const filterPanel = document.getElementById('filterPanel');
    filterPanel.classList.remove('translate-x-0');
    filterPanel.classList.add('translate-x-full');
  });
  
}