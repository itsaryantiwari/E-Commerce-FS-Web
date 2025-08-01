# 🛒 MERN Stack E-Commerce Website with Stripe Integration

This is a full-featured **MERN stack (MongoDB, Express, React, Node.js)** e-commerce application, fully equipped with a **Stripe payment gateway**, **authentication system**, and admin product management. The project is built to simulate a real-world online store, optimised for performance and scalability.

---

## ⚙️ Tech Stack

### ✅ Frontend
- **React.js** with functional components & hooks
- **Redux** (for state management)
- **React Router** (for navigation)
- **Axios** (for API requests)
- **Bootstrap / Tailwind CSS** (optional based on your setup)

### ✅ Backend
- **Node.js & Express.js**
- **MongoDB** with **Mongoose** for data modeling
- **JWT** for authentication
- **Stripe API** for secure payment processing
- **Cloudinary, AWS S3** and **Multer** for image uploads

---

## 📸 Project Screenshots

<!-- Home Page Screenshot - large and centred -->
<p align="left">
  <img src="./Screenshots/Home_Page.png" alt="Home Page" width="70%">
  <br>
  <strong>🛒 Home Page – Landing with product listings</strong>
</p>

<br>

<!-- About & Contact (or Cart & Checkout) side-by-side -->
<p align="left">
  <img src="./Screenshots/Cart_Page.png" alt="Cart Page" width="45%" style="margin-right:10px;" />
  <img src="./Screenshots/Checkout_Page.png" alt="Checkout Page" width="45%" />
</p>

<p align="left">
  <strong>🛍️ Cart Page</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>💳 Checkout Page (Stripe Payment)</strong>
</p>

```
🧙‍♂️ If the screenshots suddenly vanish like magic, don’t panic.
Dr. Dumbledore is busy brewing some spells, and Hagrid and I are out playing with Fang.
So, we’ll be right back! & fix this thing later...👍😒
```

---

## 🔐 Key Features

### 🛍️ User Features
- Browse products by category or search
- Product details with image, price, description, ratings
- Add to cart & manage quantity
- User registration and login (JWT-based)
- Secure Stripe checkout
- View order history

### 🛠️ Admin Features
- Admin dashboard
- Add/edit/delete products
- View user list & order history
- Upload product images

### 💸 Payment Integration
- **Stripe Checkout** for secure online payments
- Payment success/failure redirect handling
- Order creation only after successful payment

---

# 🖼️ Project Structure

📦 mern-ecommerce
```
├── client/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── redux/
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
│
├── server/ # Node + Express backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ ├── .env
│ └── server.js
│
├── README.md
└── package.json (root)
```

---

## 📦 Installation

### 1. Clone the repo
```bash
git clone https://github.com/itsaryantiwari/E-Commerce-FS-Web
cd E-Commerce-FS-Web
```

---

### 2. Set Up Environment Variables

Create a ```.env``` file in ```/server``` and add:
```
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET=your_stripe_secret_key
CLIENT_URL=http://localhost:3000
```

---

### 3. Install Dependencies 

### Backend
```
cd server
npm install
npm run dev
``` 
### Frontend 
```
cd client
npm install
npm start
```

---

### To Start Strapi 🚂

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi provides numerous deployment options for a project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

## 📚 If you want to Learn more about Strapi, read this official documentation.

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

or just 

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi)

---

# Licence 📝
This project is licensed under the MIT License — feel free to use, modify, or contribute!

---

## 👨‍💻 About Me
Hi, I’m **Aryaaman Raj Tiwari** ```Developer by day, Clutcher by night. 😄```, a student turned full-stack SDE turned Data Analyst and a gaming enthusiast. 
I love building real-world web apps with clean UI and smart backends. Whether it’s e-commerce platforms or an authentication server, I enjoy crafting projects that are both functional and fun.

🔧 Tech I work on this Project:
JavaScript, React, Node.js, MongoDB, Express, AWS, Cloudinary, Tailwind CSS, Python, Git

🎮 When not coding:
You’ll probably find me on STEAM or VSCode, exploring game mechanics, or designing some cool stuff.

📫 Let’s connect:
💌 Email: i.aryantiwari@gmail.com
