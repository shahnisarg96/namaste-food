# Namaste Food

A Swiggy-inspired food ordering web application built with React. This project demonstrates modern React concepts, custom hooks, API integration, and a modular component structure. It is designed as a learning project following the "Namaste React" course.

---

## 🚀 Features

- **Restaurant Listing:**  
  Browse a list of restaurants fetched from the Swiggy public API.
- **Search & Filter:**  
  Search restaurants by name and filter by various criteria.
- **Restaurant Details:**  
  View detailed menus for each restaurant, including categories and items.
- **Add to Cart:**  
  Add menu items to a shopping cart (Redux-based state management).
- **Promoted Restaurants:**  
  Highlight promoted/open restaurants with a special card.
- **User Context:**  
  Manage and display logged-in user information using React Context.
- **Shimmer UI:**  
  Display loading placeholders while fetching data.
- **Custom Hooks:**  
  Includes hooks like `useOnlineStatus` and `useRestaurantMenu` for reusable logic.
- **Responsive Design:**  
  Styled with Tailwind CSS for a modern, mobile-friendly UI.
- **Testing:**  
  Unit tests using Jest and React Testing Library.
- **Code Splitting:**  
  Uses React.lazy and Suspense for lazy loading routes/components.
- **Parcel Bundler:**  
  Fast builds, HMR, code splitting, and optimized production bundles.

---

## 🛠️ Tech Stack

- React (with hooks)
- React Router
- Redux Toolkit
- Tailwind CSS
- Parcel Bundler
- Jest & React Testing Library

---

## 📁 Project Structure

```
namaste-food/
├── src/
│   ├── components/
│   │   ├── App.js
│   │   ├── Body.js
│   │   ├── RestaurantCard.js
│   │   ├── RestaurantMenu.js
│   │   ├── Shimmer.js
│   │   └── ...
│   ├── utils/
│   │   ├── mockData.js
│   │   ├── useOnlineStatus.js
│   │   ├── useRestaurantMenu.js
│   │   ├── UserContext.js
│   │   └── ...
│   └── __tests__/
├── index.html
├── index.css
├── package.json
├── README.md
└── ...
```

---

## ⚙️ Setup & Installation

1. **Clone the repository:**
   ```
   git clone <repo-url>
   cd namaste-food
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Start the development server:**
   ```
   npm run start
   ```
   The app will run at [http://localhost:1234](http://localhost:1234) by default (Parcel).

---

## 🧩 Key Concepts & Code Highlights

- **Custom Hooks:**  
  - `useOnlineStatus`: Detects if the user is online/offline.
  - `useRestaurantMenu`: Fetches and manages restaurant menu data.
- **Context API:**  
  - `UserContext`: Shares user info across components.
- **Redux Toolkit:**  
  - Manages cart state and actions.
- **API Integration:**  
  - Fetches live restaurant and menu data from Swiggy's public endpoints.
- **Testing:**  
  - Includes unit tests for components and utilities.
- **Parcel Features:**  
  - HMR, code splitting, caching, and optimized builds.

---

## 📝 Notes

- This project is for educational purposes and is not intended for production use.
- API endpoints may change or be rate-limited by Swiggy.
- Some features (like cart) may use mock data or local state for demonstration.

---

## 📚 References

- [Namaste React (YouTube Series)](https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP)
- [React Documentation](https://react.dev/)
- [Parcel Documentation](https://parceljs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

---

## 👨‍💻 Author

Inspired by: **Akshay Saini**  
Project by: **Nisarg Shah**