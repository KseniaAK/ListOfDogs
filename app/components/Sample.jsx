import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './scss/sample';
const cx = classNames.bind(styles);

// import searchIcon from './images/search.svg';

export default class Sample extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
   }

   handleClick() {
    const { onClick } = this.props;
    if (onClick) {
      onClick();
    }
  }

  render() {
    const { title } = this.props;
    return (
      <div className={cx('sample')}>
        <h2>{title}</h2>
        <button className={cx('sample__button')} onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

Sample.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};
