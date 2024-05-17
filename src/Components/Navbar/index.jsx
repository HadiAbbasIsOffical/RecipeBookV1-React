import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/index"
import '../Pages/Homepage/items.css'
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import ImageSlider from "../Image_slide/ImageSlider";
export default function Navbar() {
    const { Search_params, Set_params, handleSubmit } = useContext(GlobalContext)

    return (<>
        <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0" >
            <Link to={'/RecipeBookV1-React'}>
                 <div className="title_page"> 
           
            <h2 className="text-2x1 font-extrabold">FoodRecipe</h2>
                <img src="https://img.freepik.com/premium-vector/chef-hat-with-kitchen-utensils-chef-hat-spoon-fork-plate_690577-607.jpg?w=360"
                    className="chef_pic"></img></div>
                    </Link>
            <form onSubmit={handleSubmit}>
                <div className="Search_Eng">
                <input
                    placeholder="Search any recipe"
                    className="bg-whoite/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
                    name="Search_bar"
                    value={Search_params}
                    onChange={(e) => Set_params(e.target.value)}
                    type="text" 
                    />
                    <FaSearch onClick={handleSubmit} style={{width:'30px',height:'30px',marginLeft:'10px'}} className="Search_icon"/></div>

            </form>
            <ul className="flex gap-5">
                <li>
                    <NavLink to={'/'} className='text-black hover:text-gray-700 duration-300' style={{fontWeight:'500'}}>Homepage</NavLink>
                </li>
                <li>
                    <NavLink to={'/Favouriate'} className='text-black hover:text-gray-700 duration-300' style={{fontWeight:'500'}}>Favorites</NavLink>
                </li>
                {/* <li>
                    <NavLink to={'/About'} className='text-black hover:text-gray-700 duration-300' style={{fontWeight:'500'}}>About</NavLink>
                </li> */}
            </ul>
        </nav>
        </>
    )
}