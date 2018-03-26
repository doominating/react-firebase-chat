import  React from 'react'
import  { withStyles } from 'material-ui/styles'
import  Paper from 'material-ui/Paper'
import  Grid from 'material-ui/Grid'
import  Divider from 'material-ui/Divider'
import  ChatList from './ChatList'
import  ChatForm from './ChatForm'

/*
import  Avatar from 'material-ui/Avatar'
for chat later        { profile.avatarUrl.length && <Avatar src={ profile.avatarUrl } /> }

*/

const styles = theme => ({
  root: {
    flexGrow: 1
  }
, paper: {
    padding: theme.spacing.unit * 2
  , textAlign: 'center'
  , color: theme.palette.text.secondary
  }
})


const Chat = ( props ) => {
  const { classes
        , onSubmit
        , validate
        } = props
  return (
    <div>
    <Grid item >
      <Paper className={classes.paper}><ChatList /></Paper>
    </Grid>
    <Divider inset={true} />
    <Grid item >
      <Paper className={classes.paper}><ChatForm onSubmit={onSubmit} validate={validate}/></Paper>
    </Grid>
    </div>
  )
}
export default withStyles(styles)(Chat)
