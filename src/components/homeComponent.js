import React, { Component } from 'react';
import Loading from "./loadingComponent";
import { connect } from 'react-redux';
import { fatchDataNextFiveDaysSaga } from "../Redux/index";
import { fatchDataForAutoCompletionSaga } from "../Redux/index";
import { fatchDataCurrentDaySaga } from "../Redux/index";
import { setIsLoadFirstTime } from "../Redux/index";
import { setTxtSearch } from "../Redux/index";
import { setSelectedDataIndex } from "../Redux/index";
import { setDataLocation } from "../Redux/index";
import { fatchDefaultSaga } from "../Redux/index";
import { fatchGeoSaga } from "../Redux/index";
import { removeFromFavoriteList } from "../Redux/index";
import { addToFavoriteList } from "../Redux/index";
import WeatherView from "../components/weatherViewComponent";
import SearchView from "./searchComponent";
import { fetchDataFailure } from '../Redux/Home/homeActions';
import { fatchAllWeatherDataSaga } from "../Redux/index";


class homeComponent extends Component {
  constructor(props) {
    super(props);
  }



  componentDidMount() {

    if (this.props.isLoadFirstTime === false) {
      this.props.fatchDefaultSaga("tel aviv");
      this.props.setIsLoadFirstTime();
    }




  }

  render() {
    return (

      <div>
     
        <SearchView txtSearch={this.props.txtSearch} setTxtSearch={this.props.setTxtSearch} fatchDataForAutoCompletionSaga={this.props.fatchDataForAutoCompletionSaga}
          setSelectedDataIndex={this.props.setSelectedDataIndex} dataAutoCompletion={this.props.dataAutoCompletion} selectedDataIndex={this.props.selectedDataIndex}
          fatchDataCurrentDaySaga={this.props.fatchDataCurrentDaySaga} fatchDataNextFiveDaysSaga={this.props.fatchDataNextFiveDaysSaga} setDataLocation={this.props.setDataLocation}
          fatchGeoSaga={this.props.fatchGeoSaga} fatchAllWeatherDataSaga={this.props.fatchAllWeatherDataSaga}
        />

        {
          (this.props.isLoading === true) && ((this.props.selectedDataIndex !== -1) || this.props.isGeoOrDefult === true) ? <Loading /> :
            this.props.dataLocation != null &&
              this.props.dataFiveDaysWeather != null &&
              this.props.dataCurrentDay != null
              ?
              <WeatherView dataFiveDaysWeather={this.props.dataFiveDaysWeather} dataLocation={this.props.dataLocation} dataCurrentDay={this.props.dataCurrentDay}
                favoriteData={this.props.favoriteData} addToFavoriteList={this.props.addToFavoriteList} removeFromFavoriteList={this.props.removeFromFavoriteList}
              /> : <></>
        }

      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    isLoadFirstTime: state.Home.isLoadFirstTime,
    txtSearch: state.Home.txtSearch,
    dataAutoCompletion: state.Home.data.fatchDataForAutoCompletionSaga,
    selectedDataIndex: state.Home.selectedDataIndex,
    dataLocation: state.Home.data.setDataLocation === undefined ? null : state.Home.data.setDataLocation,
    dataFiveDaysWeather: state.Home.data.fatchDataNextFiveDaysSaga === undefined ? null : state.Home.data.fatchDataNextFiveDaysSaga.DailyForecasts,
    dataCurrentDay: state.Home.data.fatchDataCurrentDaySaga === undefined ? null : state.Home.data.fatchDataCurrentDaySaga[0],
    isLoading: state.Home.loading,
    inProcess: state.Home.inProcess,
    favoriteData: { ...state.Favorite.favoriteData },
    isGeoOrDefult: state.Home.isGeoOrDefult
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fatchDataForAutoCompletionSaga: (quary) => {
      dispatch(fatchDataForAutoCompletionSaga(quary))
    },
    fatchDataNextFiveDaysSaga: (locationkey) => { dispatch(fatchDataNextFiveDaysSaga(locationkey)) },
    fatchDataCurrentDaySaga: (locationkey) => { dispatch(fatchDataCurrentDaySaga(locationkey)) },
    setIsLoadFirstTime: () => { dispatch(setIsLoadFirstTime()) },
    setTxtSearch: (quary) => { dispatch(setTxtSearch(quary)) },
    setSelectedDataIndex: (index) => { dispatch(setSelectedDataIndex(index)) },
    setDataLocation: (data) => { dispatch(setDataLocation(data)) },
    addToFavoriteList: (locationKey, data) => { dispatch(addToFavoriteList(locationKey, data)) },
    removeFromFavoriteList: (locationKey) => { dispatch(removeFromFavoriteList(locationKey)) },
    fatchAllWeatherDataSaga: (dataLocation) => { dispatch(fatchAllWeatherDataSaga(dataLocation)) },
    fatchDefaultSaga: (quary) => { dispatch(fatchDefaultSaga(quary)) },

    fatchGeoSaga: () => {

      navigator.geolocation ?
        navigator.geolocation.getCurrentPosition((p) =>
          dispatch(fatchGeoSaga(p.coords.latitude + ',' + p.coords.longitude)))
        : dispatch(fetchDataFailure("navigate not suported"))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(homeComponent)
