import './nav.css'
import ParticlesBackground from './particles'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Nav() {
    
    document.querySelector('body').style.overflow = 'scroll'
    let menuActive = false

    const messageHovered = () => {
        document.querySelector('#socials').style.height = '220px'
        document.querySelector('footer .fa-xmark').style.opacity = '1'
        document.querySelector('footer .fa-xmark').style.transform = 'rotate(0deg)'
        document.querySelector('footer .fa-message').style.opacity = '0'
        document.querySelector('footer .fa-message').style.transform = 'rotate(180deg)'
    }

    const messageUnhovered = () => {
        document.querySelector('#socials').style.height = '0'
        document.querySelector('footer .fa-xmark').style.opacity = '0'
        document.querySelector('footer .fa-xmark').style.transform = 'rotate(-180deg)'
        document.querySelector('footer .fa-message').style.opacity = '1'
        document.querySelector('footer .fa-message').style.transform = 'rotate(0deg)'
    }

    const toggleMenu = () => {
        menuActive = !menuActive
        const bars = document.querySelectorAll('.bars')
        if (menuActive) {
            bars[0].style.transform = 'rotate(-45deg)'
            bars[2].style.transform = 'rotate(45deg)'
            bars[2].style.marginTop = '-25.5px'
            bars[1].style.width = '0px'
            bars[1].style.marginLeft = '100%'
            document.querySelector('#menu').style.left = '0px'
            document.querySelector('nav').style.background = 'rgba(0, 0, 0, 0.9)'
            document.querySelector('body').style.overflow = 'hidden'
        }
        else {
            bars[0].style.transform = 'rotate(0deg)'
            bars[2].style.transform = 'rotate(0deg)'
            bars[2].style.marginTop = '0px'
            bars[1].style.width = '100%'
            bars[1].style.marginLeft = '0px'
            document.querySelector('#menu').style.left = '100%'
            document.querySelector('nav').style.background = 'none'
            document.querySelector('body').style.overflow = 'scroll'
        }
    }

    return (
        <>
            <section>
                <ParticlesBackground />
                <nav>
                    <div id='left'>
                        <img src='../../logo.png' id='logo' alt="Logo" />
                        <text id='name'>Utkarsh Ethical</text>
                    </div>
                    <div id='right'>
                        <div id="bars" onClick={toggleMenu}>
                            <div className="bars"></div>
                            <div className="bars"></div>
                            <div className="bars"></div>
                        </div>
                        <ul id='menu'>
                            <Link to="/" className='menu'>Home</Link>
                            <Link to="/posts" className='menu'>Posts</Link>
                            <Link to="/about" className='menu'>About</Link>
                            <Link to="/contact" className='menu'>Contact</Link>
                        </ul>
                    </div>
                </nav>
                <footer>
                    <div id="socials" onMouseOver={messageHovered} onMouseOut={messageUnhovered}>
                        <Link to="https://www.instagram.com/utkarshethical27/"><i className='fa-brands fa-instagram'></i></Link>
                        <Link to=""><i className='fa-brands fa-linkedin'></i></Link>
                        <Link to=""><i className='fa-brands fa-github'></i></Link>
                        <Link to="https://www.youtube.com/@utkarshethical27"><i className='fa-brands fa-youtube'></i></Link>
                    </div>
                    <i className='fa-solid fa-xmark' onMouseOver={messageHovered} onMouseOut={messageUnhovered}></i>
                    <i className="fa-solid fa-message" onMouseOver={messageHovered} onMouseOut={messageUnhovered}></i>
                </footer>
            </section>
        </>
    )
}
