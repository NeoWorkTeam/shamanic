import React, { Component } from 'react'
import Notifications from 'react-notify-toast'
import Spinner from '../components/spinner/Spinner'


export default class App extends Component {
  

  state = {
    loading: true
  }


  componentDidMount = () => {
  
  }

  


  render = () => {

    const content = () => {
    
      if (this.state.loading) {
        return <Spinner size='2x' spinning='spinning' />
      }


      return (
        <Spinner size='2x' spinning='spinning' />
      )
    }

    return (
      <div className='container fadein'>
        <Notifications />
        <main>
          {content()}
        </main>      
      </div>
    )
  }
}