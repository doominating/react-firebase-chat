import React from 'react'
import { withStyles } from 'material-ui/styles'
import CssBaseline from 'material-ui/CssBaseline'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import './App.css'

const styles = {
  root: {
    flexGrow: 1
  }
, flex: {
    flex: 1
  }
, menuButton: {
    marginLeft: -12
  , marginRight: 20
  }
}

const App = ( props ) => {
  const { classes } = props
  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={ classes.flex }>
            Chat please
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <p className="App-intro">
        Yo chilluns go here
      </p>
    </div>
  )
}
export default withStyles(styles)(App)
