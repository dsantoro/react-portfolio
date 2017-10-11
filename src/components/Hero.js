import React, { Component } from 'react';

class Hero extends Component {

    componentWillUnmount() {

        console.log('desmontou')
    }

    render(){        

        return(
            <div className="hero flex">
            
                <div className="row">

                    <div className="small-12 columns">

                        <hgroup>
                            <h1>Danylo Santoro</h1>
                            <h5>Front End Developer, React lover and CSS enthusiast...</h5>
                        </hgroup>
                    </div>  
                </div>

                <div className="hero-down">

                    <div className="row">

                        <div className="small-12 columns">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;