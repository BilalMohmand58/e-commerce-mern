import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import TopBar from "./Components/TopBar/TopBar";
import Home from "./Pages/Home/Home";
import UserList from "./Pages/UserList/UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./Pages/User/User";
import NewUser from "./Pages/NewUser/NewUser";
import ProductList from "./Pages/ProductList/ProductList";
import Product from "./Pages/Product/Product";
import NewProduct from "./Pages/NewProduct/NewProduct";

import Login from "./Pages/Login/Login";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const SidebarLayout = () => (
  <>
    <TopBar />
    <div className="container">
      <Sidebar />
      <Outlet />
    </div>
  </>
);

function App() {
  // const admin = useSelector((state) => state.user.currentUser.isAdmin);
  // const admin = JSON.parse(
  //   JSON.parse(localStorage.getItem("persist:root")).user
  // ).currentUser.isAdmin;
  return (
    <BrowserRouter>
      <Routes>
        {/* {admin && ( */}
        <Route element={<SidebarLayout />}>
          <Route index element={<Home />} />
          <Route exact path="/users" element={<UserList />} />
          <Route exact path="/users/:id" element={<User />} />
          <Route exact path="/newUser" element={<NewUser />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/products/:id" element={<Product />} />
          <Route exact path="/newProduct" element={<NewProduct />} />
        </Route>
        ){/* } */}
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
