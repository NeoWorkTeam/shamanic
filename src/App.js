import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import shamanic01 from './shamanic/page01'
import shamanic02 from './shamanic/page02'
import store from './store'
import { CookiesProvider } from 'react-cookie';


const App = () => (
       
        <BrowserRouter>
         <Provider store={store}>
         <CookiesProvider>
            <Switch>
          
                        <Route exact path="/" component={shamanic01} />
                        <Route exact path="/ShamanicJourneying" component={shamanic02} />
                        <Route  component={shamanic01} />       
            
         }   
            </Switch>
            </CookiesProvider>
            </Provider>
        </BrowserRouter>
        
       
    )

export default App




