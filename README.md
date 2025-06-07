#  🛒 E-Commerce Microservices Application

This is a scalable, modular e-commerce backend built using **Spring Boot Microservices Architecture**. It includes key services like product catalog, authentication, order management, and inventory, all communicating via **REST APIs** and **message queues**.



## 📦 Microservices Included

| Service Name        | Description                                 |
|---------------------|---------------------------------------------|
| 🧾 `auth-service`   | Handles user registration, login, JWT auth  |
| 📦 `product-service`| Manages product catalog                     |
| 📋 `order-service`  | Processes user orders                       |
| 🧮 `inventory-service` | Tracks stock and availability             |
| 📡 `api-gateway`    | Routes requests to microservices            |
| 🧭 `discovery-server` | Eureka server for service registration     |
| 📨 `notification-service` | Sends async notifications (e.g., via RabbitMQ) |



## 🚀 Features

- Spring Boot + Spring Cloud microservices
- Spring Security + JWT Authentication
- Eureka Discovery Server
- API Gateway with Route Filtering
- MongoDB / MySQL / PostgreSQL (depending on service)
- RabbitMQ for async communication
- Docker + Docker Compose support (optional)

