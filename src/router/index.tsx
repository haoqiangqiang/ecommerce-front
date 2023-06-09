import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import AddCategory from '../components/admin/AddCategory'
import AddProduct from '../components/admin/AddProduct'
import AdminDashboard from '../components/admin/AdminDashboard'
import AdminRoute from '../components/admin/AdminRoute'
import Dashboard from '../components/admin/Dashboard'
import Orders from '../components/admin/Oders'
import PrivateRoute from '../components/admin/PrivateRoute'
import Cart from '../components/core/Cart'
import Home from '../components/core/Home'
import Product from '../components/core/Product'
import Shop from '../components/core/Shop'
import Signin from '../components/core/Signin'
import Signup from '../components/core/Signup'
import Success from '../components/core/Success'

const Routes = () => {
    return (
        <HashRouter>
            <div>
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/shop" component={Shop}></Route>
                    <Route path="/signin" component={Signin}></Route>
                    <Route path="/signup" component={Signup}></Route>
                    <Route path="/cart" component={Cart}></Route>
                    <Route path="/paysuccess" component={Success}></Route>
                    <PrivateRoute path="/user/dashboard" component={Dashboard}></PrivateRoute>
                    <AdminRoute path="/admin/dashboard" component={AdminDashboard}></AdminRoute>
                    <AdminRoute path="/create/category" component={AddCategory}></AdminRoute>
                    <AdminRoute path="/create/product" component={AddProduct}></AdminRoute>
                    <AdminRoute path='/admin/orders' component={Orders}></AdminRoute>
                    <Route path="/product/:productId" component={Product}></Route>
                </Switch>
            </div>
        </HashRouter>
    )
}

export default Routes