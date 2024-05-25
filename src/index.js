import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>


  </React.StrictMode>
);
/*
<StrictMode>

        <BrowserRouter>
            <App/> 
        </BrowserRouter>

        <Header></Header>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <Main></Main>
                </div>
                <div className="col-md-4">
                <Aside>
                    </Aside> 
                </div>
            </div>
        </div>
        <Footer></Footer>
    </StrictMode>
*/