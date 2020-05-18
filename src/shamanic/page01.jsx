import React ,{ Component } from 'react'
import CubeForm from './components/cubeForm/cubeForm'
import CubeAbout from './components/cubeAbout/cubeAbout'
import CubeModule from './components/cubeModule/cubeModule'
import Footer from './components/footer'
import Header from './components/header'
import './style.css'
import Storage from './components/storage'

const storage = Storage()

class Page02 extends Component {

  render(){
       return(

        <React.Fragment>
           <section className="Header">
             <Header />
        </section>

        <section  style={ {  background:'#FDF7EB', padding:'50px'  } } id='sectionA'>
             <CubeForm   />
        </section>

        <section  style={ {  background:'#fff', padding:'50px'  } } id='sectionB'>
                  { storage.modules.map((item,index) => 
                    <CubeModule title={ item.title } avatar={item.avatar } key={ index } />  )
                  }  
        </section>
    
        <section  style={ {  background:'#FDF7EB', padding:'50px'  } } id='sectionB'>
             <CubeAbout />
        </section>

        <section className="Footer">
             <Footer />
        </section>


        </React.Fragment>
       )  
  }
        
}

export default Page02