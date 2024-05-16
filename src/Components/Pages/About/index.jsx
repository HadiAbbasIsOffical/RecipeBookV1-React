import ImageSlider from "../../Image_slide/ImageSlider"
import '../About/AboutUs.css'
import { FaGithub } from "react-icons/fa";

export default function About() {

    return (
        <>
            <div className="centered-container">
                <h1 className="centered-heading">Hello Chef!</h1>
            </div>        <div className="AboutUsPage">

                <div>
                    <ImageSlider />
                </div>

                <div className="AboutUs">
                    <h1 style={{ fontSize: '50px', fontWeight: 'bolder' }}>About us</h1>
                    <p style={{ marginTop: '30px' }}>
                        We are a small group dedicated to assisting everyone in preparing delicious meals! Our website is designed to provide guidance on seasoning and spice quantities, ensuring your dishes turn out perfectly every time. Are you ready, chefs?</p>
                    <h2 style={{
                        marginTop: '20px',
                        fontWeight: 'bolder'
                    }}>Made by HadiAbbas</h2>
                    <div className="Credits_profile"
                    style={{display:'flex',alignItems:'center'}}>
                    <h2 style={{
                        marginTop: '20px',
                        fontWeight: 'bolder'
                    }}>Github:</h2>
                    <a href="https://github.com/HadiAbbasIsOffical" target="_blank"
                    style={{marginTop:'20px'}}>
                        <FaGithub className="Github_io" style={{width:'40px',height:'40px'}}/>

                    </a></div>
                </div>
            </div>
        </>
    )
}