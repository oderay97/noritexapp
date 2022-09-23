import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const state = useSelector((state)=> state.handleCart)
    return (

        <div>
           <nav class="navbar navbar-expand-lg navbar-light bg-light bg-white py-3 shadow-sm ">
  <div class="container-fluid">
    <NavLink className="navbar-brand fw-bold fs-4" to="/">NORITEX</NavLink>

    <button class="navbar-toggler" type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">

        <li class="nav-item mx-4">
          <NavLink  className="nav-link"  aria-current="page" to="/">Home</NavLink>
        </li>

        <li class="nav-item mx-4">
          <NavLink className="nav-link"  to="/products">Products</NavLink>
        </li>

        <li class="nav-item mx-4">
          <NavLink className="nav-link" to="/abouts">Abouts</NavLink>
        </li>

        <li class="nav-item">
          <NavLink className="nav-link" to="#" >Contact</NavLink>
        </li>
       
      </ul>

      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      

      <div className="buttons mx-auto mb-2 mb-lg-0">
<NavLink to="/login" className="btn btn-outline-dark">
    <i className="fa fa-sign-in me-1"></i>Login</NavLink>
    <NavLink to="/register" className="btn btn-outline-dark ms-2">
        <i className="fa fa-user-plus me-1"></i>Register</NavLink>
        <NavLink to="cart" className="btn btn-outline-dark ms-2">
            <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length}) </NavLink>


      </div>
    </div>
  </div>
</nav>
        </div>

    );
}

export default Navbar;