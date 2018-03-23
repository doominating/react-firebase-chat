import  React from 'react'
import  { Provider
        , connect } from 'react-redux'
import  { withFirebase } from 'react-redux-firebase'
import  App from './App'
import  configure from './redux/configure'

const FbApp = connect( ( { firebase: { profile } } ) => ( { profile } ) )( withFirebase( App ) )

const Container = () => {
  return (
    <Provider store={ configure() }>
      <FbApp />
    </Provider>
  )
}

export default Container
