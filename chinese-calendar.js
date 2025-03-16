



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

    // 1. Создаем массив, который содержит все возможные комбинации годов
const yearCycle = [
    "乙巳", "丙午", "丁未", "戊申", "己酉", "庚戌", "辛亥", "壬子", "癸丑",
    "甲寅", "乙卯", "丙辰", "丁巳", "戊午", "己未", "庚申", "辛酉", "壬戌", "癸亥", "甲子", 
    "乙丑", "丙寅", "丁卯", "戊辰", "己巳", "庚午", "辛未", "壬申", "癸酉",
    "甲戌", "乙亥", "丙子", "丁丑", "戊寅", "己卯", "庚辰", "辛巳", "壬午", "癸未",
    "甲申", "乙酉", "丙戌", "丁亥", "戊子", "己丑", "庚寅", "辛卯", "壬辰", "癸巳",
    "甲午", "乙未", "丙申", "丁酉", "戊戌", "己亥", "庚子", "辛丑", "壬寅", "癸卯",
    "甲辰"
];


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


   
   const monthCycle = [
    "己卯", "庚辰", "辛巳", "壬午", "癸未", "甲申", "乙酉", "丙戌", "丁亥", "戊子",
    "己丑", "庚寅", "辛卯", "壬辰", "癸巳", "甲午", "乙未", "丙申", "丁酉", "戊戌",
    "己亥", "庚子", "辛丑", "壬寅", "癸卯", "甲辰", "乙巳", "丙午", "丁未", "戊申",
    "己酉", "庚戌", "辛亥", "壬子", "癸丑", "甲寅", "乙卯", "丙辰", "丁巳", "戊午",
    "己未", "庚申", "辛酉", "壬戌", "癸亥", "甲子", "乙丑", "丙寅", "丁卯", "戊辰",
    "己巳", "庚午", "辛未", "壬申", "癸酉", "甲戌", "乙亥", "丙子", "丁丑", "戊寅"
  ];
   
  const currentMonth = currentDate.getMonth(); // Получаем текущий месяц (от 0 до 11)

// 3. Определяем начальную дату цикла
const startMonth = new Date(2025, 2, 4); // 4 марта 2025 года (месяцы в JavaScript нумеруются с 0, поэтому 2 — это март)

// / 4. Вычисляем разницу в месяцах между текущей датой и начальной датой
const monthDifference = (currentYear - startMonth.getFullYear()) * 12 + (currentMonth - startMonth.getMonth());

// 5. Вычисляем индекс текущего месяца в массиве monthCycle
const cycleLengthMonth = monthCycle.length; // Длина цикла (60 месяцев)
const monthIndex = monthDifference % cycleLengthMonth; // Вычисляем индекс

// 6. Получаем соответствующий месяц из массива
const currentMonthInCycle = monthCycle[monthIndex];

const characterMonth = currentMonthInCycle;


    // 2. Получаем текущий день
const dayCycle = [
    "甲申", "乙酉", "丙戌", "丁亥", "戊子", "己丑", "庚寅", "辛卯", "壬辰", "癸巳", 
    "甲午", "乙未", "丙申", "丁酉", "戊戌", "己亥", "庚子", "辛丑", "壬寅", "癸卯", 
    "甲辰", "乙巳", "丙午", "丁未", "戊申", "己酉", "庚戌", "辛亥", "壬子", "癸丑", 
    "甲寅", "乙卯", "丙辰", "丁巳", "戊午", "己未", "庚申", "辛酉", "壬戌", "癸亥", 
    "甲子", "乙丑", "丙寅", "丁卯", "戊辰", "己巳", "庚午", "辛未", "壬申", "癸酉", 
    "甲戌", "乙亥", "丙子", "丁丑", "戊寅", "己卯", "庚辰", "辛巳", "壬午", "癸未",
  ];
    
    // 2. Получаем текущую дату
const currentDay = new Date(); // Создаем объект Date, который содержит текущую дату и время
// 3. Определяем начальную дату цикла
const startDay = new Date(2025, 2, 15, 23, 0, 0); // 15 марта 2025 года, 23:00:00
// Месяцы в JavaScript нумеруются с 0 (0 — январь, 1 — февраль, 2 — март и т.д.)

// 4. Вычисляем разницу в миллисекундах между текущей датой и начальной датой
const timeDifference = currentDay - startDay; // Разница в миллисекундах

// 5. Переводим разницу в дни
const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // 1000 мс * 60 сек * 60 мин * 24 часа = 1 день
// 6. Вычисляем индекс текущего дня в массиве dayCycle
const dayCycleLength = dayCycle.length; // Длина цикла (60 дней)

const dayIndex = dayDifference % dayCycleLength; // Вычисляем индекс

// 7. Получаем соответствующий день из массива
const currentDayInCycle = dayCycle[dayIndex];

const characterDay = currentDayInCycle;


// 1. Создаем массив, который содержит все возможные комбинации двухчасовых промежутков


       
    // 1. Создаем массив, который содержит все возможные комбинации двухчасовых промежутков

    // 1. Создаем массив, который содержит все возможные комбинации двухчасовых промежутков

const hourCycle = [

    "壬申", "癸酉", "甲戌", "乙亥", "丙子", "丁丑", "戊寅", "己卯", "庚辰", "辛巳",
    "壬午", "癸未", "甲申", "乙酉", "丙戌", "丁亥", "戊子", "己丑", "庚寅", "辛卯",
    "壬辰", "癸巳", "甲午", "乙未", "丙申", "丁酉", "戊戌", "己亥", "庚子", "辛丑",
    "壬寅", "癸卯", "甲辰", "乙巳", "丙午", "丁未", "戊申", "己酉", "庚戌", "辛亥",
    "壬子", "癸丑", "甲寅", "乙卯", "丙辰", "丁巳", "戊午", "己未", "庚申", "辛酉",
    "壬戌", "癸亥", "甲子", "乙丑", "丙寅", "丁卯", "戊辰", "己巳", "庚午", "辛未",
    
];

// 2. Получаем текущую дату и время
const currentDateHour = new Date(); // Создаем объект Date, который содержит текущую дату и время

// 3. Определяем начальную дату и время цикла
const startDate = new Date(2025, 2, 16, 15, 0, 0); // 16 марта 2025 года, 15:00:00

// 4. Вычисляем разницу в миллисекундах между текущей датой и начальной датой
const timeDifferenceHour = currentDate - startDate; // Разница в миллисекундах

// 5. Переводим разницу в дни
const dayDifferenceHour = Math.floor(timeDifferenceHour / (1000 * 60 * 60 * 24)); // 1000 мс * 60 сек * 60 мин * 24 часа = 1 день

// 6. Вычисляем текущий двухчасовой промежуток в текущих сутках
const currentHour = currentDateHour.getHours(); // Получаем текущий час (от 0 до 23)

// 7. Определяем индекс двухчасового промежутка
let twoHourIndex;
if (currentHour >= 15 && currentHour < 17) {
    twoHourIndex = 0; // 15:00 - 16:59
} else if (currentHour >= 17 && currentHour < 19) {
    twoHourIndex = 1; // 17:00 - 18:59
} else if (currentHour >= 19 && currentHour < 21) {
    twoHourIndex = 2; // 19:00 - 20:59
} else if (currentHour >= 21 && currentHour < 23) {
    twoHourIndex = 3; // 21:00 - 22:59
} else if (currentHour >= 23 || currentHour < 1) {
    twoHourIndex = 4; // 23:00 - 00:59
} else if (currentHour >= 1 && currentHour < 3) {
    twoHourIndex = 5; // 1:00 - 2:59
} else if (currentHour >= 3 && currentHour < 5) {
    twoHourIndex = 6; // 3:00 - 4:59
} else if (currentHour >= 5 && currentHour < 7) {
    twoHourIndex = 7; // 5:00 - 6:59
} else if (currentHour >= 7 && currentHour < 9) {
    twoHourIndex = 8; // 7:00 - 8:59
} else if (currentHour >= 9 && currentHour < 11) {
    twoHourIndex = 9; // 9:00 - 10:59
} else if (currentHour >= 11 && currentHour < 13) {
    twoHourIndex = 10; // 11:00 - 12:59
} else if (currentHour >= 13 && currentHour < 15) {
    twoHourIndex = 11; // 13:00 - 14:59
}

// 8. Вычисляем общий индекс в массиве hourCycle
const hourCycleLength = hourCycle.length; // Длина цикла (60 двухчасовых промежутков)
const totalIndex = (dayDifferenceHour * 12 + twoHourIndex) % hourCycleLength; // Учитываем дни и двухчасовые промежутки

// 9. Получаем соответствующий двухчасовой промежуток из массива
const currentHourInCycle = hourCycle[totalIndex];



const characterHours = currentHourInCycle;


// Месяцы в JavaScript нумеруются с 0 (0 — январь, 1 — февраль, 2 — март и т.д.)

    
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



