
import React, { Component } from 'react';
import './App.css';
import Favorite from './components/favoriteComponent';
import Header from "./components/headerComponent";
import Home from "./components/homeComponent";
import { connect } from 'react-redux';
import {setIsFavoritePage} from "./Redux/index";
import WeatherView  from "./components/weatherViewComponent";
import dataFiveDaysWeather from "./Models/dataFiveDaysWeather.json";
import dataCurrentWeather from "./Models/dataCurrentWeather.json";
import  dataLocation  from "./Models/dataLocation.json";



class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header setIsFavoritePage={this.props.setIsFavoritePage} isHomePage={this.props.isFavorotePage} />
        {this.props.isFavoritePage===false?<div className="homePageDiv"><Home />
      </div>:<div className="favoritePageDiv"><Favorite/></div>}
      {/* <WeatherView dataFiveDaysWeather={dataFiveDaysWeather} dataLocation={dataLocation[0]} dataCurrentDay={dataCurrentWeather[0]}  /> */}
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


