# 🚀 Student Management System (Dockerized Full Stack Project)

A **real-world Full Stack Web Application** built using **HTML, CSS, JavaScript, Node.js, Express, MongoDB, Mongo Express, and Docker Compose**.

This project demonstrates how modern applications work in production using containerization.

---

## 📌 Project Overview

This system allows users to:

- ➕ Add Students
- 📄 View Students
- 🗑️ Delete Students
- 📊 Store data in MongoDB
- 👀 View database visually using Mongo Express

---

## 🏗️ Architecture

```
Frontend (HTML/CSS/JS)
        ↓
Backend (Node.js + Express)
        ↓
MongoDB (Database)
        ↓
Mongo Express (Database UI)
```

---

## 🐳 Docker Architecture

```
Frontend Container  → Nginx
Backend Container   → Node.js API
MongoDB Container   → Database
Mongo Express       → DB UI
```

---

## ⚙️ Tech Stack

- HTML5 / CSS3 / JavaScript
- Node.js
- Express.js
- MongoDB
- Mongo Express
- Docker
- Docker Compose

---

## 📂 Project Structure

```
student-management-system/

├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── Dockerfile
│
├── backend/
│   ├── server.js
│   ├── models/
│   │   └── Student.js
│   └── Dockerfile
│
└── docker-compose.yml
```

---

## 🚀 How to Run This Project

### Step 1: Clone Repo
```
git clone <your-repo-url>
cd student-management-system
```

### Step 2: Start Docker Containers
```
docker compose up -d --build
```

---

## 🌐 Access URLs

| Service | URL |
|--------|-----|
| Frontend | http://localhost |
| Backend API | http://localhost:5000/students |
| Mongo Express | http://localhost:8081 |

---

## 🧠 What I Learned

- Docker Images & Containers
- Docker Compose multi-service setup
- Backend API development
- MongoDB CRUD operations
- Frontend ↔ Backend integration
- Database visualization using Mongo Express
- Real-world full-stack architecture

---

## 📸 Features Screenshot

> Add your dashboard screenshot here

---

## 🔥 Future Improvements

- Update/Delete students feature
- Authentication (JWT)
- React frontend upgrade
- AWS EC2 deployment
- CI/CD pipeline (GitHub Actions)

---

## 👨‍💻 Author

**Nitesh Vishwakarma**

- Cloud & Security Student
- AWS | Docker | DevOps Enthusiast

---

## ⭐ If you like this project

Give a ⭐ to this repository and follow for more DevOps + Cloud projects!
