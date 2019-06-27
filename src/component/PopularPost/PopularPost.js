import React, { Component } from 'react';
import popularPostMainPic from '../../images/popular-post-main-pic.jpeg';
import Post from '../Post/Post';
import post1 from '../../images/post-1.jpg';

class PopularPost extends Component{
    render(){
        return(
            <div className="popular-post col-md-12">
                <h3 className="popular-post-heading">Popular Post</h3>
                <div className="pic-container">
                    <img className="popularPostMainPic" src={popularPostMainPic}></img>
                    <div className="img-text">
                        <span className="name">Vogue</span>
                        <span className="view"><i className="fa fa-eye"></i> 89.4k</span>
                        <p>What to Wear: 9+ Cute Work Outfits to Wear This Summer</p>
                        <span className="time">Jhon  |  2 hours ago</span>
                    </div>
                </div>
                <div className="other-post">
                    <Post img={post1} description="Scarlett’s disappointment at latest accolade"/>
                    <Post img={post1} description="Scarlett’s disappointment at latest accolade"/>
                    <Post img={post1} description="Scarlett’s disappointment at latest accolade"/>
                    <Post img={post1} description="Scarlett’s disappointment at latest accolade"/>
                </div>
            </div>

        );
    }
}

export default PopularPost;