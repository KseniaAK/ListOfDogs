import React, { Component } from 'react'
import { connect } from 'react-redux'

import classNames from 'classnames/bind';
import styles from './scss/title';
const cx = classNames.bind(styles);

class Title extends Component {
  render() {
    return (
      <div className={cx('title')}>
        { this.props.title }
      </div>
    )
  }
}

function mapStateToProps({ title }) {
  return { title }
}

export default connect(mapStateToProps)(Title)