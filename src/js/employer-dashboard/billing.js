    const billings = [
          {
            sl: 1,
            quotationNo: "20202038435",
            orderDate: "2023-05-06",
            service: "Standard Listing",
            amount: "3000 BDT",
            status: "Unpaid",
            invoiceNo: "234972384",
          },
          {
            sl: 2,
            quotationNo: "20202038436",
            orderDate: "2023-06-15",
            service: "General Company",
            amount: "5000 BDT",
            status: "Paid",
            invoiceNo: "234972385",
          },
          {
            sl: 3,
            quotationNo: "20202038437",
            orderDate: "2024-01-20",
            service: "Standard Listing",
            amount: "3500 BDT",
            status: "Paid",
            invoiceNo: "234972386",
          },
          {
            sl: 4,
            quotationNo: "20202038438",
            orderDate: "2024-02-10",
            service: "General Company",
            amount: "5500 BDT",
            status: "Unpaid",
            invoiceNo: "234972387",
          },
          {
            sl: 5,
            quotationNo: "20202038439",
            orderDate: "2024-03-05",
            service: "Standard Listing",
            amount: "3000 BDT",
            status: "Paid",
            invoiceNo: "234972388",
          },
           {
            sl: 6,
            quotationNo: "20202038440",
            orderDate: "2024-04-12",
            service: "General Company",
            amount: "6000 BDT",
            status: "Paid",
            invoiceNo: "234972389",
          },
           {
            sl: 7,
            quotationNo: "20202038441",
            orderDate: "2024-05-18",
            service: "Standard Listing",
            amount: "3200 BDT",
            status: "Unpaid",
            invoiceNo: "234972390",
          },
           {
            sl: 8,
            quotationNo: "20202038442",
            orderDate: "2024-06-22",
            service: "General Company",
            amount: "5800 BDT",
            status: "Paid",
            invoiceNo: "234972391",
          },
        ];

        let filteredBillings = [...billings];

        const itemsPerPage = 5;
        let currentPage = 1;

        function renderTable(data) {
          const tbody = document.querySelector('.billings-table-body');
          tbody.innerHTML = "";

          if (data.length === 0) {
            tbody.innerHTML = `<tr><td colspan="8" class="text-center py-4">No data available</td></tr>`;
            return;
          }

          data.forEach((billing) => {
            const row = `
                  <tr class="hover:bg-gray-50">
                    <td class="p-0">
                        <div class=" border-t border-b border-l border-gray-300 px-6 py-2 text-sm text-gray-900 rounded-l-md overflow-hidden min-h-[45px] h-full flex items-center mb-4">${billing.sl}</div>
                    </td>
                    <td class="p-0">
                        <div class="border border-t border-b border-gray-300 px-6 py-2 text-sm text-gray-900 min-h-[45px] h-full flex items-center mb-4">${billing.quotationNo}</div>
                    </td>
                   <td class="p-0">
  <div class="border-t border-b border-gray-300 px-6 py-2 text-sm text-gray-900 min-h-[45px] h-full flex items-center mb-4 overflow-hidden whitespace-nowrap text-ellipsis">
    ${new Date(billing.orderDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
  </div>
</td>

                    <td class="p-0">
                        <div class="border-t border-b border-gray-300 px-6 py-2 text-sm text-gray-900 min-h-[45px] h-full flex items-center mb-4 overflow-hidden whitespace-nowrap text-ellipsis">${billing.service}</div>
                    </td>
                    <td class="p-0">
                        <div class="border-t border-b border-gray-300 px-6 py-2 text-sm text-gray-900 min-h-[45px] h-full flex items-center mb-4">${billing.amount}</div>
                    </td>
                    <td class="p-0">
                        <div class="border-t border-b border-gray-300 px-6 py-2 text-sm min-h-[45px] h-full flex items-center mb-4 ${billing.status === 'Paid' ? 'text-green-600' : 'text-red-600'}">${billing.status}</div>
                    </td>
                    <td class="p-0">
                        <div class="border-t border-b border-gray-300 px-6 py-2 text-sm text-gray-900 min-h-[45px] h-full flex items-center mb-4">${billing.invoiceNo}</div>
                    </td>
                    <td class="p-0">
                        <div class="border-t border-b border-r rounded-r-md  border-gray-300 px-6 py-1 text-sm text-gray-900 min-h-[45px] h-full flex items-center mb-4 overflow-hidden whitespace-nowrap text-ellipsis">
                            ${billing.status === 'Unpaid' ?
                                '<button class="bg-success-500 hover:bg-success-600 duration-200 text-white px-4 rounded font-semibold !py-1">Go for payment</button>' :
                                `<button class="download-invoice-btn text-success-500 hover:bg-success-600 hover:text-white duration-200 px-4 rounded font-semibold !py-1" data-invoice-no="${billing.invoiceNo}"><i class="ri-download-line"></i> Invoice</button>
                                 <button class="text-success-500 hover:bg-success-600 hover:text-white duration-200 px-4 rounded font-semibold !py-1"><i class="ri-download-line"></i> Mushok</button>`
                            }
                        </div>
                    </td>
                </tr>
                `;
            tbody.innerHTML += row;
          });

          document.querySelectorAll('.download-invoice-btn').forEach(button => {
              button.addEventListener('click', (e) => {
                  const invoiceNo = e.currentTarget.getAttribute('data-invoice-no');
                  const billingData = billings.find(b => b.invoiceNo === invoiceNo);
                  if (billingData) {
                      showInvoiceModal(billingData);
                  }
              });
          });
        }

        document.getElementById("exportExcelBtn").addEventListener("click", () => {
          const exportData = filteredBillings.map(billing => ({
            "SL": billing.sl,
            "Quotation No": billing.quotationNo,
            "Order Date": billing.orderDate,
            "Service": billing.service,
            "Amount": billing.amount,
            "Status": billing.status,
            "Invoice No": billing.invoiceNo
          }));

          const worksheet = XLSX.utils.json_to_sheet(exportData);
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, "Billings");
          XLSX.writeFile(workbook, "billings.xlsx");
        });

        function renderPagination(totalItems) {
          const pagination = document.querySelector(".pagination-wrapper");
          const totalPages = Math.ceil(totalItems / itemsPerPage);
          pagination.innerHTML = "";

          if (totalPages <= 1) return;

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
            const start = Math.max(2, currentPage - 2);
            const end = Math.min(totalPages - 1, currentPage + 2);

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
          const totalPages = Math.ceil(filteredBillings.length / itemsPerPage);
          if (page < 1 || page > totalPages) return;

          currentPage = page;
          const start = (page - 1) * itemsPerPage;
          const end = start + itemsPerPage;
          const pageItems = filteredBillings.slice(start, end);

          renderTable(pageItems);
          renderPagination(filteredBillings.length);
        }

        function filterBillings() {
          const query = document.getElementById("billingSearch").value.toLowerCase().trim();
          const service = document.getElementById("serviceFilter").value;
          const status = document.getElementById("statusFilter").value;
          const dateRange = document.getElementById("dateFilter").value;

          filteredBillings = billings.filter((billing) => {
            const matchesSearch =
              billing.quotationNo.toLowerCase().includes(query) ||
              billing.service.toLowerCase().includes(query) ||
              billing.invoiceNo.toLowerCase().includes(query);

            const matchesService = service ? billing.service === service : true;
            const matchesStatus = status ? billing.status === status : true;

            const billingDate = new Date(billing.orderDate);
            const now = new Date();
            let matchesDate = true;

            if (dateRange === "last30") {
              const last30 = new Date();
              last30.setDate(now.getDate() - 30);
              matchesDate = billingDate >= last30;
            } else if (dateRange === "last90") {
              const last90 = new Date();
              last90.setDate(now.getDate() - 90);
              matchesDate = billingDate >= last90;
            } else if (dateRange === "2023") {
              matchesDate = billingDate.getFullYear() === 2023;
            } else if (dateRange === "2024") {
              matchesDate = billingDate.getFullYear() === 2024;
            }


            return matchesSearch && matchesService && matchesStatus && matchesDate;
          });

          currentPage = 1;
          changePage(currentPage);
        }

        function showInvoiceModal(data) {
            const invoiceModal = document.getElementById('invoiceModal');
            const modalContent = invoiceModal.querySelector('.modal-content');
            const invoiceContent = document.getElementById('invoiceContent');

            invoiceContent.innerHTML = `
                <table>
                    <tr class="top">
                        <td colspan="2">
                            <table>
                                <tr>
                                    <td class="title">
                                        <img src="/src/image/logo_dark.png" style="width:100%; max-width:200px;">
                                    </td>
                                    <td>
                                        Invoice #: ${data.invoiceNo}<br>
                                        Created: ${new Date(data.orderDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}<br>
                                        Due: ${new Date(new Date(data.orderDate).setDate(new Date(data.orderDate).getDate() + 30)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr class="information">
                        <td colspan="2">
                            <table>
                                <tr>
                                    <td>
                                        Kalbela Jobs, Inc.<br>
                                        12345 Sunny Road<br>
                                        Dhaka, BD 12345
                                    </td>
                                    <td>
                                        Acme Corp.<br>
                                        John Doe<br>
                                        john.doe@example.com
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr class="heading">
                        <td>
                            Payment Method
                        </td>
                        <td>
                            Card #
                        </td>
                    </tr>
                    <tr class="details">
                        <td>
                            Visa
                        </td>
                        <td>
                            **** **** **** 1234
                        </td>
                    </tr>
                    <tr class="heading">
                        <td>
                            Service
                        </td>
                        <td>
                            Price
                        </td>
                    </tr>
                    <tr class="item">
                        <td>
                            ${data.service}
                        </td>
                        <td>
                            ${data.amount}
                        </td>
                    </tr>
                    <tr class="total">
                        <td></td>
                        <td>
                           Total: ${data.amount}
                        </td>
                    </tr>
                </table>
            `;

            invoiceModal.classList.remove('hidden');
            modalContent.classList.remove('hidden');

            document.getElementById('downloadInvoiceBtn').onclick = () => {
                const element = document.getElementById('invoiceContent');
                const opt = {
                    margin:       0.5,
                    filename:     `invoice-${data.invoiceNo}.pdf`,
                    image:        { type: 'jpeg', quality: 0.98 },
                    html2canvas:  { scale: 2 },
                    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
                };
                html2pdf().set(opt).from(element).save();
            };
        }

        document.querySelector('.close-invoice-btn').addEventListener('click', () => {
            const invoiceModal = document.getElementById('invoiceModal');
            const modalContent = invoiceModal.querySelector('.modal-content');
            invoiceModal.classList.add('hidden');
            modalContent.classList.add('hidden');
        });

        document.getElementById("billingSearch").addEventListener("input", filterBillings);
        document.getElementById("serviceFilter").addEventListener("change", filterBillings);
        document.getElementById("statusFilter").addEventListener("change", filterBillings);
        document.getElementById("dateFilter").addEventListener("change", filterBillings);

        changePage(1);