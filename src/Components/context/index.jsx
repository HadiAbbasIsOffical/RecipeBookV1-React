import { createContext, useContext, useEffect, useState } from "react"
import { Link,} from 'react-router-dom';
import { useNavigate } from "react-router-dom"

import '../Pages/Homepage/items.css'
import Navbar from "../Navbar";


export const GlobalContext = createContext(null);
export default function ExtractContent({ children }) {

    const [Search_params, Set_params] = useState("")
    const [Usecontent, Setcontent] = useState([])
    const [dataEntry, setEntry] = useState(false)
    const navigate = useNavigate();


    //for favoriate
    const[FavItems,AddFavItem]=useState([])

    //error and loading msgs:
    const[loading,Setloading]=useState(false)

    async function handleSubmit(event) {

        event.preventDefault()
        console.log('works')

        try {        

            Setloading(true)
            const file = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${Search_params}`)
            const data = await file.json()
            console.log(data)
            if(data){

                Setloading(false)
            }
            if (data.data.recipes) {
      
                Setcontent(data.data.recipes)
                // history.push('/');
                navigate('/Recipe');

            }
            

        } catch (error) {
            Setloading(false)
            console.log('sorry theres an error', error)
        }           

    }
    return (
        <>
            <GlobalContext.Provider value={{Search_params, Set_params, Usecontent, handleSubmit,FavItems,AddFavItem }}>
            {loading ? (
                    <div className='NoFavDiv'>
                        <h1 className='Nofavoried'>Loading..</h1>
                    </div>
                ) : (
                    children
                )}
            </GlobalContext.Provider>

        </>)


}