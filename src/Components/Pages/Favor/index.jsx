import { GlobalContext } from '../../context'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Homepage/items.css'

export default function Favoriate() {
    const { FavItems } = useContext(GlobalContext)
    const [All_datas, Add_data] = useState([])
    const [reverseother, setother] = useState(false)
    async function ShowAllFavoriate() {
        let newDataArray = [];
        for (let x of FavItems) {
            // console.log(FavItems[0])
            // console.log(x)
            try {
                setother(true)
                let file = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${x}`)
                let data = await file.json()

                // console.log(data.data.recipe)
                let new_data = data.data.recipe
                newDataArray.push(new_data)
            }
            catch (error) {
                setother(false)
                // return (<div className='NoFavDiv'>
                //     <h1 className='Nofavoried'>You dont have any favoriate's yet! :( </h1></div>)

            }

        }
        Add_data(newDataArray)

    }

    useEffect(() => {
        ShowAllFavoriate()
    }, [])
    return (
        <div className='grid md:grid-cols-2 '>

                {All_datas && All_datas.length ?
            <div className='AllItems'>

                    <ul>
                        {


                            All_datas.map((each_data) =>
                                <div className='ItemToEach' >

                                    <li>
                                        <h1 style={{ fontWeight: 'bolder' ,margin:'7px'}} className='text-2xl'>  {each_data.title}
                                        </h1>
                                        <img src={each_data.image_url} className='
                                        w-[300px] h-[150px] img_of mr-4 object-fill
                                        
                                        ' ></img>
                                        <Link
                                            to={`/RecipeBookV1-React/Recipe-item/${each_data.id}`}
                                            style={{ fontWeight: 'bolder', }}
                                            className="Link_toMore">
                                            View
                                        </Link>
                                    </li>                                    </div>


                            )

                        }
                    </ul>
                    </div>

                    : reverseother == true ? <div className='NoFavDiv'>
                        <h1 className='Nofavoried'>Loading.. </h1></div> :
                        <div className='NoFavDiv md:w-auto w-[250px] '>
                            <h1 className='Nofavoried
                            md:text-3xl
                            text-2xl
                            font-bold
                            m-2
                            md:ml-0
                            ml-5'>You dont have any favorite's yet! :( </h1>
                            </div>
                            }
                       <div>     <img
        src='https://www.logopik.com/public/storage/product/tue-sep-13-2022-717-am80029.png'
        className='chef_pic_real 
     sm:block
     hidden
md:w-[500px] w-[200px]' >
          
        </img></div>
            </div>
        

      
    )
}