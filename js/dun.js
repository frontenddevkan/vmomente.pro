function getDunType(date = new Date()) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const isYing = (month > 6 || (month === 6 && day >= 21)) && (month < 12 || (month === 12 && day <= 20));
    return { 
        type: isYing ? "Инь" : "Ян", 
        className: isYing ? "ying" : "yang" 
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const resultElement = document.getElementById('dun-result');
    if (!resultElement) {
        console.error('Элемент #dun-result не найден!');
        return;
    }
    
    const { type, className } = getDunType();
    // Используем innerHTML для вставки текста
    resultElement.innerHTML = `<strong>${type}ская пробежка (${type} Дунь)</strong>`;
    resultElement.className = `dun-result ${className}`;
});

