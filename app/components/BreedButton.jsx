import React, { Component } from 'react'

import classNames from 'classnames/bind';
import styles from './scss/breedButton';
const cx = classNames.bind(styles);

class BreedButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={cx('breed-button')}>
        { this.props.breedName }
      </div>
    )
  }
}

export default BreedButton