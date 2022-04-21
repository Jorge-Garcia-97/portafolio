import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { AccesoriosScreen } from '../components/accesorios/AccesoriosScreen'
import { MonitorScreen } from '../components/monitor/MonitorScreen'
import { ProcessorScreen } from '../components/processor/ProcessorScreen'
import { ProductosScreen } from '../components/productos/ProductosScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container-fluid mt-2">
                <Switch>
                    <Route exact path="/processor" component={ProcessorScreen}></Route>
                    <Route exact path="/producto/:productoId" component={ProductosScreen}></Route>
                    <Route exact path="/monitor" component={MonitorScreen}></Route>
                    <Route exact path="/search" component={SearchScreen}></Route>
                    <Route exact path="/accesorios" component={AccesoriosScreen}></Route>
                    <Redirect to="/processor"></Redirect>
                </Switch>
            </div>
        </>
    )
}
