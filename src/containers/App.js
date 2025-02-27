import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

import './App.css';
import MainPage from '../components/MainPage';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
