import React from 'react';
import { BsTwitter, BsLinkedin,  BsInstagram } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://twitter.com/igntlangi'><BsTwitter /></a>   
    </div>

    <div>
      <a href='https://www.instagram.com/tlangi.kho/'><BsInstagram /></a>
    </div>
    
    <div>
      <a href='https://www.linkedin.com/in/tlangi/'><BsLinkedin /></a>
    </div>

    
  </div>
)

export default SocialMedia;