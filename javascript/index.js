function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");

  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]SS[</small>] [<small>]A[</small>]"
  );

  let seoulElement = document.querySelector("#seoul");

  let seoulDateElement = seoulElement.querySelector(".date");
  let seoulTimeElement = seoulElement.querySelector(".time");
  let seoulTime = moment().tz("Asia/Seoul");

  seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
  seoulTimeElement.innerHTML = seoulTime.format(
    "h:mm:ss [<small>]SS[</small>] [<small>]A[</small>]"
  );

  let warsawElement = document.querySelector("#warsaw");

  let warsawDateElement = warsawElement.querySelector(".date");
  let warsawTimeElement = warsawElement.querySelector(".time");
  let warsawTime = moment().tz("Europe/Warsaw");

  warsawDateElement.innerHTML = warsawTime.format("MMMM Do YYYY");
  warsawTimeElement.innerHTML = warsawTime.format(
    "h:mm:ss [<small>]SS[</small>] [<small>]A[</small>]"
  );

  let athensElement = document.querySelector("#athens");

  let athensDateElement = athensElement.querySelector(".date");
  let athensTimeElement = athensElement.querySelector(".time");
  let athensTime = moment().tz("Europe/Athens");

  athensDateElement.innerHTML = athensTime.format("MMMM Do YYYY");
  athensTimeElement.innerHTML = athensTime.format(
    "h:mm:ss [<small>]SS[</small>] [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
if (cityTimeZone === 'current') {
  cityTimeZone = moment.tz.guess();
}


  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="index.html">⬅️</a>
  `;

}


updateTime();
setInterval(updateTime, 10);


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);