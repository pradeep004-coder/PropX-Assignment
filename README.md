# 🚀 PropX Assignment

A **MERN stack authentication project** with a clean separation of **Frontend (React + Vite)** and **Backend (Node.js + Express + MongoDB)**.
The project includes **user authentication (Signup, Login, Account access)**, API integration, and a responsive UI.

---

## 📂 Project Structure

```
PropX-Assignment
│
├── Backend/                # Backend - Node.js + Express + MongoDB
│   ├── controllers/        # Business logic
│   │   └── authController.js
│   ├── middlewares/        # Authentication middleware
│   │   └── authMiddleware.js
│   ├── models/             # Database models
│   │   ├── db.js
│   │   └── user.js
│   ├── routes/             # API routes
│   │   └── authRouter.js
│   ├── index.js            # Entry point for backend server
│   ├── package.json        # Backend dependencies
│   └── .env                # Environment variables
│
├── Frontend/               # Frontend - React (Vite)
│   ├── public/             # Static assets
│   │   └── images/
│   ├── src/
│   │   ├── assets/         
│   │   ├── components/     # React components
│   │   │   ├── Account.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Signup.jsx
│   │   ├── context/        # Global state management
│   │   │   └── context.jsx
│   │   ├── App.jsx         # Main app component
│   │   ├── index.css       # Styles
│   │   └── main.jsx        # Entry point for React
│   ├── index.html          # Base HTML
│   ├── package.json        # Frontend dependencies
│   └── vite.config.js      # Vite configuration
│
└── README.md
```

---

## ⚙️ Backend (Node.js + Express + MongoDB)

* Built using **Express.js** and **MongoDB (Mongoose)**.
* Provides REST APIs for **authentication**:

  * **Signup** (`/api/auth/signup`)
  * **Login** (`/api/auth/login`)
  * **Protected route access** using middleware.
* Basic middleware for request validation
* Connection handled via **Mongoose**.

### 🔑 Backend Features:

* User signup with MongoDB persistence
* Secure login with validation
* Middleware to protect private routes
* Error handling for invalid requests

---

## 🎨 Frontend (React + Vite)

* Built using **React.js + Vite** for fast builds and development.
* Implements authentication flow with **Login**, **Signup**, **Account**, and **Home** pages.
* Uses **React Context API** for global state management.
* API integration with backend for login/signup.
* Responsive and clean UI.

### ✨ Frontend Features:

* Signup and login forms
* Authenticated account page
* Context-based authentication state
* Dynamic API integration

---

## 🚀 Getting Started

### 1️⃣ Clone Repository

```bash
git https://github.com/pradeep004-coder/PropX-Assignment
cd PropX-Assignment
```

### 2️⃣ Backend Setup

```bash
cd Backend
npm install
```

* Create `.env` file:

```env
MONGO_URL=your_mongo_connection_string 
PORT=5000
```

* Run backend:

```bash
npm start
```

### 3️⃣ Frontend Setup

```bash
cd ../Frontend
npm install
npm run dev
```

---

## 🌐 Deployment

* **Frontend**: Deployed on [Vercel](https://prop-x-assignment-kcq3.vercel.app)
* **Backend**: Deployed on [Render](https://propx-assignment.onrender.com)

---

## 📌 Tech Stack

* **Frontend**: React, Vite, Context API, TailwindCSS
* **Backend**: Node.js, Express.js, MongoDB
* **Deployment**: Vercel + Render
