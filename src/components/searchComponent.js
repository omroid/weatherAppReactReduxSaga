import React from 'react';

function searchComponent(props) {
    return (
        <div>
            <div className="row">
                <div className="col-sm-12 center colSearch">
                    <div className="searchDiv">
                        <div className="center">


                            <svg id="icon-glass" className="icon-glass" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M16.024 15.0588H17.1123L23.9435 21.9037L21.9037 23.9435L15.0588 17.1123V16.0308L14.6824 15.6544C13.1286 16.9891 11.1093 17.7968 8.89842 17.7968C3.98374 17.7968 0 13.8131 0 8.89842C0 3.98374 3.98381 0 8.89842 0C13.813 0 17.7968 3.98374 17.7968 8.89842C17.7968 11.1093 16.9891 13.1286 15.6475 14.6824L16.024 15.0588ZM2.73799 8.89842C2.73799 12.3003 5.49651 15.0588 8.89842 15.0588C12.3003 15.0588 15.0588 12.3003 15.0588 8.89842C15.0588 5.49651 12.3003 2.73799 8.89842 2.73799C5.49651 2.73799 2.73799 5.49651 2.73799 8.89842Z"
                                    fill="#5964E0"></path>
                            </svg>


                            <input className="txtSearch" type="text" value={props.txtSearch} onChange={(e) => {
                                const RegExpression = /^[a-zA-Z\s]*$/;
                                if (e.target.value.match(RegExpression)) {
                                    props.setSelectedDataIndex(-1);
                                    props.setTxtSearch(e.target.value);
                                    props.fatchDataForAutoCompletionSaga(e.target.value);
                                }
                            }}/>
                            <div className="btn-group dropdown">
                                <button type="button" className="txtSearch dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >

                                </button>
                                <div className={props.selectedDataIndex === -1 && props.txtSearch!=""? 'dropdown-menu show' : 'dropdown-menu'}>

                                    {
                                        props.dataAutoCompletion !== undefined && props.dataAutoCompletion !== null && props.dataAutoCompletion !== "" ?
                                            props.dataAutoCompletion.map((item, index) => {
                                                return (
                                                    <a className="dropdown-item" key={index} onClick={(e) => {
                                                        props.setSelectedDataIndex(index);
                                                        props.setTxtSearch(props.dataAutoCompletion[index].LocalizedName)
                                                    }}>{item.LocalizedName}</a>
                                                )
                                            }) : <></>
                                    }




                                </div>

                            </div>
                            <div><button type="button" className="btn" disabled={props.selectedDataIndex === -1 ? true : false}
                                onClick={() => {
                                    props.fatchAllWeatherDataSaga(props.dataAutoCompletion[props.selectedDataIndex])
                                    // props.fatchDataNextFiveDaysSaga(props.dataAutoCompletion[props.selectedDataIndex].Key);
                                    // props.fatchDataCurrentDaySaga(props.dataAutoCompletion[props.selectedDataIndex].Key);
                                    // props.setDataLocation(props.dataAutoCompletion[props.selectedDataIndex]);
                                }}>Search</button></div>
                            <div className="iconLocationDiv">
                                <a className="locationIconA" onClick={()=>{props.fatchGeoSaga()}}>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" className="locationIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="blueviolet" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                                    </path>
                                </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default searchComponent;