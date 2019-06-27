import React, { Component } from 'react';
import footerLogo from '../../images/footer-logo.png';
import twitter from '../../images/twitter-2.png';
import fb from '../../images/fb-cover.png';
import ball from '../../images/ball.png';
import pLogo from '../../images/p-logo.png';
import insta from '../../images/insta.png';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="wrapper row">
                    <div className="col-md-12 padding-0">
                        <div className="row">
                            <div className="col-md-2 col-sm-6 col-6 padding-0">
                                <a class="footer-logo" href="javascript:void(0)">
                                    <img className="img-responsive" src={footerLogo}></img>
                                </a>
                            </div>
                            <div className="col-md-8 d-none d-md-block">
                                <nav class="navbar navbar-expand-sm footer-nav">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0)">Business</a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0)">Investing</a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0)">Technology</a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0)">Entrepreneurs</a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0)">Op/ed</a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0)">Leadership</a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0)">Lifestyle</a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0)">Lists</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-md-2 col-sm-6 col-6 select-col">
                                <select className="select-option">
                                    <option>English</option>
                                    <option>Hindi</option>
                                </select>
                            </div>
                        </div>
                    </div>
                
                <div className="row mid-section">
                    <div className="col-md-4 col-sm-12 section section-1">
                        <p>
                            meteor is your news, entertainment, music fashion website. 
                            We provide you with the latest breaking news and videos straight from 
                            the entertainment industry.
                        </p>
                        <div className="icons-span">
                            <span className="twitter"><img src={twitter}></img></span>
                            <span className="fb"><img src={fb}></img></span>
                            <span className="ball"><img src={ball}></img></span>
                            <span className="insta"><img src={insta}></img></span>
                            <span className="pLogo"><img src={pLogo}></img></span>
                        </div>
                    </div>
                    <div className="col-md-2 section section-2">
                        <ul className="copyright-list-menu">
                            <li>Business</li>
                            <li>culture</li>
                            <li>Gadgets</li>
                            <li>Future</li>
                            <li>Startups</li>
                        </ul>
                    </div>
                    <div className="col-md-2 section section-3">
                        <ul className="copyright-list-menu">
                            <li>Stars</li>
                            <li>Screen</li>
                            <li>Binge</li>
                            <li>Culture</li>
                            <li>Media</li>
                        </ul>
                    </div>
                    <div className="col-md-2 section section-4">
                        <ul className="copyright-list-menu">
                            <li>45</li>
                            <li>Congress</li>
                            <li>SecurityT</li>
                            <li>he Nine</li>
                            <li>Trumpmerica</li>
                        </ul>
                    </div>
                    <div className="col-md-2 section section-5">
                        <ul className="copyright-list-menu">
                            <li>Video</li>
                            <li>Video news</li>
                            <li>Feature shows</li>
                            <li>HLN</li>
                            <li>TV shows</li>
                            <li>TV schedule</li>
                            <li>Faces of CNN Worldwide</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-12 padding-0">
                <div className="row copyright">
                    <div className="col-md-3 col-sm-12 span-div">
                        <span className="meteor-span">meteor</span>
                        <span className="span-text">International Edition +</span>
                    </div>
                    <div className="col-md-9 col-sm-12 copyright-section">
                        <p>&copy;2018 Themexpert Inc. TX Brodacting System, Inc.All Rights Reserved</p>
                        <p>Meteor TX & &copy; 2018 Cable News Network.</p>
                        <ul className="copyright-list-menu">
                            <li>Terms and Conditions</li>
                            <li>Privacy Statement</li>
                            <li>Market Data</li>
                            <li>AdChoices</li>
                            <li>Newslatter</li>
                            <li>Help</li>
                            <li>About Us</li>
                            <li>Meteor Newsource</li>
                            <li>Terms</li>
                            <li>Site Map</li>
                        </ul>
                    </div>
                </div>
                </div>

            </div>

            </div>
        );
    }
}

export default Footer;