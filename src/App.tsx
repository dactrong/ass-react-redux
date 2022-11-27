import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Category from "./components/admin/categorys/category";
import CategoryAdd from "./components/admin/categorys/category-add";
import CategoryEdit from "./components/admin/categorys/category-edit";
import Product from "./components/admin/products/product";
import ProductAdd from "./components/admin/products/product-add";
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutWebsite from "./layouts/LayoutWebsite";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<h1>Home Page</h1>} />
          <Route path="about" element={<h1>About Page</h1>} />
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<h1>Dashboard</h1>} />
          <Route path="products" element={<Product />} />
          <Route path="products/add" element={<ProductAdd />} />
          <Route path="categorys"  element = {<Category/>}/>
          <Route path="categorys/add"  element = {<CategoryAdd/>}/>
          <Route path="categorys/:id/edit"  element = {<CategoryEdit/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
