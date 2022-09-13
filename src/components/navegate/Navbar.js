import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/cartwidget.jsx'
import { NavLink } from 'react-router-dom'

const navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <Link to='/inicio'>
                <img src='./IconQualStore.jpg' width='100'/>
            </Link>
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to='/inicio'>Inicio</NavLink>
                </li>
            <li className="nav-item">
                <NavLink className="nav-link active" to='/categoria/movies'>Movies</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link active" to='/categoria/music'>Music</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link active" to='/categoria/cartoon'>Cartoon</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link active" to='/categoria/anime'>Anime</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link active" to='/categoria/celebrities'>Celebrities</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link active" to='/categoria/sponsors'>Sponsors</NavLink>
            </li>
                 <li className="nav-item">
                <NavLink className="nav-link active" to='/categoria/specials'>Funkos Specials</NavLink>
            </li>       
            {/* <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="true">
                    Marcas
                </NavLink>
                <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item" to='/categoria'>Action</NavLink></li>
                    <li><NavLink className="dropdown-item" to='/categoria'>Action</NavLink></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><NavLink className="dropdown-item" to='/categoria'>Action</NavLink></li>
                </ul>
                </li> */}
                <li className="nav-item">
                <NavLink className="nav-link" to='/cart'>
                    <CartWidget />
                    </NavLink>
            </li>
            </ul>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit"><i class="bi bi-search"></i></button>
        </form>
        </div>
    </div>
    </nav>
    </div>
  )
}

export default navbar