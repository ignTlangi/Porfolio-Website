import React from 'react'
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';

import './Header.scss';

const scaleVariants = { 
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {  duration: 1, ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
      whileInView={{ x: [-100,0], opacity: [0, 1] }}
      transition={{ duration: 2 }}
      className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className='p-text'>Hey there, The Name's</p>
            <h1 className='head-text'>Tlangi</h1>
          </div>
        </div>

        <div className='tag-cmp app__flex'>
          <h6 className='p-text'>I Dabble in...</h6>
         
          <p className='p-text'>Web Development </p>
          <p className='p-text'>Adminstrative Assistance</p>
          <p className='p-text'>Cinematography Freelancing</p>
          


        </div>
        </div>
      </motion.div>

      <motion.div whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={ images.profile } alt="profile_bg"></img>

        <motion.img whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={ images.circle}
          alt= 'profile_circle'
          className='overlay_circle'
        
          />
        </motion.div>

      <motion.div 
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
          <img src={circle} alt='circle' />
          </div>
        ))}
        
      </motion.div>
    </div>
  )
}
export default AppWrap(Header, 'home');