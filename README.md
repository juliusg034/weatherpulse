# Weather Pulse 🌤️

A responsive web application that delivers real-time 7-day weather forecasts — built with Node.js, Express, and the WeatherAPI.

**🌐 Live Demo: [weatherpulse.xyz](https://weatherpulse.xyz)**

![Weather Pulse Screenshot](https://github.com/user-attachments/assets/50b3f575-540c-451b-961a-234843a9335a)

---

## Demo

🌐 [weatherpulse.xyz](https://weatherpulse.xyz) — live and deployed
▶️ [Watch the walkthrough on YouTube](https://www.youtube.com/watch?v=F3UzOItKjYM)

---

## Features

- 🔍 Search by city name or postal code
- 📅 7-day weather forecast with daily breakdowns
- 🌡️ Temperature, humidity, and wind speed at a glance
- ☁️ Dynamic weather condition descriptions
- 📱 Fully responsive layout with Tailwind CSS

---

## Tech Stack

| Layer      | Technology          |
|------------|---------------------|
| Runtime    | Node.js             |
| Framework  | Express.js          |
| Templating | EJS                 |
| Styling    | Tailwind CSS        |
| Data       | WeatherAPI          |

---

## Getting Started

### Prerequisites

- Node.js v18+
- A free API key from [WeatherAPI.com](https://www.weatherapi.com/)

### Installation

```bash
git clone https://github.com/your-username/weather-pulse.git
cd weather-pulse
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
WEATHER_API_KEY=your_api_key_here
PORT=3000
```

### Run the App

```bash
npm start
```

Visit `http://localhost:3000` in your browser.

---

## API Reference

Weather data is fetched from the [WeatherAPI](https://www.weatherapi.com/docs/) forecast endpoint.

```
GET /weather?api_key=YOUR_API_KEY&q=94016&days=7
```

| Parameter | Type     | Description                        |
|-----------|----------|------------------------------------|
| `api_key` | `string` | **Required.** Your WeatherAPI key  |
| `q`       | `string` | **Required.** City name or ZIP code |
| `days`    | `number` | **Required.** Number of days (1–7) |

---

## What I Learned

**Integrating a third-party REST API end-to-end**
This was my first project consuming a real external API in production. I learned how to read API documentation, manage authentication via query parameters, and structure server-side requests using `axios`. I also got practice parsing and reshaping nested JSON response data before passing it to my templates.

**Async/await and error handling in Express**
One of my bigger challenges was handling asynchronous calls cleanly inside Express route handlers. I learned how unhandled promise rejections can silently crash a Node server, and implemented try/catch blocks across all async routes. I also added user-facing error states for invalid city searches and API timeouts — a detail I initially overlooked that made the app feel much more polished.

---

## Project Structure

```
weather-pulse/
├── views/
│   ├── index.ejs       # Search page
│   └── weather.ejs     # Forecast display
├── public/
│   └── styles/         # Tailwind output
├── routes/
│   └── weather.js      # API logic & routing
├── app.js              # Express entry point
└── .env.example
```

---

## Future Improvements

- [ ] Geolocation support to auto-detect user's city
- [ ] Hourly forecast breakdown
- [ ] Persistent search history via localStorage
- [ ] Unit toggle between °F and °C

---

## License

MIT
