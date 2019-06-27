import React, { Component } from 'react';

class Post extends Component{
    render(){
        return(
            <div className="post">
                <div className="post-img">
                    <img src={this.props.img}></img>
                </div>
                <div className="post-description">
                    <p id={this.props.fontSize} className="description">{this.props.description}</p>
                    <p className="post-time">Jhon | 2 hours ago</p>
                </div>
            </div>
        );
    }
}

export default Post;