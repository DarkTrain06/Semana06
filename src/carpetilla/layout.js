import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../main';
import Header from '../header';
import Footer from '../footer';

const Layout = () => {
  return (
    <div>
      <>
      <Header />
      
      <Routes>
        <Route path="/" element={ <Main section="productos" />}/>         

        <Route path="/productos" element={<Main section="Productos" /> } />
        <Route path="/marcas" element={<Main section="Marcas" />} />
        <Route path="/accesorios" element={<Main section="Accesorios" />} />
        <Route path="/mas" element={<Main section="Mas" />} />

        
      </Routes>
      <Footer />
    </>
    </div>
  );
}

export default Layout;
/*
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main section="productos" />} />
        <Route path="/productos" element={<Main section="Productos" />} />
        <Route path="/marcas" element={<Main section="Marcas" />} />
        <Route path="/accesorios" element={<Main section="Accesorios" />} />
        <Route path="/mas" element={<Main section="Mas" />} />
      </Routes>
      <Footer />
    </>
*/
/*
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Main section="productos" />} />
          <Route path="productos" element={<Main section="productos" />} />
          <Route path="marcas" element={<Main section="marcas" />} />
          <Route path="accesorios" element={<Main section="accesorios" />} />
          <Route path="mas" element={<Main section="mas" />} />
        </Routes>
      </div>
      <Footer />
*/