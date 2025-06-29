# E-Commerce-website

# 🛍️ Shopping E-commerce Website

This is a full-stack shopping e-commerce website built with:
- **Frontend**: ReactJS & Bootstrap
- **Backend**: Node.js & Express
- **Database**: MongoDB

The website supports:
- 🧥 Men’s, Women’s, and Kids’ product pages
- 🛒 Shopping cart
- 🔐 User authentication (Sign up, Login, Logout)

## 📦 Features
- View products by category (Men, Women, Kids)
- Add/remove items from the cart
- User authentication (Sign up & Login)
- Responsive design using Bootstrap

## 🚀 Tech Stack
| Layer    | Technology                          |
|--------:|--------------------------------------|
| Frontend| ReactJS, Bootstrap, Axios, React Router |
| Backend | Node.js, Express                     |
| Database| MongoDB                              |

## 🏗️ Project Structure
```plaintext
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # React components (Navbar, Login, ProductList, Cart, etc.)
│   │   ├── pages/           # Pages (Home, Mens, Womens, Kids, Cart)
│   │   └── App.js
│   └── package.json
├── server/                  # Node.js + Express backend
│   ├── models/              # Mongoose models (User, Product, etc.)              # Express routes (auth, products, cart)
│   ├── server.js
│   └── package.json
└── README.md


##Backend
cd server
npm start

##frontendcd server
cd frontend
npm start

