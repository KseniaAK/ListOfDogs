import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import classNames from 'classnames/bind'
import styles from './scss/breed-button'
import { fetchPics } from '../actions/index'

const cx = classNames.bind(styles)

class BreedButton extends Component {
  constructor(props) {
    super(props)
    this.startFetchingPics = this.startFetchingPics.bind(this)
  }
  
  startFetchingPics() {
    this.props.fetchPics(this.props.breedName)
  }
  
  render() {
    return (
      <div className={cx('breed-button', (this.props.isSelected ? 'clicked' : null))} onClick={this.startFetchingPics}>
        { this.props.breedName }
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPics }, dispatch)
}

export default connect(null, mapDispatchToProps)(BreedButton)