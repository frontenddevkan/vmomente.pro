import { yearCycle, monthCycle, dayCycle, hourCycle } from "./chinese-calendar.js";

function calculateChineseBirthday() {
    const year = document.getElementById('year').value || new Date().getFullYear();
    const month = document.getElementById('month').value || new Date().getMonth() + 1;
    const day = document.getElementById('day').value || new Date().getDate();
    const hour = document.getElementById('hour').value || new Date().getHours();

    const birthDate = new Date(year, month - 1, day, hour);
    const chineseBirthday = getChineseDate(birthDate);

    document.getElementById('chinese-birthday').innerText = 
        `Год: ${chineseBirthday.year}, Месяц: ${chineseBirthday.month}, День: ${chineseBirthday.day}, Час: ${chineseBirthday.hours}`;
}

function getChineseDate(date) {
    
}


