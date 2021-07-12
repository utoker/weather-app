export default async function getWeather() {
  const metric = document.querySelector("#rad-metric").checked;
  let type = "";
  metric ? (type = "metric") : (type = "imperial");
  let txtCity = document.querySelector(".txt-city");
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${txtCity.value}&units=${type}&appid=8e548fe03b1aee970326701ef5942352`
    );
    let weather = await response.json();
    document.querySelector(".spn-name").textContent = weather.name;
    document.querySelector(".spn-temp").textContent = weather.main.temp;
    document.querySelector(".spn-feels").textContent = weather.main.feels_like;
  } catch (e) {
    console.log(e);
  }
}
