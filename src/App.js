import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import shamanic01 from './shamanic/page01'
import shamanic02 from './shamanic/page02'
import shamanic03 from './shamanic/page03'
import shamanic04 from './shamanic/page04'
import shamanic05 from './shamanic/page05'


import store from './store'
import { CookiesProvider } from 'react-cookie';

console.log(document.location.pathname)


const App = () => (
    
 

        <BrowserRouter>
         <Provider store={store}>
         <CookiesProvider>
            <Switch>
                
                <Route exact path="/practicas-chamanicas/oferta02" component={shamanic01} />
                <Route exact path="/practicas-chamanicas/oferta01" component={shamanic01} />
                <Route exact path="/gabriel" component={shamanic01} />
                
                <Route exact path="/practicas-chamanicas/oferta11" component={shamanic03} />
                <Route exact path="/practicas-chamanicas/intro11" component={shamanic04} />
                <Route exact path="/practicas-chamanicas/intro12" component={shamanic05} />


                <Route exact path="/practicas-chamanicas/intro01" component={shamanic02} />
                <Route exact path="/practicas-chamanicas/intro02" component={shamanic02} />
                <Route exact path="/gabriel-intro" component={shamanic02} />


                <Route component={shamanic01} />            
            </Switch>
            </CookiesProvider>
            </Provider>
        </BrowserRouter>
        
       
    )

export default App




