import React, { Component } from 'react'
import classNames from 'classnames/bind'

import Title from 'components/title'
import SearchBar from 'containers/SearchBar'
import ResultsText from 'containers/ResultsText'
import ResultsPics from 'containers/ResultsPics'
import styles from './scss/base-page'

const cx = classNames.bind(styles)

function BasePage() {
  return (
    <div className={cx('base-page')}>
      <div className={cx('container-title-and-search')}>
        <Title />
        <SearchBar />
      </div>
      <ResultsText />
      <ResultsPics />
    </div>
 )
}

export default BasePage
