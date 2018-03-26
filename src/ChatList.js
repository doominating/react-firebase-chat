import  React from 'react'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import ImageIcon from 'material-ui-icons/Image'


const ChatList = ( props ) => {
  const { classes
        } = props
  return (
    <List>
      <ListItem styles={{maxSidth:600}}>
        Remy Sharp
        <Avatar alt="S" src="/static/images/remy.jpg" className={classes.avatar} />
        <ListItemText primary="Now is the time for all good men to come to the aid of their country" />
      </ListItem>
    </List>
  )
}
export default withStyles()(ChatList)
