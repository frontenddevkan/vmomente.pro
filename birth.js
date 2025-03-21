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
    const timeDifference = new Date(year, month - 1, day) - startDay;
    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Разница в днях
    const dayCycleLength = dayCycle.length; // Длина цикла (60 дней)
    const dayIndex = dayDifference % dayCycleLength;
    return dayCycle[dayIndex >= 0 ? dayIndex : dayIndex + dayCycleLength];
}

// Функция для вычисления иероглифа часа
function calculateHours(year, month, day, hour) {
    const startDate = new Date(2025, 2, 16, 15, 0, 0); // 16 марта 2025 года, 15:00:00 (начало цикла)
    const timeDifferenceHour = new Date(year, month - 1, day, hour) - startDate;
    const dayDifferenceHour = Math.floor(timeDifferenceHour / (1000 * 60 * 60 * 24)); // Разница в днях
    const twoHourIndex = Math.floor(hour / 2); // Индекс двухчасового промежутка
    const hourCycleLength = hourCycle.length; // Длина цикла (60 двухчасовых промежутков)
    const totalIndex = (dayDifferenceHour * 12 + twoHourIndex) % hourCycleLength;
    return hourCycle[totalIndex >= 0 ? totalIndex : totalIndex + hourCycleLength];
}

// Привязываем функцию к кнопке
document.getElementById('birthday-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
    calculateChineseBirthday(); // Вызываем функцию расчета
});