document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.getElementById("progress-bar");
    const currentValue = 18; // Текущее значение
    const maxValue = 525;   // Максимальное значение

    // Функция для обновления прогресс-бара
    function updateProgressBar(current, max) {
        // Рассчитываем процент заполнения
        const percentage = (current / max) * 100;

        // Устанавливаем ширину прогресс-бара
        progressBar.style.width = percentage + "%";

        // Добавляем текст с процентами (опционально)
        progressBar.textContent = percentage.toFixed(2) + "%";
    }

    // Обновляем прогресс-бар
    updateProgressBar(currentValue, maxValue);
});