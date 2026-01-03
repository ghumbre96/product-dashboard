# 🛍️ Product Dashboard

A responsive product dashboard built using React, Redux Toolkit, and Tailwind CSS.

---

## 🚀 Tech Stack
- React (Vite)
- Redux Toolkit
- React Router
- Tailwind CSS
- Jest & React Testing Library
- Fake Store API

---

## ✨ Features
- Product listing with responsive grid
- Debounced search by title
- Filter by category
- Sort by price
- Product detail page
- Favorites management using Redux
- Unit & integration tests

---

## 📦 API
https://fakestoreapi.com

---

## 🛠️ Setup Instructions

```bash
git clone https://github.com/<your-username>/product-dashboard.git
cd product-dashboard
npm install
npm run dev
Live Vercel Link :https://product-dashboard-vercel.vercel.app/

## 🧪 Testing

The application includes both unit and integration tests.

### Unit Tests
- Redux slices (products, favorites)

### Integration Tests
- Product search
- Add to favorites
- Favorites page validation

### Run Tests
```bash
npm test
✓ products.test.js
✓ favorites.test.js
✓ integration.test.jsx

Test Files  3 passed (3)
Tests       7 passed (7)
 % Coverage report from v8
------------------------|---------|----------|---------|---------|-------------------
File                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------------|---------|----------|---------|---------|-------------------
All files               |   74.75 |       50 |   70.58 |   77.27 |                  
 src                    |     100 |      100 |     100 |     100 |                  
  App.jsx               |     100 |      100 |     100 |     100 |                  
 src/app                |     100 |      100 |     100 |     100 |                  
  hooks.js              |     100 |      100 |     100 |     100 |                  
  store.js              |     100 |      100 |     100 |     100 |                  
 src/components         |   85.71 |    83.33 |   76.47 |   83.33 |                  
  FilterBar.jsx         |   66.66 |      100 |      50 |    62.5 | 18-30            
  Loader.jsx            |     100 |      100 |     100 |     100 |                  
  Navbar.jsx            |     100 |      100 |     100 |     100 |                  
  ProductCard.jsx       |     100 |       75 |     100 |     100 | 12               
  SearchBar.jsx         |    87.5 |      100 |      75 |   85.71 | 11               
 src/features/favorites |     100 |      100 |     100 |     100 |                  
  favoritesSlice.js     |     100 |      100 |     100 |     100 |                  
 src/features/products  |   78.57 |       50 |   69.23 |   84.61 |                  
  productsSelectors.js  |   64.28 |       50 |      40 |      75 | 10-11,17         
  productsSlice.js      |    90.9 |      100 |   85.71 |    90.9 | 36               
  productsThunk.js      |     100 |      100 |     100 |     100 |                  
 src/pages              |      50 |       30 |   53.84 |   52.17 |                  
  Favorites.jsx         |   83.33 |       50 |     100 |      80 | 8                
  ProductDetail.jsx     |       0 |        0 |       0 |       0 | 9-51             
  ProductList.jsx       |     100 |      100 |     100 |     100 |                  
 src/services           |   85.71 |      100 |   66.66 |   83.33 |                  
  productApi.js         |   85.71 |      100 |   66.66 |   83.33 | 7                
------------------------|---------|----------|---------|---------|--------------
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/6b9d4c4b-f255-4322-8990-33c0c7fefc92" />

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/d81871b9-76eb-4d04-968f-2e34eac9a9c8" />

