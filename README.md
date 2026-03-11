# 🔐 Login Registration System (Spring Boot + JWT)

![Java](https://img.shields.io/badge/Java-17-orange)
![Spring Boot](https://img.shields.io/badge/SpringBoot-Backend-brightgreen)
![MySQL](https://img.shields.io/badge/MySQL-Database-blue)
![Maven](https://img.shields.io/badge/Maven-Build-red)
![JWT](https://img.shields.io/badge/JWT-Authentication-yellow)

A secure **Login & Registration REST API** built using **Spring Boot**.  
This project provides authentication APIs with **JWT Token based security**.

It allows users to **register, login, and receive a JWT token** for authentication.

---

# 🚀 Features

✅ User Registration  
✅ User Login Authentication  
✅ JWT Token Generation  
✅ Password Encryption (BCrypt)  
✅ RESTful API Architecture  
✅ Clean Layered Structure  

---

# 🛠 Tech Stack

| Technology | Description |
|-----------|-------------|
| Java | Programming Language |
| Spring Boot | Backend Framework |
| Spring Security | Authentication & Security |
| JWT | Token-based authentication |
| Spring Data JPA | ORM |
| MySQL | Database |
| Maven | Dependency Management |
| Lombok | Reduce Boilerplate Code |

---

# 📂 Project Structure

```bash
src/main/java/Login/Login
│
├── controller
│     └── AuthController.java
│
├── service
│     └── AuthService.java
│
├── repository
│     └── UserRepository.java
│
├── entity
│     └── User.java
│
├── dto
│     ├── LoginRequest.java
│     ├── RegisterRequest.java
│     └── LoginResponse.java
│
├── security
│     └── JwtUtil.java
│
├── config
│     └── PasswordConfig.java
│
└── LoginSystemApplication.java
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/hemant-077/Login-Registration-System.git
```

---

## 2️⃣ Navigate to the Project

```bash
cd Login-Registration-System
```

---

## 3️⃣ Configure Database

Update **application.properties**

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/login_system
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

## 4️⃣ Run the Application

```bash
mvn spring-boot:run
```

Server will start at

```
http://localhost:8080
```

---

# 📡 API Endpoints

## Register User

```
POST /auth/register
```

### Request Body

```json
{
  "name": "Hemant",
  "email": "hemant@gmail.com",
  "password": "123456"
}
```

---

## Login User

```
POST /auth/login
```

### Request Body

```json
{
  "email": "hemant@gmail.com",
  "password": "123456"
}
```

---

# 🔑 Authentication

After login, the API returns a **JWT Token**.

Example Response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

This token can be used for **authenticated requests**.

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

⭐ If you like this project, give it a **star on GitHub**.
