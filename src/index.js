import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, Signup , NotFound, AddProducts, AllProducts, Profile, SingleProduct,CheckOutForm, About } from "pages";
import { EditProductForm, Footer, PrivateRoute } from "components";
import { AuthContextProvider } from "context";
import { Navbar } from "components";


ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <AuthContextProvider>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/product" element={<AllProducts/>} />
      <Route path="/product/:id" element={<PrivateRoute><SingleProduct/></PrivateRoute> } />
      <Route path="/product/add" element={<PrivateRoute><AddProducts /></PrivateRoute>} />
      <Route path="/product/edit/:id" element={<PrivateRoute><EditProductForm /></PrivateRoute>} />
      <Route path="profile/:id" element={<PrivateRoute><Profile/></PrivateRoute>} />
      <Route path="/checkout/:id" element={<PrivateRoute><CheckOutForm/></PrivateRoute>}/>
      <Route path="*" element={<NotFound/>} />
    </Routes>
    <Footer/>
    </AuthContextProvider>
    </BrowserRouter>
  

  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
