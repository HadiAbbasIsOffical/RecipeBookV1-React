
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../context'
import '../Homepage/items.css'
import SuccessFav from '../../SuccessMsg'
import FailMsg from '../../SuccessMsg/Fail'

export default function Details({ }) {
    const { id } = useParams()
    const [AllItems, Setitems] = useState([])
    const [ActualRecipe, SetRecipe] = useState([])
    const [favoried, Setfavoried] = useState(false);
    const [loading, Setloading] = useState(false)
    const [errorMsg, SetErrormsg] = useState(false)

    const [SuccessMsg, SetSuccess] = useState(false)
    const [Failmsg, SetFail] = useState(false)
   
    const { RecipeDetails, SetRecipeDetails, AddFavItem, FavItems } = useContext(GlobalContext)
    useEffect(() => {
        if (FavItems.includes(id)) {
            Setfavoried(true)
        }
        async function getRecipeDetails() {
            try {
                Setloading(true)
                const initialdata = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
                const datafinal = await initialdata.json()

                if (datafinal) {
                    Setloading(false)
                }
                SetRecipe(datafinal.data.recipe)
                Setitems(datafinal.data.recipe.ingredients)
            }
            catch (error) {
                SetErrormsg(true)
                Setloading(false)
                console.log(error)
            }
        }

    

        getRecipeDetails()
    }, [])


    if (loading == true) {
        return (
            <div className='NoFavDiv'>
                <h1 className='Nofavoried'>Loading..</h1>
            </div>
        )
    }
    if (errorMsg == true) {
        return (
            <div className='NoFavDiv'>
                <h1 className='ErrorMsg'>An error Occured</h1>
            </div>
        )
    }

    function AddingTofav(event) {
        Setfavoried(!favoried)

        console.log(favoried)
        if (favoried !== true && !FavItems.includes(id)) {
            AddFavItem([...FavItems, id])
            console.log('added')
            SetSuccess(true)

        } else {
            const removeItem =
                FavItems.filter((idx) => idx !== id)
            console.log('removed ', removeItem)
            AddFavItem(removeItem)
            SetFail(true)

        }

    }

    if (SuccessMsg == true) {
        setTimeout(() => {
            SetSuccess(false)
        }, 2000);
    }

    if (Failmsg == true) {
        setTimeout(() => {
            SetFail(false)
        }, 2000);
    }

    return (
        <div className='grid md:grid-cols-3 grid-rows-[auto,auto,1fr]'>
                <div>
            {ActualRecipe ? <div>
                <img className='w-[100%] h-[250px] img_of mr-4'
                    src={ActualRecipe.image_url}></img>
                <h1 style={{ fontWeight: 'bolder' }}>{ActualRecipe.title} by {ActualRecipe.publisher}</h1>
            </div> : null}</div>
           <div className='md:ml-4 md:my-0 my-3'> {

                AllItems && AllItems.length ?
                    <div>
                        <ol>
                            <h1 style={{ fontWeight: 'bolder', animation: 'fadeIn 0.9s ease-in-out forwards' }}>How to Prepare?</h1>

                            {
                                AllItems.map((each_item, index) =>
                                    <li key={index} className='eachitem_'>{index}-{each_item.description}</li>)
                            }
                        </ol>
                    </div> : null
            }</div>
          <div> <button onClick={AddingTofav} className={favoried == true ? 'favorButton2' : 'favorButton'} >{favoried == true ?'Remove Favorite':'Add to Favorite'}</button>
          </div> 
            {
                SuccessMsg == true ? <SuccessFav NameId={ActualRecipe.title} /> : null
            }
            {
                Failmsg == true ? <FailMsg NameId={ActualRecipe.title} /> : null
            }
        </div>


    )
}