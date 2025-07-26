# CSI-Assignment 8

# 🛒 Product REST API with JWT Authentication + Weather API + File Upload + Error Handling

A clean and modular RESTful API built with **Node.js + Express** to manage a collection of products with full CRUD functionality. This version implements:

- **JWT-based authentication** for secure access to product routes
- **Weather API Integration** (using OpenWeatherMap)
- **File Upload Feature** (using Multer)

---

## 🚀 Features

- ✅ **JWT Authentication**: Secure endpoints with token-based auth
- ✅ **CRUD operations** for managing products
- ✅ **Input validation** using Joi
- ✅ **Centralized error handler**
- ✅ **Weather data** from OpenWeatherMap API
- ✅ **File upload** endpoint using Multer
- ✅ **Postman tested**

---

## 📂 Tech Stack

- **Node.js**, **Express.js**
- **jsonwebtoken** – Token-based auth
- **bcryptjs** – Password hashing
- **Joi** – Input validation
- **Multer** – File uploading
- **Axios** – HTTP client (for weather API)
- **Morgan** – Logging
- **Dotenv** – Environment config
- **Nodemon** – Dev server

---

## 📁 Project Structure

```bash
product-api/
├── src/
│   ├── controllers/       # Business logic for products, auth, weather, file upload
│   ├── routes/            # All route handlers
│   ├── middleware/        # Auth & error-handling middleware
│   ├── validation/        # Joi schemas
│   ├── auth/              # Login controller & token logic
│   └── server.js          # App entry point
├── .env                   # API keys and secrets
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/Arnavjain2503/CSI-Assignment8.git
cd CSI-Assignment6/product-api
```
2. Install dependencies:
```bash
npm install
```
3. Add environment variables in `.env`:
```env
PORT=5000
JWT_SECRET=your_jwt_secret_here
WEATHER_API_KEY=your_openweathermap_key_here
```
4. Run development server:
```bash
npm run dev
```
> Server: http://localhost:5000

---

## 🔐 Auth Endpoint

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/auth/login` | Get JWT Token |

**Sample Login:**
```json
{
  "username": "admin",
  "password": "password123"
}
```

---

## 🔒 Protected Product Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/products       | Get all products |
| GET    | /api/products/:id   | Get a single product |
| POST   | /api/products       | Add new product |
| PUT    | /api/products/:id   | Update product |
| DELETE | /api/products/:id   | Delete product |

**Headers:**
```http
Authorization: Bearer <your-jwt-token>
```

---

## 📦 Sample Product Payload
```json
{
  "name": "Wireless Mouse",
  "price": 24.99
}
```

---

## 📊 Weather API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/weather/:city` | Get weather for a city (uses OpenWeatherMap API) |

**Example:**
```
GET http://localhost:5000/api/weather/London
```

**Response (Success)**
```json
{
  "city": "London",
  "temperature": 20.45,
  "weather": "Cloudy",
  "description": "overcast clouds",
  "humidity": 78,
  "windSpeed": 4.2
}
```

**Response (Invalid Key)**
```json
{
  "message": "Unable to fetch weather data",
  "error": "Request failed with status code 401"
}
```

---

## 📂 File Upload

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/upload` | Upload a file (image/pdf) |

**Form-Data:**
- Key: `file`
- Value: Choose any file

---

## 🔮 Screenshots (Postman)

| Operation                     | Screenshot                                |
|------------------------------|--------------------------------------------|
| ✅ Upload file              | ![Upload](screenshots/Screenshot%20(172).png) |
| ❌ Error - no price         | ![Error](screenshots/Screenshot%20(173).png) |
| ❌ Error - no name          | ![Error](screenshots/Screenshot%20(174).png) |
| ✅ Item Added            | ![Error](screenshots/Screenshot%20(175).png) |
| ✅ Weather - London         | ![Weather](screenshots/Screenshot%20(176).png) |
| ✅ Weather - Pune           | ![Weather](screenshots/Screenshot%20(177).png) |
| ✅ Weather - US             | ![Weather](screenshots/Screenshot%20(178).png) |

---

### 💡 Notes
- Use `.env` for managing secrets
- All routes tested via Postman
- JWT token expires in 1 hour
- Add more cities for weather testing
- Use valid OpenWeatherMap key from https://openweathermap.org/api

---

## © Author
**Arnav Jain**
