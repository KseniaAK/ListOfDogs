import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

import SampleComponenet from 'components/sample'
import * as sampleActions from 'actions/sample';
import styles from './scss/sample.scss';

const cx = classNames.bind(styles);

class SampleContainer extends Component {
  render() {
    const { title, updateTitleAction } = this.props
    return (
      <div className={cx('sample-container')}>
        <h1>This is a sample container</h1>
        <SampleComponenet
          title={title}
          onClick={updateTitleAction}
        />
      </div>
    );
  }
};

SampleContainer.PropTypes = {
  data: PropTypes.object,
  performSampleAction: PropTypes.func,
}

function mapStateToProps(state) {
  return {
    title: state.sample.title,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateTitleAction: () => {
      dispatch(sampleActions.updateTitle('This is a different title'));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleContainer);
