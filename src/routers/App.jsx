/** este archivo se encarga de las rutas que vamos a iportar */
import React from 'react';
/** Router permite pasar BrowserRouter->Router */
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductosAdd from '../Containers/Productos/add';
import CategoriasAd from '../Containers/Categorias/add';
import Home from '../Components/inicio/inicio';
import NotFound from '../Containers/NotFound404/NotFound';
/** importamos el layoutMenu */
import LayoutMenu from '../Components/Layouts/LayoutMenu';


const App = () => (
    //BrowserRouter encapsula todas las rutas que necesito  /
    <BrowserRouter>
        {/* encapsulamos el switch dentro del layoutMenu*/}
        <LayoutMenu>
            <Switch>
                {/* Con switch solo hae el if donde si el path es la raiz solo muestre cada uno de los elemntos */}
                {/*exatc es el mach del componente que va a revisar*/}
                <Route exact path="/" component={Home} />
                {/** Declaramos La Ruta De PorductosAdd*/}
                <Route  path="/productosadd" component={ProductosAdd} />
                {/** Declaramos La Ruta De CategoriasAdd*/}
                <Route exact path="/categorias" component={CategoriasAd} />
                {/* Declaramos la ruta del player */}
                {/*  <Route exact path="/player/:id" component={Player} /> */}
                {/* Declaramos la rote para NotFound */}
                <Route component={NotFound} />
            </Switch>
        </LayoutMenu>
    </BrowserRouter>
)

export default App; 