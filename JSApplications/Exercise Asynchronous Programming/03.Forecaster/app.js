function attachEvents() {
  let weatherIcons = {
    Sunny: "&#x2600",
    "Partly sunny": "&#x26C5",
    Overcast: "&#x2601",
    Rain: "&#x2614",
    Degrees: "&#176",
  };

  // 1. get dom elements references
  // 2. make request to  http://localhost:3030/jsonstore/forecaster/locations
  // 3. search the response for the submitted location
  // 4. make two more requests to http://localhost:3030/jsonstore/forecaster/today/:code and  http://localhost:3030/jsonstore/forecaster/upcoming/:code
  // 5. manipulate the dom(create ,append elements with the requested data);
  const text = document.getElementById("location");
  const divForecast = document.getElementById("forecast");
  const divCurrent = document.getElementById("current");
  const divThree = document.getElementById("upcoming");

  document.getElementById("submit").addEventListener("click", (onSubmit) => {
   
    divForecast.style.display = "inline";
    let url = "http://localhost:3030/jsonstore/forecaster/locations";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let loc = data.filter((el) => el.name == text.value);

        fetch(`http://localhost:3030/jsonstore/forecaster/today/${loc[0].code}`)
          .then((response) => response.json())
          .then((data) => {
            let icon = data.forecast.condition;
            let divClassForecasts = document.createElement("div");
            divClassForecasts.classList = "forecasts";
            let spanClassSymbol = document.createElement("span");
            spanClassSymbol.classList = "condition symbol";
            spanClassSymbol.innerHTML = weatherIcons[icon];
            let spanClassCondition = document.createElement("span");
            spanClassCondition.classList = "condition";

            let spanOne = document.createElement("span");
            spanOne.classList = "forecast-data";
            spanOne.textContent = data.name;
            let spanTwo = document.createElement("span");
            spanTwo.classList = "forecast-data";
            spanTwo.innerHTML = `${data.forecast.low}${weatherIcons.Degrees}/${data.forecast.high}${weatherIcons.Degrees}`;
            let spanThree = document.createElement("span");
            spanThree.classList = "forecast-data";
            spanThree.textContent = data.forecast.condition;

            divClassForecasts.appendChild(spanClassSymbol);
            divClassForecasts.appendChild(spanClassCondition);

            spanClassCondition.appendChild(spanOne);
            spanClassCondition.appendChild(spanTwo);
            spanClassCondition.appendChild(spanThree);

            divCurrent.appendChild(divClassForecasts);
          });
        fetch(
          `http://localhost:3030/jsonstore/forecaster/upcoming/${loc[0].code}`
        )
          .then((response) => response.json())
          .then((data) => {
            data.forecast.forEach((el) => {
              let icon = el.condition;
              console.log(el.condition);
              let divClassForecasts = document.createElement("div");
              divClassForecasts.classList = "forecasts";
              let spanClassSymbol = document.createElement("span");
              spanClassSymbol.classList = "condition symbol";
              spanClassSymbol.innerHTML = weatherIcons[icon];
              let spanClassCondition = document.createElement("span");
              spanClassCondition.classList = "condition";

              let spanOne = document.createElement("span");
              spanOne.classList = "forecast-data";
              spanOne.textContent = data.name;
              let spanTwo = document.createElement("span");
              spanTwo.classList = "forecast-data";
              spanTwo.innerHTML = `${el.low}${weatherIcons.Degrees}/${el.high}${weatherIcons.Degrees}`;
              let spanThree = document.createElement("span");
              spanThree.classList = "forecast-data";
              spanThree.textContent = el.condition;

              divClassForecasts.appendChild(spanClassSymbol);
              divClassForecasts.appendChild(spanClassCondition);

              spanClassCondition.appendChild(spanOne);
              spanClassCondition.appendChild(spanTwo);
              spanClassCondition.appendChild(spanThree);

              divThree.appendChild(divClassForecasts);
            });
          });
      })
      .catch((err) => divForecast.style.display == "none");
  });
}

attachEvents();
