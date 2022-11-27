import React from 'react';
import logo from './images/caratula.jpg';
import classes from "./HolaMundoComponentStyles.scss";

export const HolaMundoComponent: React.FC = () => {
    return (
        <div>
            
            <h2>
                <span className={classes.resultBackground}>BoilerPlate Project</span>
            </h2>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Boilerplate features</h5>
                    <img src={logo}></img>
                    <p className="card-text">
                        This is a boilerplate ready to use images, sass with css modules, bootstrap, images, environment variables, typescript, and with a production and development environments
                    </p>
                    <a href="#" className="btn btn-primary">Start coding</a>
                </div>
            </div>
        </div>
    )
}