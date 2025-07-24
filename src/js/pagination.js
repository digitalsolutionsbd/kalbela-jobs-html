// applied job table pagination
const jobs = [
    {
      title: "Senior Frontend Developer",
      location: "San Francisco, CA",
      company: "TechCorp Inc.",
      date: "Jan 15, 2024",
      status: "Interview",
    },
    {
      title: "Backend Developer",
      location: "Austin, TX",
      company: "CodeBase Ltd.",
      date: "Mar 1, 2024",
      status: "Rejected",
    },
    {
      title: "Mobile App Developer",
      location: "Los Angeles, CA",
      company: "Appify",
      date: "Mar 5, 2024",
      status: "Interview",
    },
    {
      title: "Software Engineer",
      location: "Remote",
      company: "DevRemote",
      date: "Mar 20, 2024",
      status: "Offer",
    },
    {
      title: "Project Manager",
      location: "Boston, MA",
      company: "PMTools",
      date: "Apr 10, 2024",
      status: "Pending",
    },{
      title: "Project Manager",
      location: "Boston, MA",
      company: "PMTools",
      date: "Apr 10, 2024",
      status: "Pending",
    },
  ];
  
const itemsPerPage = 5;
let currentPage = 1;

function renderTable(data) { 
    const tbody = document.querySelector('.applied-job-table');
    tbody.innerHTML = "";

    data.forEach((job) => {
        const row = `
          <tr class="hover:bg-popover">
            <td class="px-6 py-4 whitespace-nowrap">
              <div>
                <div class="text-sm font-medium text-foreground">${job.title}</div>
                <div class="text-sm text-gray-500">${job.location}</div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">${job.company}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${job.date}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">${job.status}</span>
            </td>
          </tr>
        `;
        tbody.innerHTML += row;
      });
}

function renderPagination(totalItems) {
    const pagination = document.querySelector(".pagination-wrapper");
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    pagination.innerHTML = "";
  
    const createBtn = (page, label = page, disabled = false, active = false) => {
      return `<button onclick="changePage(${page})"
                class="px-3 hover:text-white hover:bg-primary-blue duration-150 py-2 text-sm font-medium ${active ? "text-white bg-primary-blue" : "text-gray-500 bg-white"}
                border border-gray-300 rounded-md hover:bg-gray-50"
                ${disabled ? "disabled" : ""}>
                ${label}
              </button>`;
    };
    pagination.innerHTML += createBtn(currentPage - 1, "Previous", currentPage === 1);
    const maxVisiblePages = 5;
  
    if (totalPages <= maxVisiblePages + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += createBtn(i, i, false, currentPage === i);
      }
    } else {
      pagination.innerHTML += createBtn(1, "1", false, currentPage === 1);
  
      if (currentPage > 3) {
        pagination.innerHTML += `<span class="px-2">...</span>`;
      }
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
  
      for (let i = start; i <= end; i++) {
        pagination.innerHTML += createBtn(i, i, false, currentPage === i);
      }
  
      if (currentPage < totalPages - 2) {
        pagination.innerHTML += `<span class="px-2">...</span>`;
      }
  
      pagination.innerHTML += createBtn(totalPages, totalPages, false, currentPage === totalPages);
    }
  
    pagination.innerHTML += createBtn(currentPage + 1, "Next", currentPage === totalPages);
  }
  

function changePage(page) {
    const totalPages = Math.ceil(jobs.length / itemsPerPage);
    if (page < 1 || page > totalPages) return;

    currentPage = page;
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = jobs.slice(start, end);

    renderTable(pageItems);
    renderPagination(jobs.length);
  }

  // Initialize
  changePage(1);