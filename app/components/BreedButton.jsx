import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import classNames from 'classnames/bind'
import styles from './scss/breed-button'

const cx = classNames.bind(styles)

class BreedButton extends Component {
  render() {
    return (
      <div className={cx('breed-button')} onClick={this.props.selectBreed}>
        { this.props.breedName }
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBreed }, dispatch)
}

export default connect(mapDispatchToProps)(BreedButton)