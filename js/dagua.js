// dagua.js
import { daguaDay } from './chinese-calendar.js';

// Функция для раскраски иероглифов
function colorize(str) {
    return str.split('').map(char => {
        if ('甲乙寅卯'.includes(char)) return `<span class="green-character">${char}</span>`;
        if ('丙丁巳午'.includes(char)) return `<span class="red-character">${char}</span>`;
        if ('戊己丑辰未戌'.includes(char)) return `<span class="brown-character">${char}</span>`;
        if ('庚辛申酉'.includes(char)) return `<span class="metal-character">${char}</span>`;
        if ('壬癸子亥'.includes(char)) return `<span class="blue-character">${char}</span>`;
        return char;
    }).join('');
}

const dayToKeyMappingFinance = { 9:1, 8:2, 7:3, 6:4, 4:6, 3:7, 2:8, 1:9 };
const dayToKeyMappingRelationships = { 6:1, 7:2, 8:3, 9:4, 1:6, 2:7, 3:8, 4:9 };
const dayToKeyMappingHelp = { 9:[1,6], 4:[1,6], 3:[2,7], 8:[7,2], 1:[3,8], 6:[3,8] };
const dayToKeyMappingJob = { 6:[2,7], 1:[2,7], 4:[3,8], 9:[3,8], 2:[9,4], 7:[4,9] };

const daguaToCharacters = {
    1: ["甲子","壬申","庚辰","辛丑","乙卯","己未","戊戌"],
    2: ["丙寅","癸酉","壬午","辛卯","己亥","庚子","戊申","丁巳"],
    3: ["乙丑","乙亥","辛巳","甲申","庚寅","甲辰","己酉","戊午"],
    4: ["丁丑","癸未","癸巳","丁酉","丙午","丙辰","壬戌"],
    6: ["丁卯","丙子","丙戌","壬辰","丁未","癸丑","癸亥"],
    7: ["甲戌","己卯","戊子","乙未","乙巳","辛亥","甲寅","庚申"],
    8: ["己巳","庚午","戊寅","丁亥","丙申","癸卯","壬子","辛酉"],
    9: ["戊辰","辛未","乙酉","己丑","甲午","壬寅","庚戌"],
};

// Общая функция для обработки элементов
function updateDaguaElement(elementId, characters) {
    const element = document.getElementById(elementId);
    if (element && characters) {
        element.innerHTML = characters
            .map(pair => colorize(pair))
            .join(', ');
    }
}

// Основная функция обновления
function updatePersonalDagua() {
    // Финансы
    updateDaguaElement('dagua-health', 
        daguaToCharacters[dayToKeyMappingFinance[daguaDay]]);

    // Отношения
    updateDaguaElement('dagua-relationships', 
        daguaToCharacters[dayToKeyMappingRelationships[daguaDay]]);

    // Быстрые решения
    updateDaguaElement('dagua-quickly', 
        daguaToCharacters[daguaDay]);

    // Помощь
    const helpChars = (dayToKeyMappingHelp[daguaDay] || [])
        .flatMap(key => daguaToCharacters[key] || []);
    updateDaguaElement('dagua-help', helpChars);

    // Карьера
    const jobChars = (dayToKeyMappingJob[daguaDay] || [])
        .flatMap(key => daguaToCharacters[key] || []);
    updateDaguaElement('dagua-job', jobChars);
}

// Инициализация
window.addEventListener('DOMContentLoaded', updatePersonalDagua);
window.addEventListener('load', updatePersonalDagua);