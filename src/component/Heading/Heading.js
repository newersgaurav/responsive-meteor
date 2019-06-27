import React, { Component } from 'react';

class Heading extends Component{
    render(){
        return(
            <div className="main-news-nav">
                <h2>{this.props.headName}</h2>
                <ul>
                    <li><a>World</a></li>
                    <li><a>People</a></li>
                    <li><a>Food</a></li>
                    <li><a>Animal</a></li>
                </ul>
            </div>
        );
    }
}

export default Heading;