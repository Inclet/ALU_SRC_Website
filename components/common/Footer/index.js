import './styles/footer.module.scss';
import Image from '../Image';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_content">
                <div className="footer_left">
                    <div className="section_title">GET IN CONTACT WITH US</div>
                    <div className="link">🢒 Book 1:1 with a Rep</div>
                    <div className="link">🢒 Find Our Comprehensive Manifesto</div>
                    <div className="link">🢒 Read Our Term Reports</div>
                    <div className="link">🢒 Get Guidebooks</div>
                </div>
                <div className="footer_right">
                    <div className="section_title">OUR ADDRESS</div>
                    <div className="link">Mid-floor - Learning Commons</div>
                    <div className="link">African Leadership University</div>
                    <div className="link">Kigali Innovation City</div>
                    <div className="link">Masoro, Kigali</div>
                    <div className="social_icon_container">
                        <div><Image imgsrc="/assets/facebook-circle.svg" alt="facebook_icon" className="social_icon" /></div>
                        <div><Image imgsrc="/assets/twitter_circle.svg" alt="twitter_icon" className="social_icon" /></div>
                        <div><Image imgsrc="/assets/instagram_circle.svg" alt="instagram_icon" className="social_icon" /></div>
                        <div><Image imgsrc="/assets/linkedin_circle.svg" alt="linkedin_icon" className="social_icon" /></div>
                        <div><Image imgsrc="/assets/youtube_circle.svg" alt="youtube_icon" className="social_icon" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;