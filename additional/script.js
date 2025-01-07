const weekDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const getTimeData = () => {
  const now = new Date();
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
    case hours >= 12 && hours < 17:
      timesOfDay = "Добрый день";
      break;
    case hours >= 17 && hours <= 23:
      timesOfDay = "Добрый вечер";
      break;
  }

  return { timesOfDay, day, hours, minutes, seconds, ampm, daysDifference };
};

const timeUpdate = () => {
  const getTime = getTimeData();

  let hours = getTime.hours % 12;
  hours = hours ? hours : 12;
  hours = String(hours).padStart(2, "0");
  let resultStr = `${getTime.timesOfDay}<br>Сегодня: ${getTime.day}<br>Текущее время: ${hours}:${getTime.minutes}:${getTime.seconds} ${getTime.ampm}<br>До нового года осталось ${getTime.daysDifference} дней`;

  document.body.innerHTML = resultStr;
};

setInterval(timeUpdate, 1000);
