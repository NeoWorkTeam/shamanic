import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter,Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Contacts from './pages/Contacts'
import Search from './pages/Searchs'
import Results from './pages/Results'
import store from './store'
import Team from './pages/Team'
import Suscribe from './pages/Suscribe'
import shamanic01 from './shamanic/page01'
import shamanic02 from './shamanic/page02'

import Formulario from './components/formulario/Formulario'



const App = () => (
       
        <BrowserRouter>
         <Provider store={store}>
            <Switch>
            <Route exact  path="/Home" component={Home} />
            <Route exact path="/" component={shamanic01} />
            <Route exact path="/ShamanicJourneying/:id" component={shamanic02} />

            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Contacts" component={Contacts} />
            <Route exact path="/Search" component={Search} />
            <Route exact path="/Results" component={Results} />
            <Route exact path="/Team" component={Team} />
            <Route exact path="/Suscribe" component={Suscribe} />
            <Route exact path="/Formulario" component={Formulario} />
            <Route  component={shamanic01} />
            </Switch>
            </Provider>
        </BrowserRouter>
        
       
    )

export default App




