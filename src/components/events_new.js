import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// import { postEvent } from '../actions'

class EventsNew extends Component {

  componentDidMount() {
    console.log("コンポーネントNEWがマウントされたよ");

  }



  render() {

    return (
      <React.Fragment>
        <div>!!</div>
      </React.Fragment>
    )

  }
}



// const mapDispatchToProps = ({ postEvents })

export default connect(null,null)(EventsNew)
