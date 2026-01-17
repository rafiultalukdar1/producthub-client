# ProductHub 🚀

**ProductHub** is a modern web application designed to help users manage, showcase, and sell their products efficiently.  
The platform allows users to create, view, update, and delete products while providing analytics, inventory tracking, and a smooth user experience.  


🔗 **Live Demo:** https://producthub-client.vercel.app/

🔗 **GitHub Repository link (Client):** https://github.com/rafiultalukdar1/producthub-client.git

🔗 **GitHub Repository link (Server):** https://github.com/rafiultalukdar1/producthub-server.git

---

## 💻 Setup & Installation

### Frontend
```bash
git clone https://github.com/rafiultalukdar1/producthub-client.git
npm install
npm run dev
```

**Frontend Dependencies:**
* axios, daisyui, firebase, lucide-react, next, react, react-dom, react-toastify, sweetalert2

### Backend
```bash
cd ProductHub/backend
npm install
nodemon index.js
```

**Backend Dependencies:**
* express, cors, dotenv, mongodb, nodemon

---

## 🌐 Route Summary

### Frontend Routes
| Route | Description |
|-------|-------------|
| `/` | Home page displaying featured products and stats |
| `/login` | Login page for users |
| `/register` | Registration page |
| `/add` | Add a new product (requires login) |
| `/products` | Browse all products |
| `/products/:id` | Product details page |
| `/manage-products` | Manage user's products (requires login) |
| `/about` | About page |
| `/contact` | Contact page |

### Backend API Routes
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/products` | Fetch all products |
| GET | `/products/:id` | Fetch product details by ID |
| POST | `/products` | Add a new product |
| PUT | `/products/:id` | Update a product by ID |
| DELETE | `/products/:id` | Delete a product by ID |
| POST | `/auth/login` | User login |
| POST | `/auth/register` | User registration |

---

## ✨ Features
* ✅ Responsive and clean UI design  
* 🔒 User authentication with Firebase  
* 📦 Product CRUD operations (Create, Read, Update, Delete)  
* 📊 Analytics & inventory tracking  
* ⚡ Fast and secure platform  
* 🔔 Sweetalert2 for alerts & notifications  

---

## 🛠 Technologies Used

**Frontend:**  
Next.js, React, Tailwind CSS, DaisyUI, Firebase, Axios, Lucide React, React Toastify  

**Backend:**  
Node.js, Express.js, MongoDB, CORS, dotenv, Nodemon  