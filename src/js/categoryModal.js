const data  = [
    { id: 1, name: "Frontend Developer", link: "/jobs?category=frontend" },
    { id: 2, name: "Backend Developer", link: "/jobs?category=backend" },
    { id: 3, name: "Full Stack Developer", link: "/jobs?category=fullstack" },
    { id: 4, name: "Mobile App Developer", link: "/jobs?category=mobile" },
    { id: 5, name: "UI/UX Designer", link: "/jobs?category=uiux" },
    { id: 6, name: "Data Scientist", link: "/jobs?category=datascience" },
    { id: 7, name: "DevOps Engineer", link: "/jobs?category=devops" },
    { id: 8, name: "Cloud Engineer", link: "/jobs?category=cloud" },
    { id: 9, name: "Software Engineer", link: "/jobs?category=software" },
    { id: 10, name: "Database Administrator", link: "/jobs?category=dbadmin" },
    { id: 11, name: "Network Engineer", link: "/jobs?category=network" },
    { id: 12, name: "Cybersecurity Specialist", link: "/jobs?category=cybersecurity" },
    { id: 13, name: "System Administrator", link: "/jobs?category=sysadmin" },
    { id: 14, name: "Game Developer", link: "/jobs?category=game" },
    { id: 15, name: "AI/ML Engineer", link: "/jobs?category=ai-ml" },
    { id: 16, name: "Web Designer", link: "/jobs?category=webdesigner" },
    { id: 17, name: "Technical Writer", link: "/jobs?category=writer" },
    { id: 18, name: "Project Manager", link: "/jobs?category=pm" },
    { id: 19, name: "Quality Assurance Engineer", link: "/jobs?category=qa" },
    { id: 20, name: "Business Analyst", link: "/jobs?category=ba" },
    { id: 21, name: "Product Manager", link: "/jobs?category=product" },
  ];

export function openCategoryModal(category) {
    const modal = document.getElementById(`modal-${category}`);
    const list = document.getElementById(`list-${category}`);
    const modalBody = modal.querySelector('div');
    document.body.style.overflow = 'hidden';
    if (modal.classList.contains('hidden')) {
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.add('flex');
        modalBody.classList.remove('translate-y-full');
      }, 10);
    }

    if (list?.id == 'list-Job_By_Category') {
        data?.forEach(role => {
            const li = document.createElement("li");
            li.classList.add("category-list-item", "mb-2");
            li.innerHTML = `
              <a href="${role.link}" class="d-flex align-items-center">
                <i class="ri-arrow-right-s-fill"></i>
                <span class="ms-2">${role?.name}</span>
              </a>
            `;
            list.appendChild(li);
        })
    }else if (list?.id == 'list-industrial') {
        data?.forEach(role => {
            const li = document.createElement("li");
            li.classList.add("category-list-item", "mb-2");
            li.innerHTML = `
              <a href="${role.link}" class="d-flex align-items-center">
                <i class="ri-arrow-right-s-fill"></i>
                <span class="ms-2">${role?.name}</span>
              </a>
            `;
            list.appendChild(li);
        })   
    }else if (list?.id == 'list-government') {
        data?.forEach(role => {
            const li = document.createElement("li");
            li.classList.add("category-list-item", "mb-2");
            li.innerHTML = `
              <a href="${role.link}" class="d-flex align-items-center">
                <i class="ri-arrow-right-s-fill"></i>
                <span class="ms-2">${role?.name}</span>
              </a>
            `;
            list.appendChild(li);
        })
    }else if (list?.id == 'list-job_by_location') {
        data?.forEach(role => {
            const li = document.createElement("li");
            li.classList.add(" ", "mb-2");
            li.innerHTML = `
              <a href="${role.link}" class="d-flex align-items-center">
                <i class="ri-arrow-right-s-fill"></i>
                <span class="ms-2">${role?.name}</span>
              </a>
            `;
            list.appendChild(li);
        })
    }  
     



    console.log("test modal : : ", category);
  }
  
export function closeCategoryModal(modal) {
    document.body.style.overflow = '';
    const modalBody = modal.querySelector('div');
    modalBody.classList.add('translate-y-full');
    setTimeout(() => {
      modal.classList.remove('flex');
      modal.classList.add('hidden');
    }, 300);
  }
  
  export function setupCategoryModals() {
    const modals = document.querySelectorAll('.category-modal');
  
    modals.forEach(modal => {
      // Overlay ক্লিক করলে মোডাল বন্ধ
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeCategoryModal(modal);
        }
      });
  
      // Close button ক্লিক করলে মোডাল বন্ধ
      const closeBtn = modal.querySelector('.close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => closeCategoryModal(modal));
      }
    });
  }
  