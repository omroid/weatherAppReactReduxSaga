import React, { Component } from 'react';
import WeatherView from "./weatherViewComponent";
import { connect } from 'react-redux';
import { removeFromFavoriteList } from "../Redux/index";
import { addToFavoriteList } from "../Redux/index";
import { fetchDataFavoriteWeatherSaga } from "../Redux/index";



class favorite extends Component {

      componentDidMount() {
      
        Object.keys(this.props.favoriteData).forEach((key) => {
            if (this.props.favoriteData[key]!==undefined) {
            this.props.fetchDataFavoriteWeatherSaga("fetchDataFavoriteWeather",key)
            }
        });
      }
    
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row divFavorite">
                        {
                            Object.keys(this.props.favoriteData).map((key,index) => {

                                return (
                                    this.props.favoriteData[key] !== undefined && this.props.favoriteData[key].fetchDataFavoriteWeather!==undefined ?
                                        <div className="col-sm-4 favoriteDataDiv" key={index}>
                                            <WeatherView  key={index} dataLocation={this.props.favoriteData[key].dataLocation}
                                                dataCurrentDay={this.props.favoriteData[key].fetchDataFavoriteWeather[0]}
                                                favoriteData={this.props.favoriteData} addToFavoriteList={this.props.addToFavoriteList} removeFromFavoriteList={this.props.removeFromFavoriteList}
                                              
                                            />
                                        </div>
                                        : <></>)
                            })



                        }


                    </div>
                </div>
            </div>

        );
    }
}




const mapStateToProps = state => {
    return {
        // dataLocation: state.favorite.favoriteData.dataLocation === undefined ? null :  state.favorite.favoriteData.dataLocation,
        // dataCurrentDay: state.favorite.favoriteData.fetchDataFavoriteWeather === undefined ? null : state.favorite.favoriteData.fetchDataFavoriteWeather[0],
        favoriteData: { ...state.Favorite.favoriteData },

    }
}


const mapDispatchToProps = dispatch => {
    return {

        addToFavoriteList: (locationKey, data) => { dispatch(addToFavoriteList(locationKey, data)) },
        removeFromFavoriteList: (locationKey) => { dispatch(removeFromFavoriteList(locationKey)) },
        fetchDataFavoriteWeatherSaga:(functionName,key)=>{dispatch(fetchDataFavoriteWeatherSaga(functionName,key))}

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(favorite)

