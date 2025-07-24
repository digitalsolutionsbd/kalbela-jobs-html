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

    const tabButtons = document.querySelectorAll('.profile-tab, .profile-tab-mobile');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(targetTab) {
        tabButtons.forEach(button => {
            button.classList.remove('active');
            button.classList.remove('text-blue-600', 'border-blue-600');
            button.classList.add('text-gray-500');
            button.setAttribute('aria-selected', 'false');
        });

        tabContents.forEach(content => {
            content.classList.add('hidden');
            content.classList.remove('animate-fade-in');
        });

        const targetContent = document.getElementById(targetTab + '-panel');
        if (targetContent) {
            targetContent.classList.remove('hidden');
            targetContent.classList.add('animate-fade-in');
        }

        const activeButtons = document.querySelectorAll(`[data-tab="${targetTab}"]`);
        activeButtons.forEach(button => {
            button.classList.add('active');
            button.classList.remove('text-gray-500');
            button.classList.add('text-blue-600', 'border-blue-600');
            button.setAttribute('aria-selected', 'true');
        });
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetTab = this.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });

    tabButtons.forEach((button, index) => {
        button.addEventListener('keydown', function (e) {
            let newIndex;
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                newIndex = (index + 1) % tabButtons.length;
                e.preventDefault();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                newIndex = (index - 1 + tabButtons.length) % tabButtons.length;
                e.preventDefault();
            }

            if (newIndex !== undefined) {
                tabButtons[newIndex].focus();
                const targetTab = tabButtons[newIndex].getAttribute('data-tab');
                switchTab(targetTab);
            }
        });
    });

    // Tab Modals
    const personalInfoEditBtn = document.querySelectorAll('.open-modal-btn');
    const closeBtns = document.querySelectorAll('.close-btn');
    const submitBtns = document.querySelectorAll('.modal-submit-btn');

    function openModal(modalEl) {
        const content = modalEl.querySelector('.modal-content');
        modalEl.classList.remove('hidden');
        modalEl.classList.add('flex');
        content.classList.remove('hidden', 'animate__bounceOutDown');
        content.classList.add('animate__animated', 'animate__bounceInUp');
        document.body.classList.add('overflow-hidden');
    }

    function closeModal(modalEl) {
        const content = modalEl.querySelector('.modal-content');
        content.classList.remove('animate__bounceInUp');
        content.classList.add('animate__animated', 'animate__bounceOutDown');
        setTimeout(() => {
            modalEl.classList.add('hidden');
            content.classList.add('hidden');
            content.classList.remove('animate__animated', 'animate__bounceOutDown');
            document.body.classList.remove('overflow-hidden');
        }, 700);
    }


    personalInfoEditBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            const modal = document.querySelector(btn.dataset.target);
            if (modal) openModal(modal);
        });
    });

    closeBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal-overlay');
            if (modal) closeModal(modal);
        });
    });

    document.querySelectorAll('.modal-overlay').forEach((overlay) => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeModal(overlay);
            }
        });
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay').forEach((overlay) => {
                closeModal(overlay);
            });
        }
    });

    // switch Add Mode
    document.querySelectorAll('.section-block').forEach((container) => {
        const addFormDiv = container.querySelector('.add-form');
        const form = addFormDiv?.querySelector('form');
        const cancelButton = container.querySelectorAll('.cancel-button');
        const addFormButton = container.querySelectorAll('.add-new-item-button');
        console.log(addFormButton );
      
        addFormButton?.forEach(button => {
            button?.addEventListener('click', () => {
                addFormDiv.style.display = 'block';
                // window.location.href = `#${form.id}`;
            });
        }); 
      
        cancelButton?.forEach(button => {
            button?.addEventListener('click', () => {
                addFormDiv.style.display = 'none';
            });
        });
    });

    // Switch Edit Mode
document.querySelectorAll('.item-container').forEach(container => {
    const displayInfoDiv = container.querySelector('.display-info');
    const editFormDiv = container.querySelector('.edit-form');
    const editButton = container.querySelectorAll('.edit-button');
 
    const cancelButton = container.querySelectorAll('.cancel-button');
    const form = container.querySelector('form');

    editButton.forEach(button => {
        button.addEventListener('click', () => {
            displayInfoDiv.style.display = 'none';
            editFormDiv.style.display = 'block';
        });
    });

    // saveButton.addEventListener('click', () => {
    //     editFormDiv.style.display = 'none'; 
    //     displayInfoDiv.style.display = 'block';
    // });

    cancelButton.forEach(button => {
        button?.addEventListener('click', () => {
            editFormDiv.style.display = 'none';
            displayInfoDiv.style.display = 'block';
            if (form && form.id) {
                window.location.href = "#" + form.id;
            }
            console.log("form", form);
        });
    });
    })


    
    
    const testquill = new Quill('#editor', {
        theme: 'snow'
      });

    
    const addPortfolioQuill = new Quill('#addPortfolioEditor', {
        theme: 'snow'
      });
    const addPublicationQuill = new Quill('#addPulicationEditor', {
        theme: 'snow'
    });

    const addAwardQuill = new Quill('#addAwardEditor', {
        theme: 'snow'
    });

    const addProjectQuill = new Quill('#addProjectEditor', {
        theme: 'snow'
    });
    

    const editPortfolioQuill = new Quill('#editPortfolioEditor', {
        theme: 'snow'
      });

    const editPublicationQuill = new Quill('#editPulicationEditor', {
        theme: 'snow'
    });

    const editAwardQuill = new Quill('#editAwardEditor', {
        theme: 'snow'
    });

    const editProjectQuill = new Quill('#editProjectEditor', {
        theme: 'snow'
      });

    // Personal Information Form Submission
    document.getElementById('personalInfoForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const currentEditFormDiv = this.closest('.edit-form');
        const currentDisplayInfoDiv = this.closest('.item-container').querySelector('.display-info');
        
        currentEditFormDiv.style.display = 'none';
        currentDisplayInfoDiv.style.display = 'block'; 

        const formData = new FormData(this);
        const personalInfoData = Object.fromEntries(formData);     

        console.log('Personal Information Data:', personalInfoData);
        this.reset();
        const modal = this.closest('.modal-overlay');
        if (modal) closeModal(modal);
    });
    
    // certificateEditForm Form Submission
    document.getElementById('certificateEditForm').addEventListener('submit', function (e) {
        e.preventDefault();
      
        const formData = new FormData(this);
        const certificateData = Object.fromEntries(formData);     

        console.log('Certificate Data:', certificateData);
        this.reset();
        const modal = this.closest('.modal-overlay');
        if (modal) closeModal(modal);
    });

    // Address Details Form Submission
    document.getElementById('addressForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const personalInfoData = Object.fromEntries(formData);
           const currentEditFormDiv = this.closest('.edit-form');
        const currentDisplayInfoDiv = this.closest('.item-container').querySelector('.display-info');
        
        currentEditFormDiv.style.display = 'none';
        currentDisplayInfoDiv.style.display = 'block'; 
        
        console.log('Address Data:', personalInfoData);
        this.reset();
        const modal = this.closest('.modal-overlay');
        if (modal) closeModal(modal);
    });


    // Career Form Submission
    document.getElementById('careerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const careerData = Object.fromEntries(formData);
        const currentEditFormDiv = this.closest('.edit-form');
        const currentDisplayInfoDiv = this.closest('.item-container').querySelector('.display-info');
        
        currentEditFormDiv.style.display = 'none';
        currentDisplayInfoDiv.style.display = 'block'; 

        careerData.careerObjective = quill.root.innerHTML;
        careerData.careerObjectiveText = quill.getText();
        console.log('Career Data:', careerData);
        this.reset();
        const modal = this.closest('.modal-overlay');
        if (modal) closeModal(modal);

        window.location.href = "#careerInfoSection";
    });
    
    // Preferred Areas Form Submission and actions
    const divisionSelect = document.getElementById('division');
     const locationData = {
        dhaka: {
            name: 'Dhaka',
            districts: {
                dhaka: { name: 'Dhaka', areas: ['Dhanmondi', 'Gulshan', 'Banani', 'Uttara', 'Mirpur', 'Wari'] },
                gazipur: { name: 'Gazipur', areas: ['Gazipur Sadar', 'Kaliakair', 'Kapasia', 'Sreepur', 'Kaliganj'] },
                kishoreganj: { name: 'Kishoreganj', areas: ['Kishoreganj Sadar', 'Bajitpur', 'Bhairab', 'Hossainpur'] }
            }
        },
        chittagong: {
            name: 'Chittagong',
            districts: {
                chittagong: { name: 'Chittagong', areas: ['Chittagong City', 'Hathazari', 'Raozan', 'Patiya'] },
                coxsbazar: { name: "Cox's Bazar", areas: ["Cox's Bazar Sadar", 'Teknaf', 'Ukhia', 'Ramu'] }
            }
        }
    };

    const countryData = {
        usa: { name: 'United States', cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'] },
        canada: { name: 'Canada', cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'] },
        uk: { name: 'United Kingdom', cities: ['London', 'Manchester', 'Birmingham', 'Glasgow', 'Liverpool'] }
    };

    let selectedOrganizations = [];

    
    // Update districts based on selected division
    document.getElementById('division').addEventListener('change', function updateDistricts() {
        const divisionSelect = document.getElementById('division');
        const districtSelect = document.getElementById('district');
        const areaSelect = document.getElementById('area');
        
        const selectedDivision = divisionSelect.value;
        
        districtSelect.innerHTML = '<option value="">Select District</option>';
        areaSelect.innerHTML = '<option value="">Select Area</option>';
        areaSelect.disabled = true;
        
        if (selectedDivision && locationData[selectedDivision]) {
            const districts = locationData[selectedDivision].districts;
            Object.keys(districts).forEach(key => {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = districts[key].name;
                districtSelect.appendChild(option);
            });
            districtSelect.disabled = false;
        } else {
            districtSelect.disabled = true;
        }
    })
    
    document.getElementById('district').addEventListener('change', function updateAreas() {
        const divisionSelect = document.getElementById('division');
        const districtSelect = document.getElementById('district');
        const areaSelect = document.getElementById('area');
        
        const selectedDivision = divisionSelect.value;
        const selectedDistrict = districtSelect.value;
        
        areaSelect.innerHTML = '<option value="">Select Area</option>';
        
        if (selectedDivision && selectedDistrict && locationData[selectedDivision]?.districts[selectedDistrict]) {
            const areas = locationData[selectedDivision].districts[selectedDistrict].areas;
            areas.forEach(area => {
                const option = document.createElement('option');
                option.value = area.toLowerCase().replace(/\s+/g, '-');
                option.textContent = area;
                areaSelect.appendChild(option);
            });
            areaSelect.disabled = false;
        } else {
            areaSelect.disabled = true;
        }
    }
);

    
    document.getElementById('country').addEventListener('change', function updateCities() {
        const countrySelect = document.getElementById('country');
        const citySelect = document.getElementById('city');
        
        const selectedCountry = countrySelect.value;
        
        citySelect.innerHTML = '<option value="">Select City</option>';
        
        if (selectedCountry && countryData[selectedCountry]) {
            const cities = countryData[selectedCountry].cities;
            cities.forEach(city => {
                const option = document.createElement('option');
                option.value = city.toLowerCase().replace(/\s+/g, '-');
                option.textContent = city;
                citySelect.appendChild(option);
            });
            citySelect.disabled = false;
        } else {
            citySelect.disabled = true;
        }
    })

    document.getElementById('organizationType').addEventListener('change', function addOrganizationType() {
        const select = document.getElementById('organizationType');
        const selectedValue = select.value;
        const selectedText = select.options[select.selectedIndex].text;
        
        if (selectedValue && !selectedOrganizations.find(org => org.value === selectedValue)) {
            if (selectedOrganizations.length < 3) {
                selectedOrganizations.push({ value: selectedValue, text: selectedText });
                renderSelectedOrganizations();
                select.value = '';
                
                // Hide warning if showing
                document.getElementById('maxSelectionWarning').classList.add('hidden');
            } else {
                // Show max selection warning
                document.getElementById('maxSelectionWarning').classList.remove('hidden');
                select.value = '';
            }
        }
    })
    
    // remove organization type
    window.removeOrganizationType = function(value) {
        selectedOrganizations = selectedOrganizations.filter(org => org.value !== value);
        renderSelectedOrganizations();
    }

    function renderSelectedOrganizations() {
        const container = document.getElementById('selectedOrganizations');
        container.innerHTML = '';
        
        selectedOrganizations.forEach(org => {
            const div = document.createElement('div');
            div.className = 'flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg px-4 py-2';
            div.innerHTML = `
                <span class="text-sm text-blue-800">${org.text}</span>
                <button type="button" onclick="removeOrganizationType('${org.value}')" class="text-blue-600 hover:text-blue-800 ml-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            `;
            container.appendChild(div);
        });
    }
 
    document.querySelectorAll('#toggleOutsideBangladesh').forEach((radio) => {
        radio.addEventListener('change', toggleAddressFields);
    });
    function toggleAddressFields() {
        const addressType = document.querySelector('input[name="addressType"]:checked').value;
        const insideFields = document.getElementById('insideBangladeshFields');
        const outsideFields = document.getElementById('outsideBangladeshFields');

        if (addressType === 'inside') {
            insideFields.classList.remove('hidden');
            outsideFields.classList.add('hidden');
            document.getElementById('country').value = '';
            document.getElementById('city').innerHTML = '<option value="">Select City</option>';
            document.getElementById('city').disabled = true;
        } else {
            insideFields.classList.add('hidden');
            outsideFields.classList.remove('hidden');
            document.getElementById('division').value = '';
            document.getElementById('district').innerHTML = '<option value="">Select District</option>';
            document.getElementById('district').disabled = true;
            document.getElementById('area').innerHTML = '<option value="">Select Area</option>';
            document.getElementById('area').disabled = true;
        }
    }

    document.getElementById('preferredAreaForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const preferredAreaData = Object.fromEntries(formData);
        const data = {
            addressType: preferredAreaData.addressType,
            division: preferredAreaData.division || '',
            district: preferredAreaData.district || '',
            area: preferredAreaData.area || '',
            country: preferredAreaData.country || '',
            city: preferredAreaData.city || '',
            organizationTypes: selectedOrganizations.map(org => org.value)
        };
        console.log('Preferred Areas Data:', data);
        this.reset();

        const currentEditFormDiv = this.closest('.edit-form');
        const currentDisplayInfoDiv = this.closest('.item-container').querySelector('.display-info');
        
        currentEditFormDiv.style.display = 'none';
        currentDisplayInfoDiv.style.display = 'block'; 

        const modal = this.closest('.modal-overlay');
        if (modal) closeModal(modal);
        window.location.href='#preferredAreasSection';
    });
    
    document.getElementById('employmentForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = Object.fromEntries(formData); 
        console.log('Employment Data:', data);
        this.reset();

        const currentAddFormDiv = this.closest('.add-form');
         
        currentAddFormDiv.style.display = 'none';
        console.log(currentAddFormDiv);
        const modal = this.closest('.modal-overlay');
        if (modal) closeModal(modal);
        // window.location.href='#preferredAreasSection';
    });
    
    document.getElementById('employmentEditForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = Object.fromEntries(formData); 
        console.log('Employment edit Data:', data);
        this.reset();

        const currentEditFormDiv = this.closest('.edit-form');
        const currentDisplayInfoDiv = this.closest('.item-container').querySelector('.display-info');
         
        currentEditFormDiv.style.display = 'none';
        currentDisplayInfoDiv.style.display = 'block';
        console.log(currentEditFormDiv);
        const modal = this.closest('.modal-overlay');
        if (modal) closeModal(modal);
        // window.location.href='#preferredAreasSection';
    });
    
    // document.getElementById('addOtherInfoLangForm').addEventListener('submit', function (e) {
    //     e.preventDefault();
    //     const formData = new FormData(this);
    //     const data = Object.fromEntries(formData); 
    //     console.log('Other Info add language Data:', data);
    //     this.reset();

    //     const currentEditFormDiv = this.closest('.add-form');
    //     const currentDisplayInfoDiv = this.closest('.item-container').querySelector('.display-info');
         
    //     currentEditFormDiv.style.display = 'none';
    //     currentDisplayInfoDiv.style.display = 'block';
    //     console.log(currentEditFormDiv);
    //     const modal = this.closest('.modal-overlay');
    //     if (modal) closeModal(modal);
    //     // window.location.href='#preferredAreasSection';
    // });
    
   
    
    // Keyword Select
    $(document).ready(function () {
        $('#keywordSelect').select2({
            tags: true, // Enable tag creation
            tokenSeparators: [','], // Optional: allow comma too
            placeholder: "Type and press enter to add keywords"
        });
    });
    // Others info skills Select
    $(document).ready(function () {
        $('#skillsSelect').select2({
            tags: true, // Enable tag creation
            tokenSeparators: [','], // Optional: allow comma too
            placeholder: "Type and press enter to add skill"
        });
    });
    
    // Others info skills skills edit Select
    $(document).ready(function () {
        $('#skillEditSelect').select2({
            tags: true, // Enable tag creation
            tokenSeparators: [','], // Optional: allow comma too
            placeholder: "Type and press enter to edit skill"
        });
    });

      // Other Relevant Information
      $(document).ready(function () {
        $('#addSkillSelect').select2({
            tags: true, // Enable tag creation
            tokenSeparators: [','], // Optional: allow comma too
            placeholder: "Type and press enter to add skills"
        });
    });

    $(document).ready(function () {
        $('#editSkillSelect').select2({
            tags: true, // Enable tag creation
            tokenSeparators: [','], // Optional: allow comma too
            placeholder: "Type and press enter to add skills"
        });
    });
    
    

    const portfolioDescription = new Quill('#portfolioEditor', {
        theme: 'snow'
    });
    
    const publicationDescription = new Quill('#publicationEditor', {
        theme: 'snow'
    });const awardDescription = new Quill('#awardEditor', {
        theme: 'snow'
    });
    const projectDescription = new Quill('#projectEditor', {
        theme: 'snow'
    });
    
    const careerEditor = new Quill('#careerEditor', {
        theme: 'snow'
    });
    
    const qualificationEditor = new Quill('#qualificationEditor', {
        theme: 'snow'
      });

      // Others Form Submission
      document.getElementById('otherInfoForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const careerData = Object.fromEntries(formData);
          careerData.careerObjective = careerEditor.root.innerHTML;
          careerData.qualification = qualificationEditor.root.innerHTML;
        careerData.careerObjectiveText = careerEditor.getText();
          console.log('Career Data:', careerData);
          const currentEditFormDiv = this.closest('.edit-form');
          const currentDisplayInfoDiv = this.closest('.item-container').querySelector('.display-info');
          
          currentEditFormDiv.style.display = 'none';
          currentDisplayInfoDiv.style.display = 'block'; 

        this.reset();
          const modal = this.closest('.modal-overlay');
          window.location.href='#otherRelevantInfoSection';
        if (modal) closeModal(modal);
      });
    

    // Disability Information
    document.querySelectorAll('input[name="disability"]').forEach((radio) => {
        radio.addEventListener('change', function() {
            const disabilityInfoSection = document.getElementById('disabilityInfoSection');
            const accessibilityPreferencesSection = document.getElementById('accessibilityPreferencesSection');
            if (this.value === 'yes') {
                disabilityInfoSection.classList.remove('block');
                disabilityInfoSection.classList.add('hidden');
                accessibilityPreferencesSection.classList.remove('hidden');
                accessibilityPreferencesSection.classList.add('block');
            } else {
                disabilityInfoSection.classList.remove('hidden');
                disabilityInfoSection.classList.add('block');
                accessibilityPreferencesSection.classList.add('hidden');
            }
        });
    });

      // Academic Summary Edit Form Submission
      document.getElementById('addAcademicForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const careerData = Object.fromEntries(formData);
        console.log('Academic Edit Data:', careerData);
          this.reset();

          const addForm = this.closest('.add-form'); 

          addForm.style.display = 'none';
           
        const modal = this.closest('.modal-overlay');
        if (modal) closeModal(modal);
      });
    
    // Academic Summary Edit Form Submission
      document.getElementById('editAcademicForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const careerData = Object.fromEntries(formData);
        console.log('Academic Data:', careerData);
          this.reset();
          
          const currentEditFormDiv = this.closest('.edit-form');
          const currentDisplayInfoDiv = this.closest('.item-container').querySelector('.display-info');
          
          currentEditFormDiv.style.display = 'none';
          currentDisplayInfoDiv.style.display = 'block';

        const modal = this.closest('.modal-overlay');
        if (modal) closeModal(modal);
      });
      
    // Skill Edit Form Submission
    //   document.getElementById('editSkillForm').addEventListener('submit', function(e) {
    //     e.preventDefault();
    //     const formData = new FormData(this);
    //     const careerData = Object.fromEntries(formData);
    //     console.log('Edit Skill Data:', careerData);
    //     this.reset();
    //     const modal = this.closest('.modal-overlay');
    //     if (modal) closeModal(modal);
    //   });
      
    // Skill Add Form Submission
    //   document.getElementById('addSkillForm').addEventListener('submit', function(e) {
    //     e.preventDefault();
    //     const formData = new FormData(this);
    //     const careerData = Object.fromEntries(formData);
    //     console.log('Add Skill Data:', careerData);
    //     this.reset();
    //     const modal = this.closest('.modal-overlay');
    //     if (modal) closeModal(modal);
    //   });
    
    // Skill Add Form Submission for others Info
    //   document.getElementById('othersInfoSkillForm').addEventListener('submit', function(e) {
    //     e.preventDefault();
    //     const formData = new FormData(this);
    //     const careerData = Object.fromEntries(formData);
    //     console.log('Add Skill Data:', careerData);
    //       this.reset();
          
    //       const currentEditFormDiv = this.closest('.edit-form');
    //       const currentDisplayInfoDiv = this.closest('.item-container').querySelector('.display-info');
    //         if (currentEditFormDiv && currentDisplayInfoDiv) {
    //             currentEditFormDiv.style.display = 'none';
    //             currentDisplayInfoDiv.style.display = 'block';
                
    //         } 

    //     const modal = this.closest('.modal-overlay');
    //     if (modal) closeModal(modal);
    //   });
    
    // Skill Edit Form Submission for others Info
      document.getElementById('othersInfoEditSkillForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const careerData = Object.fromEntries(formData);
        console.log('Edit Skill Data:', careerData);
          this.reset();
          
          const currentEditFormDiv = this.closest('.edit-form');
          const currentDisplayInfoDiv = this.closest('.item-container').querySelector('.display-info');

          currentEditFormDiv.style.display = 'none';
          currentDisplayInfoDiv.style.display = 'block';

        const modal = this.closest('.modal-overlay');
        if (modal) closeModal(modal);
      });
    
    // Language Add Form Submission
      document.getElementById('addLangForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const careerData = Object.fromEntries(formData);
        console.log('Add Language Data:', careerData);
        this.reset();
        const modal = this.closest('.modal-overlay');
        if (modal) closeModal(modal);
      });
      
    // Language Edit Form Submission
      document.getElementById('editLangForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const careerData = Object.fromEntries(formData);
        console.log('Add Language Data:', careerData);
        this.reset();
        const modal = this.closest('.modal-overlay');
        if (modal) closeModal(modal);
      });
    
    // Training Summary Edit Form Submission
      document.getElementById('traningEditForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
          const careerData = Object.fromEntries(formData);
          const currentEditFormDiv = this.closest('.edit-form');
          const currentDisplayInfoDiv = this.closest('.item-container').querySelector('.display-info');
          
          currentEditFormDiv.style.display = 'none';
          currentDisplayInfoDiv.style.display = 'block';
        console.log('Training Edit Data:', careerData);
        this.reset();
        const modal = this.closest('.modal-overlay');
        if (modal) closeModal(modal);
      });
    
    // Training Summary Add Form Submission
      document.getElementById('traningAddForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
          const careerData = Object.fromEntries(formData);
        
        console.log('Training Add Data:', careerData);
        this.reset();
        const modal = this.closest('.modal-overlay');
        if (modal) closeModal(modal);
      });

    //  upload cv or resume with click, drag and drop
    const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
    const fileName = document.getElementById('fileName');
    
  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      fileName.innerText = `✅ ${e.target.files[0].name}`;
      fileName.classList.remove('hidden');
    }
  });
    
  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('border-blue-600', 'bg-blue-50');
  });

  dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('border-blue-600', 'bg-blue-50');
  });

  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('border-blue-600', 'bg-blue-50');

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      fileInput.files = files;
      fileInput.dispatchEvent(new Event('change'));
    }
  });
    
});

const style = document.createElement('style');
style.textContent = `
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }
    .profile-tab.active,
    .profile-tab-mobile.active {
        color: #2563eb;
        border-bottom-color: #2563eb;
    }
`;
document.head.appendChild(style);