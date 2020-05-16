import React ,{ Component } from 'react'
import SectionForm from './components/sectionForm'
import SectionAbout from './components/sectionAbout'
import SectionModule01 from './components/sectionModule01'
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

        <section className="section01">
             <SectionForm />
        </section>


        <section className="section05">
                  { storage.modules.map
                  ( ( item , index ) => 
                    <SectionModule01 title={ item.title } avatar={item.avatar } key={ index } />  )
                  }  
        </section>


    
        <section className="section03">
             <SectionAbout />
        </section>

        <section className="Footer">
             <Footer />
        </section>


        </React.Fragment>
       )  
  }
        
}

export default Page02