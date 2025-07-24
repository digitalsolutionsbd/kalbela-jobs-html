// Job Data
const jobList = [
  { title: "Frontend Developer", company: "TechSoft", id: "job1" },
  { title: "Backend Developer", company: "CodeWorks", id: "job2" },
  { title: "UI/UX Designer", company: "DesignPro", id: "job3" },
  { title: "Full Stack Developer", company: "WebGenius", id: "job4" },
  { title: "Data Analyst", company: "Insight Ltd", id: "job5" },
  { title: "React Developer", company: "BrightApps", id: "job6" },
  { title: "Node.js Developer", company: "ServerLab", id: "job7" }
];

const suggestList = [
  { title: "Frontend Developer", company: "TechSoft", id: "job1" },
  { title: "Backend Developer", company: "CodeWorks", id: "job2" },
  { title: "UI/UX Designer", company: "DesignPro", id: "job3" },
  { title: "Full Stack Developer", company: "WebGenius", id: "job4" },
  { title: "Data Analyst", company: "Insight Ltd", id: "job5" },
  { title: "React Developer", company: "BrightApps", id: "job6" },
  { title: "Node.js Developer", company: "ServerLab", id: "job7" }
];

export function searchJob() {
  const searchTrigger = document.getElementById('searchTrigger');
  const searchModal = document.getElementById('searchModal');
  const searchInput = document.getElementById('searchInput');
  const jobResults = document.getElementById('jobResults');
  const searchRounded = document.getElementById('searchRounded');
  const closeModal = document.getElementById('closeModal');

  if (!searchTrigger || !searchModal || !searchInput || !jobResults || !searchRounded || !closeModal) return;

  // Show modal
  searchTrigger.addEventListener('click', () => {
    searchModal.classList.remove('opacity-0', 'pointer-events-none');
    searchModal.classList.add('opacity-100');
    document.body.style.overflow = 'hidden';
    searchInput.focus();
  });

  // Close modal
  closeModal.addEventListener('click', () => {
    searchModal.classList.add('opacity-0', 'pointer-events-none');
    searchModal.classList.remove('opacity-100');
    document.body.style.overflow = '';
    searchInput.value = '';
    jobResults.innerHTML = '';
    searchRounded.classList.add('rounded-full');
    searchRounded.classList.remove('rounded-tl-xl', 'rounded-tr-xl');
  });

  // Click outside to close
  searchModal.addEventListener('click', (e) => {
    const modalContent = document.getElementById('modalContent');
    if (!modalContent.contains(e.target)) {
      document.body.style.overflow = '';
      closeModal.click();
    }
  });

  // Escape key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.body.style.overflow = '';
      closeModal.click();
    }
  });

  // Search logic
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();

    // Update border-radius
    if (query) {
      searchRounded.classList.remove('rounded-full');
      searchRounded.classList.add('rounded-tl-xl', 'rounded-tr-xl');
    } else {
      searchRounded.classList.add('rounded-full');
      searchRounded.classList.remove('rounded-tl-xl', 'rounded-tr-xl');
      jobResults.innerHTML = '';
      return;
    }

    const filtered = jobList.filter(job =>
      job.title.toLowerCase().includes(query)
    );

    jobResults.innerHTML = '';

    if (filtered.length > 0) {
      filtered.forEach(job => {
        const li = document.createElement('li');
        li.className = "border p-2 m-2 rounded hover:bg-gray-100";
        li.innerHTML = `<a class="w-full h-full" href="src/pages/search-jobs.html"><p class="font-semibold"><i class="ri-search-line font-normal"></i> ${job.title}</p></a>`;
        jobResults.appendChild(li);
      });
    } else {
      jobResults.innerHTML = `<li class="text-gray-500 px-4 py-2 bg-white rounded-b-xl">No jobs found</li>`;
      return;
    }

    // Suggestions section title
    const suggestionTitle = document.createElement('li');
    suggestionTitle.className = "px-4 pt-4 text-sm text-gray-500 font-medium";
    suggestionTitle.textContent = "Suggestions";
    jobResults.appendChild(suggestionTitle);

    // Remove suggestions that are already shown in search result
    const filteredIds = filtered.map(job => job.id);
    const remainingSuggestions = suggestList.filter(s => !filteredIds.includes(s.id));

    remainingSuggestions.forEach(suggestion => {
      const li = document.createElement('li');
      li.className = "px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer";
      li.innerHTML = `<a href="src/pages/search-jobs.html"><i class="ri-arrow-right-line mr-2 text-gray-400"></i>${suggestion.title}</a>`;
      jobResults.appendChild(li);
    });
  });
}

// Init Function
export function initSearch() {
  searchJob();
}
