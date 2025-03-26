
# Weather Pulse

The WeatherAPI Web App is a simple and responsive web application that provides users with real-time weather forecasts for the current week. It fetches data from a weather API and displays essential weather details such as temperature, humidity, wind speed, and weather conditions.
## Screenshots


![weatherpulse1](https://github.com/user-attachments/assets/50b3f575-540c-451b-961a-234843a9335a)


## Demo

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/F3UzOItKjYM/0.jpg)](https://www.youtube.com/watch?v=F3UzOItKjYM)

## Tech Stack


    Node.js
    Express.js
    EJS
    Tailwind CSS



## API Reference

#### Get all items

```http
  GET /weather
  GET /weather?api_key=YOUR_API_KEY&q=94016&days=7
```

| Parameter | Type     | Description                  |
| :-------- | :------- | :-------------------------   |
| `api_key` | `string` | **Required**. Your API key   |
|    `q`    | `string` | **Required**. City or Postal |
|   `days`  | `string` | **Required**. # of days      |
