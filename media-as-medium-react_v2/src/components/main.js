import React from 'react';
import img from './img/Img.png';
import icon from './img/Icon.png';

const Main = (props) => {
    return <main>
    <div className='container'>
      <div className='main_content' id="articles">
        <div className='content_element'>
          <div className='element_text'>
            <div className='text_header'>
              <div className="avatar">
                <img src={img} alt="Logo"/>
              </div>
              <a href="#">Authors name</a> <span>&nbsp;in&nbsp;</span><a href="#">Topics Name</a>&nbsp;· <span>&nbsp;7 july</span>
            </div>
            <div className='text_main'>
              <h2 id="title">{props.head}</h2>
              <p id="summary">{props.content}</p>
            </div>
            <div className='text_footer'>
              <div className="footer_left">
                <button className="tag">Java Script</button><span>&nbsp;12 min read&nbsp;</span>  · <span>&nbsp;Selected for you&nbsp;</span>
              </div>
              <div className="footer_right">
                <img className='tags_img' src={icon} alt=""/>
                <img className='tags_img' src={icon} alt=""/>
                <img className='tags_img' src={icon} alt=""/>
              </div>
            </div>
          </div>
          <div className='element_img'>
            <img src={props.img} alt="article"/>
          </div>
        </div>
      </div>
    </div>
  </main>
}

export default Main;