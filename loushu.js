
function updateCalendar() {
    const now = new Date();


    // добавить логику для расчета текущего цикла
    // определение небесн и зв 


    //  заполняеем таблицу
    const cells = document.querySelectorAll('#luoshu td');
    cells.forEach((cell, index) => {
        cell.textContent = `Элемент ${index + 1}`; 
    });
}

setInterval(updateCalendar, 1000); // обновление каждую cttreyle 
updateCalendar();
