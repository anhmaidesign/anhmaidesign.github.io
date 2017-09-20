import React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import PDF from 'material-ui/svg-icons/image/picture-as-pdf';
import Back from 'material-ui/svg-icons/navigation/arrow-back';
import Forward from 'material-ui/svg-icons/navigation/arrow-forward';
import FlatButton from 'material-ui/FlatButton';
import ShareButton from './ShareButton';

const styles = {
  mediumIcon: {
    width: 48,
    height: 48,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  }
};

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="portfolio">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <div className="blog-title">Women in tech - The facts and problems</div>
            <div className="blog-author">by Anh Mai</div>
            <div className="blog-date">Sep 20th 2017</div>
          </div>
        </div>

        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <img className="portfolio-img-page" src="files/background/wit.jpg"/>
          </div>
        </div>

        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <p>As a designer, I’m not just invested in this community – I love every design, every interface, every hard-working designer in this industry.</p>
            <p>When people talk about User Experience (UX), they often talk about customer experience evaluation, defining the vision, user researches and design patterns. I believe that the best definition of it is the way you feel it.</p>
          </div>
        </div>

        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-4 col-sm-offset-4">
            <img className="portfolio-img-page" src="files/1.png"/>
          </div>
        </div>

        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <p>Being a UX designer is a great duty. It’s immensely satisfying to take a complex, potentially difficult experience and turn it into something simple and painless.</p>
            <p>UX Designer may not be aware of what important to the audiences because design trend changes rapidly. Audiences might have not yet reached our full design thinking if we do not give them clear information. One of the topic that I want to mention is women in design industry. Nowadays, there are more and more female UX designers join the industry and they are playing as the same role with their men colleague.</p>
            <p>Women designers bring a really good effort to the team by contribute their opinions as well as their skills to make their design works. However, though more women are working in the tech  industry, some challenges remain.</p>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-4 col-sm-offset-4">
            <img className="portfolio-img-page" src="files/2.png"/>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <p>In 2015, women made up only 25 percent of computing related occupations. Women are vastly underrepresented in the global technology workforce. This is not only a societal concern, but also a workforce problem, given the critical shortage of skilled technology professionals faced by many enterprises. </p>
            <p>“It’s so easy for us to get caught up in negative patterns, versus seeing what positive change you can make. Especially for women and minorities, we need to learn to see challenges as stepping stones instead of hurdles. They really can bring you experience and closer to your goals.”said Rebecca Garcia, technical Head of Product at Next Caller who has evolved many important design projects  since the 1992.</p>
            <p>The following infographic show how hard is it for women to be accepted in the tech industry.</p>
          </div>
        </div>

        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-4 col-sm-offset-2">
            <img className="portfolio-img-page" src="files/wit1.png"/>
          </div>
          <div className="col-xs-12 col-sm-4">
            <img className="portfolio-img-page" src="files/wit2.png"/>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <p>As a women, based on the six projects were successful in 2016, two more mobile app applications are going to release next two month, I confidently say I am a skilled designer with strong design abilities compared to my men colleagues.</p>
            <p>Market demand is increasing, the user design industry is growing. If you have sufficient expertise with the aesthetic eye, finding a job will not be too hard for you as a fresh graduate.</p>
          </div>
        </div>
        <div className="row portfolio-row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            <p className="text-right">--Anh Mai--</p>
          </div>
        </div>
        <ShareButton
          url="http://anhmaidesign.com/wit"
          title="Girls Who Code - Woman in tech Infographic"
          description="Anh Mai's Design Portfolio for Girls Who Code"
          picture="http://anhmaidesign.com/files/wit-cover.jpg"/>
      </div>
    )
  }
}

export default Blog;