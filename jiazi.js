const jiaZiSequence = [
    "甲子", "乙丑", "丙寅", "丁卯", "戊辰", "己巳", "庚午", "辛未", "壬申", "癸酉",
    "甲戌", "乙亥", "丙子", "丁丑", "戊寅", "己卯", "庚辰", "辛巳", "壬午", "癸未",
    "甲申", "乙酉", "丙戌", "丁亥", "戊子", "己丑", "庚寅", "辛卯", "壬辰", "癸巳",
    "甲午", "乙未", "丙申", "丁酉", "戊戌", "己亥", "庚子", "辛丑", "壬寅", "癸卯",
    "甲辰", "乙巳", "丙午", "丁未", "戊申", "己酉", "庚戌", "辛亥", "壬子", "癸丑",
    "甲寅", "乙卯", "丙辰", "丁巳", "戊午", "己未", "庚申", "辛酉", "壬戌", "癸亥"
  ];

//   Чтобы получить нужную пару из цикла, нам нужно рассчитать индекс. Индекс зависит от года, месяца, дня и часа. Мы будем использовать базовый год, чтобы начать отсчет.

function calculateJiaZiIndex(baseYear, currentYear, offset = 0) {
    return (currentYear - baseYear + offset) % 60;
  }

//   baseYear — это год, с которого начинается цикл (например, 1984, это год 甲子).

// currentYear — текущий год.

// offset — это дополнительное смещение для месяцев, дней или часов.

// % 60 — это оператор остатка от деления, который гарантирует, что индекс всегда будет в пределах от 0 до 59.


// Теперь создадим функцию, которая будет возвращать пары для года, месяца, дня и двухчасового промежутка.


function getJiaZiForDate(date) {
    const baseYear = 1984; // Базовый год (1984 - год 甲子)
  
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Месяцы в JavaScript начинаются с 0

//     Мы используем метод getFullYear(), getMonth(), getDate() и getHours() для получения текущего года, месяца, дня и часа.

// Для месяца добавляем +1, потому что в JavaScript месяцы начинаются с 0 (январь = 0).

    const day = date.getDate();
    const hour = date.getHours();

//     Для двухчасового промежутка делим час на 2 и округляем вниз с помощью Math.floor().

// Возвращаем объект с парами для года, месяца, дня и двухчасового промежутка.
  
    // Рассчитываем индексы
    const yearIndex = calculateJiaZiIndex(baseYear, year);
    const monthIndex = calculateJiaZiIndex(baseYear, year, month - 1);
    const dayIndex = calculateJiaZiIndex(baseYear, year, day - 1);
    const twoHourIndex = calculateJiaZiIndex(baseYear, year, Math.floor(hour / 2));
  
    // Получаем соответствующие пары
    return {
      year: jiaZiSequence[yearIndex],
      month: jiaZiSequence[monthIndex],
      day: jiaZiSequence[dayIndex],
      twoHour: jiaZiSequence[twoHourIndex],
    };
  }


//   Теперь добавим функцию, которая будет обновлять данные на странице каждую секунду.

function updateDateTime() {
    const now = new Date(); // Текущая дата и время
    const jiaZi = getJiaZiForDate(now); // Получаем пары Цзя Цзы
  
    // Форматируем дату и время
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
  
    // Обновляем содержимое страницы
    document.getElementById("date").textContent = `Дата: ${formattedDate}`;
    document.getElementById("time").textContent = `Время: ${formattedTime}`;
    document.getElementById("year").textContent = `Год: ${jiaZi.year}`;
    document.getElementById("month").textContent = `Месяц: ${jiaZi.month}`;
    document.getElementById("day").textContent = `День: ${jiaZi.day}`;
    document.getElementById("twoHour").textContent = `Двухчасовой промежуток: ${jiaZi.twoHour}`;
  }
  
  // Обновляем данные каждую секунду
  setInterval(updateDateTime, 60000);
  
  // Первый вызов для отображения данных сразу
  updateDateTime();


//   new Date() — создает объект с текущей датой и временем.

// toLocaleDateString() и toLocaleTimeString() — форматируют дату и время в удобный для чтения вид.

// Мы обновляем содержимое HTML-элементов с помощью textContent.

// setInterval(updateDateTime, 1000) — вызывает функцию updateDateTime каждую секунду.



