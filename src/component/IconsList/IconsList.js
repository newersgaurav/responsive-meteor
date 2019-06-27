import React, { Component } from 'react';
import fb from '../../images/fb.png';
import insta from '../../images/insta.png';
import googlePlus from '../../images/google+.png';
import twitter from '../../images/twitter.png';
import youtube from '../../images/youtube.png';
import wiki from '../../images/wiki.png';

class IconsList extends Component{
    render(){
        return(
            <div className="icon-list row">
                <div className="col-4 display-inline social-icons padding-0">
                    <div className="facebook">
                        <div id="fb" className="image-container">
                            <img src={fb}></img>
                        </div>
                        <p className="value">894.6K</p>
                        <p className="typeOfValue">Fans</p>
                    </div>
                    
                </div>
                <div className="col-4 display-inline social-icons padding-0">
                    <div className="twitter">
                        <div id="twitter" className="image-container">
                            <img src={twitter}></img>
                        </div>
                        <p className="value">894.6K</p>
                        <p className="typeOfValue">Followers</p>
                    </div>
                </div>
                <div className="col-4 display-inline social-icons padding-0">
                    <div className="googlePlus">
                        <div id="googleplus" className="image-container">
                            <img src={googlePlus}></img>
                        </div>
                        <p className="value">894.6K</p>
                        <p className="typeOfValue">Followers</p>
                    </div>
                    
                </div>
                <div className="col-4 display-inline social-icons padding-0">
                    <div className="youtube">
                        <div id="youtube" className="image-container">
                            <img src={youtube}></img>
                        </div>
                        <p className="value">894.6K</p>
                        <p className="typeOfValue">Subscribers</p>
                    </div>
                    
                </div>
                <div className="col-4 display-inline social-icons padding-0">
                    <div className="instagram">
                        <div id="insta" className="image-container">
                            <img src={insta}></img>
                        </div>
                        <p className="value">894.6K</p>
                        <p className="typeOfValue">Followers</p>
                    </div>
                    
                </div>
                <div className="col-4 display-inline social-icons padding-0">
                    <div className="wiki">
                        <div id="wiki" className="image-container">
                            <img src={wiki}></img>
                        </div>
                        <p className="value">894.6K</p>
                        <p className="typeOfValue">Likes</p>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default IconsList;