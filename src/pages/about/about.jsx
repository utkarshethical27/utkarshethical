import React from 'react'
import Nav from '../../components/nav/nav'
import './about.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function About() {
  return (
    <>
      <Nav />
      <h1 className='title'>About Me</h1>
      <p id='info'>I'm Utkarsh Mishra, a versatile visual designer and developer located in Kanpur. With expertise in various domains including Branding, Web Design, Web Development, Graphic Design, and App Development & Design, Video Editing and so on. I am dedicated to assisting startups in achieving significant business growth. My creative skills extend to crafting compelling brand identities, designing user-friendly websites, and developing innovative applications. I am passionate about combining aesthetics with functionality to deliver impactful solutions that resonate with clients and users alike.</p>
      <h1 className='title'>My Skills</h1>
      <div id='skills'>
        <div>
          <CircularProgressbar value={100} text='100%' className='progress' styles={buildStyles({ pathColor: '#7E22D3', textColor: 'white', textSize: '25', rotation: 0.25, trailColor: 'white', pathTransitionDuration: 1, pathTransition: 'stroke-dashoffset 0.5s ease 0s' })} />
          <h1>HTML</h1>
        </div>
        <div>
          <CircularProgressbar value={100} text='100%' className='progress' styles={buildStyles({ pathColor: '#7E22D3', textColor: 'white', textSize: '25', rotation: 0.25, trailColor: 'white', pathTransitionDuration: 1, pathTransition: 'stroke-dashoffset 0.5s ease 0s' })} />
          <h1>CSS</h1>
        </div>
        <div>
          <CircularProgressbar value={90} text='90%' className='progress' styles={buildStyles({ pathColor: '#7E22D3', textColor: 'white', textSize: '25', rotation: 0.25, trailColor: 'white', pathTransitionDuration: 1, pathTransition: 'stroke-dashoffset 0.5s ease 0s' })} />
          <h1>Javascript</h1>
        </div>
        <div>
          <CircularProgressbar value={90} text='90%' className='progress' styles={buildStyles({ pathColor: '#7E22D3', textColor: 'white', textSize: '25', rotation: 0.25, trailColor: 'white', pathTransitionDuration: 1, pathTransition: 'stroke-dashoffset 0.5s ease 0s' })} />
          <h1>React JS</h1>
        </div>
        <div>
          <CircularProgressbar value={90} text='90%' className='progress' styles={buildStyles({ pathColor: '#7E22D3', textColor: 'white', textSize: '25', rotation: 0.25, trailColor: 'white', pathTransitionDuration: 1, pathTransition: 'stroke-dashoffset 0.5s ease 0s' })} />
          <h1>Node JS</h1>
        </div>
        <div>
          <CircularProgressbar value={90} text='90%' className='progress' styles={buildStyles({ pathColor: '#7E22D3', textColor: 'white', textSize: '25', rotation: 0.25, trailColor: 'white', pathTransitionDuration: 1, pathTransition: 'stroke-dashoffset 0.5s ease 0s' })} />
          <h1>Express JS</h1>
        </div>
        <div>
          <div>
            <CircularProgressbar value={80} text='80%' className='progress' styles={buildStyles({ pathColor: '#7E22D3', textColor: 'white', textSize: '25', rotation: 0.25, trailColor: 'white', pathTransitionDuration: 1, pathTransition: 'stroke-dashoffset 0.5s ease 0s' })} />
            <h1>Mongo DB</h1>
          </div>
        </div>
        <div>
          <CircularProgressbar value={90} text='90%' className='progress' styles={buildStyles({ pathColor: '#7E22D3', textColor: 'white', textSize: '25', rotation: 0.25, trailColor: 'white', pathTransitionDuration: 1, pathTransition: 'stroke-dashoffset 0.5s ease 0s' })} />
          <h1>React Native</h1>
        </div>
        <div>
          <CircularProgressbar value={60} text='60%' className='progress' styles={buildStyles({ pathColor: '#7E22D3', textColor: 'white', textSize: '25', rotation: 0.25, trailColor: 'white', pathTransitionDuration: 1, pathTransition: 'stroke-dashoffset 0.5s ease 0s' })} />
          <h1>Java Android</h1>
        </div>
        <div>
          <CircularProgressbar value={60} text='60%' className='progress' styles={buildStyles({ pathColor: '#7E22D3', textColor: 'white', textSize: '25', rotation: 0.25, trailColor: 'white', pathTransitionDuration: 1, pathTransition: 'stroke-dashoffset 0.5s ease 0s' })} />
          <h1>Graphic Designing</h1>
        </div>
        <div>
          <CircularProgressbar value={60} text='60%' className='progress' styles={buildStyles({ pathColor: '#7E22D3', textColor: 'white', textSize: '25', rotation: 0.25, trailColor: 'white', pathTransitionDuration: 1, pathTransition: 'stroke-dashoffset 0.5s ease 0s' })} />
          <h1>Video Editing</h1>
        </div>
      </div>
      <h1 className='title'>Services</h1>
      <div id="services">
        <div>
          <div>
            <i className='fas fa-paintbrush'></i>
            <h1>Web Designing</h1>
          </div>
        </div>
        <div>
          <div>
            <i className='fas fa-code'></i>
            <h1>Web Development</h1>
          </div>
        </div>
        <div>
          <div>
            <i className='fas fa-pen-nib'></i>
            <h1>Graphic Designing</h1>
          </div>
        </div>
        <div>
          <div>
            <i className='fas fa-video'></i>
            <h1>Video Editing</h1>
          </div>
        </div>
      </div>
    </>
  )
}