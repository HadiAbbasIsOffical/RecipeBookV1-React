import { useEffect } from "react"
import '../Pages/Homepage/items.css'

export default function SuccessFav({NameId}){
    console.log('works111')
    return(
        <div className="FavItemadded">
        <h1 className='textof_add'>{NameId} has been added</h1></div>
       

    )

}
