import React, { useEffect, useRef } from 'react'
import './Nav.css'
import Logo from '../../assets/logo.png'
import Search_icon from '../../assets/search_icon.svg'
import Bell_icon from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import caret from '../../assets/caret_icon.svg'
import { logOut } from '../../firebase'


const Nav = () => {
    const navRef = useRef()
    
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>=120){
                navRef.current.classList.add('nav-dark')
            }else{
                navRef.current.classList.remove('nav-dark')
            }
        })
    },[])
    return (
        <div ref={navRef} className='nav'>
            <div className='nav_left'>
                <img src={Logo} alt="" />
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Populor </li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div className='nav_right'>
                <img src={Search_icon} alt="" className='icon' />
                <p>Children</p>
                <img src={Bell_icon} alt="" className='icon' />
                <div className='nav_profile'>
                    <img src={profile} alt="" className='profile' />
                    <img src={caret} alt="" />
                    <div className="dropdoun">
                        <p onClick={()=>{logOut()}}>Sign Out of NetfliX</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
