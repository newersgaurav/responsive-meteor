import React, { Component } from 'react';
import Heading from '../Heading/Heading';
import Post from '../Post/Post';
import post1 from '../../images/post-1.jpg';
import videoImage from '../../images/video-image.jpg';

class Videos extends Component{
    render(){
        return(
            <div className="row videos">
              <div className="col-md-8 display-inline">
                <Heading headName="Videos"/>
                <iframe class="youtube-video" height="400" src="https://www.youtube.com/embed/4LfJnj66HVQ" 
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
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
              <div className="col-md-4 display-inline">
                <img className="video-img" src={videoImage}></img>
              </div>
            </div>
        );
    }
}

export default Videos;