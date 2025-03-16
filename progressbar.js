// Функция для обновления прогресс-бара
function updateProgressBar(currentStep, totalSteps) {
    const progressBar = document.getElementById("progress-bar");
    const progressPercentage = (currentStep / totalSteps) * 100; // Вычисляем процент
    progressBar.style.width = progressPercentage + "%"; // Обновляем ширину
}

// Пример использования
const totalSteps = 525; // Общее количество делений
let currentStep = 10; // Текущее значение (можно менять)

// Обновляем прогресс-бар
updateProgressBar(currentStep, totalSteps);

// Если нужно изменить значение динамически (например, по кнопке):
// currentStep = 100; // Новое значение
// updateProgressBar(currentStep, totalSteps);
