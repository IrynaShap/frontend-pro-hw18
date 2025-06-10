/* eslint-disable no-alert */
// Alerts are expected here

const inputYear = prompt('Введіть рік народження:');
const sorryText = 'Шкода, що Ви не захотіли ввести свій(ю)';
const currentYear = new Date().getFullYear();
const birthYear = Number(inputYear);

if (inputYear === null) {
  alert(`${sorryText} рік народження.`);
} else if (
  Number.isNaN(birthYear) ||
  birthYear < 1900 ||
  birthYear > currentYear
) {
  alert('Будь ласка, введіть коректний рік народження.');
} else {
  const city = prompt('Введіть в якому місті ви живете:');
  if (city === null) {
    alert(`${sorryText} місто.`);
  } else {
    const favouriteSport = prompt('Введіть ваш улюблений вид спорту:');
    if (favouriteSport === null) {
      alert(`${sorryText} улюблений вид спорту.`);
    } else {
      const userAge = currentYear - birthYear;

      let message = `Ваш вік: ${userAge}.`;

      let country;

      switch (city.trim().toLowerCase()) {
        case 'київ':
          country = 'України';
          break;
        case 'вашингтон':
          country = 'США';
          break;
        case 'лондон':
          country = 'Великої Британії';
          break;
        default:
          country = null;
          break;
      }

      const location = country
        ? `Ти живеш у столиці ${country}`
        : `Ти живеш у місті ${city}`;

      message += `\n${location}.`;

      let champion;

      switch (favouriteSport.trim().toLowerCase()) {
        case 'футбол':
          champion = 'Ліонелем Мессі';
          break;
        case 'бокс':
          champion = 'Майком Тайсоном';
          break;
        case 'теніс':
          champion = 'Новаком Джоковичем';
          break;
        default:
          champion = null;
          break;
      }

      if (champion) {
        message += `\nКруто! Хочеш стати ${champion}?`;
      }

      alert(message);
    }
  }
}
