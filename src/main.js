import React, { useState, useEffect } from "react";

const Main = ({ section }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const images = [
    "https://imgs.search.brave.com/oOx3-2-0YJUy_jSi6p_1QZFhUZICdQXky1j4jRUUBF8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF83/OTQwNTItTUxNNzI3/Njg0NzYzMTlfMTEy/MDIzLVcud2VicA",
    "https://imgs.search.brave.com/otRg_W5TGmsflIfrZwoSoiPg_NmsP4d6agPNk19E6QM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG5h/Lmx5c3RpdC5jb20v/NDAwLzUwMC9jL3Bo/b3Rvcy9iYWxlbmNp/YWdhLzIzMzg5NWY0/L2JhbGVuY2lhZ2Et/YmxhY2stU3RlbmNp/bC10eXBlLWJhZ2d5/LWpvZ2dpbmdob3Nl/LmpwZWc",
    "https://imgs.search.brave.com/Fntq-qHtlh9ajOZy55xkKCBj9xM5DHUWvl11KPKdwyc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3R5bGlnaHQu/bmV0L2ltYWdlL3Vw/bG9hZC9lX3RyaW0v/dF93ZWJfcHJvZHVj/dF8zMzB4NDQwbWF4/X25vYmcvcV9hdXRv/OmVjbyxmX2F1dG8v/ZGVyMWM3dHJzMGpx/eW1jZHFuZnIud2Vi/cA"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Cambia la imagen cada 2 segundos

    return () => {
      clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    };
  }, [images.length]);

  return (
    <div className="custom-section">
      <h2>{section}</h2>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="carousel-container" style={{ position: "relative", overflow: "hidden", width: "100%", height: "450px" }}>
              <img src={images[slideIndex]} alt={`Imagen ${slideIndex + 1}`} style={{ maxWidth: "100%", maxHeight: "100%", display: "block" }} />
            </div>
          </div>
        </div>
        
        <div className="additional-content" style={{ marginTop: '20px' }}>
          <h3>Información Adicional</h3>
          <p1>Aquí se puede agregar información extra de lo que sea xd. </p1>
          <p1>Este contenido se desplazará junto con la página.</p1>

          <div class="carta">
            <h3>Cualquier cosa 1</h3>
            <h>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h>
          </div>
          <div class="carta">
          <h3>Cualquier cosa 2</h3>
            <h>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h>
          </div>
          <div class="carta">
          <h3>Cualquier cosa 3</h3>
            <h>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h>
          </div>
        </div>

      </div>
    </div>

    //
    //
    //

  );
};

export default Main;