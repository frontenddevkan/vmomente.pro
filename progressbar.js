document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.getElementById("progress-bar");
    const currentValue = 18; // Текущее значение
    const maxValue = 525;   // Максимальное значение
    const duration = 1000;  // Длительность анимации в миллисекундах

    // Функция для обновления прогресс-бара с анимацией
    function animateProgressBar(current, max, duration) {
        const startTime = performance.now();
        const targetPercentage = (current / max) * 100;

        function update() {
            const currentTime = performance.now();
            const elapsedTime = currentTime - startTime;

            // Рассчитываем текущий процент
            const currentPercentage = Math.min((elapsedTime / duration) * targetPercentage, targetPercentage);

            // Устанавливаем ширину прогресс-бара
            progressBar.style.width = currentPercentage + "%";
            progressBar.textContent = currentPercentage.toFixed(2) + "%";

            // Продолжаем анимацию, пока не достигнем целевого значения
            if (currentPercentage < targetPercentage) {
                requestAnimationFrame(update);
            }
        }

        // Запускаем анимацию
        update();
    }

    // Запускаем анимацию прогресс-бара
    animateProgressBar(currentValue, maxValue, duration);
});