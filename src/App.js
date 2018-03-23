import  React from 'react'
import  { withStyles } from 'material-ui/styles'
import  CssBaseline from 'material-ui/CssBaseline'
import  AppBar from 'material-ui/AppBar'
import  Toolbar from 'material-ui/Toolbar'
import  Typography from 'material-ui/Typography'
import  Paper from 'material-ui/Paper'
import  Grid from 'material-ui/Grid'
import  Button from 'material-ui/Button'
import  { BrowserRouter as Router
        , Route
        , Redirect
        , Switch
        , Link
      } from 'react-router-dom'
import Chat from './Chat'
import SignIn from './SignInContainer'

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
, contentBodyGrid: {
    margin: 16
  , width: 'auto'
  }
, contentBodyPaper: {
    padding: 16
  }
}

const defaultProfile =  { displayName: ''
                        , avatarUrl: ''
                        , isEmpty: true
                        , isLoaded: false
                        }

// this is icky.
const handleLogout = ( firebase ) => {
  return () => {
    firebase !== null
    && firebase.logout()
       .then( () => <Redirect to='/'/> )
  }
}

const App = ( props ) => {
  const { classes
        } = props

  // equality operator ftw, the null check includes undefined
  const profile = props.profile == null ? defaultProfile : { ...defaultProfile, ...props.profile }

  return (
    <Router>
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={ classes.flex }>
            Chat please
          </Typography>
          { profile.displayName.length ? <Button onClick={ handleLogout( props.firebase ) } color="inherit">Sign Out</Button>: null }
        </Toolbar>
      </AppBar>
      <Grid style={styles.contentBodyGrid} container justify='center' alignItems='center' >
        <Paper style={styles.contentBodyPaper}>

        <Switch>
          <Route exact path='/signin' component={SignIn} />
          <Route render={ () => profile.displayName.length ? <Redirect to='/chat'/> : <Redirect to='/signin'/> } />
          <Route exact path='/chat' component={Chat} />
        </Switch>

        </Paper>
      </Grid>

    </div>
    </Router>
  )
}
export default withStyles(styles)(App)
