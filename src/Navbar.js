import React from 'react';
import "./Navbar.css";

import logo from "./images/unibee-logo.png";


function Navbar() {
    return (
       <div>
           {/* <div class="overlay"></div>

<div class="utility-nav d-none d-md-block">
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <p class="small"><i class="bx bx-envelope"></i> logo@example.com | <i class="bx bx-phone"></i> +91-9876543210
        </p>
      </div>

      <div class="col-12 col-md-6 text-right">
        <p class="small">Free shipping on total of $99 of all products</p>
      </div>
    </div>
  </div>
</div>
 */}



<nav class="navbar navbar-expand-md navbar-light bg-light main-menu" >
  <div class="container">

    <button type="button" id="sidebarCollapse" class="btn btn-link d-block d-md-none">
                <i class="bx bx-menu icon-single"></i>
            </button>

    <a class="navbar-brand" href="/">
      {/* <h4 class="font-weight-bold">Logo</h4> */}
      <img src={logo} width="180" height="80"></img>
    </a>

    <ul class="navbar-nav ml-auto d-block d-md-none">
      <div class="row">
    <li class="nav-item">
          <a class="btn btn-link nav-me-icon" href="#"><i class="bx bxs-phone"></i></a>
        </li>
        <li class="nav-item">
          <a class="btn btn-link nav-me-icon" href="#"><i class="bx bxs-cart icon-single"></i> <span class="badge badge-danger">3</span></a>
        </li>
        <li class="nav-item">
          <a class="btn btn-link" href="#"><i class="bx bxs-user-circle"></i></a>
        </li>
       </div>
    </ul>

    <div class="collapse navbar-collapse">
      <form class="form-inline my-2 my-lg-0 mx-auto">
        <input class="form-control" type="search" placeholder="Search for products..." aria-label="Search"/>
        <button class="btn btn-success my-2 my-sm-0" type="submit"><i class="bx bx-search"></i></button>
      </form>

      <ul class="navbar-nav">
      <li class="nav-item">
          <a class="btn btn-link" href="#"><i class="bx bxs-phone"></i></a>
        </li>
        <li class="nav-item">
          <a class="btn btn-link" href="#"><i class="bx bxs-cart icon-single"></i> <span class="badge badge-danger">3</span></a>
        </li>
        <li class="nav-item">
          <a class="btn btn-link" href="#"><i class="bx bxs-user-circle"></i></a>
        </li>



        {/* <li class="nav-item ml-md-3">
          <a class="btn btn-primary" href="#"><i class="bx bxs-user-circle mr-1"></i> Log In / Register</a>
        </li> */}
      </ul>
    </div>

  </div>
</nav>

<nav class="navbar navbar-expand-md navbar-light bg-light sub-menu">
  <div class="container">
    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#"><strong>Home <span class="sr-only">(current)</span></strong></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><strong>Products</strong></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><strong>Contact us</strong></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><strong>Become a distributor</strong></a>
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Support
                        </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Delivery Information</a>
            <a class="dropdown-item" href="#">Privacy Policy</a>
            <a class="dropdown-item" href="#">Terms & Conditions</a>
          </div>
        </li> */}
         <li class="nav-item">
          <a class="nav-link"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"></a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

<div class="search-bar d-block d-md-none">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <form class="form-inline mb-3 mx-auto pt-2">
          <input class="form-control" type="search" placeholder="Search for products..." aria-label="Search"/>
          <button class="btn btn-success" type="submit"><i class="bx bx-search"></i></button>
        </form>
      </div>
    </div>
  </div>
</div>


<nav id="sidebar">
  <div class="sidebar-header">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-10 pl-0">
          <a class="btn btn-primary" href="#"><i class="bx bxs-user-circle mr-1"></i></a>
        </div>

        <div class="col-2 text-left">
          <button type="button" id="sidebarCollapseX" class="btn btn-link">
                            <i class="bx bx-x icon-single"></i>
                        </button>
        </div>
      </div>
    </div>
  </div>

  <ul class="list-unstyled components links">
    <li class="active">
      <a href="#"><i class="bx bx-home mr-3"></i> Home</a>
    </li>
    <li>
      <a href="#"><i class="bx bx-carousel mr-3"></i> Products</a>
    </li>
    
    <li>
      <a href="#"><i class="bx bx-crown mr-3"></i> Publishers</a>
    </li>
    
    <li>
      <a href="#"><i class="bx bx-phone mr-3"></i> Contact</a>
    </li>
  </ul>

  

  <ul class="social-icons">
    <li><a href="#" target="_blank" title=""><i class="bx bxl-facebook-square"></i></a></li>
    <li><a href="#" target="_blank" title=""><i class="bx bxl-twitter"></i></a></li>
    <li><a href="#" target="_blank" title=""><i class="bx bxl-linkedin"></i></a></li>
    <li><a href="#" target="_blank" title=""><i class="bx bxl-instagram"></i></a></li>
  </ul>

</nav>
       </div>
    )
}

export default Navbar;
