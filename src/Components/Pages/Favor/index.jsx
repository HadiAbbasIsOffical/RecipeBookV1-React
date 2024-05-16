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
        <div>
            <div className='AllItems'>

                {All_datas && All_datas.length ?

                    <ul>
                        {


                            All_datas.map((each_data) =>
                                <div className='ItemToEach' >

                                    <li>
                                        <h1 style={{ fontWeight: 'bolder' }}>  {each_data.title}
                                        </h1>
                                        <img src={each_data.image_url} className='item.image_url' style={{ width: '70px' }}></img>
                                        <Link
                                            to={`/Recipe-item/${each_data.id}`}
                                            style={{ fontWeight: 'bolder', }}
                                            className="Link_toMore">
                                            View
                                        </Link>
                                    </li>                                    </div>


                            )

                        }

                    </ul>
                    : reverseother == true ? <div className='NoFavDiv'>
                        <h1 className='Nofavoried'>Loading.. </h1></div> :
                        <div className='NoFavDiv'>
                            <h1 className='Nofavoried'>You dont have any favorite's yet! :( </h1></div>}
                            <img
        src='https://www.logopik.com/public/storage/product/tue-sep-13-2022-717-am80029.png'
        className='chef_pic_real' >
          
        </img>
            </div>
        

        </div>
    )
}