import { yearCycle, monthCycle, dayCycle } from "./chinese-calendar.js";

// Объект с Звездами Советника
const advisorStars = {
    "甲": "酉 (Петух)",
    "乙": "戌 (Собака)",
    "丙": "子 (Крыса)",
    "丁": "丑 (Бык)",
    "戊": "子 (Крыса)",
    "己": "丑 (Бык)",
    "庚": "卯 (Кролик)",
    "辛": "辰 (Дракон)",
    "壬": "午 (Лошадь)",
    "癸": "未 (Коза)"
};

// Основная функция расчета
function calculateChineseBirthday() {
    // Получаем значения из полей (могут быть пустыми)
    const yearInput = document.getElementById('year');
    const monthInput = document.getElementById('month');
    const dayInput = document.getElementById('day');
    const hourInput = document.getElementById('hour');

    // Очищаем предыдущие результаты
    document.getElementById('year-characters').textContent = '';
    document.getElementById('month-characters').textContent = '';
    document.getElementById('day-characters').textContent = '';
    document.getElementById('hour-characters').textContent = '';
    document.getElementById('advisor-star').style.display = 'none';
    document.getElementById('personal-dagua-info').style.display = 'none';

    // Рассчитываем только заполненные поля
    let characterYear, characterMonth, characterDay, characterHours;

    if (yearInput.value) {
        const year = parseInt(yearInput.value);
        if (!isNaN(year)) {
            characterYear = calculateYear(year);
            document.getElementById('year-characters').textContent = `Год: ${characterYear}`;
        }
    }

    if (monthInput.value && yearInput.value) {
        const month = parseInt(monthInput.value);
        const year = parseInt(yearInput.value);
        if (!isNaN(month) && !isNaN(year)) {
            characterMonth = calculateMonth(year, month);
            document.getElementById('month-characters').textContent = `Месяц: ${characterMonth}`;
        }
    }

    if (dayInput.value && monthInput.value && yearInput.value) {
        const day = parseInt(dayInput.value);
        const month = parseInt(monthInput.value);
        const year = parseInt(yearInput.value);
        if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
            characterDay = calculateDay(year, month, day);
            document.getElementById('day-characters').textContent = `День: ${characterDay}`;
            
            // Показываем Звезду Советника если есть день
            showAdvisorStar(characterDay);
        }
    }

    if (hourInput.value && dayInput.value && monthInput.value && yearInput.value) {
        const hour = parseInt(hourInput.value);
        const day = parseInt(dayInput.value);
        const month = parseInt(monthInput.value);
        const year = parseInt(yearInput.value);
        if (!isNaN(hour)) {
            characterHours = calculateHours(year, month, day, hour);
            document.getElementById('hour-characters').textContent = `Час: ${characterHours}`;
        }
    }

    // Проверяем благоприятные дни если есть год
    if (characterYear) {
        checkFavorableDays(characterYear);
    }
}

// Функция показа Звезды Советника
function showAdvisorStar(dayPillar) {
    if (!dayPillar) return;
    
    const dayStem = dayPillar[0]; // Первый иероглиф - Небесный Ствол
    const starSymbol = advisorStars[dayStem];
    
    if (starSymbol) {
        document.getElementById('star-symbol').textContent = starSymbol;
        document.getElementById('advisor-star').style.display = 'block';
    }
}

// Функция проверки благоприятных дней
function checkFavorableDays(characterYear) {
    const daguaHealth = document.getElementById('dagua-health')?.textContent.split(', ') || [];
    const daguaRelationships = document.getElementById('dagua-relationships')?.textContent.split(', ') || [];
    const daguaQuickly = document.getElementById('dagua-quickly')?.textContent.split(', ') || [];
    const daguaHelp = document.getElementById('dagua-help')?.textContent.split(', ') || [];
    const daguaJob = document.getElementById('dagua-job')?.textContent.split(', ') || [];
    
    const personalInfo = document.getElementById('personal-dagua-info');
    personalInfo.style.display = 'block';
    
    // Скрываем все подразделы сначала
    document.getElementById('personal-health').style.display = 'none';
    document.getElementById('personal-relationships').style.display = 'none';
    document.getElementById('personal-quickly').style.display = 'none';
    document.getElementById('personal-help').style.display = 'none';
    document.getElementById('personal-job').style.display = 'none';
    
    // Проверяем совпадения
    if (daguaHealth.includes(characterYear)) {
        document.getElementById('personal-health').style.display = 'block';
    }
    if (daguaRelationships.includes(characterYear)) {
        document.getElementById('personal-relationships').style.display = 'block';
    }
    if (daguaQuickly.includes(characterYear)) {
        document.getElementById('personal-quickly').style.display = 'block';
    }
    if (daguaHelp.includes(characterYear)) {
        document.getElementById('personal-help').style.display = 'block';
    }
    if (daguaJob.includes(characterYear)) {
        document.getElementById('personal-job').style.display = 'block';
    }
    
    // Если нет совпадений
    if (!daguaHealth.includes(characterYear) && 
        !daguaRelationships.includes(characterYear) && 
        !daguaQuickly.includes(characterYear) && 
        !daguaHelp.includes(characterYear) && 
        !daguaJob.includes(characterYear)) {
        personalInfo.innerHTML = '<h4>Сегодня нет специальных рекомендаций для вашего года рождения</h4>';
    }
}

// Оригинальные функции расчета (без изменений)
function calculateYear(year) {
    const startYear = 2025;
    const cycleLength = yearCycle.length;
    const yearIndex = (year - startYear) % cycleLength;
    return yearCycle[yearIndex >= 0 ? yearIndex : yearIndex + cycleLength];
}

function calculateMonth(year, month) {
    const startMonth = new Date(2025, 2, 4);
    const monthDifference = (year - startMonth.getFullYear()) * 12 + (month - startMonth.getMonth() - 1);
    const cycleLengthMonth = monthCycle.length;
    const monthIndex = monthDifference % cycleLengthMonth;
    return monthCycle[monthIndex >= 0 ? monthIndex : monthIndex + cycleLengthMonth];
}

function calculateDay(year, month, day) {
    const startDay = new Date(2025, 2, 15, 23, 0, 0);
    const currentDate = new Date(year, month - 1, day);
    const timeDifference = currentDate - startDay;
    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const dayCycleLength = dayCycle.length;
    const dayIndex = (dayDifference % dayCycleLength + dayCycleLength) % dayCycleLength;
    return dayCycle[dayIndex];
}

function calculateHours(year, month, day, hour) {
    const dayPillar = calculateDay(year, month, day);
    const hourBranches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
    const hourBranchIndex = Math.floor((hour + 1) / 2) % 12;
    const hourBranch = hourBranches[hourBranchIndex];
    const stems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
    const dayStem = dayPillar[0];
    const startStems = {
        "甲": "甲", "乙": "丙", "丙": "戊", "丁": "庚", 
        "戊": "壬", "己": "甲", "庚": "丙", "辛": "戊", 
        "壬": "庚", "癸": "壬"
    };
    const startIndex = stems.indexOf(startStems[dayStem]);
    const hourStemIndex = (startIndex + hourBranchIndex) % 10;
    const hourStem = stems[hourStemIndex];
    return hourStem + hourBranch;
}

// Инициализация формы
document.getElementById('birthday-form').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateChineseBirthday();
});