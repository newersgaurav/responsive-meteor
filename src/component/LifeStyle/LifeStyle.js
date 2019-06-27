import React, { Component } from 'react';
import post1 from '../../images/post-1.jpg';
import lifestyle1 from '../../images/lifestyle-1.jpg';
import lifestyle2 from '../../images/lifestyle-2.jpg';
import styleHunter from '../../images/style-hunter.jpg';
import Post from '../Post/Post';
import MainNews from '../MainNews/MainNews';
import colorInstaLogo from '../../images/color-insta-logo.png';

class LifeStyle extends Component{
    render(){
        return(
            <div className="row life-style">
              <div className="display-inline col-md-8 col-sm-12">
                <MainNews img={styleHunter} name="Vogue" 
                    heading="No, Really: Congress Is About To Hand Over Your Personal"
                    views="36.6k" para="News is a direct tool of influence on public consciousness. 
                    The goal of the news is to provide to the society objective information 
                    about a particular event or action." divname="life-style" headName="Lifestyle"
                />
                <div className="lifestyle-post row">
                  <div className="display-inline col-md-6">
                    <Post img={post1} description="Scarlett’s disappointment at latest accolade" fontSize="lifestyle-size"/>
                    <Post img={post1} description="Most Beautiful Things to Do in Sidney with Your BF" fontSize="lifestyle-size"/>
                    <Post img={post1} description="Have Fun in The Morning With a Cup of Coffee" fontSize="lifestyle-size"/>
                  </div>
                  <div className="display-inline col-md-6">
                    <Post img={post1} description="Accompany Your Trips, in The Blue Sky" fontSize="lifestyle-size"/>
                    <Post img={post1} description="Summer Travel Fashion, Your Holiday Choice" fontSize="lifestyle-size"/>
                    <Post img={post1} description="Life’s challenges force us to harden up" fontSize="lifestyle-size"/>
                  </div>
                </div>
              </div>
              <div className="display-inline col-md-4 col-sm-12">
                <div class="lifestyle-img-1">
                  <img className="img" src={lifestyle1}></img>
                  <p className="upper-text">That is an amazing shot</p>
                  <p className="lower-text">Follow us on Instagram to get latest inspiration of fashion.</p>
                </div>
                <div class="lifestyle-img-2">
                  <img className="img" src={lifestyle2}></img>
                  <img className="color-insta-logo" src={colorInstaLogo}></img>
                  <p className="upper-text">Instagram</p>
                  <p className="lower-text">Follow us on Instagram to get latest inspiration of fashion.</p>
                </div>
              </div>
            </div>
        );
    }
}

export default LifeStyle;