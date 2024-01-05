import "./HeroImgStyles.css"
import heroSectionImg from "../assets/contest-entry-egg-tart.png"
import { Link } from "react-router-dom"
import confettiPurple from "../assets/confetti-purple.png"
import confettiBlue from "../assets/confetti-blue.png"
import confettiYellow from "../assets/confetti-yellow.png"
import blueStar from  "../assets/pixel-star-bigBlueMiniPurple.png"
import yellowStar from  "../assets/pixel-star-bigYellowMiniPurple.png"
import miniStar from  "../assets/pixel-star-miniYellowNBlue.png"
import { useState } from "react"

const HeroImg = () => {

    const [state, setState] = useState();
    const action = (index) => {
        setState(index)
        console.log(index)
    }

    return ( 
    
    <div className="hero">
        <div className="section-1">
            <div className="contentFirst">
                <p>Saynab Good</p>
                <h1>Junior Fullstack Developer</h1>
                <Link to="/projects" className="btn btn-item">Projects
                </Link>
                <Link to="/contact" className="btn btn-item">Contact
                </Link>
            </div>
            <div className="mask">
                <img className="hero-img" src={heroSectionImg}></img>
                <img className="confetti-purple" src={confettiPurple}></img>
                <img className="confetti-blue" src={confettiBlue}></img>
                <img className="confetti-yellow" src={confettiYellow}></img>
                <img className="blue-star" src={blueStar}></img>
                <img className="mini-star" src={miniStar}></img>
                <img className="yellow-star" src={yellowStar}></img>
                
            </div>
        </div>
        <div className="about-me-section">
            <div className="about-me">
                <h1 width={100}>A Bit About Me</h1>
                <p className="hello">Hi, I'm Saynab</p>
                <p>A junior <span className="webdev-text">web developer</span> + <span className="artist-text">artist!</span></p>
                <p className="find-aboutpg">find more about me in the <Link to="/about" className="find-aboutpg-button">about me page
                </Link></p>
            </div>
            <div className="tab-box">
                <div className="tabs">
                    <div onClick={()=> action(1)} className={`${state === 1 ? "tab active-tab" : "tab"}`}>
                        projects
                    </div>
                    <div onClick={()=> action(2)} className={`${state === 2 ? "tab active-tab" : "tab"}`}>
                        art
                    </div>
                    <div className="tab-element">
                      —  O  X
                    </div>
                </div>

                {/* content */}
                <div className="contents">
                        <div className={`${state === 1 ? "content active-content" : "content"}`}>
                            <h2>Content 1</h2>
                            <p>this is content 1</p>
                        </div>
                        <div className={`${state === 2 ? "content active-content" : "content"}`}>
                            <h2>Content 2</h2>
                            <p>this is content 1</p>
                        </div>
                        {/* <div>
                            <h2>Content 3</h2>
                            <p>this is content 1</p>
                        </div> */}
                    
            
                </div>

            </div>
        </div> 
          
    </div>
    
    )
}

export default HeroImg