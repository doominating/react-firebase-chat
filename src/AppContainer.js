import  React from 'react'
import  { Provider
        , connect } from 'react-redux'
import  { withFirebase } from 'react-redux-firebase'
import  App from './App'
import  configure from './redux/configure'
import  { Redirect } from 'react-router-dom'


const FbApp = connect( ( { firebase: { profile, auth } } ) => ( { profile, auth } ) )( withFirebase( App ) )

const handleSignout = ( firebase ) => {
  return () => {
    firebase !== null
    && firebase.logout()
       .then( () => <Redirect to='/'/> )
  }
}

const ChatApp = ( props ) => {
  return (
    <Provider store={ configure() }>
      <FbApp handleSignout={handleSignout( props.firebase )} />
    </Provider>
  )
}

export default ChatApp
