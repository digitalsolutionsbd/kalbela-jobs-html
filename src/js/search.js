// Job Data
const jobList = [
    { title: "Frontend Developer", company: "TechSoft", id: "job1" },
    { title: "Backend Developer", company: "CodeWorks", id: "job2" },
    { title: "UI/UX Designer", company: "DesignPro", id: "job3" },
    { title: "Full Stack Developer", company: "WebGenius", id: "job4" },
    { title: "Data Analyst", company: "Insight Ltd", id: "job5" },
    { title: "React Developer", company: "BrightApps" , id: "job6"},
    { title: "Node.js Developer", company: "ServerLab", id: "job7" }
  ];
  
  export function searchJob() {
    const searchTrigger = document.getElementById('searchTrigger');
    const searchModal = document.getElementById('searchModal');
    const closeModal = document.getElementById('closeModal');
    const searchInput = document.getElementById('searchInput');
    const jobResults = document.getElementById('jobResults');
  
    if (!searchTrigger || !searchModal || !closeModal || !searchInput || !jobResults) return;
  
    // Show modal
    searchTrigger.addEventListener('click', () => {
        searchModal.classList.remove('opacity-0', 'pointer-events-none');
        searchModal.classList.add('opacity-100');
        document.body.style.overflow = 'hidden'; // 👉 Prevent scroll
        searchInput.focus();
      });
      
  
    // Close modal
    closeModal.addEventListener('click', () => {
        searchModal.classList.add('opacity-0', 'pointer-events-none');
        searchModal.classList.remove('opacity-100');
        document.body.style.overflow = ''; // 👉 Restore scroll
        searchInput.value = '';
        jobResults.innerHTML = '';
      });
      
  
    // Optional: close by clicking outside
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
          document.body.style.overflow = ''; // 👉 Restore scroll
          closeModal.click();
        }
      });
      
  
    // Search logic
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
      
        // If input is empty, clear the results and return
        if (!query) {
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
            li.className = "border p-2 rounded hover:bg-blue-100";
            li.innerHTML = `<a href="src/pages/search-jobs.html"><strong>${job.title}</strong><br><small>${job.company}</small></a>`;
            jobResults.appendChild(li);
          });
        } else {
          jobResults.innerHTML = `<li class="text-gray-500">No jobs found</li>`;
        }
      });
      
}
  
  // Init Function
export function initSearch() {
    searchJob();
 
  }
  