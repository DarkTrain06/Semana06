import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ backgroundColor: '#120D0D', borderTop: '5px solid #F56400', borderBottom: '5px solid #F56400' }}>
      <div className="container">
        <div className="row">
          <div className="col custom-position">  {/* Añadido custom-margin-left para margen a la izquierda */}
            <h1>Wanaby</h1>
          </div>
          <div className="col">
            <nav>
            <ul className="d-flex justify-content-end">
                <li>
                  <Link to="/productos" className="btn custom-btn">Productos</Link>
                </li>
                <li>
                  <Link to="/marcas" className="btn custom-btn">Marcas</Link>
                </li>
                <li>
                  <Link to="/accesorios" className="btn custom-btn">Accesorios</Link>
                </li>
                <li>
                  <Link to="/mas" className="btn custom-btn">Más</Link>
                </li>
              </ul>
            </nav>
            <hr />
            <Outlet/> 
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;

/*  
          <hr />
          <Outlet/> 
 */