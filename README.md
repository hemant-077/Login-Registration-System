# 🔐 Login Registration System (Spring Boot + JWT)

![Java](https://img.shields.io/badge/Java-17-orange)
![Spring Boot](https://img.shields.io/badge/SpringBoot-Backend-brightgreen)
![MySQL](https://img.shields.io/badge/MySQL-Database-blue)
![Maven](https://img.shields.io/badge/Maven-Build-red)
![JWT](https://img.shields.io/badge/JWT-Authentication-yellow)
![React](https://img.shields.io/badge/React-Frontend-blue)

A full stack **Login & Registration System** built using **Spring Boot + JWT + React**.

The project provides **secure authentication APIs** and a **frontend interface** where users can register and login.

---

# 🚀 Features

### Backend
✅ User Registration  
✅ User Login Authentication  
✅ JWT Token Generation  
✅ Password Encryption (BCrypt)  
✅ RESTful API Architecture  

### Frontend
✅ User Login Page  
✅ User Registration Page  
✅ API Integration with Backend  
✅ Modern UI

---

# 🛠 Tech Stack

| Technology | Description |
|-----------|-------------|
| Java | Programming Language |
| Spring Boot | Backend Framework |
| Spring Security | Authentication |
| JWT | Token-based authentication |
| Spring Data JPA | ORM |
| MySQL | Database |
| React | Frontend |
| Axios | API Calls |
| Maven | Dependency Management |

---

# 📂 Project Structure

```bash
Login-Registration-System
│
├── backend
│   └── src/main/java/Login/Login
│       │
│       ├── controller
│       ├── service
│       ├── repository
│       ├── entity
│       ├── dto
│       ├── security
│       ├── config
│       └── LoginSystemApplication.java
│
└── frontend
    ├── src
    │   ├── components
    │   ├── pages
    │   └── App.js
    │
    └── package.json
```

---

# ⚙️ Backend Setup

## Clone Repository

```bash
git clone https://github.com/hemant-077/Login-Registration-System.git
```

```
cd Login-Registration-System
```

---

## Configure Database

Update `application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/login_system
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

## Run Backend

```bash
mvn spring-boot:run
```

Server will start at

```
http://localhost:8080
```

---

# 💻 Frontend Setup

Navigate to frontend folder

```bash
cd login-system-frontend
```

Install dependencies

```bash
npm install
```

Run frontend

```bash
npm start
```

Frontend will start at

```
http://localhost:3000
```

---

# 📡 API Endpoints

### Register

```
POST /auth/register
```

Request Body

```json
{
  "name": "Hemant",
  "email": "hemant@gmail.com",
  "password": "123456"
}
```

---

### Login

```
POST /auth/login
```

Request Body

```json
{
  "email": "hemant@gmail.com",
  "password": "123456"
}
```

---

# 🔑 Authentication

After successful login the API returns a **JWT Token**.

Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Use this token in **Authorization Header**

```
Authorization: Bearer <token>
```

---

# 🧪 API Testing

You can test APIs using:

- Postman  
- Thunder Client (VS Code)

---

# 👨‍💻 Author

**Hemant Chhoker**

GitHub  
https://github.com/hemant-077

---

⭐ If you like this project give it a **star on GitHub**.
