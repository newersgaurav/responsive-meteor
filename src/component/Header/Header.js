import React, { Component } from 'react';
import message from '../../images/message.png';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import googleplus from '../../images/googleplus.png';
import user from '../../images/user.png';
import logo from '../../images/logo.png';

class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="header-1 d-none d-sm-block">
                    <div className="row wrapper">
                        <div className="col-sm-6">
                            <ul className="top-nav">
                                <li>-5 C New York</li>
                                <li>Monday, March 6</li>
                                <li>Blog</li>
                                <li>Forums</li>
                                <li>Contact</li>
                                <li>Buy now!</li>
                            </ul>
                        </div>
                        <div className="col-sm-3 offset-sm-3 icon-nav">
                            <ul className="social-icon">
                                <li><img alt="message" src={message}></img></li>
                                <li><img alt="facebook" src={facebook}></img></li>
                                <li><img alt="instagram" src={instagram}></img></li>
                                <li><img alt="googleplus" src={googleplus}></img></li>
                            </ul>
                            <ul className="user-sign-in">
                                <li><img alt="user" src={user}></img></li>
                                <li>Sign in</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="wrapper col-md-12 header-2">
                    <nav className="navbar navbar-expand-lg navbar-light padding-0">
                        <a className="navbar-brand" href="/">
                            <img src={logo} alt="logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link header-link color-link" href="/">
                                        Fashion <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link navbar_icons header-link" href="/">
                                        Style Hunter
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle header-link" href="/" id="navbarDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Lifestyle
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/">
                                            Trending
                                        </a>
                                        <a className="dropdown-item" href="/">
                                            New Arrivals
                                        </a>
                                        <div className="dropdown-divider" />
                                            <a className="dropdown-item" href="/">
                                                Others
                                            </a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link header-link" href="/" tabIndex="-1" aria-disabled="true">
                                        Celebrity
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle header-link" href="/" id="navbarDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Videos
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/">
                                            Fashion
                                        </a>
                                        <a className="dropdown-item" href="/">
                                            Sports
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="/">
                                            Technology
                                        </a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link header-link" href="/" tabIndex="-1" aria-disabled="true">
                                        Celebrity
                                    </a>
                                </li>
                            </ul>
                            <i className="fas fa-search search" />
                        </div>
                    </nav>
                </div>
                
            </div>
        )
    }
}

export default Header;