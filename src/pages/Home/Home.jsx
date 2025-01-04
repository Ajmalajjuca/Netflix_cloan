import React from 'react'
import Nav from '../../components/Nav/Nav'
import TitelCard from '../../components/TitelCard/TitelCard'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_titel from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import "./Home.css"
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='Home'>
      <Nav />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner_img' />
        <div className="hero_caption">
          <img src={hero_titel} alt="" className='caption_img' />
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from on immortal enemy.</p>
          <div className="hero_btn">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitelCard />
        </div>
      </div>
      <div className="more_cards">
        <TitelCard title={"Blockbuster Movie"} category={"popular"} />
        <TitelCard title={"Only on Netflix"} category={"top_rated"} />
        <TitelCard title={"Upcoming"} category={"upcoming"} />
        <TitelCard title={"Top Pics for you"} category={'now_playing'} />
      </div>
      <Footer />
    </div>
  )
}

export default Home
