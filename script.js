'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// ! Display Error message

const displayError = function (err) {
  countriesContainer.insertAdjacentHTML(
    'beforebegin',
    `<p class="error">${err.message}</p>`
  );
  countriesContainer.style.opacity = 100;
};

// ! Render UI

const renderUI = function (data, className = '') {
  const html = `
  <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${Object.values(data.name)[1]}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              data.population / 1_000_000
            ).toFixed(2)}M people</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('afterbegin', html);
  countriesContainer.style.opacity = 100;
};

// ! Get current Location
const getLocation = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// ! Get json file for fetch

const getJson = async function (url, message = `Couldn't find the country`) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${message} ${response.status}`);
  }
  return response.json();
};

// ! Get countryData
const getCountryInformation = async function () {
  try {
    // ! Get coords
    const {
      coords: { latitude, longitude },
    } = await getLocation();
    // console.log(latitude, longitude);

    // ! Get country based on coords
    const {
      address: { country },
    } = await getJson(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
      `Couldn't find the country`
    );

    // ! Get country information
    const [data] = await getJson(
      `https://restcountries.com/v3.1/name/${country}`,
      `No valid information is available about country!`
    );
    // ! Render the UI
    renderUI(data);

    // ! Neighbor countries

    for (const cur of data.borders) {
      const [info] = await getJson(
        `https://restcountries.com/v3.1/alpha/${cur}`
      );
      renderUI(info, 'neighbor');
    }
  } catch (err) {
    displayError(err);
    console.error(err.message);
  }
};
btn.addEventListener('click', getCountryInformation);
