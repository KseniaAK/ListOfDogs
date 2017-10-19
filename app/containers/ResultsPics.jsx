import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'

import styles from './scss/results-pics'
const NUM_OF_BREEDS = 12

const cx = classNames.bind(styles)

class ResultsPics extends Component {
  render() {
    if (!this.props.pictureSearchResults.show) return null
    
    if (this.props.pictureSearchResults.isFetching) {
      return (
        <div>
          <div className={cx('results-pics', 'loading')}>Loading...</div>
        </div>
      )
    }

    const pics = []

    for (let i = 0; i < NUM_OF_BREEDS; i++) {
      const pic = this.props.pictureSearchResults.pics[i]
      pics.push(<img src={`${pic}`} key={i} className={cx('each-pic')} />)
    }

    return (
      <div className={cx('results-pics', 'has-data')}>
        {pics}
      </div>
    )
  }
}

function mapStateToProps({ pictureSearchResults }) {
  return { pictureSearchResults }
}

export default connect(mapStateToProps)(ResultsPics)