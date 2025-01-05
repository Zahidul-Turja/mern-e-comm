# MERN E-Commerce Website

## Overview

This is a full-stack e-commerce application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application is designed to provide a seamless shopping experience for users, including features such as product browsing, cart management, secure payments, and admin functionality.

## Features

### Backend
- **Authentication**: User registration, login, and secure authentication using JWT.
- **Product Management**: CRUD operations for products.
- **Cart Management**: Add, update, and remove items in the cart.
- **Coupons**: Apply discount coupons during checkout.
- **Payments**: Secure payment processing using Stripe.
- **Analytics**: Admin dashboard for monitoring sales and user activity.
- **Database**: MongoDB for data persistence and Redis for caching.

### Frontend
- **Responsive Design**: Optimized for various devices using Tailwind CSS.
- **User Interface**: Modern UI components for product browsing, cart management, and user interactions.
- **State Management**: Zustand for managing application state.
- **Routing**: React Router for seamless navigation between pages.
- **Admin Dashboard**: Manage products, view analytics, and handle orders.

---

## Tech Stack

### Backend
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing application data.
- **Redis**: In-memory data structure store for caching.
- **Cloudinary**: Media storage and management.
- **Stripe**: Payment gateway integration.
- **JWT**: Secure user authentication.

### Frontend
- **React.js**: Frontend library for building user interfaces.
- **Vite**: Development build tool for faster builds.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Zustand**: Lightweight state management library.
- **Axios**: Promise-based HTTP client.

---

## Installation and Setup

### Prerequisites
- Node.js (v16+)
- MongoDB
- Redis
- Stripe API keys
- Cloudinary API keys

### Backend
1. Navigate to the `backend/` directory:
   ```bash
   cd backend
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Set environment variables
   Create a file named `.env` and the following
   ```markdown
   PORT=5000
   MONGO_URI=<your-mongodb-uri>
   REDIS_URI=<your-redis-uri>
   STRIPE_SECRET_KEY=<your-stripe-secret-key>
   CLOUDINARY_URL=<your-cloudinary-url>
   JWT_SECRET=<your-jwt-secret>
   ```
4. Start the server
   ```bash
   npm start
   ```

### Frontend

1. Navigate to the `frontend/` directory
   ```bash
   cd ../frontend
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the server
   Install dependencies
   ```bash
   npm run dev
   ```

## Usage
1. Open the frontend application in your browser (default: http://localhost:3000).
2. Explore the e-commerce platform:
  * Browse products.
  * Add items to the cart.
  * Sign up or log in.
  * Checkout using Stripe payments.
3. Admin users can log in to access the dashboard for managing products and viewing analytics.

## Contact
Developed by Zahidul Islam Turja
For inquiries, please contact: ```zahidulturja@gmail.com```
