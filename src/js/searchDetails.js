const salaryRange = document.getElementById('salaryRange');
const currentSalary = document.getElementById('currentSalary');

salaryRange.addEventListener('input', function() {
    const value = parseInt(this.value);
    const formattedValue = (value / 1000).toFixed(0) + 'K';
    currentSalary.textContent = '$' + formattedValue;
}); 
  
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
         console.log('Filter changed:', this.nextElementSibling.textContent, this.checked);
    });
});

document.querySelector('input[type="text"]').addEventListener('input', function() {
     console.log('Search term:', this.value);
});

// toggle filter box
const filterBox = document.querySelectorAll('.job-filter-modal-box');
const filterTrigger = document.querySelectorAll('.job-filter-close');
const closeFilterBox = document.querySelectorAll('.job-filter-close');

filterTrigger.forEach((trigger, index) => {
  trigger.addEventListener('click', () => {
    filterBox[index].classList.toggle('hidden');
  });
});

