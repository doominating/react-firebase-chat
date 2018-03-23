import  { createStore } from 'redux'
import  { composeWithDevTools } from 'redux-devtools-extension'
import  { reactReduxFirebase } from 'react-redux-firebase'
import  firebase from 'firebase'
import  rootReducer from './rootReducer'

// Firebase config
const fbConfig =  { apiKey: process.env.REACT_APP_FIREBASE_APIKEY
                  , authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN
                  , databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL
                  , storageBucket: process.env.REACT_APP_FIREBASE_STOREAGEBUCKET
                  , messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID
                  }

// react-redux-firebase config
const rrfConfig = { userProfile: 'users' }

const initialState = { }


function configure() {

  // initialize firebase instance
  firebase.initializeApp( fbConfig )

  let store
  switch ( process.env.NODE_ENV ) {
    case 'development':
      let composeEnhancers = composeWithDevTools( { } )
      store = createStore(
        rootReducer,
        initialState,
        composeEnhancers( reactReduxFirebase( firebase, rrfConfig ) )
      )
      break

    default:
      store = createStore(
        rootReducer,
        initialState,
        reactReduxFirebase( firebase, rrfConfig )
      )
  }

  return store
}

export default configure
