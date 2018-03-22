import  React from 'react'
import  { withStyles } from 'material-ui/styles'
import  CssBaseline from 'material-ui/CssBaseline'
import  AppBar from 'material-ui/AppBar'
import  Toolbar from 'material-ui/Toolbar'
import  Typography from 'material-ui/Typography'
import  Button from 'material-ui/Button'
import  { BrowserRouter as Router
        , Route
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

  // equality operator ftw, null & undefined are mutated to an empty object
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
          { profile.displayName.length
            ? <Button color="inherit">Sign Out</Button>
            : <Button color="inherit">Sign In</Button>
          }
        </Toolbar>
      </AppBar>
        { profile.displayName.length
          ? <Chat/>
          : <SignIn/>
        }
    </div>
    </Router>
  )
}
export default withStyles(styles)(App)
