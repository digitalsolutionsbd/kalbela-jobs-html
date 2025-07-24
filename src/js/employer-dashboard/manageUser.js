  const users = [
  {
    sl: 1,
    name: "Md Nahid",
    position: "Frontend Developer",
    phone: "+880170000000",
    email: "dev.nahid117@gmail.com",
    role: "Admin",
    date: "2023-01-10",
    isActive: true,
  },
  {
    sl: 2,
    name: "Ayesha Sultana",
    position: "UI/UX Designer",
    phone: "+880170000001",
    email: "ayesha.uiux@example.com",
    role: "Editor",
    date: "2023-02-15",
    isActive: true,
  },
  {
    sl: 3,
    name: "Tanvir Rahman",
    position: "Backend Developer",
    phone: "+880170000002",
    email: "tanvir.backend@example.com",
    role: "Admin",
    date: "2023-03-05",
    isActive: false,
  },
  {
    sl: 4,
    name: "Shamima Akter",
    position: "Project Manager",
    phone: "+880170000003",
    email: "shamima.pm@example.com",
    role: "Manager",
    date: "2023-04-12",
    isActive: true,
  },
  {
    sl: 5,
    name: "Raihan Kabir",
    position: "QA Engineer",
    phone: "+880170000004",
    email: "raihan.qa@example.com",
    role: "Editor",
    date: "2023-05-20",
    isActive: false,
  },
  {
    sl: 6,
    name: "Farhana Islam",
    position: "Content Writer",
    phone: "+880170000005",
    email: "farhana.writer@example.com",
    role: "User",
    date: "2023-06-18",
    isActive: true,
  },
  {
    sl: 7,
    name: "Imran Hossain",
    position: "DevOps Engineer",
    phone: "+880170000006",
    email: "imran.devops@example.com",
    role: "Admin",
    date: "2023-07-25",
    isActive: true,
  },
  {
    sl: 8,
    name: "Nusrat Jahan",
    position: "Graphic Designer",
    phone: "+880170000007",
    email: "nusrat.design@example.com",
    role: "Editor",
    date: "2023-08-30",
    isActive: false,
  }
];


        let filteredUsers = [...users];

        function renderTable(data) {
          const tbody = document.querySelector('.billings-table-body');
          tbody.innerHTML = "";

          if (data.length === 0) {
            tbody.innerHTML = `<tr><td colspan="8" class="text-center py-4">No data available</td></tr>`;
            return;
          }

          data.forEach((user, index) => {
            const row = `
                  <tr class="">
                    <td class="p-0">
                        <div class="border-t border-b border-l border-gray-300 px-6 py-2 text-sm text-gray-900 rounded-l-md overflow-hidden min-h-[65px] h-full flex items-center mb-4">
                          <div class="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full p-2">
                             ${index + 1}
                          </div>
                        </div>
                    </td>
                    <td class="p-0">
                        <div class="border-t border-b border-gray-300 px-6 text-sm text-gray-900 min-h-[65px] md:!w-auto !w-[200px] h-full flex flex-col justify-center mb-4">
                           <h4 class="font-bold">${user?.name}</h4>
                           <p class="text-gray-600">${user?.name}</p>
                        </div>
                    </td>
                    <td class="p-0">
                        <div class="border-t border-b border-gray-300 px-6 text-sm text-gray-900 min-h-[65px] h-full flex flex-col justify-center mb-4">
                           <a href="tel:${user?.phone}" class="font-semibold text-gray-500 hover:text-success-700"><i class="ri-phone-fill text-success-500"></i>${user?.phone}</a>
                           <a href="mailto:${user?.email}" class="text-gray-400 hover:text-orange-700 duration-200"><i class="ri-mail-line text-orange-500"></i> ${user?.email}</a>
                        </div>
                    </td>
                      <td class="p-0">
                        <div class="border-t border-b border-gray-300 px-6 text-sm text-gray-900 min-h-[65px] h-full flex flex-col justify-center mb-4">
                           <p  class="${user?.isActive ? 'text-green-600' : 'text-red-600'} duration-200"> ${user?.isActive ? 'Active' : 'Inactive'}</p>
                        </div>
                    </td>
                    <td class="p-0">
                      <div class="
                        ${user?.role === 'Admin' ? '!text-blue-500' : 'text-orange-500'}
                        ${user?.role === 'Manager' ? '!text-green-500' : 'text-orange-500'}
                        ${user?.role === 'User' ? '!text-pink-500' : 'text-orange-500'}
                        border-t border-b border-gray-300 px-6 py-2 text-sm min-h-[65px] h-full flex items-center mb-4 md:!w-auto !w-[200px]">
                        <div class="border px-2 py-1 rounded-full 
                         ${user?.role === 'Admin' ? '!border-blue-500 !bg-blue-100' : 'border-orange-500 bg-orange-50'}
                        ${user?.role === 'Manager' ? '!border-green-500 !bg-green-50' : 'border-orange-500 !bg-orange-50'}
                        ${user?.role === 'User' ? '!border-pink-500 bg-pink-50' : 'border-orange-500 bg-orange-50'}">
                           <i class="ri-user-3-fill mr-1"></i> ${user.role}
                        </div>
                      </div>
                    </td>

                     
                    <td class="p-0">
                        <div class="border-t border-b border-r border-gray-300 px-6 py-2 text-sm text-gray-900 rounded-r-md overflow-hidden min-h-[65px] h-full flex items-center mb-4">
                          <button data-modal="myModal-${user.sl}" class="duration-200 open-modal hover:bg-green-500 text-green-500 w-8 h-8 rounded hover:text-white">
                            <i class="ri-edit-box-line text-lg"></i>
                          </button>
                        </div>

                        <div id="myModal-${user.sl}" class="modal">
                        <div class="modal-content">
                          <span class="close-button hover:text-gray-700 absolute right-6 top-2">&times;</span>
                          <h1 class="text-xl font-bold">Edit User</h1>
                           <form id="editForm" class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                           <input value="${user?.name}" type="hidden" id="editIndex" />
                           <!-- Name -->
                           <div>
                             <label for="editName" class="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="editName" name="name" value="${user?.name}" required class="input-control" />
                           </div>

                           <!-- Position -->
                           <div>
                             <label for="editPosition" class="block text-sm font-medium text-gray-700">Position</label>
                             <input type="text" id="editPosition" name="position" value="${user?.position}" required class="input-control" />
                           </div>

                           <!-- Phone -->
                           <div>
                             <label for="editPhone" class="block text-sm font-medium text-gray-700">Phone</label>
                             <input type="text" id="editPhone" name="phone" required
                               class="input-control" value="${user?.phone}" />
                           </div>

                           <!-- Email -->
                           <div>
                             <label for="editEmail" class="block text-sm font-medium text-gray-700">Email</label>
                             <input type="email" id="editEmail" name="email" required
                               class="input-control" value="${user?.email}"/>
                           </div>

                           <!-- Role -->
                           <div>
                             <label for="editRole" class="block text-sm font-medium text-gray-700">Role</label>
                            <select id="editRole" name="role" required class="input-control">
                              <option value="Admin" ${user?.role === "Admin" ? "selected" : ""}>Admin</option>
                              <option value="Editor" ${user?.role === "Editor" ? "selected" : ""}>Editor</option>
                              <option value="Manager" ${user?.role === "Manager" ? "selected" : ""}>Manager</option>
                              <option value="User" ${user?.role === "User" ? "selected" : ""}>User</option>
                            </select>
                           </div>

                           <!-- Date -->
                           <div>
                             <label for="editDate" class="block text-sm font-medium text-gray-700">Date</label>
                            <input type="date" id="editDate" name="date" value="${user?.date}" required class="input-control" />
                           </div>

                           <!-- Submit Button (full width on last row) -->
                           <div class="md:col-span-2 text-right mt-4">
                             <button type="submit"
                               class="btn-success">
                               Save Changes
                             </button>
                           </div>
                          </form>
                        </div>
                      </div>
                    </td>
                </tr>
                `;
            tbody.innerHTML += row;
          }); 
        }
 
        function changePage(page) {
        
          renderTable(filteredUsers); 
        }

    let statusFilter = "active";
   function filterUsers() {
  const query = document.getElementById("billingSearch").value.toLowerCase().trim();

  filteredUsers = users.filter((user) => {
    const matchesText =
      user?.name.toLowerCase().includes(query) ||
      user?.position.toLowerCase().includes(query) ||
      user?.phone.toLowerCase().includes(query) ||
      user?.email.toLowerCase().includes(query) ||
      user?.role.toLowerCase().includes(query);

    const matchesStatus =
      statusFilter === "" ? true
      : statusFilter === "active" ? user.isActive
      : !user.isActive;

    return matchesText && matchesStatus;
  });

  currentPage = 1;
  changePage();
}



document.getElementById("billingSearch").addEventListener("input", filterUsers);

document.getElementById("filterActive").addEventListener("click", () => {
  statusFilter = "active";
  updateStatusButtons();
  filterUsers();
});

document.getElementById("filterInactive").addEventListener("click", () => {
  statusFilter = "inactive";
  updateStatusButtons();
  filterUsers();
});

function updateStatusButtons() {
  const activeBtn = document.getElementById("filterActive");
  const inactiveBtn = document.getElementById("filterInactive");

  if (statusFilter === "active") {
    activeBtn.classList.add("bg-primary-blue", "text-white");
    activeBtn.classList.remove("bg-gray-100", "text-gray-500");

    inactiveBtn.classList.remove("bg-primary-blue", "text-white");
    inactiveBtn.classList.add("bg-gray-100", "text-gray-500");
  } else {
    inactiveBtn.classList.add("bg-primary-blue", "text-white");
    inactiveBtn.classList.remove("bg-gray-100", "text-gray-500");

    activeBtn.classList.remove("bg-primary-blue", "text-white");
    activeBtn.classList.add("bg-gray-100", "text-gray-500");
  }
}

updateStatusButtons();
filterUsers();