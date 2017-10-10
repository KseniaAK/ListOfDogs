import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'
import { bindActionCreators } from 'redux'
import classNames from 'classnames/bind'

import { changeBreeds } from '../actions/index'
import BreedButton from '../components/BreedButton'
import styles from './scss/ResultsText'

const cx = classNames.bind(styles)

class ResultsText extends Component {
  componentDidMount() {
    // do api call to fetch first 12 dog breeds
    axios.get(`https://dog.ceo/api/breeds/list/all`)
    .then(res => {
      console.log(res.data.message)
      this.props.changeBreeds(res.data.message)
    })
  }

  render() {
    const dogs = this.props.breeds.map((breed, i) => {
      return <BreedButton breedName={breed} key={i} />
    })
    return (
      <div className={cx('results-text')}>
        { dogs }
      </div>
    )
  }
}

function mapStateToProps({ breeds }) {
  return { breeds }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeBreeds }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsText)