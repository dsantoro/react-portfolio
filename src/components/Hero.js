import React, { Component } from 'react';

class Hero extends Component {

    render(){

        function titleEffect(){

            const title = document.querySelector('.hero hgroup');
            let offY = window.scrollY;

            if(offY <= 700) {

                title.style.opacity = 1 - (offY/700)
                title.style.transform =  `translateY(${ offY/3 }px)`;
            }
        }

        window.addEventListener('scroll', () => titleEffect(), true);
        window.addEventListener('load', () => titleEffect(), true);

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