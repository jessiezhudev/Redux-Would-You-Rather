import React, { Component } from 'react'
import { Navigation } from 'components'
import { connect } from 'react-redux'
import { container, innerContainer } from './styles.css'

import HomeContainer from '../Home/HomeContainer'
class MainContainer extends Component {
  propTypes: {
    isAuthed: PropTypes.bool.isRequired
  }
  render () {
    return (
      <div className={container}>
        <Navigation isAuthed={this.props.isAuthed} />
        <div className={innerContainer}>
          <HomeContainer/>
        </div>
      </div>
    )
  }
}
export default connect(
  ({users}) => ({isAuthed: users.isAuthed})
)(MainContainer)
