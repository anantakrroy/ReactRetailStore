# React Store – Intermediate React Project

A modern **React e-commerce frontend** built with React, React Router, React Query, Context API, and Tailwind CSS.

The application simulates a real online store where users can browse products, view product details, add items to a cart, and complete a checkout process.

This project was built following the **Udacity Intermediate React rubric requirements** and includes additional improvements to enhance usability and realism.

---

# Live Features

## Product Catalog
- Fetch products from an API
- Display products in a responsive grid
- Navigate to detailed product view

## Product Detail Page
- Large product preview
- Description and category information
- Rating display
- Quantity selector
- Add to cart interaction
- Toast notifications

## Cart System
- Add items from product list or detail page
- Quantity selectors
- Dynamic price updates
- Remove items from cart
- Sticky total section
- Cart icon indicator in navigation

## Authentication
- Simple login system
- Add-to-cart restricted to logged-in users
- Persistent login using `localStorage`

## Checkout Flow
- Form validation
- Email validation
- Credit card validation
- Payment method selection
- Order confirmation page
- Cart cleared after successful order

---

# Tech Stack

- **React**
- **React Router**
- **React Query**
- **Context API**
- **Tailwind CSS**
- **Vitest**
- **React Testing Library**
- **React Hot Toast**

---

# Project Structure

```
src
 ├── components
 │   ├── Navbar.jsx
 │   ├── Loader.jsx
 │   └── ErrorMessage.jsx
 │
 ├── features
 │   ├── auth
 │   │   ├── AuthContext.jsx
 │   │   └── useAuth.js
 │   │
 │   └── cart
 │       ├── CartContext.jsx
 │       ├── cartReducer.js
 │       └── useCart.js
 │
 ├── pages
 │   ├── Home.jsx
 │   ├── ProductDetail.jsx
 │   ├── Cart.jsx
 │   ├── Checkout.jsx
 │   ├── Login.jsx
 │   └── OrderSuccess.jsx
 │
 ├── hooks
 │   └── useOrderMutation.js
 │
 ├── tests
 │   ├── cartReducer.test.js
 │   └── Login.test.jsx
 │
 ├── App.jsx
 └── main.jsx
```

---

# Installation

Clone the repository

```bash
git clone <repo-url>
cd react-store
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

Run tests

```bash
npm test
```

---

# Rubric Requirements Checklist

## 1. Application Architecture & State Management

- [x] Separate **client state and server state**
- [x] React Query used for **server data fetching**
- [x] Context + Reducer used for **cart state**
- [x] Authentication handled through **Auth Context**
- [x] Modular file structure with clear separation

---

## 2. Routing, Authentication & Access Control

- [x] Multi-page routing using **React Router**
- [x] Meaningful URL structure

```
/               → product list
/products/:id   → product detail
/cart           → shopping cart
/checkout       → checkout
/login          → login
/order-success  → confirmation page
```

- [x] Checkout page protected by login
- [x] Redirect to login if user not authenticated
- [x] Return user to requested route after login

---

## 3. Data Fetching & Async User Experience

- [x] Products fetched using **React Query**
- [x] Product details fetched using **React Query**
- [x] Loading states implemented
- [x] Error states handled gracefully
- [x] Toast notifications for async actions

---

## 4. Cart & Checkout Flow

- [x] Add items to cart
- [x] Remove items from cart
- [x] Quantity selectors implemented
- [x] Cart totals calculated correctly
- [x] Cart persists across page refresh
- [x] Checkout form implemented
- [x] Order submission simulation
- [x] Cart cleared after checkout

---

## 5. UI, Testing & Code Quality

- [x] UI styled using **Tailwind CSS**
- [x] Responsive layout
- [x] Product card grid
- [x] Styled checkout and cart pages
- [x] Automated testing implemented

### Tests

- [x] **Unit Test**
  - Cart reducer behavior

- [x] **Integration Test**
  - Login interaction test

- [x] Tests run successfully using

```bash
npm test
```

---

# Additional Enhancements

Beyond rubric requirements, several improvements were implemented.

## UI Improvements

- Modern Tailwind UI
- Product card hover animations
- Cart quantity controls
- Sticky checkout bar
- Trash icon remove button
- Toast notifications

## UX Improvements

- Add-to-cart feedback
- Input validation feedback
- Responsive layouts
- Order confirmation page

## Persistence

- Cart stored in `localStorage`
- Authentication persisted across refresh

---

# Testing

Run all tests using:

```bash
npm test
```

Example tests included:

- Cart reducer unit test
- Login form interaction test

---

# Possible Future Improvements

The project also allows further extensions:

- Product filtering by category
- Product sorting by price
- Search with debounced input
- Recently viewed products
- Optimistic cart updates
- Order history page
- Payment gateway integration

---

# Summary

This project demonstrates a **complete React application architecture** including:

- state management
- async data fetching
- authentication
- cart logic
- UI design
- testing

The result is a **fully functional frontend e-commerce experience** built using modern React best practices.