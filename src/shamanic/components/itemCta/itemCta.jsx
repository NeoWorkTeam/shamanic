import React,{ useState } from 'react';
import { withRouter } from "react-router-dom";
import { useCookies } from 'react-cookie'
import { Spinner,Button  } from 'react-bootstrap'

import SaveFirebase  from "../firebase/save"
import Storage from '../storage'
const storage = Storage()


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function Cta001(props){

    const [state,setState] = useState(false)

    const goOut = (props)=>  {

         setState(true)

         const query = {
            collection:"Contacts",
            data:{ 
                lead : Date.now()
            },
            id : getCookie('idSession')
         }
    
          SaveFirebase(query);
        
          setTimeout(() => {
          
            if(document.location.pathname==='/gabriel-intro'){
                window.location.href = storage.gabriel.url_start_program         
            }else{
                window.location.href = storage.url_start_program
            }

          }, 3000)



         


          
           
    }

   const [cookies, setCookie] = useCookies(['idSession']);

    if(!state)   return ( <Button className="btn btn-primary btn-block"  onClick={ () => goOut(props) } href="#!">{ storage.cta01 }</Button> )
    if(state)  return ( 

        <Button variant="primary " className="btn-block btn btn-primary"  disabled>
        <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
        />
        { storage.cta01_loading_message }
    </Button>
    )

}

export default withRouter(Cta001)
