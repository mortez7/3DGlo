const now = new Date();
let resultStr = "";
const weekDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const day = weekDays[now.getDay()];
let hours = now.getHours().toString().padStart(2, "0");
const minutes = now.getMinutes().toString().padStart(2, "0");
const seconds = now.getSeconds().toString().padStart(2, "0");
const ampm = hours >= 12 ? "PM" : "AM";
const newYearDate = new Date(now.getFullYear() + 1, 0, 1).getTime();
const dateNow = now.getTime();
const timeDifference = newYearDate - dateNow;
const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
let timesOfDay = "";

switch (true) {
  case hours >= 0 && hours < 5:
    timesOfDay = "Доброй ночи";
    break;
  case hours >= 5 && hours < 12:
    timesOfDay = "Доброе утро";
    break;
  case hours >= 12 && hours < 18:
    timesOfDay = "Добрый день";
    break;
  case hours >= 18 && hours <= 23:
    timesOfDay = "Добрый вечер";
    break;
}

hours = hours % 12 || 12;
hours = String(hours).padStart(2, "0");
resultStr = `${timesOfDay}<br>Сегодня: ${day}<br>Текущее время: ${hours}:${minutes}:${seconds} ${ampm}<br>До нового года осталось ${daysDifference} дней`;

document.body.innerHTML = resultStr;
