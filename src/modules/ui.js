import getWeather from "./api.js";
import radioChange from "./radio.js"
export default function getWeatherUi() {
  const txtCity = document.createElement("input");
  const btnGetWeather = document.createElement("button");
  const getWeatherDiv = document.createElement("div");
  document.body.append(getWeatherDiv);
  getWeatherDiv.append(txtCity);
  getWeatherDiv.append(btnGetWeather);
  txtCity.type = "text";
  btnGetWeather.textContent = "Get weather";
  txtCity.classList.add("txt-city");
  getWeatherDiv.classList.add("div-get-weather");
  btnGetWeather.addEventListener("click", getWeather);
  const spanName = document.createElement("span");
  const spanTemp = document.createElement("span");
  const spanFeels = document.createElement("span");
  const divType = document.createElement("div")
  getWeatherDiv.append(spanName);
  getWeatherDiv.append(spanTemp);
  getWeatherDiv.append(spanFeels);
  spanName.classList.add("spn-name");
  spanTemp.classList.add("spn-temp");
  spanFeels.classList.add("spn-feels");
  const unitMetric = document.createElement("input");
  unitMetric.type = "radio";
  const unitimperial = document.createElement("input");
  unitimperial.type = "radio";
  divType.append(unitimperial);
  unitimperial.value = "imperial";
  unitMetric.value = "metric";
  unitMetric.name = "unit";
  unitMetric.checked = true;
  unitimperial.name = "unit";
  const metricLabel = document.createElement("Label");
  metricLabel.setAttribute("for", "rad-metric");
  metricLabel.textContent = "Metric";
  divType.append(metricLabel);
  const imperialLabel = document.createElement("Label");
  imperialLabel.setAttribute("for", "rad-imperial");
  imperialLabel.textContent = "imperial";
  divType.append(imperialLabel);
  unitMetric.id = "rad-metric";
  unitimperial.id = "rad-imperial";
  unitMetric.addEventListener("change",radioChange)
  unitimperial.addEventListener("change",radioChange)
  getWeatherDiv.append(divType);
  divType.append(unitMetric);

}
