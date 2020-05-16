import React ,{ useState,navigate } from 'react'
import ContactInterface from '../components/contactForm/ContactInterface'


function Contact(){

  const [form,setForm] = useState({
    fullname:'Pedro Rojas',
    email:'projas@KOmetSales.com',
    message:'Lorem Ipsum',
    submit:'Send Information'
  })

  const [loading,setLoading] = useState(false)
  
  const [error,setError] = useState(null)

  const handleChange = e => {

    setForm({
      ...form,
      [e.target.name] : e.target.value
    })

  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
  
  
    try {

      let config = {
          method:'POST',
          headers:{
            'Accept':'applicaction/json',
            'Content-Type':'applicaction/json'
          },
          body: JSON.stringify(form)
      }

      let res = await fetch('https://www.workato.com/webhooks/rest/0c3c35d9-8700-4ff5-b102-53948e0f30c0/test01',config)
      let json = await res.json()      
     
     // navigate('/user/')

    } catch (error) {

    }


  }

  return( <ContactInterface 
    form = {form}
    onChange = {handleChange}
    onSubmit = {handleSubmit}
    ></ContactInterface> )

}

export default Contact