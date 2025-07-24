class BengaliCalendar {
    constructor() {
        this.currentDate = new Date();
        this.today = new Date();
        this.selectedDate = null;
        
        // Exam data with specific dates
        this.examEvents = [
            {
                title: 'প্রাথমিক শিক্ষক নিয়োগ',
                start: new Date(2025, 5, 1), // June 1, 2025
                end: new Date(2025, 5, 5),   // June 5, 2025
                status: 'expired',
                description: 'প্রাথমিক বিদ্যালয়ের সহায়ক শিক্ষক নিয়োগ পরীক্ষা',
                time: 'সকাল ১০:০০ টা'
            },
            {
                title: 'বিসিএস প্রিলিমিনারি',
                start: new Date(2025, 5, 8),  // June 8, 2025
                end: new Date(2025, 5, 17),   // June 17, 2025
                status: 'active',
                description: 'বাংলাদেশ সিভিল সার্ভিস প্রিলিমিনারি পরীক্ষা',
                time: 'সকাল ৯:০০ টা'
            },
            {
                title: 'ব্যাংক জব পরীক্ষা',
                start: new Date(2025, 5, 22), // June 22, 2025
                end: new Date(2025, 5, 28),   // June 28, 2025
                status: 'active',
                description: 'বিভিন্ন ব্যাংকের নিয়োগ পরীক্ষা',
                time: 'বিকাল ২:০০ টা'
            },
            {
                title: 'শিক্ষক নিবন্ধন',
                start: new Date(2025, 6, 6),  // July 6, 2025
                end: new Date(2025, 6, 12),   // July 12, 2025
                status: 'active',
                description: 'শিক্ষক নিবন্ধন ও প্রত্যয়ন কর্তৃপক্ষ (NTRCA) পরীক্ষা',
                time: 'সকাল ১০:৩০ টা'
            }
        ];
        
        this.monthNames = [
            'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
            'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
        ];
        
        this.dayNames = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];
        
        // Bengali numerals
        this.bengaliNumerals = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.render();
    }
    
    bindEvents() {
        document.getElementById('prevMonth').addEventListener('click', () => {
            this.currentDate.setMonth(this.currentDate.getMonth() - 1);
            this.render();
        });
        
        document.getElementById('nextMonth').addEventListener('click', () => {
            this.currentDate.setMonth(this.currentDate.getMonth() + 1);
            this.render();
        });
        
        document.getElementById('todayBtn').addEventListener('click', () => {
            this.currentDate = new Date();
            this.render();
        });
    }
    
    // Convert English numbers to Bengali
    toBengaliNumber(num) {
        return num.toString().split('').map(digit => this.bengaliNumerals[parseInt(digit)]).join('');
    }
    
    // Format date in Bengali
    formatBengaliDate(date) {
        const day = this.toBengaliNumber(date.getDate());
        const month = this.monthNames[date.getMonth()];
        const year = this.toBengaliNumber(date.getFullYear());
        return `${day} ${month}, ${year}`;
    }
    
    render() {
        this.renderHeader();
        this.renderCalendar();
    }
    
    renderHeader() {
        const monthYear = `${this.monthNames[this.currentDate.getMonth()]} ${this.toBengaliNumber(this.currentDate.getFullYear())}`;
        document.getElementById('currentMonth').textContent = monthYear;
    }
    
    renderCalendar() {
        const calendarBody = document.getElementById('calendarBody');
        calendarBody.innerHTML = '';
        
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();
        
        const prevMonth = new Date(year, month - 1, 0);
        const daysInPrevMonth = prevMonth.getDate();
        
        let date = 1;
        let nextMonthDate = 1;
        
        // Create 6 rows for the calendar
        for (let week = 0; week < 6; week++) {
            const row = document.createElement('tr');
            
            // Create 7 days for each week
            for (let day = 0; day < 7; day++) {
                const cell = document.createElement('td');
                cell.className = 'calendar-cell';
                
                const cellIndex = week * 7 + day;
                
                if (cellIndex < startingDayOfWeek) {
                    // Previous month days
                    const prevDate = daysInPrevMonth - (startingDayOfWeek - cellIndex - 1);
                    cell.textContent = this.toBengaliNumber(prevDate);
                    cell.classList.add('other-month');
                    
                } else if (date <= daysInMonth) {
                    // Current month days
                    cell.textContent = this.toBengaliNumber(date);
                    const currentCellDate = new Date(year, month, date);
                    
                    // Check if it's today
                    if (this.isSameDay(currentCellDate, this.today)) {
                        cell.classList.add('today');
                        // Ensure today styling takes precedence over exam styling
                        cell.style.backgroundColor = '#2563eb';
                        cell.style.color = 'white';
                        cell.style.fontWeight = 'bold';
                        cell.style.border = '2px solid #1d4ed8';
                    }
                    
                    // Check for exams on this date
                    const examsOnDate = this.getExamsOnDate(currentCellDate);
                    if (examsOnDate.length > 0) {
                        const hasExpired = examsOnDate.some(exam => exam.status === 'expired');
                        const hasActive = examsOnDate.some(exam => exam.status === 'active');
                        
                        if (hasExpired && !hasActive) {
                            cell.classList.add('expired-exam');
                        } else {
                            cell.classList.add('exam-day');
                        }
                        
                        // Add exam indicator
                        const indicator = document.createElement('div');
                        indicator.className = 'exam-indicator';
                        cell.appendChild(indicator);
                    }
                    
                    // Add click event
                    cell.addEventListener('click', () => {
                        this.selectDate(currentCellDate, cell);
                    });
                    
                    date++;
                    
                } else {
                    // Next month days
                    cell.textContent = this.toBengaliNumber(nextMonthDate);
                    cell.classList.add('other-month');
                    nextMonthDate++;
                }
                
                row.appendChild(cell);
            }
            
            calendarBody.appendChild(row);
            
            // Break if we've filled all days and don't need more rows
            if (date > daysInMonth && week >= 4) {
                break;
            }
        }
    }
    
    selectDate(date, cellElement) {
        // Remove previous selection
        const prevSelected = document.querySelector('.selected-date');
        if (prevSelected) {
            prevSelected.classList.remove('selected-date');
        }
        
        // Add selection to clicked cell
        cellElement.classList.add('selected-date');
        this.selectedDate = date;
        
        // Update date info panel
        this.updateDateInfo(date);
    }
    
    updateDateInfo(date) {
        // Update date information
        document.getElementById('selectedDateEng').textContent = date.toLocaleDateString('en-GB');
        document.getElementById('selectedDateBn').textContent = this.formatBengaliDate(date);
        document.getElementById('selectedDay').textContent = this.dayNames[date.getDay()];
        
        // Get exams for this date
        const examsOnDate = this.getExamsOnDate(date);
        const examList = document.getElementById('examList');
        
        // Add visual feedback
        const panel = document.getElementById('dateInfoPanel');
        panel.classList.add('date-info-updated');
        setTimeout(() => {
            panel.classList.remove('date-info-updated');
        }, 300);
        
        if (examsOnDate.length > 0) {
            examList.innerHTML = '';
            examsOnDate.forEach((exam, index) => {
                const examDiv = document.createElement('div');
                examDiv.className = `p-3 rounded-lg text-sm mb-2 ${exam.status === 'expired' ? 'bg-red-50 border-l-4 border-red-500' : 'bg-green-50 border-l-4 border-green-500'}`;
                
                examDiv.innerHTML = `
                    <div class="flex items-center justify-between mb-2">
                        <div class="font-medium ${exam.status === 'expired' ? 'text-red-800' : 'text-green-800'}">${exam.title}</div>
                        <span class="text-xs px-2 py-1 rounded ${exam.status === 'expired' ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'}">
                            ${exam.status === 'expired' ? 'সমাপ্ত' : 'চলমান'}
                        </span>
                    </div>
                    <div class="text-xs ${exam.status === 'expired' ? 'text-red-600' : 'text-green-600'} mb-1">${exam.description}</div>
                    <div class="text-xs ${exam.status === 'expired' ? 'text-red-500' : 'text-green-500'} mb-1">
                        <strong>সময়:</strong> ${exam.time}
                    </div>
                    <div class="text-xs ${exam.status === 'expired' ? 'text-red-500' : 'text-green-500'}">
                        <strong>মেয়াদ:</strong> ${this.formatBengaliDate(exam.start)} - ${this.formatBengaliDate(exam.end)}
                    </div>
                `;
                
                examList.appendChild(examDiv);
            });
        } else {
            examList.innerHTML = `
                <div class="text-center py-6">
                    <div class="text-gray-400 text-4xl mb-2">📅</div>
                    <p class="text-sm text-gray-500">এই দিনে কোন পরীক্ষা নেই</p>
                    <p class="text-xs text-gray-400 mt-1">অন্য তারিখ নির্বাচন করুন</p>
                </div>
            `;
        }
    }
    
    getExamsOnDate(date) {
        return this.examEvents.filter(exam => {
            return date >= exam.start && date <= exam.end;
        });
    }
    
    isSameDay(date1, date2) {
        return date1.getDate() === date2.getDate() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getFullYear() === date2.getFullYear();
    }
}

// Initialize calendar when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BengaliCalendar();
});