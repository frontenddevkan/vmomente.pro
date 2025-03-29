import { yearCycle, monthCycle, dayCycle, hourCycle } from "./chinese-calendar.js";

function calculateChineseBirthday() {
    // Получаем значения из полей ввода
    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('month').value);
    const day = parseInt(document.getElementById('day').value);
    const hour = parseInt(document.getElementById('hour').value);

    // Проверяем, что все поля заполнены
    if (isNaN(year) || isNaN(month) || isNaN(day) || isNaN(hour)) {
        alert("Пожалуйста, заполните все поля корректно.");
        return;
    }

    // Вычисляем иероглифы для года, месяца, дня и часа
    const characterYear = calculateYear(year);
    const characterMonth = calculateMonth(year, month);
    const characterDay = calculateDay(year, month, day);
    const characterHours = calculateHours(year, month, day, hour);

    // Выводим иероглифы на страницу
    document.getElementById('year-characters').innerText = `Год: ${characterYear}`;
    document.getElementById('month-characters').innerText = `Месяц: ${characterMonth}`;
    document.getElementById('day-characters').innerText = `День: ${characterDay}`;
    document.getElementById('hour-characters').innerText = `Час: ${characterHours}`;
    
    // Проверяем благоприятные дни
    checkFavorableDays(characterYear);


}

// Функция для вычисления иероглифа года
function calculateYear(year) {
    const startYear = 2025; // Начальный год цикла
    const cycleLength = yearCycle.length; // Длина цикла (60 лет)
    const yearIndex = (year - startYear) % cycleLength;
    return yearCycle[yearIndex >= 0 ? yearIndex : yearIndex + cycleLength];
}

// Функция для вычисления иероглифа месяца
function calculateMonth(year, month) {
    const startMonth = new Date(2025, 2, 4); // 4 марта 2025 года (начало цикла)
    const monthDifference = (year - startMonth.getFullYear()) * 12 + (month - startMonth.getMonth() - 1);
    const cycleLengthMonth = monthCycle.length; // Длина цикла (60 месяцев)
    const monthIndex = monthDifference % cycleLengthMonth;
    return monthCycle[monthIndex >= 0 ? monthIndex : monthIndex + cycleLengthMonth];
}

// Функция для вычисления иероглифа дня
function calculateDay(year, month, day) {
    const startDay = new Date(2025, 2, 15, 23, 0, 0); // 15 марта 2025 года, 23:00:00 (начало цикла)
    const currentDate = new Date(year, month - 1, day);

    // Разница в миллисекундах между текущей датой и начальной датой
    const timeDifference = currentDate - startDay;

    // Разница в днях
    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Индекс дня в массиве dayCycle
    const dayCycleLength = dayCycle.length; // Длина цикла (60 дней)
    const dayIndex = (dayDifference % dayCycleLength + dayCycleLength) % dayCycleLength;

    return dayCycle[dayIndex];
}

// Функция для вычисления иероглифа часа// Функция для вычисления иероглифа часа (исправленная версия)
function calculateHours(year, month, day, hour) {
    // Сначала получаем дневной столп
    const dayPillar = calculateDay(year, month, day);
    
    // Определяем земную ветвь часа (двухчасовой промежуток)
    const hourBranches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
    const hourBranchIndex = Math.floor((hour + 1) / 2) % 12;
    const hourBranch = hourBranches[hourBranchIndex];
    
    // Определяем небесный ствол часа по правилу 五鼠遁
    const stems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
    const dayStem = dayPillar[0]; // Первый иероглиф дневного столпа
    
    // Правило 五鼠遁 для определения ствола часа
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

// Привязываем функцию к кнопке
document.getElementById('birthday-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
    calculateChineseBirthday(); // Вызываем функцию расчета
});

function checkFavorableDays(characterYear) {
    // Получаем текущие благоприятные дни с главной страницы
    const daguaHealth = document.getElementById('dagua-health')?.textContent.split(', ') || [];
    const daguaRelationships = document.getElementById('dagua-relationships')?.textContent.split(', ') || [];
    const daguaQuickly = document.getElementById('dagua-quickly')?.textContent.split(', ') || [];
    const daguaHelp = document.getElementById('dagua-help')?.textContent.split(', ') || [];
    const daguaJob = document.getElementById('dagua-job')?.textContent.split(', ') || [];
    
    // Показываем блок с информацией
    const personalInfo = document.getElementById('personal-dagua-info');
    personalInfo.style.display = 'block';
    
    // Скрываем все подразделы сначала
    document.getElementById('personal-health').style.display = 'none';
    document.getElementById('personal-relationships').style.display = 'none';
    document.getElementById('personal-quickly').style.display = 'none';
    document.getElementById('personal-help').style.display = 'none';
    document.getElementById('personal-job').style.display = 'none';
    
    // Проверяем совпадения и показываем соответствующие подразделы
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
    
    // Если нет совпадений, показываем сообщение
    if (!daguaHealth.includes(characterYear) && 
        !daguaRelationships.includes(characterYear) && 
        !daguaQuickly.includes(characterYear) && 
        !daguaHelp.includes(characterYear) && 
        !daguaJob.includes(characterYear)) {
        personalInfo.innerHTML = '<h4>Сегодня нет специальных рекомендаций для вашего года рождения</h4>';
    }
}

