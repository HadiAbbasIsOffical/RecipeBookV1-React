import ImageSlider from "../../Image_slide/ImageSlider"
import '../About/AboutUs.css'
import { FaGithub } from "react-icons/fa";

export default function About() {

    return (
        <div className="overflow-x-hidden">
            <div className="centered-container">
                <h1 className="centered-heading md:text-6xl text-4xl">Hello Chef!</h1>
            </div>        <div className="AboutUsPage">

                <div className="flex flex-grow ">
                    <ImageSlider />
                </div>

                <div className="AboutUs md:m-4 md:p-0 
                 lg:w-full sm:w-full w-[320px] md:w-[300px]
                sm:mb-3 
           flex flex-1 flex-col
               ">
                    <h1 style={{ fontSize: '50px', fontWeight: 'bolder',margin:'10px' }}>About us</h1>
                   <div className="flex"> <p style={{ marginTop:'30px',margin:'15px' }} className="text-wrap">
                        We are a small group dedicated to assisting everyone in preparing delicious meals! Our website is designed to provide guidance on seasoning and spice quantities, ensuring your dishes turn out perfectly every time. Are you ready, chefs?</p>
                        </div>
                        
                        <h2 style={{
                        marginTop: '20px',
                        marginLeft:'10px',
                        fontWeight: 'bolder'
                    }}>Made by HadiAbbas</h2>
                    <div className="Credits_profile"
                    style={{display:'flex',alignItems:'center'}}>
                    <h2 style={{
                                                marginLeft:'10px',

                        marginTop: '20px',
                        fontWeight: 'bolder'
                    }}>Github:</h2>
                    <a href="https://github.com/HadiAbbasIsOffical" target="_blank"
                    style={{marginTop:'20px'}}>
                        <FaGithub className="Github_io" style={{width:'40px',height:'40px'}}/>

                    </a></div>
                </div>
            </div>
        </div>
    )
}