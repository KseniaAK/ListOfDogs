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
          <div className={cx('results-pics', 'loading')}>Loading...</div>
      )
    }

    const pics = []
    console.log(this.props.pictureSearchResults.pics)
    if (!Array.isArray(this.props.pictureSearchResults.pics)) {
      return (
        <div className={cx('results-pics', 'no-pics')}>
          Looks like no pictures of this breed are available!
        </div>
      )
    } 
    for (let i = 0; i < NUM_OF_BREEDS; i++) {
      if (!this.props.pictureSearchResults.pics[i]) break
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