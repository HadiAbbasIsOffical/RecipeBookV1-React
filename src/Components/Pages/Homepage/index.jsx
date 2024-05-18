import { useContext, useState } from "react"
import { GlobalContext } from "../../context"
import '../Homepage/items.css'
import { Link } from 'react-router-dom';

export default function Homepage() {
    const { loading, setLoading, Usecontent } = useContext(GlobalContext)
    const[DefaultLayout,SetDefault]=useState(false)

    
    return (
        <div>
    <div className="AllItems grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-3">

            {
                    Usecontent  && Usecontent.length?
           
                    Usecontent.map((item) =>
                    <div className="ItemToEach
                     md:p-5 
                     border
                     grid grid-rows-[100px,auto,auto]
                      overflow-hidden">
                       <div> 
                        <p className="title_of
                        font-bold
                        mt-2.5
                        text-1xl
                        md:text-3xl
                        text-center" key={item.id}>{item.title}
                       </p>
                       </div>
                       <div>
                        <img src={item.image_url}
                        
                        className="img_of
                        w-[100%]
                        md:h-[250px]
                        h-[120px]
                        "></img></div>
                        <div>
                        <Link
                        to={`/RecipeBookV1-React/Recipe-item/${item.id}`}
                        style={{fontWeight:'bolder',}}
                        className="Link_toMore md:p-[10px] p-[4px]">
                        Read more
                        </Link></div>
                    </div>
                    )
                    :<div className="text-nowrap border shadow-2xl ">
                        <h1 className="text-2xl font-bold">Happy cooking!</h1>
                        <h1 className="text-2xl font-bold">Search a dish to start working!</h1>

                    </div>


            }
    </div>
        </div>

    )
}