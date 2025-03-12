


function getChineseDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();


    // потом надо будет сюда расчеты добавить символы китайские
    
    const chineseDay = "день"; 
    const chineseMonth = "мес"; 
    const chineseHours ="час"; 
    const chineseYear = "год"; 


return {
    year: year + " - " + chineseYear,
    month: month + " - " + chineseMonth,
    day: day + " - " + chineseDay,
    hours: hours + " - " + chineseHours,
    minutes: minutes

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
        <p>Минуты: ${chineseDate.minutes}</p>
      `;

    }
}

// обновлям календарь каждую минуту

setInterval(updateChineseCalendar, 60000);

// инициализация при загрузке страницы

document.addEventListener('DOMContentLoaded', updateChineseCalendar);


