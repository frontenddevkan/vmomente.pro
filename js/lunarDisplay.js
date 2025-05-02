// 1. Списки праздников
// Это список лунных праздников. Каждый элемент списка — текст с ссылкой на страницу праздника.

const lunarHolidaysList = [
    "",
    "В этот день <a href=\"01_chunjie.html\">Китайский новый год</a> (春节)",
    "В этот день <a href=\"02_yuanxiao.html\">Праздник фонарей</a> (元宵节)",
    "В этот день <a href=\"03_eryueer.html\">Праздник двойной двойки</a> (二月二)",
    "В этот день <a href=\"04_sanyuesan.html\">Праздник двойной тройки</a> (三月三)",
    "В этот день <a href=\"05_duanwu.html\">Праздник драконьих лодок</a> (端午节)",
    "В этот день <a href=\"06_qixi.html\">Праздник Циси</a> (七夕节)",
    "В этот день <a href=\"07_zhongyuan.html\">Праздник голодных духов</a> (中元节)",
    "В этот день <a href=\"08_zhongqiu.html\">Праздник середины осени</a> (中秋节)",
    "В этот день <a href=\"09_chongjiu.html\">Праздник двойной девятки</a> (重九节)",
    "В этот день <a href=\"10_laba.html\">Праздник Лаба</a> (腊八节)",
    "В этот день <a href=\"11_xiaonian.html\">Малый Новый год</a> (小年)"
  ];

//   2. Солнечные термины

// Это названия солнечных терминов — периодов года в китайском календаре. Например, "Весеннее равноденствие".


const solarTerm = [
    "Малые холода (小寒 Сяохань)",
    "Большие холода (大寒 Дахань)",
    "Становление весны (立春 Личунь)",
    "Дождевая вода (雨水 Юйшуй)",
    "Пробуждение насекомых (惊蛰 Цзинчжэ)",
    "<a href=\"51_chunfen.html\">Весеннее равноденствие</a> (春分 Чуньфэнь)",
    "<a href=\"52_qingming.html\">Чистый свет</a> (清明 Цинмин)",
    "Хлебные дожди (谷雨 Гуюй)",
    "Становление лета (立夏 Лися)",
    "Малое изобилие (小满 Сяомань)",
    "Колошение хлебов (芒种 Манчжун)",
    "<a href=\"53_xiazhi.html\">Летнее солнцестояние</a> (夏至 Сячжи)",
    "Малая жара (小暑 Сяошу)",
    "Большая жара (大暑 Дашу)",
    "Cтановление осени (立秋 Лицю)",
    "Конец жары (处暑 Чушу)",
    "Белые росы (白露 Байлу)",
    "<a href=\"54_qiufen.html\">Осеннее равноденствие</a> (秋分 Цюфэнь)",
    "Холодные росы (寒露 Ханьлу)",
    "Выпадение инея (霜降 Шуанцзян)",
    "Становление зимы (立冬 Лидун)",
    "Малые снега (小雪 Сяосюэ)",
    "Большие снега (大雪 Дасюэ)",
    "<a href=\"50_dongzhi.html\">Зимнее солнцестояние</a> (冬至 Дунчжи)"
  ];

  const solarHolidaysList = [
    "<a href=\"51_chunfen.html\">День весеннего равноденствия</a> (春分 Чуньфэнь)",
    "<a href=\"52_qingming.html\">Праздник чистого света</a> (清明 Цинмин)",
    "<a href=\"53_xiazhi.html\">День летнего солнцестояния</a> (夏至 Сячжи)",
    "<a href=\"54_qiufen.html\">День осеннего равноденствия</a> (秋分 Цюфэнь)",
    "<a href=\"50_dongzhi.html\">День зимнего солнцестояния</a> (冬至 Дунчжи)"
  ];



//   3. Переменные для расчетов

// lunarHoliday хранит номер текущего лунного праздника (0 — праздника нет).

let lunarHoliday = 0;

// solarHoliday — пустой список для солнечных праздников.

let solarHoliday = new Array;

// 4. Списки "Небесных стволов" и "Земных ветвей"

const GAN = [
    "甲 Цзя (1) Дерево",
    "乙 И (2) Дерево",
    "丙 Бин (3) Огонь",
    "丁 Дин (4) Огонь",
    "戊 У (5) Земля",
    "己 Цзи (6) Земля",
    "庚 Гэн (7) Металл",
    "辛 Синь (8) Металл",
    "壬 Жэнь (9) Вода",
    "癸 Гуй (10) Вода"
  ];
  const ZHI = [
    "子 Цзы (1) Крыса",
    "丑 Чоу (2) Бык",
    "寅 Инь (3) Тигр",
    "卯 Мао (4) Кролик",
    "辰 Чэнь (5) Дракон",
    "巳 Сы (6) Змея",
    "午 У (7) Лошадь",
    "未 Вэй (8) Баран",
    "申 Шэнь (9) Обезьяна",
    "酉 Ю (10) Петух",
    "戌 Сюй (11) Собака",
    "亥 Хай (12) Свинья"
  ];

  
//   5. Проверка даты

// Функция проверяет, существует ли дата (например, 30 февраля — нет).

// Как работает?

// ListofDays — список дней в месяцах (январь=31, февраль=28 и т.д.).

// Проверяет год (1900–2100), месяц и день. Для февраля учитывает високосный год.


function validateDate(YY, MM, DD) {
    var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if (YY != YY || MM != MM || DD != DD) {
      return false;
    }
    if (YY < 1900 || YY >= 2100) {
      return false;
    }
    if (MM == 1 || MM > 2) {
      if (DD > ListofDays[MM - 1]) {
        return false;
      }
    }
    else if (MM == 2) {
      var lyear = false;
      if ( (!(YY % 4) && YY % 100) || !(YY % 400)) {
        lyear = true;
      }
      if ((lyear == false) && (DD >= 29)) {
        return false;
      }
      if ((lyear == true) && (DD > 29)) {
        return false;
      }
    }
    return true;
  }

//   6. Лунные фазы и расчеты

// Средняя продолжительность лунного месяца (~29.5 дней).

var synmonth = 29.530588853;


// Математические коэффициенты для расчета лунных фаз. Это как сложные ингредиенты для точного рецепта.

var ptsa = new Array(485, 203, 199, 182, 156, 136, 77, 74, 70, 58, 52, 50, 45, 44, 29, 18, 17, 16, 14, 12, 12, 12, 9, 8)
var ptsb = new Array(324.96, 337.23, 342.08, 27.85, 73.14, 171.52, 222.54, 296.72, 243.58, 119.81, 297.17, 21.02, 247.54, 325.15, 60.93, 155.12, 288.79, 198.04, 199.76, 95.39, 287.11, 320.81, 227.73, 15.45)
var ptsc = new Array(1934.136, 32964.467, 20.186, 445267.112, 45036.886, 22518.443, 65928.934, 3034.906, 9037.513, 33718.147, 150.678, 2281.226, 29929.562, 31555.956, 4443.417, 67555.328, 4562.452, 62894.029, 31436.921, 14577.848, 31931.756, 34777.259, 1222.114, 16859.074)

var jdez = new Array(30);
var jdjq = new Array(26);

var jdnmn = new Array;
var zr = new Array, sjd = new Array, mc = new Array;


// 7. Конвертация дат


// ==================
function Lunar2Solar(yea, mxa, dx) {
    var yy, mm, dd, hh, mt, ss;
    var zr = new Array, op = false;
    var sjd = new Array, mc = new Array, lsjd;
    var nofd = new Array, jdx, mx;
    var out = "";
    var renyue;
    var chk = false;
  
    GetZQandSMandLunarMonthCode(op, yea, zr, sjd, mc);
  
    renyue = 0;
    for (j = 1; j <= 14; j++) {
      if (mc[j] - Math.floor(mc[j]) > 0) {
        renyue = Math.floor(mc[j] + 0.5);
        break;
      }
    }
  
    mx = mxa + 2;
    for (i = 0; i <= 14; i++) {
      nofd[i] = Math.floor(sjd[i + 1] + 0.5) - Math.floor(sjd[i] + 0.5);
    }
  
    if (mx >= 3 && mx <= 14) {
      if (dx >= 1 && dx <= 30) {
  
          if (renyue == 0) {
            if (dx <= nofd[mx - 1]) {
              jdx = sjd[mx - 1] + dx - 1;
            }
          } else {
            if (dx <= nofd[mx + (mx > renyue) - 1]) {
              jdx = sjd[mx + (mx > renyue) - 1] + dx - 1;
            }
          }
          out += Jtime(op, jdx);
      }
    }
    return out;
  }

  
//   8. Расчет солнечных терминов

// Определяет даты солнечных терминов (например, "Начало весны") для заданного года.

function GetMoonPhase(yr, mh, dy) {
    var op = false;
    var getJD = Jdays(false, yr, mh, dy, 12);
    var mnm1 = MeanNewMoonDay(getJD);
    phase = (getJD - mnm1) / synmonth;
    drawpic();
  }
  
  function VE(yy) {
    var m = (yy - 2000) / 1000;
    jdve = 2451623.80984 + 365242.37404 * m + 0.05169 * m * m - 0.00411 * m * m * m - 0.00057 * m * m * m * m;
    return jdve;
  }
  
  function getSolarTerms(yr) {
    var i, ptb, dt;
    var ini = 0, num = 26;
    var getJD = VE(yr);
    var ty = VE(yr + 1) - getJD;
    var out = "";
    var solarArray = [];
  
    solarHoliday = [];
    if (MeanJQJD(yr, getJD, ty, ini, num) == true) {
      for (i = 20; i <= 24; i++) {
        ptb = Perturbation(jdez[i]);
        dt = DeltaT(yr, Math.floor(i / 2) + 3);
        jdjq[i] = jdez[i] + ptb - dt / 60 / 24 + 1 / 3;
        jt = Jtime(0, jdjq[i]);
        out = jt;
      solarArray.push(out);
      }
    }
    yr += 1;
    getJD = VE(yr);
    ty = VE(yr + 1) - getJD;
    if (MeanJQJD(yr, getJD, ty, ini, num) == true) {
      for (i = 1; i <= 19; i++) {
        ptb = Perturbation(jdez[i]);
        dt = DeltaT(yr, Math.floor(i / 2) + 3);
        jdjq[i] = jdez[i] + ptb - dt / 60 / 24 + 1 / 3;
        jt = Jtime(0, jdjq[i]);
        out = jt;
      solarArray.push(out);
  
      if (i == 1) { solarHoliday.push(out); }
      else if (i == 2) {solarHoliday.push(out); }
      else if (i ==  7) {solarHoliday.push(out); }
      else if (i ==  13) {solarHoliday.push(out); }
      else if (i ==  19) {solarHoliday.push(out); }
      }
    }
    yr -= 1;
    var out2 = "";
    for (var j = 0; j <= 23; j++) {
      out2 += solarArray[j] + " — " + solarTerm[j] + "<br />";
    }
    return out2;
  }
  

//   9. Вспомогательные функции

// Переводит дату в "юлианские дни" — систему отсчета времени, удобную для астрономических расчетов.

function Jtime(op, getJD) {
    if (getJD >= 2299160.5 || op) {
      var y4h = 146097;
      var init = 1721119.5;
    } else {
      var y4h = 146100;
      var init = 1721117.5;
    }
    var jdr = Math.floor(getJD - init);
    var yh = y4h / 4;
    var cen = Math.floor((jdr + 0.75) / yh);
    var d = Math.floor(jdr + 0.75 - cen * yh);
    var ywl = 1461 / 4;
    var jy = Math.floor((d + 0.75) / ywl);
    d = Math.floor(d + 0.75 - ywl * jy + 1);
    var ml = 153 / 5;
    mp = Math.floor((d - 0.5) / ml);
    d = Math.floor((d - 0.5) - 30.6 * mp + 1);
    var y = (100 * cen) + jy;
    var m = (mp + 2) % 12 + 1;
    if (m < 3) y = y + 1;
    var sd = Math.floor((getJD + 0.5 - Math.floor(getJD + 0.5)) * 24 * 60 * 60 + 0.00005);
    var mt = Math.floor(sd / 60);
    var ss = sd % 60;
    var hh = Math.floor(mt / 60);
    var mmt = mt % 60;
    var yy = Math.floor(y);
    var mm = Math.floor(m);
    var dd = Math.floor(d);
    var yc = " " + yy;
    yc = yc.substr(yc.length - 5, 5);
  
    var dytm = ((dd < 10) ? "0" : "") + dd + ".";
    dytm += ((mm < 10) ? "0" : "") + mm + ".";
    dytm += yy;
    return dytm;
  }
  
  function MeanJQJD(yy, jdve, ty, ini, num) {
    var ath = 2 * Math.PI / 24;
    var tx = (jdve - 2451545) / 365250;
    var e = 0.0167086342 - 0.0004203654 * tx - 0.0000126734 * tx * tx + 0.0000001444 * tx * tx * tx - 0.0000000002 * tx * tx * tx * tx + 0.0000000003 * tx * tx * tx * tx * tx;
    var tt = yy / 1000;
    var vp = 111.25586939 - 17.0119934518333 * tt - 0.044091890166673 * tt * tt - 4.37356166661345E-04 * tt * tt * tt + 8.16716666602386E-06 * tt * tt * tt * tt;
    var rvp = vp * 2 * Math.PI / 360;
    var peri = new Array(30);
    var i;
    for (i = 1; i <= (ini + num); i++) {
      var flag = 0;
      var th = ath * (i - 1) + rvp;
      if (th > Math.PI && th <= 3 * Math.PI) {
        th = 2 * Math.PI - th;
        flag = 1;
      }
      if (th > 3 * Math.PI) {
        th = 4 * Math.PI - th;
        flag = 2;
      }
      var f1 = 2 * Math.atan((Math.sqrt((1 - e) / (1 + e)) * Math.tan(th / 2)));
      var f2 = (e * Math.sqrt(1 - e * e) * Math.sin(th)) / (1 + e * Math.cos(th));
      var f = (f1 - f2) * ty / 2 / Math.PI;
      if (flag == 1) f = ty - f;
      if (flag == 2) f = 2 * ty - f;
      peri[i] = f;
    }
    for (i = ini; i <= (ini + num); i++) {
      jdez[i] = jdve + peri[i] - peri[1];
    }
    return true;
  }
  
  function Perturbation(jdez) {
    var t = (jdez - 2451545) / 36525;
    var s = 0;
    for (k = 0; k <= 23; k++) {
      s = s + ptsa[k] * Math.cos(ptsb[k] * 2 * Math.PI / 360 + ptsc[k] * 2 * Math.PI / 360 * t);
    }
    var w = 35999.373 * t - 2.47;
    var l = 1 + 0.0334 * Math.cos(w * 2 * Math.PI / 360) + 0.0007 * Math.cos(2 * w * 2 * Math.PI / 360);
    var ptb = 0.00001 * s / l;
    return ptb;
  }
  
//   Рассчитывает поправку времени из-за замедления вращения Земли. Нужно для точных астрономических расчетов.


  function DeltaT(yy, mm) {
    var u, t, dt, y;
    y = yy + (mm - 0.5) / 12;
  
    if (y <= -500) {
      u = (y - 1820) / 100;
      dt = (-20 + 32 * u * u);
    } else {
      if (y < 500) {
        u = y / 100;
        dt = (10583.6 - 1014.41 * u + 33.78311 * u * u - 5.952053 * u * u * u - 0.1798452 * u * u * u * u + 0.022174192 * u * u * u * u * u + 0.0090316521 * u * u * u * u * u * u);
      } else {
        if (y < 1600) {
          u = (y - 1000) / 100;
          dt = (1574.2 - 556.01 * u + 71.23472 * u * u + 0.319781 * u * u * u - 0.8503463 * u * u * u * u - 0.005050998 * u * u * u * u * u + 0.0083572073 * u * u * u * u * u * u);
        } else {
          if (y < 1700) {
            t = y - 1600;
            dt = (120 - 0.9808 * t - 0.01532 * t * t + t * t * t / 7129);
          } else {
            if (y < 1800) {
              t = y - 1700;
              dt = (8.83 + 0.1603 * t - 0.0059285 * t * t + 0.00013336 * t * t * t - t * t * t * t / 1174000);
            } else {
              if (y < 1860) {
                t = y - 1800;
                dt = (13.72 - 0.332447 * t + 0.0068612 * t * t + 0.0041116 * t * t * t - 0.00037436 * t * t * t * t + 0.0000121272 * t * t * t * t * t - 0.0000001699 * t * t * t * t * t * t + 0.000000000875 * t * t * t * t * t * t * t);
              } else {
                if (y < 1900) {
                  t = y - 1860;
                  dt = (7.62 + 0.5737 * t - 0.251754 * t * t + 0.01680668 * t * t * t - 0.0004473624 * t * t * t * t + t * t * t * t * t / 233174);
                } else {
                  if (y < 1920) {
                    t = y - 1900;
                    dt = (-2.79 + 1.494119 * t - 0.0598939 * t * t + 0.0061966 * t * t * t - 0.000197 * t * t * t * t);
                  } else {
                    if (y < 1941) {
                      t = y - 1920;
                      dt = (21.2 + 0.84493 * t - 0.0761 * t * t + 0.0020936 * t * t * t);
                    } else {
                      if (y < 1961) {
                        t = y - 1950;
                        dt = (29.07 + 0.407 * t - t * t / 233 + t * t * t / 2547);
                      } else {
                        if (y < 1986) {
                          t = y - 1975;
                          dt = (45.45 + 1.067 * t - t * t / 260 - t * t * t / 718);
                        } else {
                          if (y < 2005) {
                            t = y - 2000;
                            dt = (63.86 + 0.3345 * t - 0.060374 * t * t + 0.0017275 * t * t * t + 0.000651814 * t * t * t * t + 0.00002373599 * t * t * t * t * t);
                          } else {
                            if (y < 2050) {
                              t = y - 2000;
                              dt = (62.92 + 0.32217 * t + 0.005589 * t * t);
                            } else {
                              if (y < 2150) {
                                u = (y - 1820) / 100;
                                dt = (-20 + 32 * u * u - 0.5628 * (2150 - y));
                              } else {
                                u = (y - 1820) / 100;
                                dt = (-20 + 32 * u * u);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (y < 1955 || y >= 2005) dt = dt - (0.000012932 * (y - 1955) * (y - 1955));
    var DeltaT = dt / 60;
    return DeltaT
  }
  
  function Jdays(op, yr, mh, dy, hr) {
    if (yr < -400000 || yr > 400000) return false;
    var yp = yr + Math.floor((mh - 3) / 10);
  
    if (((yr > 1582) || (yr == 1582 && mh > 10) || (yr == 1582 && mh == 10 && dy >= 15)) || op) {
      var init = 1721119.5;
      var jdy = Math.floor(yp * 365.25) - Math.floor(yp / 100) + Math.floor(yp / 400);
    } else {
      if ((yr < 1582) || (yr == 1582 && mh < 10) || (yr == 1582 && mh == 10 && dy <= 4)) {
        var init = 1721117.5;
        var jdy = Math.floor(yp * 365.25);
      } else {
        return false;
      }
    }
    var mp = Math.floor(mh + 9) % 12;
    var jdm = mp * 30 + Math.floor((mp + 1) * 34 / 57);
    var jdd = dy - 1;
    var jdh = hr / 24;
    var getJD = jdy + jdm + jdd + jdh + init;
    return getJD;
  }
  
  function GetAdjustedJQ(yy, ini, num, jdjq) {
    var veb = VE(yy);
    var ty = VE(yy + 1) - veb;
  
    if (MeanJQJD(yy, veb, ty, ini, num) == true) {
      for (i = ini + 1; i <= (ini + num); i++) {
        ptb = Perturbation(jdez[i]);
        dt = DeltaT(yy, Math.floor(i / 2) + 3);
        jdjq[i] = jdez[i] + ptb - dt / 60 / 24;
        jdjq[i] = jdjq[i] + 1 / 3;
      }
    }
  }
  
  function GetZQsinceWinterSolstice(yy, jdzq) {
    var dj = new Array(26);
    GetAdjustedJQ(yy - 1, 18, 5, dj);
    jdzq[0] = dj[19];
    jdzq[1] = dj[21];
    jdzq[2] = dj[23];
    GetAdjustedJQ(yy, 0, 26, dj);
    for (i = 1; i <= 13; i++) {
      jdzq[i + 2] = dj[2 * i - 1];
    }
  }
  
  function MeanNewMoon(getJD) {
    var t, thejd, jdt;
    var k = Math.floor((getJD - 2451550.09765) / synmonth);
    jdt = 2451550.09765 + k * synmonth;
    t = (jdt - 2451545) / 36525;
    thejd = jdt + 0.0001337 * t * t - 0.00000015 * t * t * t + 0.00000000073 * t * t * t * t;
    return k;
  }
  
  function TrueNewMoon(k) {
    var t, t2, t3, t4;
    var m, mprime, f, omega, es;
    var pt, apt1, apt2, jdt;
    jdt = 2451550.09765 + k * synmonth;
    t = (jdt - 2451545) / 36525;
    t2 = t * t;
    t3 = t2 * t;
    t4 = t3 * t;
    pt = jdt + 0.0001337 * t2 - 0.00000015 * t3 + 0.00000000073 * t4;
    m = 2.5534 + 29.10535669 * k - 0.0000218 * t2 - 0.00000011 * t3;
    mprime = 201.5643 + 385.81693528 * k + 0.0107438 * t2 + 0.00001239 * t3 - 0.000000058 * t4;
    f = 160.7108 + 390.67050274 * k - 0.0016341 * t2 - 0.00000227 * t3 + 0.000000011 * t4;
    omega = 124.7746 - 1.5637558 * k + 0.0020691 * t2 + 0.00000215 * t3;
    es = 1 - 0.002516 * t - 0.0000074 * t2;
    apt1 = -0.4072 * Math.sin((Math.PI / 180) * mprime);
    apt1 += 0.17241 * es * Math.sin((Math.PI / 180) * m);
    apt1 += 0.01608 * Math.sin((Math.PI / 180) * 2 * mprime);
    apt1 += 0.01039 * Math.sin((Math.PI / 180) * 2 * f);
    apt1 += 0.00739 * es * Math.sin((Math.PI / 180) * (mprime - m));
    apt1 -= 0.00514 * es * Math.sin((Math.PI / 180) * (mprime + m));
    apt1 += 0.00208 * es * es * Math.sin((Math.PI / 180) * (2 * m));
    apt1 -= 0.00111 * Math.sin((Math.PI / 180) * (mprime - 2 * f));
    apt1 -= 0.00057 * Math.sin((Math.PI / 180) * (mprime + 2 * f));
    apt1 += 0.00056 * es * Math.sin((Math.PI / 180) * (2 * mprime + m));
    apt1 -= 0.00042 * Math.sin((Math.PI / 180) * 3 * mprime);
    apt1 += 0.00042 * es * Math.sin((Math.PI / 180) * (m + 2 * f));
    apt1 += 0.00038 * es * Math.sin((Math.PI / 180) * (m - 2 * f));
    apt1 -= 0.00024 * es * Math.sin((Math.PI / 180) * (2 * mprime - m));
    apt1 -= 0.00017 * Math.sin((Math.PI / 180) * omega);
    apt1 -= 0.00007 * Math.sin((Math.PI / 180) * (mprime + 2 * m));
    apt1 += 0.00004 * Math.sin((Math.PI / 180) * (2 * mprime - 2 * f));
    apt1 += 0.00004 * Math.sin((Math.PI / 180) * (3 * m));
    apt1 += 0.00003 * Math.sin((Math.PI / 180) * (mprime + m - 2 * f));
    apt1 += 0.00003 * Math.sin((Math.PI / 180) * (2 * mprime + 2 * f));
    apt1 -= 0.00003 * Math.sin((Math.PI / 180) * (mprime + m + 2 * f));
    apt1 += 0.00003 * Math.sin((Math.PI / 180) * (mprime - m + 2 * f));
    apt1 -= 0.00002 * Math.sin((Math.PI / 180) * (mprime - m - 2 * f));
    apt1 -= 0.00002 * Math.sin((Math.PI / 180) * (3 * mprime + m));
    apt1 += 0.00002 * Math.sin((Math.PI / 180) * (4 * mprime));
  
    apt2 = 0.000325 * Math.sin((Math.PI / 180) * (299.77 + 0.107408 * k - 0.009173 * t2));
    apt2 += 0.000165 * Math.sin((Math.PI / 180) * (251.88 + 0.016321 * k));
    apt2 += 0.000164 * Math.sin((Math.PI / 180) * (251.83 + 26.651886 * k));
    apt2 += 0.000126 * Math.sin((Math.PI / 180) * (349.42 + 36.412478 * k));
    apt2 += 0.00011 * Math.sin((Math.PI / 180) * (84.66 + 18.206239 * k));
    apt2 += 0.000062 * Math.sin((Math.PI / 180) * (141.74 + 53.303771 * k));
    apt2 += 0.00006 * Math.sin((Math.PI / 180) * (207.14 + 2.453732 * k));
    apt2 += 0.000056 * Math.sin((Math.PI / 180) * (154.84 + 7.30686 * k));
    apt2 += 0.000047 * Math.sin((Math.PI / 180) * (34.52 + 27.261239 * k));
    apt2 += 0.000042 * Math.sin((Math.PI / 180) * (207.19 + 0.121824 * k));
    apt2 += 0.00004 * Math.sin((Math.PI / 180) * (291.34 + 1.844379 * k));
    apt2 += 0.000037 * Math.sin((Math.PI / 180) * (161.72 + 24.198154 * k));
    apt2 += 0.000035 * Math.sin((Math.PI / 180) * (239.56 + 25.513099 * k));
    apt2 += 0.000023 * Math.sin((Math.PI / 180) * (331.55 + 3.592518 * k));
    var tnm = pt + apt1 + apt2;
    return tnm;
  }
  
  function GetSMsinceWinterSolstice(op, yy, jdws, jdnm) {
    var kn, tjd = new Array, i, k, mjd, thejd;
    var spcjd, phase, kn;
    spcjd = Jdays(op, yy - 1, 11, 0, 0);
  
    kn = MeanNewMoon(spcjd);
    for (i = 0; i <= 19; i++) {
      k = kn + i;
      mjd = thejd + synmonth * i;
  
      tjd[i] = TrueNewMoon(k) + 1 / 3;
      tjd[i] = tjd[i] - DeltaT(yy, i - 1) / 1440;
    }
    for (j = 0; j <= 18; j++) {
      if (Math.floor(tjd[j] + 0.5) > Math.floor(jdws + 0.5)) {
        break;
      }
    }
    jj = j;
    for (k = 0; k <= 15; k++) {
      jdnm[k] = tjd[jj - 1 + k];
    }
  }
  
  function GetZQandSMandLunarMonthCode(op, yy, jdzq, jdnm, mc) {
    var yz;
  
    GetZQsinceWinterSolstice(yy, jdzq);
    GetSMsinceWinterSolstice(op, yy, jdzq[0], jdnm);
  
    yz = 0;
    if (Math.floor(jdzq[12] + 0.5) >= Math.floor(jdnm[13] + 0.5)) {
      for (i = 1; i <= 14; i++) {
        if (Math.floor((jdnm[i] + 0.5) > Math.floor(jdzq[i - 1 - yz] + 0.5) && Math.floor(jdnm[i + 1] + 0.5) <= Math.floor(jdzq[i - yz] + 0.5))) {
          mc[i] = i - 0.5;
          yz = 1;
        } else {
          mc[i] = i - yz;
        }
      }
    } else {
      for (i = 0; i <= 12; i++) {
        mc[i] = i;
      }
      for (i = 13; i <= 14; i++) {
        if (Math.floor((jdnm[i] + 0.5) > Math.floor(jdzq[i - 1 - yz] + 0.5) && Math.floor(jdnm[i + 1] + 0.5) <= Math.floor(jdzq[i - yz] + 0.5))) {
          mc[i] = i - 0.5;
          yz = 1;
        } else {
          mc[i] = i - yz;
        }
      }
    }
  }
  
  function MeanNewMoonDay(getJD) {
    var t, thejd, jdt;
    var k = Math.floor((getJD - 2451550.09765) / synmonth);
    jdt = 2451550.09765 + k * synmonth;
    t = (jdt - 2451545) / 36525;
    thejd = jdt + 0.0001337 * t * t - 0.00000015 * t * t * t + 0.00000000073 * t * t * t * t;
    return thejd;
  }
  
  
  
//   10. Отображение лунной фазы

// Рисует изображение Луны (например, полнолуние или новолуние) на веб-странице.

function drawpic() {
    var y;
    var m;
    var phai = phase * 2 * Math.PI;
  
    var ac = Math.abs(Math.cos(phai));
  
    if (phai <= 0.5 * Math.PI) {
      var co = "black";
      var ad = 0;
    } else {
      if (phai <= 1 * Math.PI) {
        var co = "#fbbc05";
        var ad = 0;
      } else {
        if (phai <= 1.5 * Math.PI) {
          var co = "#fbbc05";
          var ad = 1;
        } else {
          if (phai <= 2 * Math.PI) {
            var co = "black";
            var ad = 1;
          } else {
            exit;
          }
        }
      }
    }
    ctx.beginPath();
    ctx.arc(0, 0, 50, (0.5 + ad) * Math.PI, (1.5 + ad) * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
  
    ctx.beginPath();
    ctx.arc(0, 0, 50, (1.5 + ad) * Math.PI, (2.5 + ad) * Math.PI);
    ctx.fillStyle = "#fbbc05";
    ctx.fill();
    ctx.closePath();
  
    ctx.beginPath();
    for (y = -50; y <= 50; y++) {
      m = Math.abs(Math.sqrt(2500 - y * y) * Math.cos(phai));
      ctx.moveTo(-m, y);
      ctx.lineTo(+m, y);
      ctx.strokeStyle = co;
      ctx.stroke();
    }
    ctx.closePath();
  }

  
//   11. Астрологические расчеты
// Определяют "Небесный ствол" и "Земную ветвь" для дня. Используются в китайской астрологии.


function dayOfYear(YY, MM, DD) {
    return --MM * 31 - (MM > 1 ? (1054267675 >> MM * 3 - 6 & 7) - (YY & 3 || !(YY % 25) && YY & 15 ? 0 : 1) : 0) + DD;
  }
  
  function jdFromDate(dd, mm, yy) {
      var a = (Math.floor((14 - mm) / 12));
      var y = yy + 4800 - a;
      var m = mm + 12 * a - 3;
      var jd = dd + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
      var HH = 21.0, MM = 3.0, SS = 23.0;
    return jd;
  }
  
  function getSunLongitude(jd) {
    T = (jd - 2415020) / 36525;
    K = 2 * Math.PI/360; 
    M = 358.475833 + 35999.04975 * T - 0.00015 * T * T - 0.00000333333 * T * T * T;
    K1 = K * M;
    K2 = K * 2 * M;
    K3 = K * 3 * M;
    SL = 279.6966778 + 36000.768925 * T + 0.0003025 * T * T
      + (1.91946028 * Math.sin(K1)) + (0.02009389 * Math.sin(K2)) + (0.000292778 * Math.sin(K3))
      - ((0.0047889 * Math.sin(K1) + 0.000100278 * Math.sin(K2) + 0.000000278 * Math.sin(K3)) * T)
      - (0.000014444 * Math.sin(K1) * T * T);
    while (SL >= 360) {SL = SL - 360;}
    while (SL < 0) {SL = SL + 360;}
    Om0 = (125.04 - 1934.1 * T) / 360;
    if (Om0 > 0) {
      Om0 = Math.floor(Om0);
    } else {
      Om0 = Math.ceil(Om0);
    }
    Om1 = 360 * ((125.04 - 1934.1 * T) / 360) - Om0;
    if (Om1 < 0) Om1 = Om1 + 360;
    SL = SL - 0.00569 - 0.00478 * Math.sin(Math.PI / 180 * Om1);
    while (SL >= 360) {SL = SL- 360;}
    while (SL < 0) {SL = SL + 360;}
  return Math.floor(SL);
  }
  
  function getDayGanNum(year, month, day, hour) {
    var gan = parseInt(((year - 1) * 5 + (year - 1) / 4 + dayOfYear(year, month, day)) % 60 % 10);
    if (hour == 23)
    {
      gan += 1;
      if (gan == 11)
      {
        gan = 1;
      }
    }
    if (gan == 0)
    {
      gan = 10;
    }
    return gan;
  }
  
  function getDayZhiNum(year, month, day, hour) {
    var zhi = parseInt(((year - 1) * 5 + (year - 1) / 4 + dayOfYear(year, month, day)) % 60 % 12);
    if (hour == 23)
    {
      zhi += 1;
      if (zhi == 13)
      {
        zhi = 1;
      }
    }
    if (zhi == 0)
    {
      zhi = 12;
    }
    return zhi;
  }
  
  function getHourGanNum(dayGan, hour) {
    var hourGanArray = [9, 10, 10, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 9];
    var hourGan = (hourGanArray[hour] + (dayGan % 5) * 2) % 10;
    if (hourGan == 0) hourGan = 10;
    return hourGan;
  }
  
  function getHourZhiNum(hour) {
    var hourZhi = Math.floor(((hour + 1) % 24) / 2) + 1;
    return hourZhi;
  }
  
  function getYearGanNum(year, month, L) {
    if ((L < 315) && (month == 1 || month == 2)) {
      yearGan = year - 4;
    }
    else {
      yearGan = year - 3;
    }
    yearGan = yearGan % 10;
    if (yearGan == 0) {
        yearGan = 10;
    }
    return yearGan;
  }
  
  function getYearZhiNum(year, month, L) {
    if ((L < 315) && (month == 1 || month == 2)) {
      yearZhi = year - 4;
    }
    else {
      yearZhi = year - 3;
    }
    yearZhi = yearZhi % 12;
    if (yearZhi == 0) {
        yearZhi = 12;
    }
    return yearZhi;
  }
  
  function getMonthGanNum(yearGan, L) {
    var monthGan = 1;
    for (var i = 0; i < 6; i++) {
      if ((yearGan == i) || (yearGan == i + 5)) {
        monthGan = monthGan + (i * 2);
      if (monthGan > 10) {
        monthGan = monthGan - 10;
        }
      }
    }
    if ((L >= 345) || (L < 15)) { monthGan = monthGan + 1; }
    if ((L >= 15) && (L < 45)) { monthGan = monthGan + 2; }
    if ((L >= 45) && (L < 75)) { monthGan = monthGan + 3; }
    if ((L >= 75) && (L < 105)) { monthGan = monthGan + 4; }
    if ((L >= 105) && (L < 135)) { monthGan = monthGan + 5; }
    if ((L >= 135) && (L < 165)) { monthGan = monthGan + 6; }
    if ((L >= 165) && (L < 195)) { monthGan = monthGan + 7; }
    if ((L >= 195) && (L < 225)) { monthGan = monthGan + 8; }
    if ((L >= 225) && (L < 255)) { monthGan = monthGan + 9; }
    if ((L >= 255) && (L < 285)) { monthGan = monthGan + 10; }
    if ((L >= 285) && (L < 315)) { monthGan = monthGan + 11; }
    if (monthGan > 10) {
      monthGan = monthGan - 10;
    }
    return monthGan;
  }
  
  function getMonthZhiNum(L) {
    if ((L >= 315) && (L < 345)) { monthZhi = 3; }
    if ((L >= 345) || (L < 15)) { monthZhi = 4; }
    if ((L >= 15) && (L < 45)) { monthZhi = 5; }
    if ((L >= 45) && (L < 75)) { monthZhi = 6; }
    if ((L >= 75) && (L < 105)) { monthZhi = 7; }
    if ((L >= 105) && (L < 135)) { monthZhi = 8; }
    if ((L >= 135) && (L < 165)) { monthZhi = 9; }
    if ((L >= 165) && (L < 195)) { monthZhi = 10; }
    if ((L >= 195) && (L < 225)) { monthZhi = 11; }
    if ((L >= 225) && (L < 255)) { monthZhi = 12; }
    if ((L >= 255) && (L < 285)) { monthZhi = 1; }
    if ((L >= 285) && (L < 315)) { monthZhi = 2; }
    if (monthZhi > 12) {
      monthZhi = monthZhi - 12;
    }
    return monthZhi;
  }
  

//   checkLunarHoliday() вернет текст праздника, если сегодня лунный праздник.

// Если это 1-й день 1-го месяца, checkLunarHoliday() вернет ссылку на Китайский Новый год



function checkLunarHoliday() {
    lunarHoliday = lunarHolidaysList[lunarHoliday];
    return lunarHoliday;
  }
  
  function checkSolarHoliday(yy, mm, dd) {
    var findDate = ((dd < 10) ? "0" : "") + dd + ".";
    findDate += ((mm < 10) ? "0" : "") + mm + ".";
    findDate += yy;
  
  var out = "";
  var indexOfElement = solarHoliday.indexOf(findDate);
    if (indexOfElement < 0) out = "";
    else out = "В этот день " + solarHolidaysList[indexOfElement];
    return out;
  }
  
  function checkLunarArray(YY) {
    var lunarArray = [];
    lunarArray.push(Lunar2Solar(YY - 1, 12, 8));
    lunarArray.push(Lunar2Solar(YY - 1, 12, 23));
    lunarArray.push(Lunar2Solar(YY, 1, 1));
    lunarArray.push(Lunar2Solar(YY, 1, 15));
    lunarArray.push(Lunar2Solar(YY, 2, 2));
    lunarArray.push(Lunar2Solar(YY, 3, 3));
    lunarArray.push(Lunar2Solar(YY, 5, 5));
    lunarArray.push(Lunar2Solar(YY, 7, 7));
    lunarArray.push(Lunar2Solar(YY, 7, 15));
    lunarArray.push(Lunar2Solar(YY, 8, 15));
    lunarArray.push(Lunar2Solar(YY, 9, 9));
  
    var out2 = "";
    for (var j = 0; j <= 10; j++) {
      out2 += lunarArray[j] + " — " + lunarHolidaysList2[j] + "<br />";
    }
    return out2;
  }

  
