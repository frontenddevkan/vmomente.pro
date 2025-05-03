// season.js
function getSeasonPeriods() {
    return [
        {id: 'spring', start: [2,4]},       // Начало весны (4 февраля)
        {id: 'rain', start: [2,19]},        // Дождевые воды (19 февраля)
        {id: 'bee', start: [3,6]},          // Пробуждение насекомых (6 марта)
        {id: 'summer', start: [3,21]},      // Весеннее равноденствие (21 марта)
        {id: 'wind', start: [4,5]},         // Чистота и ясность (5 апреля)
        {id: 'rain2', start: [4,20]},       // Хлебные дожди (20 апреля) ← ТЕКУЩИЙ
        {id: 'summer2', start: [5,6]},      // Начало лета (6 мая)
        {id: 'winter', start: [5,21]},      // Малое изобилие (21 мая)
        {id: 'winter2', start: [6,6]},      // Колошение хлебов (6 июня)
        {id: 'littlehot', start: [7,7]},    // Малая жара (7 июля)
        {id: 'hot', start: [7,23]},         // Большая жара (23 июля)
        {id: 'fall', start: [8,8]},         // Начало осени (8 августа)
        {id: 'snow', start: [8,23]},        // Прекращение жары (23 августа)
        {id: 'snow4', start: [9,8]},        // Белые росы (8 сентября)
        {id: 'fall3', start: [9,23]},       // Осеннее равноденствие (23 сентября)
        {id: 'snow5', start: [10,8]},       // Холодные росы (8 октября)
        {id: 'snow6', start: [10,24]},      // Выпадение инея (24 октября)
        {id: 'beginwinter', start: [11,8]}, // Начало зимы (8 ноября)
        {id: 'smallsnow', start: [11,22]},  // Малые снега (22 ноября)
        {id: 'bigsnow', start: [12,7]},     // Большие снега (7 декабря)
        {id: 'wintersun', start: [12,22]},  // Зимнее солнцестояние (22 декабря)
        {id: 'smallsnow2', start: [1,6]},   // Малые холода (6 января)
        {id: 'bigcold', start: [1,20]}      // Большие холода (20 января)
    ];
}

function calculateActiveSeason(today = new Date()) {
    const currentYear = today.getFullYear();
    const periods = getSeasonPeriods();
    
    for (let period of periods) {
        let year = currentYear;
        // Корректировка года для января
        if (period.start[0] === 1 && today.getMonth() === 0) {
            year = currentYear - 1;
        }
        
        const startDate = new Date(year, period.start[0]-1, period.start[1]);
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 14);

        if (today >= startDate && today <= endDate) {
            return period.id;
        }
    }
    return null;
}

function updateSeasonHighlight() {
    const activeId = calculateActiveSeason();
    document.querySelectorAll('.season-cell').forEach(cell => {
        cell.classList.toggle('active', cell.id === activeId);
    });
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    updateSeasonHighlight();
    setInterval(updateSeasonHighlight, 60000); // Обновление каждую минуту
    
    // Для отладки (можно удалить):
    console.log('Активный сезон:', calculateActiveSeason());
});