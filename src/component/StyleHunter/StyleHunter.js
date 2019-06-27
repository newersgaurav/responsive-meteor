import React, { Component } from 'react';
import someMoreNews1 from '../../images/some-more-news-1.jpg';
import someMoreNews2 from '../../images/some-more-news-2.jpg';
import styleHunter from '../../images/style-hunter.jpg';
import IconsList from '../IconsList/IconsList';
import PopularPost from '../PopularPost/PopularPost';
import NewsCard from '../NewsCard/NewsCard';
import MainNews from '../MainNews/MainNews';

class StyleHunter extends Component{
    render(){
        return(
            <div className="style-hunter row">
              <div className="display-inline col-md-8 col-sm-12">
                <MainNews img={styleHunter} name="Vogue" 
                        heading="No, Really: Congress Is About To Hand Over Your Personal"
                        views="36.6k" para="News is a direct tool of influence on public consciousness. 
                        The goal of the news is to provide to the society objective information 
                        about a particular event or action." divname="style-hunter" headName="Style Hunter"
                        />
                <div class="some-more-news row">
                  <div className="display-inline col-md-6">
                    <NewsCard img={someMoreNews1} name="Fashion" 
                        heading="Chris Christie, New Jersey governor, enjoys beach"
                        views="36.6k" para="Seven years after the Affordable Care act was enacted,
                         Republicans are trying to follow through on their..."
                    />
                  </div>
                  <div className="display-inline col-md-6">
                    <NewsCard img={someMoreNews2} name="Helth" 
                        heading="If you wanted to get rich, how  would you do it?"
                        views="36.6k" para="Seven years after the Affordable Care act was enacted,
                         Republicans are trying to follow through on their..."
                    />
                  </div> 
                </div>
              </div>
              <div className="display-inline col-md-4 col-sm-12 padding-0">
                <IconsList/>
                <PopularPost/>
              </div>
            </div>
        );
    }
}

export default StyleHunter;