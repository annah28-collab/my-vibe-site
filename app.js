const CAPITALS = [
  { city: "London", country: "United Kingdom", lat: 51.5074, lon: -0.1278 },
  { city: "Paris", country: "France", lat: 48.8566, lon: 2.3522 },
  { city: "Berlin", country: "Germany", lat: 52.52, lon: 13.405 },
  { city: "Madrid", country: "Spain", lat: 40.4168, lon: -3.7038 },
  { city: "Rome", country: "Italy", lat: 41.9028, lon: 12.4964 },
  { city: "Moscow", country: "Russia", lat: 55.7558, lon: 37.6173 },
  { city: "Cairo", country: "Egypt", lat: 30.0444, lon: 31.2357 },
  { city: "Nairobi", country: "Kenya", lat: -1.2921, lon: 36.8219 },
  { city: "Riyadh", country: "Saudi Arabia", lat: 24.7136, lon: 46.6753 },
  { city: "New Delhi", country: "India", lat: 28.6139, lon: 77.209 },
  { city: "Beijing", country: "China", lat: 39.9042, lon: 116.4074 },
  { city: "Tokyo", country: "Japan", lat: 35.6762, lon: 139.6503 },
  { city: "Seoul", country: "South Korea", lat: 37.5665, lon: 126.978 },
  { city: "Jakarta", country: "Indonesia", lat: -6.2088, lon: 106.8456 },
  { city: "Canberra", country: "Australia", lat: -35.2809, lon: 149.13 },
  { city: "Sydney", country: "Australia", lat: -33.8688, lon: 151.2093 },
  { city: "Washington, D.C.", country: "United States", lat: 38.9072, lon: -77.0369 },
  { city: "Ottawa", country: "Canada", lat: 45.4215, lon: -75.6972 },
  { city: "Mexico City", country: "Mexico", lat: 19.4326, lon: -99.1332 },
  { city: "Brasília", country: "Brazil", lat: -15.7942, lon: -47.8822 },
  { city: "Buenos Aires", country: "Argentina", lat: -34.6037, lon: -58.3816 },
];

const WMO_CODES = {
  0: { label: "Clear sky", icon: "☀️" },
  1: { label: "Mainly clear", icon: "🌤️" },
  2: { label: "Partly cloudy", icon: "⛅" },
  3: { label: "Overcast", icon: "☁️" },
  45: { label: "Foggy", icon: "🌫️" },
  48: { label: "Depositing rime fog", icon: "🌫️" },
  51: { label: "Light drizzle", icon: "🌦️" },
  53: { label: "Drizzle", icon: "🌦️" },
  55: { label: "Heavy drizzle", icon: "🌧️" },
  56: { label: "Freezing drizzle", icon: "🌧️" },
  57: { label: "Heavy freezing drizzle", icon: "🌧️" },
  61: { label: "Light rain", icon: "🌦️" },
  63: { label: "Rain", icon: "🌧️" },
  65: { label: "Heavy rain", icon: "🌧️" },
  66: { label: "Freezing rain", icon: "🌧️" },
  67: { label: "Heavy freezing rain", icon: "🌧️" },
  71: { label: "Light snow", icon: "🌨️" },
  73: { label: "Snow", icon: "❄️" },
  75: { label: "Heavy snow", icon: "❄️" },
  77: { label: "Snow grains", icon: "❄️" },
  80: { label: "Light showers", icon: "🌦️" },
  81: { label: "Showers", icon: "🌧️" },
  82: { label: "Heavy showers", icon: "⛈️" },
  85: { label: "Light snow showers", icon: "🌨️" },
  86: { label: "Heavy snow showers", icon: "❄️" },
  95: { label: "Thunderstorm", icon: "⛈️" },
  96: { label: "Thunderstorm with hail", icon: "⛈️" },
  99: { label: "Thunderstorm with heavy hail", icon: "⛈️" },
};

const loadingEl = document.getElementById("loading");
const errorEl = document.getElementById("error");
const gridEl = document.getElementById("weather-grid");
const lastUpdatedEl = document.getElementById("last-updated");
const refreshBtn = document.getElementById("refresh-btn");
const retryBtn = document.getElementById("retry-btn");

function getWeatherInfo(code) {
  return WMO_CODES[code] ?? { label: "Unknown", icon: "🌡️" };
}

function cToF(celsius) {
  return Math.round((celsius * 9) / 5 + 32);
}

function formatWind(kmh) {
  return `${Math.round(kmh)} km/h`;
}

async function fetchCapitalWeather(capital) {
  const params = new URLSearchParams({
    latitude: capital.lat,
    longitude: capital.lon,
    current: "temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m",
    timezone: "auto",
  });

  const url = `https://api.open-meteo.com/v1/forecast?${params}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const data = await response.json();
  return { capital, data };
}

function renderCard(result) {
  const { capital } = result;

  if (result.error) {
    return `
      <article class="card card-error" style="animation-delay: 0ms">
        <div class="card-header">
          <div>
            <h2 class="card-city">${capital.city}</h2>
            <p class="card-country">${capital.country}</p>
          </div>
          <span class="card-icon" aria-hidden="true">⚠️</span>
        </div>
        <p class="card-condition">Unable to load weather</p>
      </article>
    `;
  }

  const current = result.data.current;
  const weather = getWeatherInfo(current.weather_code);
  const tempC = Math.round(current.temperature_2m);
  const tempF = cToF(current.temperature_2m);

  return `
    <article class="card" style="animation-delay: ${result.index * 40}ms">
      <div class="card-header">
        <div>
          <h2 class="card-city">${capital.city}</h2>
          <p class="card-country">${capital.country}</p>
        </div>
        <span class="card-icon" aria-hidden="true">${weather.icon}</span>
      </div>
      <p class="card-temp">${tempC}<span>°C</span></p>
      <p class="card-condition">${weather.label} · ${tempF}°F</p>
      <div class="card-details">
        <div>
          Humidity
          <strong>${current.relative_humidity_2m}%</strong>
        </div>
        <div>
          Wind
          <strong>${formatWind(current.wind_speed_10m)}</strong>
        </div>
      </div>
    </article>
  `;
}

function setView(state) {
  loadingEl.classList.toggle("hidden", state !== "loading");
  errorEl.classList.toggle("hidden", state !== "error");
  gridEl.classList.toggle("hidden", state !== "grid");
}

async function loadWeather() {
  setView("loading");
  refreshBtn.disabled = true;

  try {
    const results = await Promise.all(
      CAPITALS.map(async (capital, index) => {
        try {
          const { data } = await fetchCapitalWeather(capital);
          return { capital, data, index };
        } catch {
          return { capital, error: true, index };
        }
      })
    );

    const allFailed = results.every((r) => r.error);
    if (allFailed) {
      setView("error");
      return;
    }

    gridEl.innerHTML = results.map(renderCard).join("");
    setView("grid");

    const now = new Date();
    lastUpdatedEl.textContent = `Updated ${now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
  } catch {
    setView("error");
  } finally {
    refreshBtn.disabled = false;
  }
}

refreshBtn.addEventListener("click", loadWeather);
retryBtn.addEventListener("click", loadWeather);

loadWeather();
