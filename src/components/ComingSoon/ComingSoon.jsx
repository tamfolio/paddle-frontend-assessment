import React from 'react'
import './comingsoon.css'
import { Facebook, YouTube, Instagram, Twitter, LinkedIn } from '@material-ui/icons';
import Footer from '../footer/Footer';


function ComingSoon() {
  return (
    <div className='comingsoon'>
        <h1 className='coming-soon-header'>Something awesome is coming soon</h1>
        <p className='header-p'>Your all-in-one affiliate marketing tracking software <span>track</span> , <span>automate</span> and <span>optimize</span> your campaigns.</p>
        <div className="countdown">
            <div className="countdown-card">
                <h1>7</h1>
                <p>Days</p>
            </div>
            <div className="countdown-card">
                <h1>24</h1>
                <p>Hours</p>
            </div>
            <div className="countdown-card">
                <h1>54</h1>
                <p>Minutes</p>
            </div>
            <div className="countdown-card">
                <h1>11</h1>
                <p>Seconds</p>
            </div>
        </div>
        <form className="input-form">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
        </form>
        <div className="wait-list">
            <input type="text" placeholder='Enter your Email Address' />
            <button className='waitlist-btn'>JOIN OUR WAITING LIST</button>
        </div>
        <Footer/>
    </div>
  )
}

export default ComingSoon