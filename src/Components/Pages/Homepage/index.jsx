import { useContext, useState } from "react"
import { GlobalContext } from "../../context"
import '../Homepage/items.css'
import { Link } from 'react-router-dom';
import ImageSlider from "../../Image_slide/ImageSlider";

export default function Homepage() {
    const { loading, setLoading, Usecontent } = useContext(GlobalContext)
    const[DefaultLayout,SetDefault]=useState(false)

    
    return (
        <div>
    <div className="AllItems">

            {
                    Usecontent  && Usecontent.length?
           
                    Usecontent.map((item) =>
                    <div className="ItemToEach">
                        <p className="title_of" key={item.id}>{item.title}</p>
                        <img src={item.image_url} className="img_of"></img>
                        <Link
                        to={`/Recipe-item/${item.id}`}
                        style={{fontWeight:'bolder',}}
                        className="Link_toMore">
                        Read more
                        </Link>
                    </div>
                    )
                    :<div>
                        <h1>Happy cooking!</h1>
                    </div>
                    // :<ImageSlider/>


            }
    </div>
        </div>

    )
}