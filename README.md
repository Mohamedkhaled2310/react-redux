# 🎂 Cake Store – React + Redux + Vite

A simple and responsive Cake Store application built with **React** and **Redux**, powered by **Vite** for fast development and hot module replacement.

## 🚀 Features

- 🍰 Browse and buy cakes and sweets
- 🛒 Manage cart state using Redux
- ⚡ Fast development with Vite
- 🔄 Demonstrates Redux usage with and without React hooks
- 👥 Fetch and display users from an API using Redux Thunk

## 🛠️ Tech Stack

- **React** – UI development
- **Redux** – State management
- **Redux Thunk** – Async actions
- **Redux Logger** – Debugging middleware
- **Vite** – Lightning-fast build tool
- **ESLint** – Code linting

## 📦 Project Structure

```
src/
  App.jsx
  main.jsx
  redux/
    ShopStore.js
    cake/
      ActionsType.js
      CakeActionCreator.js
      Cakereducers.js
    sweet/
      ActionsType.js
      SweetActionCreator.js
      SweetReducer.js
    user/
      ActionsType.js
      ActionsCreator.js
      Reducer.js
    components/
      CakeComponentWithHooks.jsx
      SweetComponentWithHooks.jsx
      NewItemComponent.jsx
      UsersContainer.jsx
```

## 🧑‍💻 Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm run dev
   ```
3. **Open** [http://localhost:5173](http://localhost:5173) **in your browser.**

## 🤝 Contributing

Feel free to fork, contribute, and customize this Cake Store as you like! 🍰

---

Built with ❤️ using React,