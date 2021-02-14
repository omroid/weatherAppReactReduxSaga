import React from 'react';

function header(props) {
    return (
        <header>
            <div className="row">
                <div className="col-sm-12 colNavbar">

                    <nav className="navbar">
                        <a className="navbar-brand">Weather App Task</a>
                        <div className="toogleDiv">
                            <p>Home</p>

                            <label className="switch">
                                <input type="checkbox" checked={props.isFavoritePage} onChange={(e)=>props.setIsFavoritePage(e.target.checked)} />
                                <span className="slider round"></span>
                            </label>

                            <p>Favorite</p>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default header;