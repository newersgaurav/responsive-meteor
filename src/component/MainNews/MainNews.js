import React, { Component } from 'react';
import Heading from '../Heading/Heading';

class MainNews extends Component{
    render(){
        return(
            <div className={this.props.divname+"-main-news"}>
                <div className="col-md-12">
                    <Heading headName={this.props.headName}/>
                    <div id={this.props.divname+"-main-news-content"}className="white-background">
                        <img alt={this.props.divname+"-main"} src={this.props.img} class="main-news-img"></img>
                        <span className="tag">{this.props.name}</span>
                        <span className="views"><i className="fa fa-eye"></i>{this.props.views}</span>
                        <div className="main-content">
                            <h2 className="content-heading">{this.props.heading}</h2>
                            <span className="time-of-post">Jhon  |  2 hours ago</span>
                            <p className="content-para">{this.props.para}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainNews;