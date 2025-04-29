

    // const chineseDay = "день"; 
    // const chineseMonth = "мес"; 
    // const chineseHours ="час"; 
    // const chineseYear = "год"; 
    // const chineseMinutes = "мин";
    // const chineseSeconds = "сек";

    
    // 2. Получаем текущий год

    // 1. Создаем массив, который содержит все возможные комбинации годов
export const yearCycle = [
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


   
 export  const monthCycle = [
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
export const dayCycle = [
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


export const hourCycle = [

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




export function getMonthName(month) {
    
    const monthWords = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "аАвгуст", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    
    return monthWords[month - 1];

}
// Месяцы в JavaScript нумеруются с 0 (0 — январь, 1 — февраль, 2 — март и т.д.)




export function updateChineseCalendar() {
    const data = getChineseDate();


     // Время
     // Стилизация времени
    const timeElement = document.getElementById('current-time');
    timeElement.textContent = `${data.hours.toString().padStart(2, '0')}:${data.minutes.toString().padStart(2, '0')}:${data.seconds.toString().padStart(2, '0')}`;
    timeElement.classList.add('time-style'); // Добавляем CSS-класс
    // timeElement.style.fontFamily = 'Arial, sans-serif'; // Inline-стиль
    timeElement.style.color = '#FFffff'; // Inline-стиль
    timeElement.style.fontSize = '1.1rem';

 
 document.getElementById('time-characters').innerHTML = 
     `${characterHours.split('').join('<br>')}`;
 document.getElementById('time-dagua').textContent = `Дагуа: ${daguaHours}`;

 // День
 document.getElementById('current-day').textContent = data.day;
 document.getElementById('day-characters').innerHTML = 
     `${characterDay.split('').join('<br>')}`;
 document.getElementById('day-dagua').textContent = `Дагуа: ${daguaDay}`;

 // Месяц
 document.getElementById('current-month').textContent = data.month;
 document.getElementById('month-characters').innerHTML = 
     `${characterMonth.split('').join('<br>')}`;
 document.getElementById('month-dagua').textContent = `Дагуа: ${daguaMonth}`;

 // Год
 document.getElementById('current-year').textContent = data.year;
 document.getElementById('year-characters').innerHTML = 
     `${characterYear.split('').join('<br>')}`;
 document.getElementById('year-dagua').textContent = `Дагуа: ${daguaYear}`;


}

// Обновление каждую секунду
setInterval(() => {
 // Перерасчет значений
 characterYear = getCurrentCycleValue(startDate.year, yearCycle, 'year');
 characterMonth = getCurrentCycleValue(startDate.month, monthCycle, 'month');
 characterDay = getCurrentCycleValue(startDate.day, dayCycle, 'day');
 characterHours = getCurrentCycleValue(startDate.hour, hourCycle, 'hour');
 
 updateChineseCalendar();
}, 1000);


export function getDaguaValue(character) {
    if (
        character === "甲子" || 
        character === "壬申" || 
        character === "庚辰" || 
        character === "辛丑" || 
        character === "乙卯" || 
        character === "己未" || 
        character === "戊戌"
        ) {
        return 1; 
    } else if (
        character === "乙丑" ||
        character === "乙亥" ||
        character === "辛巳" ||
        character === "甲申" ||
        character === "庚寅" || 
        character === "甲辰" ||
        character === "己酉" || 
        character === "戊午"
    ) {
        return 3;
    } else if (
        character === "丙寅" ||
        character === "癸酉" || 
        character === "壬午" || 
        character === "辛卯" ||
        character === "己亥" || 
        character === "庚子" || 
        character === "戊申" || 
        character === "丁巳"
    ) {
        return 2;
    } else if (
        character === "丁卯" ||
        character === "丙子" || 
        character === "丙戌" || 
        character === "壬辰" || 
        character === "丁未" || 
        character === "癸丑" || 
        character === "癸亥"
    ) {
        return 6;
    } else if (
        character === "戊辰" ||
        character === "辛未" || 
        character === "乙酉" || 
        character === "己丑" || 
        character === "甲午" || 
        character === "壬寅" || 
        character === "庚戌"
    ) {
        return 9;
    } else if (
        character === "己巳" ||
        character === "庚午" || 
        character === "戊寅" || 
        character === "丁亥" || 
        character === "丙申" || 
        character === "癸卯" || 
        character === "壬子" || 
        character === "辛酉"
    ) {
        return 8;
    } else if (
        character === "甲戌" ||
        character === "己卯" || 
        character === "戊子" || 
        character === "乙未" || 
        character === "乙巳" || 
        character === "辛亥" || 
        character === "甲寅" || 
        character === "庚申"
    ){
        return 7;
    } else if (
        character === "丁丑" ||
        character === "癸未" || 
        character === "癸巳" || 
        character === "丁酉" || 
        character === "丙午" || 
        character === "丙辰" || 
        character === "壬戌"
    ) {
        return 4;
    } else {
        return "ошибка";
    }
    
}

let daguaYear = getDaguaValue(characterYear);
let daguaMonth = getDaguaValue(characterMonth);
export let daguaDay = getDaguaValue(characterDay);
let daguaHours = getDaguaValue(characterHours); 


export function getChineseDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    return {
        year: year , 
        month: getMonthName(month),
        day: day,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    
    }
}


setInterval(updateChineseCalendar, 1000);

// обновлям календарь каждую минуту


// инициализация при загрузке страницы

document.addEventListener('DOMContentLoaded', updateChineseCalendar);



document.addEventListener('DOMContentLoaded', function() {
    function checkDayAndUpdateWarning() {
        const dayCharsElement = document.getElementById('day-characters');
        const lrYearElement = document.getElementById('lr-year');
        const warningDiv = document.getElementById('lr-warning');

        if (!dayCharsElement || !lrYearElement || !warningDiv) return;

        const dayText = dayCharsElement.textContent;
        
        // Соответствия иероглифов и животных
        const zodiacMap = {
            '巳': 'Свинья 亥',
            '午': 'Крыса 子',
            '未': 'Бык 丑',
            '申': 'Тигр 寅',
            '酉': 'Кролик 卯',
            '戌': 'Дракон 辰',
            '亥': 'Змея 巳',
            '子': 'Лошадь 午',
            '丑': 'Коза 未',
            '寅': 'Обезьяна 申',
            '卯': 'Петух 酉',
            '辰': 'Собака 戌'
        };

        // Проверяем каждый иероглиф
        for (const [char, animal] of Object.entries(zodiacMap)) {
            if (dayText.includes(char)) {
                lrYearElement.textContent = animal;
                warningDiv.style.display = 'block';
                return;
            }
        }

        // Если ничего не найдено
        warningDiv.style.display = 'none';
    }

    // Первоначальная проверка и обновление каждую минуту
    checkDayAndUpdateWarning();
    setInterval(checkDayAndUpdateWarning, 60000);
});




// -------------------------------------

function updateActiveElement() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // 1-12
    const dateValue = month * 100 + day;

    // Проверка для 26 апреля (426)
    console.log('Текущая дата:', dateValue);

    let activeId = 'water';
    
    if (dateValue >= 204 && dateValue <= 504) { // 4.02-4.05
        activeId = 'tree';
    } else if (dateValue >= 505 && dateValue <= 608) { // 5.05-6.08
        activeId = 'fire';
    } else if (dateValue >= 807 && dateValue <= 1107) { // 7.08-7.11
        activeId = 'metal';
    }

    // Применяем стили
    document.querySelectorAll('.element-table td').forEach(td => {
        td.classList.remove('neon', 'disable-bg');
        td.style.transform = 'scale(1)'; // Сброс анимации

        if(td.id === activeId) {
            td.classList.add('neon');
        } else {
            td.classList.add('disable-bg');
        }
    });
}

// Запускаем при загрузке и каждую минуту
document.addEventListener('DOMContentLoaded', updateActiveElement);
setInterval(updateActiveElement, 60000);

// прогресс бар для зв

// Функция для элементов стихий (tree, fire и т.д.)// chinese-calendar.js (исправленная часть)
function updateActiveElements() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const dateValue = month * 100 + day;

    // Сбрасываем подсветку
    document.querySelectorAll('.neon').forEach(el => el.classList.remove('neon'));

    // Определяем активные элементы
    const activeElements = [];
    
    // Стихии
    if (dateValue >= 204 && dateValue <= 504) activeElements.push('tree');
    else if (dateValue >= 505 && dateValue <= 608) activeElements.push('fire');
    else if (dateValue >= 807 && dateValue <= 1107) activeElements.push('metal');
    else activeElements.push('water');

    // Знаки зодиака
    if (dateValue >= 204 && dateValue <= 304) activeElements.push('tiger');
    else if (dateValue >= 305 && dateValue <= 403) activeElements.push('rabbit');
    else if (dateValue >= 404 && dateValue <= 504) activeElements.push('dragon');
    else if (dateValue >= 505 && dateValue <= 604) activeElements.push('snake');
    else if (dateValue >= 605 && dateValue <= 706) activeElements.push('horse');
    else if (dateValue >= 707 && dateValue <= 806) activeElements.push('goat');
    else if (dateValue >= 807 && dateValue <= 907) activeElements.push('monkey');
    else if (dateValue >= 908 && dateValue <= 1007) activeElements.push('kok');
    else if (dateValue >= 1008 && dateValue <= 1107) activeElements.push('dog');
    else if (dateValue >= 1108 && dateValue <= 1206) activeElements.push('pig');
    else if ((dateValue >= 1207 && dateValue <= 1231) || (dateValue >= 101 && dateValue <= 104)) activeElements.push('mouse');
    else if (dateValue >= 105 && dateValue <= 203) activeElements.push('ox');

    // Применяем подсветку
    activeElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.add('neon');
        } else {
            console.error(`Элемент с id "${id}" не найден`);
        }
    });
}

// Запускаем при загрузке и каждую минуту
document.addEventListener('DOMContentLoaded', updateActiveElements);
setInterval(updateActiveElements, 60000);

// сезоны 24 сезона

// chinese-calendar.js
function getSeasonPeriods() {
    return [
        {id: 'spring', start: [2,4]},    // 4 февраля
        {id: 'rain', start: [2,19]},     // 19 февраля
        {id: 'bee', start: [3,5]},       // 5 марта
        {id: 'summer', start: [3,20]},   // 20 марта
        {id: 'wind', start: [4,4]},      // 4 апреля
        {id: 'rain2', start: [4,19]},    // 19 апреля
        {id: 'summer2', start: [5,5]},   // 5 мая
        {id: 'winter', start: [5,20]},   // 20 мая
        {id: 'winter2', start: [6,5]},   // 5 июня
        {id: 'summer3', start: [6,20]},  // 20 июня
        {id: 'littlehot', start: [7,7]}, // 7 июля
        {id: 'hot', start: [7,22]},      // 22 июля
        {id: 'fall', start: [8,7]},      // 7 августа
        {id: 'snow', start: [8,22]},     // 22 августа
        {id: 'snow4', start: [9,7]},     // 7 сентября
        {id: 'fall3', start: [9,22]},    // 22 сентября
        {id: 'snow5', start: [10,8]},    // 8 октября
        {id: 'snow6', start: [10,23]},   // 23 октября
        {id: 'beginwinter', start: [11,8]},  // 8 ноября
        {id: 'smallsnow', start: [11,23]},   // 23 ноября
        {id: 'bigsnow', start: [12,7]},      // 7 декабря
        {id: 'wintersun', start: [12,22]},   // 22 декабря
        {id: 'smallsnow2', start: [1,5]},    // 5 января
        {id: 'bigcold', start: [1,20]}       // 20 января
    ];
}

function calculateActiveSeason(today) {
    const currentYear = today.getFullYear();
    const seasonPeriods = getSeasonPeriods();
    
    for(let period of seasonPeriods) {
        const startDate = new Date(currentYear, period.start[0]-1, period.start[1]);
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 14);
        
        if(today >= startDate && today <= endDate) {
            return period.id;
        }
    }
    
    // Обработка перехода через год
    const firstPeriod = new Date(currentYear, 0, 5); // 5 января
    if(today >= firstPeriod) {
        return 'bigcold';
    }
    
    return null;
}

function updateSeasonHighlight() {
    const today = new Date();
    const activeId = calculateActiveSeason(today);
    
    // Сброс всех подсветок
    document.querySelectorAll('.season-cell').forEach(cell => {
        cell.classList.remove('active');
    });
    
    // Активация текущей ячейки
    if(activeId) {
        const activeCell = document.getElementById(activeId);
        if(activeCell) {
            activeCell.classList.add('active');
            activeCell.style.animation = 'neonPulse 1.5s infinite';
        }
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', updateSeasonHighlight);
setInterval(updateSeasonHighlight, 1000 * 60 * 60 * 24); // Ежедневное обновление

