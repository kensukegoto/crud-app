import React,{ Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
// 実行すると {type: 'INCREMENT' } が返って来る

import { readEvents } from '../actions'

class EventsIndex extends Component {

  componentDidMount() {
    console.log("コンポーネントがマウントされたよ");
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.events,event=>(
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {

    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

// state combineReducers( count2 )
// stateをpropsに紐づける
const mapStateToProps = state => ({ events: state.events })

const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps,mapDispatchToProps)(EventsIndex)
