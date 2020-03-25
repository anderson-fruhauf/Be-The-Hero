import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Logom from './pages/logon'
import Register from './pages/register'

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Logom}/>
                <Route path='/register' component={Register}/>
            </Switch>
        </BrowserRouter>
    )
}




