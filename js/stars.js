// stars.js
document.addEventListener('DOMContentLoaded', function() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    document.body.insertBefore(starsContainer, document.body.firstChild);

    // Создаем 3 слоя звезд для эффекта глубины
    createStarLayer(starsContainer, 150, 1, 0.5, 2);  // Далекие маленькие звезды
    createStarLayer(starsContainer, 80, 1.5, 0.7, 3); // Средние звезды
    createStarLayer(starsContainer, 30, 2, 1, 5);     // Близкие яркие звезды

    // Создаем несколько "падающих звезд"
    setInterval(createShootingStar, 3000, starsContainer);
});

function createStarLayer(container, count, minSize, maxOpacity, maxDuration) {
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Параметры звезды
        const size = Math.random() * (minSize * 0.5) + minSize * 0.5;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const opacity = Math.random() * (maxOpacity - 0.1) + 0.1;
        const duration = Math.random() * maxDuration + 2;
        const delay = Math.random() * 5;
        const twinkleType = Math.random() > 0.7 ? 'pulse' : 'flicker';
        
        // Цвет звезды (не все чисто белые)
        const hue = 40 + Math.random() * 20; // Оттенки от 40 до 60
        const saturation = 70 + Math.random() * 30;
        const color = `hsl(${hue}, ${saturation}%, 90%)`;
        
        star.style.cssText = `
            left: ${posX}%;
            top: ${posY}%;
            width: ${size}px;
            height: ${size}px;
            opacity: ${opacity};
            background: ${color};
            animation: ${twinkleType} ${duration}s infinite ${delay}s;
            box-shadow: 0 0 ${size * 2}px ${size / 2}px ${color};
        `;
        
        container.appendChild(star);
    }
}

function createShootingStar(container) {
    if (Math.random() > 0.7) return; // 30% chance to skip
    
    const star = document.createElement('div');
    star.className = 'shooting-star';
    
    const startX = Math.random() * 100;
    const startY = -10;
    const duration = Math.random() * 1 + 0.5;
    const size = Math.random() * 3 + 2;
    
    star.style.cssText = `
        left: ${startX}%;
        top: ${startY}%;
        width: ${size}px;
        height: ${size / 4}px;
        animation: shoot ${duration}s linear;
    `;
    
    container.appendChild(star);
    
    // Удаляем звезду после анимации
    setTimeout(() => star.remove(), duration * 1000);
}