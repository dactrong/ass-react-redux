import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Category from "./components/admin/categorys/category";
import CategoryAdd from "./components/admin/categorys/category-add";
import CategoryEdit from "./components/admin/categorys/category-edit";
import Product from "./components/admin/products/product";
import ProductAdd from "./components/admin/products/product-add";
import ProductEdit from "./components/admin/products/product-edit";
import Cart from "./components/client/cart";
import HomePage from "./components/client/homepage";
import Products from "./components/client/product";
import ProductDetail from "./components/client/productDetail";
import Signin from "./components/client/signin";
import Signup from "./components/client/signup";
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutWebsite from "./layouts/LayoutWebsite";
import LayoutPrivate from "./layouts/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<HomePage/>} />
          <Route path="products/" element={<Products/>} />
          <Route path="products/:id/detail" element={<ProductDetail/>} />
          <Route path="cart" element={<Cart/>}/>

          <Route path="signup" element={<Signup/>}/>
          <Route path="signin" element={<Signin/>}/>
        </Route>
        <Route path="/admin" element={ <LayoutPrivate><LayoutAdmin /></LayoutPrivate>}>
          <Route index element={<h1>Dashboard</h1>} />
          <Route path="products" element={<Product />} />
          <Route path="products/add" element={<ProductAdd />} />
          <Route path="products/:id/edit" element={<ProductEdit />} />
          <Route path="categorys"  element = {<Category/>}/>
          <Route path="categorys/add"  element = {<CategoryAdd/>}/>
          <Route path="categorys/:id/edit"  element = {<CategoryEdit/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
