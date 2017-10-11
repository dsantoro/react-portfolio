import React, { Component } from 'react';
import { Link } from 'react-router';
import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';

class Header extends Component {

    render(){

        function addMenuABackground(){

            
            if(window.scrollY > 0) {
                document.querySelector('.header').classList.add('scrolled');
            } else {
                document.querySelector('.header').classList.remove('scrolled');
            }
        }

        window.addEventListener( 'scroll' ,() => addMenuABackground());
        window.addEventListener( 'load' ,() => addMenuABackground());

        return(

            <header className="header">

                <div className="row flex expanded">

                    <div className="small-12 medium-4 columns">

                        <Link to="/" className="logo">Danylo <span>Santoro</span></Link>
                    </div>

                    <div className="small-12 medium-8 columns">

                        <nav>
                            <ul className="navigation flex">

                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/portfolio">Portfólio</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link to="https://github.com/dsantoro" target="blank_">
                                        <FaGithub className="github" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" target="blank_">
                                        <FaLinkedinSquare className="linkedin" />
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;