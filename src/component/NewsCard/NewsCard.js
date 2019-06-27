import React, { Component } from 'react';

class NewsCard extends Component{
    render(){
        return(
            <div className="white-background news-card-content">
                <img alt="image" src={this.props.img} class="main-img"></img>
                <span className="news-card-tag">{this.props.name}</span>
                <span className="news-card-views"><i className="fa fa-eye"></i>{this.props.views}</span>
                <div className="card-main-content">
                    <h2 className="content-heading">{this.props.heading}</h2>
                    <span className="time-of-post">Jhon  |  2 hours ago</span>
                    {this.props.para != "" ?<p className="content-para">{this.props.para}</p>:null}
                    
                </div>
            </div>
        );
    }
}

export default NewsCard;