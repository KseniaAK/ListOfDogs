import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SampleContainer from 'containers/SampleContainer';

import classNames from 'classnames/bind';
import styles from './scss/base-page';
const cx = classNames.bind(styles);

function BasePage() {
  return (
    <div className={cx('base-page')}>
      <SampleContainer />
    </div>
 );
}

export default BasePage;
