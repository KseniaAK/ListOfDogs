import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import SampleContainer from 'containers/SampleContainer';
import ResultsText from 'containers/resultsText'
import Title from 'components/title'

import classNames from 'classnames/bind';
import styles from './scss/base-page';
const cx = classNames.bind(styles);

function BasePage() {
  return (
    <div className={cx('base-page')}>
      <Title />
      <ResultsText />
    </div>
 );
}

export default BasePage;
