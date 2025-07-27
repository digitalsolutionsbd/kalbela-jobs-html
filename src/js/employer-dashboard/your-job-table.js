// applied job table pagination
const jobs = [
  {
    title: "Senior Frontend Developer",
    location: "San Francisco, CA",
    company: "TechCorp Inc.",
    status: "Interview",
    gender: "Male",
    jobType: "Full-time",
    vacancy: 2,
    applyCount: 15,
    feature: true,
    uploadedDate: "2024-01-15",
    deadline: "2024-01-25"
  },
  {
    title: "Backend Developer",
    location: "Austin, TX",
    company: "CodeBase Ltd.",
    status: "Rejected",
    gender: "Female",
    jobType: "Full-time",
    vacancy: 1,
    applyCount: 30,
    feature: false,
    uploadedDate: "2024-03-01",
    deadline: "2024-03-10"
  },
  {
    title: "Mobile App Developer",
    location: "Los Angeles, CA",
    company: "Appify",
    status: "Interview",
    gender: "Male",
    jobType: "Contract",
    vacancy: 3,
    applyCount: 12,
    feature: true,
    uploadedDate: "2024-03-05",
    deadline: "2024-03-15"
  },
  {
    title: "Software Engineer",
    location: "Remote",
    company: "DevRemote",
    status: "Offer",
    gender: "Female",
    jobType: "Full-time",
    vacancy: 4,
    applyCount: 20,
    feature: false,
    uploadedDate: "2024-03-20",
    deadline: "2024-03-30"
  },
  {
    title: "Project Manager",
    location: "Boston, MA",
    company: "PMTools",
    status: "Pending",
    gender: "Male",
    jobType: "Part-time",
    vacancy: 1,
    applyCount: 7,
    feature: false,
    uploadedDate: "2024-04-10",
    deadline: "2024-04-20",
  },
  {
    title: "UI/UX Designer",
    location: "New York, NY",
    company: "Designify",
    status: "Interview",
    gender: "Female",
    jobType: "Full-time",
    vacancy: 2,
    applyCount: 18,
    feature: true,
    uploadedDate: "2024-05-12",
    deadline: "2024-05-25"
  }
];

let filteredJobs = [...jobs];


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
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${job?.gender}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${job?.jobType === "Full-time" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}">${job?.jobType}</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ">${job?.vacancy}</span>
            </td>
             <td class="px-6 py-4 whitespace-nowrap">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ">${job?.applyCount}</span>
            </td>
             <td class="px-6 py-4 whitespace-nowrap">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${job?.status === "Rejected" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}">${job?.status}</span>
            </td>
             <td class="px-6 py-4 whitespace-nowrap">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ">${job?.uploadedDate}</span>
            </td>
             <td class="px-6 py-4 whitespace-nowrap">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ">${job?.deadline}</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
               <div class="relative  block group duration-200 ">
                     <button data-target="#educationEditModal" class="bg-gray-50 px-4 border w-8 h-8 flex justify-center items-center py-2 text-success-500 hover:text-success-700 rounded-lg transition-colors font-medium">
                       <i class="ri-more-2-line text-xl"></i>
                      </button>
                      <div class="opacity-0 hidden group-hover:block invisible group-hover:opacity-100 duration-200 group-hover:visible absolute top-6 pt-4 right-0 z-10">
                        <ul class=" bg-white shadow-xl p-2 border  rounded-lg">
                        <li class="py-1">
                          <a href="/src/pages/employer-dashboard/edit-your-job.html" class="edit-button bg-green-50 hover:bg-green-500 duration-150 hover:text-white w-full flex px-8 py-2 text-success-500 hover:text-success-700 rounded-lg"  data-target="#editJobModal">
                            <i class="ri-edit-line"></i>
                            Edit
                          </a>

                           </li>
                           <li class="py-1">
                              <button data-id="traning-1"
                              class="delete-item bg-red-50 hover:bg-danger-500 duration-150 hover:text-white w-full flex edit-button px-8 py-2 text-danger-500 hover:text-danger-700 rounded-lg transition-colors font-medium">
                                <i class="ri-delete-bin-line "></i>
                                Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
            </td>
          </tr>
        `;
    tbody.innerHTML += row;
  });
}

// Show modal
document.addEventListener("click", function (e) {
  if (e.target.closest(".edit-button")) {
    const targetSelector = e.target.closest(".edit-button").getAttribute("data-target");
    const modal = document.querySelector(targetSelector);
    if (modal) {
      modal.classList.remove("hidden");
      const modalContent = modal.querySelector(".modal-content");
      if (modalContent) modalContent.classList.remove("hidden");
    }
  }

  // Close modal
  if (e.target.closest(".close-btn")) {
    const modal = e.target.closest(".modal-overlay");
    if (modal) {
      modal.classList.add("hidden");
      const modalContent = modal.querySelector(".modal-content");
      if (modalContent) modalContent.classList.add("hidden");
    }
  }
});


document.getElementById("exportExcelBtn").addEventListener("click", () => {
  const exportData = filteredJobs.map(job => ({
    Title: job.title,
    Location: job.location,
    Company: job.company,
    Status: job.status,
    Gender: job.gender,
    "Job Type": job.jobType,
    Vacancy: job.vacancy,
    "Apply Count": job.applyCount,
    "Feature Job": job.feature ? "Yes" : "No",
    "Uploaded Date": job.uploadedDate,
    Deadline: job.deadline
  }));

  const worksheet = XLSX.utils.json_to_sheet(exportData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Jobs");
  XLSX.writeFile(workbook, "applied-jobs.xlsx");
});



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
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  if (page < 1 || page > totalPages) return;

  currentPage = page;
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = filteredJobs.slice(start, end);

  renderTable(pageItems);
  renderPagination(filteredJobs.length);
}

function filterJobs() {
  const query = document.getElementById("jobSearch").value.toLowerCase().trim();
  const status = document.getElementById("statusFilter").value;
  const gender = document.getElementById("genderFilter").value;
  const dateRange = document.getElementById("dateFilter").value;

  filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(query) ||
      job.location.toLowerCase().includes(query) ||
      job.company.toLowerCase().includes(query) ||
      job.status.toLowerCase().includes(query);

    const matchesStatus = status ? job.status === status : true;
    const matchesGender = gender ? job.gender === gender : true;

    const jobDate = new Date(job.date);
    const now = new Date();
    let matchesDate = true;

    if (dateRange === "last30") {
      const last30 = new Date();
      last30.setDate(now.getDate() - 30);
      matchesDate = jobDate >= last30;
    } else if (dateRange === "last90") {
      const last90 = new Date();
      last90.setDate(now.getDate() - 90);
      matchesDate = jobDate >= last90;
    } else if (dateRange === "2024") {
      matchesDate = jobDate.getFullYear() === 2024;
    }

    return matchesSearch && matchesStatus && matchesGender && matchesDate;
  });

  currentPage = 1;
  changePage(currentPage);
}

document.getElementById("jobSearch").addEventListener("input", filterJobs);
document.getElementById("statusFilter").addEventListener("change", filterJobs);
document.getElementById("genderFilter").addEventListener("change", filterJobs);
document.getElementById("dateFilter").addEventListener("change", filterJobs);


// Initialize
changePage(1);