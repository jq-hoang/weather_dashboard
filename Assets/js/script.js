document.querySelector("#search-btn").addEventListener("click", handleSearch);
const cityName = document.querySelector("#city-input");

const citySearch = document.querySelector("#city-input");

const currentCityName = document.querySelector("#current-city-name");

const currentCityTemp = document.querySelector("#current-city-temp");
const currentCityWind = document.querySelector("#current-city-wind");
const currentCityHumidity = document.querySelector("#current-city-humidity");

const day1Temp = document.querySelector("#day-1-temp");
const day1Wind = document.querySelector("#day-1-wind");
const day1Humidity = document.querySelector("#day-1-humidity");

const day2Temp = document.querySelector("#day-2-temp");
const day2Wind = document.querySelector("#day-2-wind");
const day2Humidity = document.querySelector("#day-2-humidity");

const day3Temp = document.querySelector("#day-3-temp");
const day3Wind = document.querySelector("#day-3-wind");
const day3Humidity = document.querySelector("#day-3-humidity");

const day4Temp = document.querySelector("#day-4-temp");
const day4Wind = document.querySelector("#day-4-wind");
const day4Humidity = document.querySelector("#day-4-humidity");

const day5Temp = document.querySelector("#day-5-temp");
const day5Wind = document.querySelector("#day-5-wind");
const day5Humidity = document.querySelector("#day-5-humidity");

const recentlySearchedItem1 = document.querySelector(
  "#recently-searched-item-1"
);
const recentlySearchedItem2 = document.querySelector(
  "#recently-searched-item-2"
);

//  currentCityElement = currentCity

function handleSearch(event) {
  // event.preventDefault();

  currentCityName.innerHTML = citySearch.value;

  const appid = "21312d8440b9b8b6e82049cd61f99fc3";

  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName.value}&appid=${appid}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("data ~>", data);
      const lat = data[0].lat;
      const lon = data[0].lon;

      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${appid}`
      )
        .then((response) => response.json())
        .then((data2) => {
          console.log("data2 ~>", data2);

          currentCityTemp.innerHTML = "Temp: " + data2.list[0].main.temp + "°F";
          currentCityWind.innerHTML =
            "Wind: " + data2.list[0].wind.speed + "mph";
          currentCityHumidity.innerHTML =
            "Humidity: " + data2.list[0].main.humidity + "%";

          day1Temp.innerHTML = "Temp: " + data2.list[7].main.temp + "°F";
          day1Wind.innerHTML = "Wind: " + data2.list[7].wind.speed + "mph";
          day1Humidity.innerHTML =
            "Humidity: " + data2.list[7].main.humidity + "%";

          day2Temp.innerHTML = "Temp: " + data2.list[15].main.temp + "°F";
          day2Wind.innerHTML = "Wind: " + data2.list[15].wind.speed + "mph";
          day2Humidity.innerHTML =
            "Humidity: " + data2.list[15].main.humidity + "%";

          day3Temp.innerHTML = "Temp: " + data2.list[24].main.temp + "°F";
          day3Wind.innerHTML = "Wind: " + data2.list[24].wind.speed + "mph";
          day3Humidity.innerHTML =
            "Humidity: " + data2.list[24].main.humidity + "%";

          day4Temp.innerHTML = "Temp: " + data2.list[31].main.temp + "°F";
          day4Wind.innerHTML = "Wind: " + data2.list[31].wind.speed + "mph";
          day4Humidity.innerHTML =
            "Humidity: " + data2.list[31].main.humidity + "%";

          day5Temp.innerHTML = "Temp: " + data2.list[39].main.temp + "°F";
          day5Wind.innerHTML = "Wind: " + data2.list[39].wind.speed + "mph";
          day5Humidity.innerHTML =
            "Humidity: " + data2.list[39].main.humidity + "%";

          // Get the previously searched cities from local storage
          let searchedCities =
            JSON.parse(localStorage.getItem("searchedCities")) || [];

          // Add the most recent search to the beginning of the array
          searchedCities.unshift(citySearch.value);

          // Keep only the 5 most recent searches
          if (searchedCities.length > 5) {
            searchedCities = searchedCities.slice(0, 5);
          }

          // Save the updated array to local storage
          localStorage.setItem(
            "searchedCities",
            JSON.stringify(searchedCities)
          );

          // Update the recently searched items in the UI
          // recentlySearchedItem1.textContent = searchedCities[0] || "";
          // recentlySearchedItem2.textContent = searchedCities[1] || "";
        });
    });
}
