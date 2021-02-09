import React, {Component} from 'react'
import {Button, message} from 'antd'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";
import Register from "./pages/register/register";

export  default  class App extends Component{
 render() {
     return(
    <BrowserRouter>
        <Switch>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}/>
            <Route path='/' component={Admin}></Route>
        </Switch>
    </BrowserRouter>
     )
 }
}
