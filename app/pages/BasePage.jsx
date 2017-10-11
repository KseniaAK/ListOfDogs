import React, { Component } from 'react'
import classNames from 'classnames/bind'

import ResultsText from 'containers/resultsText'
import ResultsPics from 'containers/resultsPics'
import Title from 'components/title'
import styles from './scss/base-page'

const cx = classNames.bind(styles)

function BasePage() {
  return (
    <div className={cx('base-page')}>
      <Title />
      <ResultsText />
      <ResultsPics />
    </div>
 )
}

export default BasePage
