import  React  from 'react'
import  { connect } from 'react-redux'
import  { withFirebase } from 'react-redux-firebase'
import  moment from 'moment'
import  Component from './Chat'


class Container extends React.Component {


  onSubmit = ( values ) => {
    const { message } = values
    const timestamp = moment().toISOString()
    const user = { [this.props.authuid]: true }
    const fbPath = `/rooms/main`
    const id = this.props.firebase.ref( fbPath ).push().key
    this.props.firebase.ref( fbPath + '/' + id )
    .set( { id , user , timestamp , message } )
  }


  validate = ( values ) => {
   const errors = { }
    if ( !values.message ) {
      errors.message = 'Required'
    } else {
      if ( values.message.length > 512 ) {
        errors.message = 'No more than 512 characters allowed'
      }
    }
    return errors
  }


  render () {
    return (
      <Component onSubmit={this.onSubmit} validate={this.validate} />
    )
  }

}

const mapStateToProps = ( { firebase: { auth } } ) => ( { auth } )

export default connect( mapStateToProps )( withFirebase( Container ) )
