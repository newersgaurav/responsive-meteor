import React, { Component } from 'react';
import banner1 from '../../images/banner-1.jpg';
import banner2 from '../../images/banner-2.jpg';
import banner3 from '../../images/banner-3.jpg';

class Banner extends Component{
    render(){
        return(
            <div className="banner">
                <div className="col-md-4 col-sm-12 banner-1">
                    <img alt="style-hunter" src={banner1}></img>
                    <div className="banner-text-1">
                        <span className="banner-name">StyleHunter</span>
                        <span className="banner-view"><i className="fa fa-eye"></i> 336.4k</span>
                        <p>Congress Is About To Hand Over Your Personal Browsing Data</p>
                        <span className="banner-time">Jhon  |  2 hours ago</span>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 banner-2">
                    <img alt="vogue" src={banner2}></img>
                    <div className="banner-text-2">
                        <span id="Vogue" className="banner-name">Vogue</span>
                        <span className="banner-view"><i className="fa fa-eye"></i> 36.4k</span>
                        <p>Congress Is About To Hand Over Your Personal Browsing Data</p>
                        <span className="banner-time">Jhon  |  2 hours ago</span>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 banner-3">
                    <img alt="fashion" src={banner3}></img>
                    <div className="banner-text-3">
                        <span className="banner-name">Fashion</span>
                        <span className="banner-view"><i className="fa fa-eye"></i> 89.4k</span>
                        <p>What to Wear: 9+ Cute Work Outfits to Wear This Summer</p>
                        <span className="banner-time">Jhon  |  2 hours ago</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;