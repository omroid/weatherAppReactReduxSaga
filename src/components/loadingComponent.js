import React from 'react';
import loadingImg from "../images/loading.gif";

function loadingComponent(props) {
    return (
        <div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="center"> 
                      <img className="loadingImg" src={loadingImg} style={{ marginTop: '120px' }} />
                      </div>
                </div>
            </div>

        </div>
    );
}

export default loadingComponent;

