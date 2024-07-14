import Button from "../button/Button";
import './HeroSection.css'
import '../../App.css'

export default function HeroSection() {
    return (
        <>
            <div className="hero-container">
                <video src="/videos/video-1.mp4" autoPlay loop muted />
                {/* <h1>WANT TO LEARN MORE?</h1>
                <div className="hero-btns">
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='bnt--large'
                    >
                        Explore
                    </Button>
                </div> */}
            </div>
        </>

    );
}