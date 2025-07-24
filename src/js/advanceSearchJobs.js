// job data
const jobList = [
    { title: "Frontend Developer", company: "TechSoft", id: "job1" },
    { title: "Backend Developer", company: "CodeWorks", id: "job2" },
    { title: "UI/UX Designer", company: "DesignPro", id: "job3" },
    { title: "Full Stack Developer", company: "WebGenius", id: "job4" },
    { title: "Data Analyst", company: "Insight Ltd", id: "job5" },
    { title: "React Developer", company: "BrightApps", id: "job6" },
    { title: "Node.js Developer", company: "ServerLab", id: "job7" }
  ];
  
  const suggestList = [...jobList];
  
  export function initAdvanceSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchRounded = document.getElementById('searchRounded');
  
    if (!searchInput || !searchResults) return;
  
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();
  
      // border radius change
      if (query) {
        searchRounded.classList.remove('rounded-full');
        searchRounded.classList.add('rounded-tl-xl', 'rounded-tr-xl');
        searchResults.classList.remove('hidden');
      } else {
        searchRounded.classList.add('rounded-full');
        searchRounded.classList.remove('rounded-tl-xl', 'rounded-tr-xl');
        searchResults.classList.add('hidden');
        searchResults.innerHTML = '';
        return;
      }
  
      const matchedJobs = jobList.filter(job =>
        job.title.toLowerCase().includes(query)
      );
  
      searchResults.innerHTML = '';
  
      if (matchedJobs.length > 0) {
        matchedJobs.forEach(job => {
          const li = document.createElement('li');
          li.className = "px-4 py-2 hover:bg-gray-100";
          li.innerHTML = `<a href="src/pages/search-jobs.html"><i class="ri-search-line mr-2"></i>${job.title}</a>`;
          searchResults.appendChild(li);
        });
      } else {
        searchResults.innerHTML = `<li class="px-4 py-2 text-gray-500">No jobs found------</li>`;
      }
  
      // Suggestion title
      const suggestionTitle = document.createElement('li');
      suggestionTitle.className = "px-4 pt-3 text-sm text-gray-500 font-medium";
      suggestionTitle.textContent = "Suggestions";
      searchResults.appendChild(suggestionTitle);
  
      // Filter suggestion not in matched list
      const matchIDs = matchedJobs.map(j => j.id);
      const remainingSuggestions = suggestList.filter(s => !matchIDs.includes(s.id));
  
      remainingSuggestions.forEach(s => {
        const li = document.createElement('li');
        li.className = "px-4 py-2 text-sm text-gray-700 hover:bg-gray-100";
        li.innerHTML = `<a href="src/pages/search-jobs.html"><i class="ri-arrow-right-line mr-2 text-gray-400"></i>${s.title}</a>`;
        searchResults.appendChild(li);
      });
    });
  }
  