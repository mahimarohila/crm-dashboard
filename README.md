# Lead Management Dashboard

A full-stack mini CRM-style Lead Management Dashboard built using React, Node.js, Express, and MongoDB.  
This project was developed as part of a fresher hiring assignment to demonstrate full-stack development skills.

---

## 🚀 Technology Stack

**Frontend**
- React (Vite)
- JavaScript
- CSS

**Backend**
- Node.js
- Express.js
- MongoDB Atlas (Free Tier)
- Mongoose

---

## ✨ Features

- Basic Login and Logout (UI-level authentication)
- Leads table with:
  - Server-side pagination
  - Search by name or email
  - Filters by status and stage
- Lead details view
- Analytics dashboard showing:
  - Total leads
  - Converted leads
  - Leads grouped by stage

---

## 📡 Backend API Endpoints

### Get all leads
Supports:
- Search
- Filters
- Pagination

### Get lead by ID

### Analytics

---

## 🗄️ Environment Variables

Create a `.env` file inside the **backend** folder with the following values:

MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000

> The `.env` file is ignored using `.gitignore` and is not committed to GitHub.

---

## 🌱 Database Seeding

A seed script is included to generate dummy leads.

### Steps to seed data:
cd backend
node seed.js

- Seeds **300+ dummy leads**
- Includes multiple statuses and stages

---

## ▶️ Setup Steps (Run Locally)

### 1️⃣ Clone the repository
git clone <your-github-repository-url>
cd lead-management-dashboard


### 2️⃣ Backend setup
cd backend
npm install
node server.js

Backend will run at:
http://localhost:5000



### 3️⃣ Frontend setup
cd frontend
npm install
npm run dev


Frontend will run at:
http://localhost:5173


---

## 🔑 Demo Login Credentials
Email: admin@test.com

Password: admin123


---

## 🌐 Deployed Application URLs

- Backend (Render): https://crm-dashboard-9ns3.onrender.com
- Frontend (Vercel): https://crm-dashboard-two-beige.vercel.app/


---

## 📌 Notes
- MongoDB Atlas free tier is used.
- Authentication is intentionally kept simple as per assignment instructions.
- Focus is on server-side logic, clean APIs, and UI usability.

---

## 👩‍💻 Author
Mahima  

