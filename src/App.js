
import React, { Component } from 'react';
import './App.css';
import Favorite from './components/favoriteComponent';
import Header from "./components/headerComponent";
import Home from "./components/homeComponent";
import { connect } from 'react-redux';
import {setIsFavoritePage} from "./Redux/index";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header setIsFavoritePage={this.props.setIsFavoritePage} isHomePage={this.props.isFavorotePage} />
        {this.props.isFavoritePage===false?<div className="homePageDiv"><Home />
      </div>:<div className="favoritePageDiv"><Favorite/></div>}
      <ToastContainer />
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
      isFavoritePage: state.App.isFavoritePage
      
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setIsFavoritePage: (value) => dispatch(setIsFavoritePage(value))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


