

// 1. Создаем массив, который содержит все возможные комбинации годов
const yearCycle = [
    "乙巳", "丙午", "丁未", "戊申", "己酉", "庚戌", "辛亥", "壬子", "癸丑",
    "甲寅", "乙卯", "丙辰", "丁巳", "戊午", "己未", "庚申", "辛酉", "壬戌", "癸亥", "甲子", "乙丑", "丙寅", "丁卯", "戊辰", "己巳", "庚午", "辛未", "壬申", "癸酉",
    "甲戌", "乙亥", "丙子", "丁丑", "戊寅", "己卯", "庚辰", "辛巳", "壬午", "癸未",
    "甲申", "乙酉", "丙戌", "丁亥", "戊子", "己丑", "庚寅", "辛卯", "壬辰", "癸巳",
    "甲午", "乙未", "丙申", "丁酉", "戊戌", "己亥", "庚子", "辛丑", "壬寅", "癸卯",
    "甲辰"
];

function getChineseDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();


    // потом надо будет сюда расчеты добавить символы китайские
    
    // const chineseDay = "день"; 
    // const chineseMonth = "мес"; 
    // const chineseHours ="час"; 
    // const chineseYear = "год"; 
    // const chineseMinutes = "мин";
    // const chineseSeconds = "сек";

    
    // 2. Получаем текущий год
    const currentDate = new Date(); // Создаем объект Date, который содержит текущую дату
    const currentYear = currentDate.getFullYear(); // Получаем текущий год
    
    // 3. Определяем начальный год цикла
    const startYear = 2025; // Начальный год, с которого начинается цикл
    
    // 4. Вычисляем индекс текущего года в массиве yearCycle
    const cycleLength = yearCycle.length; // Длина цикла (60 лет)
    const yearIndex = (currentYear - startYear) % cycleLength; // Вычисляем индекс
    
    // 5. Получаем соответствующий год из массива
    const currentYearInCycle = yearCycle[yearIndex];
    
    const characterYear = currentYearInCycle;

   // 2. Получаем текущий месяц
   
   const startYear = 
    const characterMonth = yearCycle[(month - 1) % 12];
    const characterDay = yearCycle[(day - 1) % 29];
    const characterHours = yearCycle[(hours - 1) % 24];


return {
    year: year + " - " + characterYear,
    month: month + " - " + characterMonth,
    day: day + " - " + characterDay,
    hours: hours + " - " + characterHours,
    minutes:  minutes,
    seconds: seconds

};

}

function updateChineseCalendar() {
    const chineseDate = getChineseDate();
    const calendarElement = document.getElementById('chinese-calendar');
    
    if (calendarElement) {
        calendarElement.innerHTML = 
        `<p>Год: ${chineseDate.year}</p>
        <p>Месяц: ${chineseDate.month}</p>
        <p>День: ${chineseDate.day}</p>
        <p>Час: ${chineseDate.hours}</p>
        <p>Минут: ${chineseDate.minutes}</p>
        <p>Секунд: ${chineseDate.seconds}</p>
      `;

    }
}

// обновлям календарь каждую минуту

setInterval(updateChineseCalendar, 1000);

// инициализация при загрузке страницы

document.addEventListener('DOMContentLoaded', updateChineseCalendar);



