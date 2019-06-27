import React, { Component } from 'react';
import post1 from '../../images/post-1.jpg';
import lifestyle1 from '../../images/lifestyle-1.jpg';
import lifestyle2 from '../../images/lifestyle-2.jpg';
import Post from '../Post/Post';
import NewsCard from '../NewsCard/NewsCard';
import Heading from '../Heading/Heading';
import someMoreNews1 from '../../images/some-more-news-1.jpg';

class Celebrity extends Component{
    render(){
        return(
            <div className="row celebrity">
              <div className="col-md-8 display-inline">
                <Heading headName="Celebrity"/>
                <div className="row">
                  <div className="col-md-6 display-inline">
                      <NewsCard img={someMoreNews1} name="Model" 
                          heading="Chris Christie, New Jersey governor, enjoys beach"
                          views="36.6k" para=""
                      />
                  </div>
                  <div className="col-md-6 display-inline">
                      <NewsCard img={someMoreNews1} name="Lifestyle" 
                          heading="Chris Christie, New Jersey governor, enjoys beach"
                          views="36.6k" para=""
                      />
                  </div>
                </div>
                <div className="row celebrity-margin">
                  <div className="col-md-6 display-inline">
                      <NewsCard img={someMoreNews1} name="Model" 
                          heading="Chris Christie, New Jersey governor, enjoys beach"
                          views="36.6k" para="Seven years after the Affordable Care act was enacted,
                          Republicans are trying to follow through on their..."
                      />
                  </div>
                  <div className="col-md-6 display-inline">
                     <div className="celebrity-post">
                      <Post img={post1} description="Scarlett’s disappointment at latest accolade" fontSize="lifestyle-size"/>
                      <Post img={post1} description="Most Beautiful Things to Do in Sidney with Your BF" fontSize="lifestyle-size"/>
                      <Post img={post1} description="Have Fun in The Morning With a Cup of Coffee" fontSize="lifestyle-size"/>
                      <Post img={post1} description="Accompany Your Trips, in The Blue Sky" fontSize="lifestyle-size"/>
                      <Post img={post1} description="Summer Travel Fashion, Your Holiday Choice" fontSize="lifestyle-size"/>
                     </div>
                  </div>
                </div>
               
              </div>
              <div className="col-md-4 display-inline">
                <div class="celebrity-img-1">
                  <img src={lifestyle1}></img>
                  <p className="upper-text">Instagram</p>
                  <p className="lower-text">Follow us on Instagram to get latest inspiration of fashion.</p>
                </div>
                <div class="celebrity-img-2">
                  <img src={lifestyle2}></img>
                  <p className="upper-text">That is an amazing shot</p>
                  <p className="lower-text">Follow us on Instagram to get latest inspiration of fashion.</p>
                </div>
              </div>
            </div>
        );
    }
}

export default Celebrity;