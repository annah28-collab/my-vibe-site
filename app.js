const DEFAULT_CAPITALS = [
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

const MORE_CAPITALS = [
  { city: "Bangkok", country: "Thailand", lat: 13.7563, lon: 100.5018 },
  { city: "Amsterdam", country: "Netherlands", lat: 52.3676, lon: 4.9041 },
  { city: "Athens", country: "Greece", lat: 37.9838, lon: 23.7275 },
  { city: "Stockholm", country: "Sweden", lat: 59.3293, lon: 18.0686 },
  { city: "Oslo", country: "Norway", lat: 59.9139, lon: 10.7522 },
  { city: "Warsaw", country: "Poland", lat: 52.2297, lon: 21.0122 },
  { city: "Vienna", country: "Austria", lat: 48.2082, lon: 16.3738 },
  { city: "Brussels", country: "Belgium", lat: 50.8503, lon: 4.3517 },
  { city: "Lisbon", country: "Portugal", lat: 38.7223, lon: -9.1393 },
  { city: "Dublin", country: "Ireland", lat: 53.3498, lon: -6.2603 },
  { city: "Reykjavik", country: "Iceland", lat: 64.1466, lon: -21.9426 },
  { city: "Ankara", country: "Turkey", lat: 39.9334, lon: 32.8597 },
  { city: "Tehran", country: "Iran", lat: 35.6892, lon: 51.389 },
  { city: "Islamabad", country: "Pakistan", lat: 33.6844, lon: 73.0479 },
  { city: "Manila", country: "Philippines", lat: 14.5995, lon: 120.9842 },
  { city: "Hanoi", country: "Vietnam", lat: 21.0278, lon: 105.8342 },
  { city: "Singapore", country: "Singapore", lat: 1.3521, lon: 103.8198 },
  { city: "Wellington", country: "New Zealand", lat: -41.2865, lon: 174.7762 },
  { city: "Bogotá", country: "Colombia", lat: 4.711, lon: -74.0721 },
  { city: "Lima", country: "Peru", lat: -12.0464, lon: -77.0428 },
  { city: "Santiago", country: "Chile", lat: -33.4489, lon: -70.6693 },
  { city: "Caracas", country: "Venezuela", lat: 10.4806, lon: -66.9036 },
  { city: "Havana", country: "Cuba", lat: 23.1136, lon: -82.3666 },
  { city: "Kingston", country: "Jamaica", lat: 18.0179, lon: -76.8099 },
  { city: "Accra", country: "Ghana", lat: 5.6037, lon: -0.187 },
  { city: "Lagos", country: "Nigeria", lat: 6.5244, lon: 3.3792 },
  { city: "Pretoria", country: "South Africa", lat: -25.7479, lon: 28.2293 },
  { city: "Addis Ababa", country: "Ethiopia", lat: 9.032, lon: 38.7469 },
  { city: "Doha", country: "Qatar", lat: 25.2854, lon: 51.531 },
  { city: "Abu Dhabi", country: "UAE", lat: 24.4539, lon: 54.3773 },
];

const STORAGE_KEY = "weather-capitals";
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
const addModal = document.getElementById("add-modal");
const addForm = document.getElementById("add-form");
const cityPreset = document.getElementById("city-preset");
const citySearch = document.getElementById("city-search");
const addError = document.getElementById("add-error");
const cancelAddBtn = document.getElementById("cancel-add");

let capitals = loadCapitals();

function loadCapitals() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {
    /* use defaults */
  }
  return [...DEFAULT_CAPITALS];
}

function saveCapitals() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(capitals));
}

function capitalKey(c) {
  return `${c.city}|${c.country}`.toLowerCase();
}

function isDuplicate(candidate) {
  const key = capitalKey(candidate);
  return capitals.some((c) => capitalKey(c) === key);
}

function getAvailablePresets() {
  const all = [...MORE_CAPITALS, ...DEFAULT_CAPITALS];
  const seen = new Set(capitals.map(capitalKey));
  return all.filter((c) => !seen.has(capitalKey(c)));
}

function populatePresetSelect() {
  const available = getAvailablePresets();
  cityPreset.innerHTML = '<option value="">Choose a capital…</option>';
  for (const c of available) {
    const opt = document.createElement("option");
    opt.value = JSON.stringify(c);
    opt.textContent = `${c.city}, ${c.country}`;
    cityPreset.appendChild(opt);
  }
}

function getWeatherInfo(code) {
  return WMO_CODES[code] ?? { label: "Unknown", icon: "🌡️" };
}

function cToF(celsius) {
  return Math.round((celsius * 9) / 5 + 32);
}

function formatWind(kmh) {
  return `${Math.round(kmh)} km/h`;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function fetchCapitalWeather(capital) {
  const params = new URLSearchParams({
    latitude: capital.lat,
    longitude: capital.lon,
    current: "temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m",
    timezone: "auto",
  });

  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

async function geocodeCity(name) {
  const params = new URLSearchParams({ name, count: "8", language: "en" });
  const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?${params}`);
  if (!response.ok) throw new Error("Geocoding failed");
  const data = await response.json();
  if (!data.results?.length) return null;
  const hit = data.results.find((r) => r.feature_code === "PPLC") ?? data.results[0];
  return {
    city: hit.name,
    country: hit.country ?? hit.country_code ?? "Unknown",
    lat: hit.latitude,
    lon: hit.longitude,
  };
}

function renderCard(result) {
  const { capital } = result;

  if (result.error) {
    return `
      <article class="card card-error" style="animation-delay: 0ms">
        <div class="card-header">
          <div>
            <h2 class="card-city">${escapeHtml(capital.city)}</h2>
            <p class="card-country">${escapeHtml(capital.country)}</p>
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
          <h2 class="card-city">${escapeHtml(capital.city)}</h2>
          <p class="card-country">${escapeHtml(capital.country)}</p>
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

function renderAddCard() {
  return `
    <button type="button" id="add-city-btn" class="card card-add" aria-label="Add another capital city">
      <span class="add-icon" aria-hidden="true">+</span>
      <span class="add-label">Add capital</span>
    </button>
  `;
}

function setView(state) {
  loadingEl.classList.toggle("hidden", state !== "loading");
  errorEl.classList.toggle("hidden", state !== "error");
  gridEl.classList.toggle("hidden", state !== "grid");
}

function showAddError(msg) {
  addError.textContent = msg;
  addError.classList.remove("hidden");
}

function hideAddError() {
  addError.classList.add("hidden");
  addError.textContent = "";
}

function openAddModal() {
  hideAddError();
  citySearch.value = "";
  cityPreset.value = "";
  populatePresetSelect();
  addModal.showModal();
  citySearch.focus();
}

function closeAddModal() {
  addModal.close();
  hideAddError();
}

async function addCapital(candidate) {
  if (isDuplicate(candidate)) {
    showAddError(`${candidate.city} is already on your list.`);
    return false;
  }
  capitals.push(candidate);
  saveCapitals();
  closeAddModal();
  await loadWeather();
  return true;
}

async function handleAddSubmit(e) {
  e.preventDefault();
  hideAddError();

  if (cityPreset.value) {
    const candidate = JSON.parse(cityPreset.value);
    await addCapital(candidate);
    return;
  }

  const query = citySearch.value.trim();
  if (!query) {
    showAddError("Pick a city from the list or type a name to search.");
    return;
  }

  try {
    const candidate = await geocodeCity(query);
    if (!candidate) {
      showAddError(`No city found for "${query}". Try another spelling.`);
      return;
    }
    await addCapital(candidate);
  } catch {
    showAddError("Could not search for that city. Check your connection.");
  }
}

async function loadWeather() {
  setView("loading");
  refreshBtn.disabled = true;

  try {
    const results = await Promise.all(
      capitals.map(async (capital, index) => {
        try {
          const data = await fetchCapitalWeather(capital);
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

    gridEl.innerHTML = results.map(renderCard).join("") + renderAddCard();
    document.getElementById("add-city-btn").addEventListener("click", openAddModal);
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
addForm.addEventListener("submit", handleAddSubmit);
cancelAddBtn.addEventListener("click", closeAddModal);
addModal.addEventListener("cancel", (e) => {
  e.preventDefault();
  closeAddModal();
});

loadWeather();
