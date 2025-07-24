const jobsData = [
    { title: "Senior Frontend Developer", company: "Google", location: "San Francisco, CA", salary: "$120k-$180k", type: "Remote", skills: ["React", "JavaScript", "TypeScript", "CSS"] },
    { title: "React Developer", company: "Microsoft", location: "Seattle, WA", salary: "$100k-$140k", type: "Hybrid", skills: ["React", "Node.js", "GraphQL"] },
    { title: "Full Stack Engineer", company: "Spotify", location: "New York, NY", salary: "$110k-$160k", type: "On-site", skills: ["React", "Node.js", "Python", "AWS"] },
    { title: "Frontend Engineer", company: "Netflix", location: "Los Angeles, CA", salary: "$130k-$170k", type: "Remote", skills: ["React", "Vue.js", "JavaScript"] },
    { title: "UI/UX Designer", company: "Adobe", location: "San Jose, CA", salary: "$90k-$130k", type: "Hybrid", skills: ["Figma", "Sketch", "Prototyping"] },
    { title: "Backend Developer", company: "Amazon", location: "Austin, TX", salary: "$105k-$150k", type: "On-site", skills: ["Node.js", "Python", "AWS", "Docker"] },
    { title: "DevOps Engineer", company: "Tesla", location: "Palo Alto, CA", salary: "$115k-$165k", type: "On-site", skills: ["AWS", "Docker", "Kubernetes", "CI/CD"] },
    { title: "Mobile Developer", company: "Uber", location: "San Francisco, CA", salary: "$110k-$155k", type: "Remote", skills: ["React Native", "iOS", "Android"] },
    { title: "Data Scientist", company: "Airbnb", location: "San Francisco, CA", salary: "$125k-$175k", type: "Hybrid", skills: ["Python", "Machine Learning", "SQL"] },
    { title: "Product Manager", company: "Slack", location: "San Francisco, CA", salary: "$140k-$190k", type: "Remote", skills: ["Product Strategy", "Analytics", "Agile"] }
];

const searchSuggestions = [
    "Frontend Developer", "Backend Developer", "Full Stack Developer", "React Developer", "Node.js Developer",
    "UI/UX Designer", "Product Manager", "Data Scientist", "DevOps Engineer", "Mobile Developer",
    "JavaScript", "Python", "React", "Vue.js", "Angular", "Node.js", "AWS", "Docker", "Kubernetes",
    "Remote Jobs", "Part-time", "Full-time", "Contract", "Internship", "Senior Level", "Entry Level",
    "Google", "Microsoft", "Amazon", "Apple", "Netflix", "Spotify", "Uber", "Airbnb", "Tesla"
];

export function initModals() {
    const navButtons = document.querySelectorAll('.nav-button');
    const modalOverlay = document.getElementById('modal-overlay');
    const modals = {
        menu: document.getElementById('menu-modal'),
        shortcut: document.getElementById('shortcut-modal'),
         search: document.getElementById('search-modal'),
        profile: document.getElementById('profile-modal')
    };

    // Search functionality
    const searchInput = document.getElementById('job-search-input');
    const clearButton = document.getElementById('clear-search');
    const searchResults = document.getElementById('search-results');
    const autoSuggestions = document.getElementById('auto-suggestions');
    const popularSearches = document.getElementById('popular-searches');
    const suggestedJobs = document.getElementById('suggested-jobs');
    const resultsContainer = document.getElementById('results-list');
    const suggestionsContainer = document.getElementById('suggestions-list');

    // Function to open modal
    function openModal(modalType) {
        Object.values(modals).forEach(modal => {
            modal.classList.add('hidden');
        });

        modals[modalType].classList.remove('hidden');
        modalOverlay.style.pointerEvents = 'auto';
        modalOverlay.classList.add('show');
        modalOverlay.classList.remove('hide');
        
        setTimeout(() => {
            modals[modalType].classList.add('show');
            modals[modalType].classList.remove('hide');
        }, 10);

        // Focus search input when search modal opens
        if (modalType === 'search') {
            setTimeout(() => {
                searchInput.focus();
            }, 300);
        }
    }

    // Function to close modal
    function closeModal() {
        Object.values(modals).forEach(modal => {
            modal.classList.add('hide');
            modal.classList.remove('show');
        });
        
        modalOverlay.classList.add('hide');
        modalOverlay.classList.remove('show');
        
        setTimeout(() => {
            modalOverlay.style.pointerEvents = 'none';
            Object.values(modals).forEach(modal => {
                modal.classList.add('hidden');
            });
        }, 300);
    }

    // Search functionality
    function performSearch(query) {
        const filteredJobs = jobsData.filter(job => 
            job.title.toLowerCase().includes(query.toLowerCase()) ||
            job.company.toLowerCase().includes(query.toLowerCase()) ||
            job.skills.some(skill => skill.toLowerCase().includes(query.toLowerCase()))
        );

        resultsContainer.innerHTML = '';
        
        if (filteredJobs.length > 0) {
            filteredJobs.slice(0, 5).forEach(job => {
                const jobElement = createJobElement(job);
                resultsContainer.appendChild(jobElement);
            });
        } else {
            resultsContainer.innerHTML = '<p class="text-gray-500 text-center py-4">No jobs found matching your search.</p>';
        }
    }

    function showAutoSuggestions(query) {
        const filteredSuggestions = searchSuggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 6);

        suggestionsContainer.innerHTML = '';
        
        filteredSuggestions.forEach(suggestion => {
            const suggestionElement = document.createElement('div');
            suggestionElement.className = 'flex items-center p-2 rounded-lg hover:bg-gray-50 cursor-pointer';
            suggestionElement.innerHTML = `
                <svg class="w-4 h-4 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <span class="text-gray-700">${suggestion}</span>
            `;
            
            suggestionElement.addEventListener('click', () => {
                searchInput.value = suggestion;
                handleSearch(suggestion);
            });
            
            suggestionsContainer.appendChild(suggestionElement);
        });
    }

    function createJobElement(job) {
        const jobDiv = document.createElement('div');
        jobDiv.className = 'fade-in flex items-start  cursor-pointer w-full';
        
        const companyInitial = job.company.charAt(0);
        const colors = ['blue', 'purple', 'green', 'orange', 'pink', 'indigo'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        jobDiv.innerHTML = `
            <a href="src/pages/job-details.html" class="bg-gray-50 rounded-lg p-4 border hover:shadow-lg transition-shadow relative w-full">
                <button class="absolute right-2 top-2 w-8 h-8 rounded-xl flex items-center justify-center">
                  <i class="ri-bookmark-fill text-primary-blue hover:!text-primary-blue text-xl"></i>
                </button>
                <div class="flex justify-between items-start mb-4">
                  <div class="flex items-center">
                    <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span class="text-orange-600 font-bold text-lg">H</span>
                    </div>
                    <div class="ml-3">
                      <h3 class="text-sm font-semibold text-gray-800">Senior Frontend Developer</h3>
                      <p class="text-gray-600 text-xs">Google Inc.</p>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap text-xs text-gray-600 gap-x-2 items-center">
                  <span><i class="ri-calendar-2-line text-[15px]"></i> Jun 10 2025</span>
                  <!-- <span><i class="ri-calendar-2-line text-[15px]"></i> Jul 10 2025</span> | -->
                  |<span><i class="ri-map-pin-line text-[15px]"></i> Mirpur, Dhaka</span>
                </div>
                <!-- <div class="flex justify-between items-center text-xs">
                  <div>
                    <p class="text-gray-500">📍 San Francisco, CA</p>
                    <p class="font-semibold text-gray-800">$120,000 - $160,000</p>
                  </div>
                </div> -->
              </a>
        `;
        
        return jobDiv;
    }

    function handleSearch(query) {
        if (query.trim() === '') {
            // Show default content
            searchResults.classList.add('hidden');
            autoSuggestions.classList.add('hidden');
            popularSearches.classList.remove('hidden');
            suggestedJobs.classList.remove('hidden');
            clearButton.classList.add('hidden');
        } else if (query.length >= 2) {
            // Show search results
            performSearch(query);
            searchResults.classList.remove('hidden');
            autoSuggestions.classList.add('hidden');
            popularSearches.classList.add('hidden');
            suggestedJobs.classList.add('hidden');
            clearButton.classList.remove('hidden');
        } else {
            // Show auto suggestions
            showAutoSuggestions(query);
            autoSuggestions.classList.remove('hidden');
            searchResults.classList.add('hidden');
            popularSearches.classList.add('hidden');
            suggestedJobs.classList.add('hidden');
            clearButton.classList.remove('hidden');
        }
    }

    // Search input event listeners
    searchInput.addEventListener('input', (e) => {
        handleSearch(e.target.value);
    });

    clearButton.addEventListener('click', () => {
        searchInput.value = '';
        handleSearch('');
        searchInput.focus();
    });

    // Popular search tags
    document.querySelectorAll('.popular-search-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            const searchTerm = tag.textContent;
            searchInput.value = searchTerm;
            handleSearch(searchTerm);
        });
    });

    // Navigation button event listeners
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalType = this.getAttribute('data-modal');
            
            // Update active state
            navButtons.forEach(btn => {
                btn.classList.remove('bg-blue-50', 'hover:bg-blue-100');
                btn.classList.add('hover:bg-gray-100');
                btn.querySelector('svg').classList.remove('text-blue-600');
                btn.querySelector('svg').classList.add('text-gray-600');
            });
            
            this.classList.remove('hover:bg-gray-100');
            this.classList.add('bg-blue-50', 'hover:bg-blue-100');
            this.querySelector('svg').classList.remove('text-gray-600');
            this.querySelector('svg').classList.add('text-blue-600');
            
            openModal(modalType);
        });
    });

    // Close modal event listeners
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    Object.values(modals).forEach(modal => {
        modal.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
  }
  