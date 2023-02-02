import React from 'react';
import index_1 from './img/index_1.png';
import index_2 from './img/index_2.png';
import index_3 from './img/index_3.png';
import img from './img/Img.png';
import icon from './img/Icon.png';

const Main = () => {
    return <main>
    <div className='container'>
      <div className='main_content' id="articles">
        <div className='content_element'>
          <div className='element_text'>
            <div className='text_header'>
              <div class="avatar">
                <img src={img} alt="Logo"/>
              </div>
              <a href="#">Authors name</a> <span>&nbsp;in&nbsp;</span><a href="#">Topics Name</a>&nbsp;· <span>&nbsp;7 july</span>
            </div>
            <div className='text_main'>
              <h2 id="title">7 Practical CSS Tips</h2>
              <p id="summary">You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.</p>
            </div>
            <div className='text_footer'>
              <div class="footer_left">
                <button class="tag">Java Script</button><span>&nbsp;12 min read&nbsp;</span>  · <span>&nbsp;Selected for you&nbsp;</span>
              </div>
              <div class="footer_right">
                <img className='tags_img' src={icon} alt=""/>
                <img className='tags_img' src={icon} alt=""/>
                <img className='tags_img' src={icon} alt=""/>
              </div>
            </div>
          </div>
          <div className='element_img'>
            <img src={index_1} alt="article"/>
          </div>
        </div>
        <div className='content_element'>
          <div className='element_text'>
            <div className='text_header'>
              <div class="avatar">
                <img src={img} alt="Logo"/>
              </div>
              <a href="#">Authors name</a> <span>&nbsp;in&nbsp;</span><a href="#">Topics Name</a>&nbsp;· <span>&nbsp;7 july</span>
            </div>
            <div className='text_main'>
              <h2 id="title">7 Practical CSS Tips</h2>
              <p id="summary">Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.
                            You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...</p>
            </div>
            <div className='text_footer'>
              <div class="footer_left">
                <button class="tag">Java Script</button><span>&nbsp;12 min read&nbsp;</span>  · <span>&nbsp;Selected for you&nbsp;</span>
              </div>
              <div class="footer_right">
                <img className='tags_img' src={icon} alt=""/>
                <img className='tags_img' src={icon} alt=""/>
                <img className='tags_img' src={icon} alt=""/>
              </div>
            </div>
          </div>
          <div className='element_img'>
            <img src={index_2} alt="article"/>
          </div>
        </div>
        <div className='content_element'>
          <div className='element_text'>
            <div className='text_header'>
              <div class="avatar">
                <img src={img} alt="Logo"/>
              </div>
              <a href="#">Authors name</a> <span>&nbsp;in&nbsp;</span><a href="#">Topics Name</a>&nbsp;· <span>&nbsp;7 july</span>
            </div>
            <div className='text_main'>
              <h2 id="title">7 Practical CSS Tips</h2>
              <p id="summary">Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.
                            You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...</p>
            </div>
            <div className='text_footer'>
              <div class="footer_left">
                <button class="tag">Java Script</button><span>&nbsp;12 min read&nbsp;</span>  · <span>&nbsp;Selected for you&nbsp;</span>
              </div>
              <div class="footer_right">
                <img className='tags_img' src={icon} alt=""/>
                <img className='tags_img' src={icon} alt=""/>
                <img className='tags_img' src={icon} alt=""/>
              </div>
            </div>
          </div>
          <div className='element_img'>
            <img src={index_3} alt="article"/>
          </div>
        </div>
      </div>
    </div>
  </main>
}

export default Main;