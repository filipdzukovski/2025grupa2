import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter as Router,Routes,Route } from "react-router";
import {Comments} from './components/Comments';
import { CommentDetails } from "./components/CommentDetails";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='/comments' element={<Comments/>} />
        <Route path="/comment/:commentId" element={<CommentDetails/>}/>

      </Route>
    </Routes>
  </Router>
);
