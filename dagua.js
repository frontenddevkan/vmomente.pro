// dagua.js

// Импортируем переменную daguaDay из chinese-calendar.js
import { daguaDay } from './chinese-calendar.js';

const dayToKeyMappingFinance = {
    9: 1,
    8: 2,
    7: 3,
    6: 4,
    4: 6,
    3: 7,
    2: 8,
    1: 9,
};

const dayToKeyMappingRelationships = {
    6: 1,
    7: 2,
    8: 3,
    9: 4,
    1: 6,
    2: 7,
    3: 8,
    4: 9,
};

const dayToKeyMappingQuiqly = daguaDay;

const dayToKeyMappingHelp = {
    9: [1 + 6],
    4: [1 + 6],
    3: [2 + 7],
    8: [7 + 2],
    1: [3 + 8],
    6: [3 + 8],     
    
};

const dayToKeyMappingJob = {
    6: [2 + 7],
    1: [2 + 7],
    4: [3 + 8],
    9: [3 + 8],
    2: [9 + 4],
    7: [4 + 9],
    
};



const daguaToCharacters = {
    1: ["甲子", "壬申", "庚辰", "辛丑", "乙卯", "己未", "戊戌"],
    2: ["丙寅", "癸酉", "壬午", "辛卯", "己亥", "庚子", "戊申", "丁巳"],
    3: ["乙丑", "乙亥", "辛巳", "甲申", "庚寅", "甲辰", "己酉", "戊午"],
    4: ["丁丑", "癸未", "癸巳", "丁酉", "丙午", "丙辰", "壬戌"],
    6: ["丁卯", "丙子", "丙戌", "壬辰", "丁未", "癸丑", "癸亥"],
    7: ["甲戌", "己卯", "戊子", "乙未", "乙巳", "辛亥", "甲寅", "庚申"],
    8: ["己巳", "庚午", "戊寅", "丁亥", "丙申", "癸卯", "壬子", "辛酉"],
    9: ["戊辰", "辛未", "乙酉", "己丑", "甲午", "壬寅", "庚戌"],
};


function updatePersonalDagua() {
    // Используем переменную daguaDay для выбора массива иероглифов
    
    const characters1 = daguaToCharacters[dayToKeyMappingFinance[daguaDay]];
    const characters2 = daguaToCharacters[dayToKeyMappingRelationships[daguaDay]];
    const characters3 = daguaToCharacters[dayToKeyMappingQuiqly];
    const characters4 = daguaToCharacters[dayToKeyMappingHelp[daguaDay]];
    const characters5 = daguaToCharacters[dayToKeyMappingJob[daguaDay]];

    if (characters1) {
        const h3Element = document.getElementById('dagua-health');
            if (h3Element) {
                h3Element.textContent = characters1.join(', '); // Вставляем иероглифы в элемент
                }
    }  if (characters2) {
        const h3Element = document.getElementById('dagua-relationships');
            if (h3Element) {
                h3Element.textContent = characters2.join(', '); // Вставляем иероглифы в элемент
                }
    }  if (characters3) {
        const h3Element = document.getElementById('dagua-quickly');
            if (h3Element) {
                h3Element.textContent = characters3.join(', '); // Вставляем иероглифы в элемент
                }
    }  if (characters4) {
        const h3Element = document.getElementById('dagua-help');
            if (h3Element) {
                h3Element.textContent = characters4.join(', '); // Вставляем иероглифы в элемент
                }
    }  if (characters5) {
        const h3Element = document.getElementById('dagua-job');
            if (h3Element) {
                h3Element.textContent = characters5.join(', '); // Вставляем иероглифы в элемент
                }
    } else { 
        console.error('No characters found for the day number:', daguaDay);
    }
}
// Вызываем функцию при загрузке страницы
window.onload = updatePersonalDagua;

