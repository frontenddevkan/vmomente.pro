// Класс для управления таблицей
class QimenTable {
    constructor(tableId) {
      this.table = document.getElementById(tableId); // Находим таблицу по ID
      this.grid = this.table.querySelector('.grid-container'); // Находим контейнер сетки
      this.initGrid(); // Инициализируем сетку
    }
  
    // Создаем базовую сетку 3x3
    initGrid() {
      this.grid.innerHTML = ''; // Очищаем содержимое
      for(let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.dataset.position = i; // Сохраняем позицию в data-атрибуте
        this.grid.appendChild(cell);
      }
    }
  
    // Метод для установки символов в ячейки
    setData(elements) {
      // Сначала очищаем все ячейки
      this.clearGrid();
      
      // Заполняем указанные позиции
      elements.forEach(({position, symbol}) => {
        if(position >= 0 && position < 9) {
          this.grid.children[position].textContent = symbol;
        }
      });
    }
  
    // Метод для очистки всех ячеек
    clearGrid() {
      Array.from(this.grid.children).forEach(cell => {
        cell.textContent = '';
      });
    }
  }
  
  // Инициализация всех таблиц
  window.addEventListener('DOMContentLoaded', () => {
    // Создаем экземпляры для каждой таблицы
    const hourTable = new QimenTable('hourTable');
    const dayTable = new QimenTable('dayTable');
    const monthTable = new QimenTable('monthTable');
    const yearTable = new QimenTable('yearTable');
  
    // Пример данных для таблицы Часа
    hourTable.setData([
      { position: 0, symbol: '戊' },  // Левый верхний угол
      { position: 4, symbol: '天蓬' }, // Центр
      { position: 8, symbol: '值符' }  // Правый нижний угол
    ]);
  
    // Пример данных для таблицы Дня
    dayTable.setData([
      { position: 2, symbol: '己' },
      { position: 3, symbol: '天任' },
      { position: 5, symbol: '腾蛇' }
    ]);
  
    // Пример данных для таблицы Месяца
    monthTable.setData([
      { position: 1, symbol: '庚' },
      { position: 6, symbol: '天冲' },
      { position: 7, symbol: '太阴' }
    ]);
  
    // Пример данных для таблицы Года
    yearTable.setData([
      { position: 0, symbol: '辛' },
      { position: 4, symbol: '天辅' },
      { position: 8, symbol: '六合' }
    ]);
  });