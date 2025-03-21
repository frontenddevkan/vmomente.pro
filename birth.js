import { yearCycle, monthCycle, dayCycle, hourCycle, getChineseDate } from "./chinese-calendar.js";

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
    // Используем переданную дату `date` вместо создания новой
    const currentYear = date.getFullYear(); // Получаем год из переданной даты
    const currentMonth = date.getMonth() + 1; // Получаем месяц из переданной даты
    const currentDay = date.getDate(); // Получаем день из переданной даты
    const currentHour = date.getHours(); // Получаем час из переданной даты

    // Вычисляем иероглифы для года, месяца, дня и часа
    const characterYear = calculateYear(currentYear);
    const characterMonth = calculateMonth(currentYear, currentMonth);
    const characterDay = calculateDay(currentYear, currentMonth, currentDay);
    const characterHours = calculateHours(currentYear, currentMonth, currentDay, currentHour);

    // Возвращаем объект с результатами
    return {
        year: `${currentYear} - ${characterYear} - ДАГУА ГОДА: ${getDaguaValue(characterYear)}`,
        month: `${getMonthName(currentMonth)} - ${characterMonth} - ДАГУА МЕСЯЦА: ${getDaguaValue(characterMonth)}`,
        day: `${currentDay} - ${characterDay} - ДАГУА ДНЯ: ${getDaguaValue(characterDay)}`,
        hours: `${currentHour} - ${characterHours} - ДАГУА ЧАСА: ${getDaguaValue(characterHours)}`,
    };
}

// Вспомогательные функции для вычисления иероглифов
function calculateYear(year) {
    const startYear = 2025;
    const cycleLength = yearCycle.length;
    const yearIndex = (year - startYear) % cycleLength;
    return yearCycle[yearIndex];
}

function calculateMonth(year, month) {
    const startMonth = new Date(2025, 2, 4); // 4 марта 2025 года
    const monthDifference = (year - startMonth.getFullYear()) * 12 + (month - startMonth.getMonth());
    const cycleLengthMonth = monthCycle.length;
    const monthIndex = monthDifference % cycleLengthMonth;
    return monthCycle[monthIndex];
}

function calculateDay(year, month, day) {
    const startDay = new Date(2025, 2, 15, 23, 0, 0); // 15 марта 2025 года, 23:00:00
    const timeDifference = new Date(year, month - 1, day) - startDay;
    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const dayCycleLength = dayCycle.length;
    const dayIndex = dayDifference % dayCycleLength;
    return dayCycle[dayIndex];
}

function calculateHours(year, month, day, hour) {
    const startDate = new Date(2025, 2, 16, 15, 0, 0); // 16 марта 2025 года, 15:00:00
    const timeDifferenceHour = new Date(year, month - 1, day, hour) - startDate;
    const dayDifferenceHour = Math.floor(timeDifferenceHour / (1000 * 60 * 60 * 24));
    const twoHourIndex = Math.floor(hour / 2); // Упрощенный расчет индекса двухчасового промежутка
    const hourCycleLength = hourCycle.length;
    const totalIndex = (dayDifferenceHour * 12 + twoHourIndex) % hourCycleLength;
    return hourCycle[totalIndex];
}

// Вспомогательная функция для получения названия месяца
function getMonthName(month) {
    const monthWords = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    return monthWords[month - 1];
}
