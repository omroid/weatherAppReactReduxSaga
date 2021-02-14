import React from 'react';


function weatherView(props) {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12">
          <div className="center">

            <div className="WeatherViewDiv">
              {props.dataCurrentDay !== undefined && props.dataCurrentDay !== null ?
                <div>


                  <h3>{props.dataLocation.LocalizedName}</h3>
                  <p>{props.dataLocation.AdministrativeArea.LocalizedName}</p>
                  <p>{props.dataLocation.Country.ID}</p>

                  <div> <img title={props.dataCurrentDay.WeatherText} alt={props.dataCurrentDay.WeatherText} src={"https://developer.accuweather.com/sites/default/files/" + (props.dataCurrentDay.WeatherIcon < 10 ? '0' + props.dataCurrentDay.WeatherIcon : props.dataCurrentDay.WeatherIcon) + "-s.png"} typeof="foaf:Image" /></div>

                  <p>{props.dataCurrentDay.WeatherText}</p>
                  <h5>Temperature</h5>

                  
                  {/* <i className={props.dataCurrentDay.IsDayTime === true ? "fas fa-sun fa-3x" : "far fa-moon fa-3x"}></i> */}
                  <p> {props.dataCurrentDay.Temperature.Metric.Value}{props.dataCurrentDay.Temperature.Metric.Unit} </p>

                </div>

                : <></>}

              <div className="center">
                <div style={{ minWidth: '50%' }}>

                  <table className="card-table table" >
                    <thead>
                      {props.dataFiveDaysWeather !== undefined && props.dataFiveDaysWeather !== null ?
                        <tr>
                          <th scope="col">

                            <svg version="1.1" id="Capa_1" x="0px" y="0px" width="36.447px" height="36.447px" viewBox="0 0 36.447 36.447"><g>	<g>		<path d="M30.224,3.948h-1.098V2.75c0-1.517-1.197-2.75-2.67-2.75c-1.474,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75			c0-1.517-1.197-2.75-2.67-2.75c-1.473,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75c0-1.517-1.197-2.75-2.67-2.75			c-1.473,0-2.67,1.233-2.67,2.75v1.197H6.224c-2.343,0-4.25,1.907-4.25,4.25v24c0,2.343,1.907,4.25,4.25,4.25h24			c2.344,0,4.25-1.907,4.25-4.25v-24C34.474,5.855,32.567,3.948,30.224,3.948z M25.286,2.75c0-0.689,0.525-1.25,1.17-1.25			c0.646,0,1.17,0.561,1.17,1.25v4.896c0,0.689-0.524,1.25-1.17,1.25c-0.645,0-1.17-0.561-1.17-1.25V2.75z M17.206,2.75			c0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25v4.896c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25V2.75z M9.125,2.75			c0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25v4.896c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25V2.75z			 M31.974,32.198c0,0.965-0.785,1.75-1.75,1.75h-24c-0.965,0-1.75-0.785-1.75-1.75v-22h27.5V32.198z" />		<rect x="6.724" y="14.626" width="4.595" height="4.089" />		<rect x="12.857" y="14.626" width="4.596" height="4.089" />		<rect x="18.995" y="14.626" width="4.595" height="4.089" />		<rect x="25.128" y="14.626" width="4.596" height="4.089" />		<rect x="6.724" y="20.084" width="4.595" height="4.086" />		<rect x="12.857" y="20.084" width="4.596" height="4.086" />		<rect x="18.995" y="20.084" width="4.595" height="4.086" />		<rect x="25.128" y="20.084" width="4.596" height="4.086" />		<rect x="6.724" y="25.54" width="4.595" height="4.086" />		<rect x="12.857" y="25.54" width="4.596" height="4.086" />		<rect x="18.995" y="25.54" width="4.595" height="4.086" />		<rect x="25.128" y="25.54" width="4.596" height="4.086" />	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                          </th>

                          <th scope="col"><svg id="Capa_1" enableBackground="new 0 0 512 512" height="36.447px" viewBox="0 0 512 512" width="36.447px" xmlns="http://www.w3.org/2000/svg"><g><path d="m361.735 94.196 5.067-68.979-50.375 46.829 12.654 32.213z" /><ellipse cx="256.006" cy="256" rx="133.082" ry="133.083" transform="matrix(.987 -.16 .16 .987 -37.701 44.313)" /><path d="m182.931 104.259 12.572-32.007-50.575-46.9 5.136 68.779z" /><path d="m294.335 97.583-38.329-97.583-38.329 97.583c12.297-2.976 25.13-4.564 38.329-4.564s26.032 1.588 38.329 4.564z" /><path d="m505.588 312.965-86.628-59.096c.009.71.027 1.419.027 2.131 0 26.081-6.168 50.745-17.106 72.626z" /><path d="m403.743 187.226 52.412-90.839-100.285 30.903c20.344 15.82 36.849 36.349 47.873 59.936z" /><path d="m420.203 218.523 28.257 19.277 57.071-39.018-68.05-10.205z" /><path d="m230.871 447.729 25.291 64.271 25.141-64.121-25.297-23.459z" /><path d="m144.931 486.648 76.874-71.289c-25.8-5.531-49.355-17.181-69.061-33.36z" /><path d="m290.206 415.36 76.874 71.289-7.812-104.649c-19.706 16.179-43.262 27.828-69.062 33.36z" /><path d="m387.682 361.008 2.549 34.148 66.054 20.295-34.453-59.6z" /><path d="m156.142 127.29-100.286-30.904 52.413 90.84c11.024-23.586 27.529-44.115 47.873-59.936z" /><path d="m91.809 218.523-17.167-29.754-68.23 10.319 56.956 38.837z" /><path d="m55.922 415.697 65.843-20.32 2.566-34.369-33.932-5.124z" /><path d="m93.025 256c0-.713.018-1.421.027-2.132l-86.627 59.097 103.707 15.661c-10.939-21.881-17.107-46.545-17.107-72.626z" /></g></svg></th>
                          <th scope="col"><svg height="36.447px" viewBox="-12 0 448 448.04455" width="36.447px" xmlns="http://www.w3.org/2000/svg"><path d="m224.023438 448.03125c85.714843.902344 164.011718-48.488281 200.117187-126.230469-22.722656 9.914063-47.332031 14.769531-72.117187 14.230469-97.15625-.109375-175.890626-78.84375-176-176 .972656-65.71875 37.234374-125.832031 94.910156-157.351562-15.554688-1.980469-31.230469-2.867188-46.910156-2.648438-123.714844 0-224.0000005 100.289062-224.0000005 224 0 123.714844 100.2851565 224 224.0000005 224zm0 0" /></svg></th>
                        </tr> : <></>}


                    </thead>


                    <tbody>
                      {props.dataFiveDaysWeather !== undefined && props.dataFiveDaysWeather !== null ?
                        props.dataFiveDaysWeather.map((item, index) => {

                          return (<tr key={index}>
                            <td>{item.Date.split('T')[0]}</td>
                            <td>{item.Temperature.Maximum.Value}{item.Temperature.Maximum.Unit}</td>
                            <td>{item.Temperature.Minimum.Value}{item.Temperature.Minimum.Unit}</td>
                          </tr>)

                        }) : <></>
                      }

                    </tbody>
                  </table>

                  {
                    props.dataFiveDaysWeather!==undefined ?

                    (props.favoriteData[props.dataLocation.Key]===undefined?
                    <button type="button" className="btn-success" onClick={()=>props.addToFavoriteList(props.dataLocation.Key,props.dataLocation)}>Add To Favorite
                    </button> :
                    <button type="button" className="btn-danger" onClick={()=>props.removeFromFavoriteList(props.dataLocation.Key)}>Remove From Favorite
                    </button>)

                    :<></>
                  }
                
               
                </div>
              </div>




            </div>
          </div>
        </div>

      </div>
    </div >
  );
}

export default weatherView;