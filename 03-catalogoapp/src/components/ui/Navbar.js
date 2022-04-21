import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container m-1">
            <Link
                className="navbar-brand"
                to="/"
            >
                <img className="img-fluid" src={`../assets/images/home_64px.png`} alt="buscar" style={{width:23, marginRight:5}}/>
                <strong>FGT Importadora</strong> 
            </Link>
            </div>
            <div className="navbar-collapse justify-content-center align-items-center">
                <div className="navbar-nav">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/processor"
                    >
                        <img className="img-fluid" src={`../assets/images/electronics_48px.png`} alt="buscar" style={{width:23, marginRight:5}}/>
                        Procesadores
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/monitor"
                    >
                        <img className="img-fluid" src={`../assets/images/monitor_52px.png`} alt="buscar" style={{width:23, marginRight:5}}/>
                        Monitores
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/accesorios"
                    >
                        <img className="img-fluid" src={`../assets/images/headphones_48px.png`} alt="buscar" style={{width:23, marginRight:5}}/>
                        Accesorios
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end m-1">
                <ul className="navbar-nav ml-auto">
                
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/search"
                    >
                        <img className="img-fluid" src={`../assets/images/search_100px.png`} alt="buscar" style={{width:25, marginRight:3}}/>
                        Buscar
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/login"
                    >
                        <img className="img-fluid" src={`../assets/images/exit_100px.png`} alt="buscar" style={{width:25, marginRight:3}}/>
                        Salir
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}