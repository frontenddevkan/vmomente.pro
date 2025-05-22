// После получения данных через lunisolar
const dayStemBranch = lsr.day();
const stemData = {
    hanzi: dayStemBranch.stem,
    element: 'Огонь',       // Логика определения элемента
    yinYang: 'Ян'           // Логика определения инь/ян
};

const branchData = {
    hanzi: dayStemBranch.branch,
    element: 'Дерево',      // Логика определения элемента 
    animal: 'Тигр'          // Логика определения животного
};

// Генерация HTML
document.querySelector('.stem-cell .hanzi').textContent = stemData.hanzi;
document.querySelector('.stem-cell .element').textContent = stemData.element;
document.querySelector('.stem-cell .yin-yang').textContent = stemData.yinYang;

document.querySelector('.branch-cell .hanzi').textContent = branchData.hanzi;
document.querySelector('.branch-cell .element').textContent = branchData.element;
document.querySelector('.branch-cell .animal').textContent = branchData.animal;

// После определения юаня
const yuanData = {
    type: yuan, // 'Верхний', 'Средний' или 'Нижний'
    branch: '子', // Земная ветвь опоры Цзя
    association: 'Цветок персика' // Связь с элементом
};

// Обновляем блок
document.querySelector('.yuan-type').textContent = yuanData.type;
document.querySelector('.yuan-type').className = `yuan-type ${getYuanClass(yuanData.type)}`;
document.querySelector('.yuan-details p:first-child').textContent = 
    `Определен по Земной Ветви: ${yuanData.branch}`;
document.querySelector('.yuan-details p:last-child').textContent = 
    `Связан с: ${yuanData.association}`;

// Функция для определения класса
function getYuanClass(yuanType) {
    return {
        'Верхний': 'upper',
        'Средний': 'middle',
        'Нижний': 'lower'
    }[yuanType] || 'upper';
}

const yuanAssociations = {
    'Верхний': { branch: '子', association: 'Цветок персика' },
    'Средний': { branch: '寅', association: 'Почтовые лошади' },
    'Нижний': { branch: '辰', association: 'Хранилища' }
};

