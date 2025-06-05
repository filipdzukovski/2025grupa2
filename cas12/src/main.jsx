import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App.jsx";
import { Users } from "./components/users";
import { Posts } from "./components/posts";
import { Cities } from "./components/cities/Cities.jsx";
import { AlbumsWithCustomHook } from "./components/AlbumsWithCustomHook.jsx";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import { Provider } from "react-redux";
import store from "./store.jsx";
import { Login } from "./components/auth/Login";
import { PrivateRoute } from "./utils/PrivateRoute.jsx";
import './css/index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/login" index element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <App />
            </PrivateRoute>
          }
        >
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/albums" element={<AlbumsWithCustomHook />} />
          <Route path='/cities' element={<Cities/>} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  </Provider>
);
