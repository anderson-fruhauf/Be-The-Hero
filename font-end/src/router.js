import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Logom from './pages/logon'
import Register from './pages/register'
import Profile from './pages/profile'
import NewIncident from './pages/newIncident'

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Logom}/>
                <Route path='/register' component={Register}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/incidents/new' component={NewIncident}/>
            </Switch>
        </BrowserRouter>
    )
}




