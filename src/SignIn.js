import  React from 'react'
import  { withStyles } from 'material-ui/styles'
import  Typography from 'material-ui/Typography'
import  GoogleButton from './GoogleButton'


const styles = {
  center: {
    margin: 'auto'
  , width: '50%'
  , padding: 8
  }
}


const SignIn = ( props ) => {
  const { providerLogin
        } = props

// onClick={ providerLogin( 'google' ) }

  return (
    <div>
      <Typography variant="title" color="inherit" >
        Sign In
      </Typography>
      <p>
        You may need to enable pop-ups, and might be temporarily redirected to Google for your consent
      </p>
      <div style={styles.center}>
        <a ><GoogleButton/></a>
      </div>
    </div>
  )
}
export default withStyles(styles)(SignIn)
