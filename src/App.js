import  React from 'react'
import  { withStyles } from 'material-ui/styles'
import  CssBaseline from 'material-ui/CssBaseline'
import  AppBar from 'material-ui/AppBar'
import  Toolbar from 'material-ui/Toolbar'
import  Typography from 'material-ui/Typography'
import  Button from 'material-ui/Button'
import  { BrowserRouter as Router
        , Route
        , Redirect
        , Link
      } from 'react-router-dom'
import Chat from './Chat'
import SignIn from './SignIn'

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
  const { classes
        } = props

  // equality operator ftw, the null check includes undefined
  const profile = props.profile == null ? { displayName:'', avatarUrl:'' } : props.profile

  return (
    <Router>
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={ classes.flex }>
            Chat please
          </Typography>
          { profile.displayName.length ? <Button color="inherit">Sign Out</Button>: null }
        </Toolbar>
      </AppBar>
      <Route exact path='/signin' component={SignIn} />
      <Route exact path='/chat' component={Chat} />
      <Route render={ () => profile.displayName.length ? <Redirect to='/chat'/> : <Redirect to='/signin'/> } />
    </div>
    </Router>
  )
}
export default withStyles(styles)(App)
