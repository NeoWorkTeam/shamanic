import ReactGA from 'react-ga'

const Analytics = () =>  {
   return 
}

export const GoogleAnalytics = (props) => {

                ReactGA.initialize('UA-154561398-2') 
                if(document.location.host.indexOf("theshiftnetwork.com.mx")>0){
                    ReactGA.pageview(window.location.pathname + window.location.search)
                } else {
                    console.log(props)
                }
}

export const GoogleAnalyticsEvent = (props) => {

    if(document.location.host.indexOf("theshiftnetwork.com.mx")>0){  

          ReactGA.initialize('UA-154561398-2') 
          ReactGA.event({
                      category: 'Contact',
                      action: props
                  });          
     }  

}
  
export default Analytics