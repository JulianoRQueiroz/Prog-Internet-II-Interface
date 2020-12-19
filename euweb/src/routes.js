import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';
import ProductCrud from './pages/productCrud';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/cadastro" component={ProductCrud}></Route>
            <Route path="/produtos/:id" component={Product}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;