import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { getEvent,deleteEvent,putEvent } from '../actions'

class EventsShow extends Component {

  constructor(props){
    super(props)
    // コールバック内でthisが変更されないように設定
    this.onSubmit = this.onSubmit.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  componentDidMount() {
    console.log("コンポーネントSHOWがマウントされたよ");
    const {id} = this.props.match.params
    if(id) this.props.getEvent(id)

  }

  renderField(field){
    const { input,label,type,meta: {touched,error} } = field

    return (
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
    )
  }

  async onDelete(){
    console.log(this.props)
    // await this.props.deleteEvent(values)
    // this.props.history.push('/')
    const { id } = this.props.match.params
    await this.props.deleteEvent(id)
    this.props.history.push('/')
  }

  async onSubmit(values){
    await this.props.putEvent(values)
    this.props.history.push('/')
  }

  render() {
    const style = {margin: 12}
    const {handleSubmit,pristine,submitting,invalid} = this.props

    return (

        <form onSubmit={handleSubmit(this.onSubmit)}>
            <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
            <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>

            <div>
              <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalid} />
              <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />} />
              <RaisedButton label="Delete" style={style} onClick={this.onDelete} />

            </div>
        </form>

    )

  }
}


const validate = values => {
  const errors = {};

  if(!values.title) errors.title = "Enter a title, please."
  if(!values.body) errors.body = "Enter a body, please."
  return errors;
}

const mapStateToProps = (state,ownProps) => {

  const event = state.events[ownProps.match.params.id]
  return { initialValues: event,event }
}
const mapDispatchToProps = ({ deleteEvent,getEvent,putEvent })

export default connect(mapStateToProps,mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowForm',enableReinitialize: true})(EventsShow)
)