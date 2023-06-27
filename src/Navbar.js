'use client'
import React from 'react'
import Link from "next/link"

export default function Navbar() {

  const handleNav =(e)=>{
    e.preventDefault();
    document.body.classList.toggle('sb-sidenav-toggled');
    localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));

  }
 return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    {/* Navbar Brand*/}
    <Link className="navbar-brand ps-3" href="/">
      Start Bootstrap
    </Link>
    {/* Sidebar Toggle*/}
    <button
      className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
      id="sidebarToggle"
      href="#!"
      onClick ={handleNav}
    >
      <i className="fas fa-bars" />
    </button>
    {/* Navbar Search*/}
    <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          placeholder="Search for..."
          aria-label="Search for..."
          aria-describedby="btnNavbarSearch"
        />
        <button className="btn btn-primary" id="btnNavbarSearch" type="button">
          <i className="fas fa-search" />
        </button>
      </div>
    </form>
    {/* Navbar*/}
    <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          id="navbarDropdown"
          href="y"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fas fa-user fa-fw" />
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdown"
        >
          <li>
            <Link className="dropdown-item" href="#">
              Settings
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="#">
              Activity Log
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" href="#">
              Logout
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
  
  )
}
