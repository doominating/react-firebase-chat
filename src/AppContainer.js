import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import configure from './redux/configure'


const Container = (props) => {
  return (
    <Provider store={ configure() }>
      <App />
    </Provider>
  )
}

export default Container
