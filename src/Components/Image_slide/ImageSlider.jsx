import { useEffect, useState, useRef } from "react"
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from 'react-icons/bs'
import { MdOutlineWifiTetheringErrorRounded } from "react-icons/md";

import '../Image_slide/imageslidecss.css'
//https://picsum.photos/v2/list?page=2&limit=5
export default function ImageSlider({ url = 'https://forkify-api.herokuapp.com/api/get?rId=' }) {
    const [CurrentSlide, ChangeCurrentSlide] = useState(0);
    const [image, SetImage] = useState([])
    const [errorMsg, SetErrorMsg] = useState(null)
    const [loading, Setloading] = useState(false)
    const [errorDisplay, SetErrorDisplay] = useState(false)

    async function FetchingImages(url) {
        const Ids_Display = [35097, 46895, 17796]
        let all_Ids = []
        for (let x of Ids_Display) {
            try {
                Setloading(true)
                const response = await fetch(url + x)
                const data = await response.json()
                if (data) {
                    SetErrorDisplay(false)
                    all_Ids.push(data.recipe)

                    Setloading(false)
                }
            } catch (error) {
                Setloading(false)
                SetErrorDisplay(true)

            }

        }
        SetImage(all_Ids);
    }
    useEffect(() => {
        if (url !== '') {
            FetchingImages(url)
        }


    }, [url])
    if (loading == true) {
        return <div class="spinner"></div>

    }


    function MoveLeftFunc() {
        //[CurrentSlide, ChangeCurrentSlide] = useState(0);
        ChangeCurrentSlide(CurrentSlide === 0 ? image.length - 1 : CurrentSlide - 1)
    }
    function MoveRightFunc() {

        ChangeCurrentSlide(CurrentSlide === image.length - 1 ? 0 : CurrentSlide + 1)
    }
    function MoveToSpecific(indx) {
        ChangeCurrentSlide(indx)
    }



    return (
        <div className="container2
        max-h-[500px] max-w-[600px]
        md:w-[600px] md:h-[600px]
        mb-10
         flex">


            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={MoveLeftFunc} />
            {
                image && image.length ?
                    image.map((imageItem, index) =>
                        imageItem?
                        <img
                            src={imageItem.image_url}
                            
                            style=
                            {{ height: 'auto', maxHeight: '400px' }}
                            className={index === CurrentSlide ? "image_display" : "ForNone"}></img>:null) : null}

            <BsArrowRightCircleFill className="arrow arrow-right" onClick={MoveRightFunc} />
            <span className="circle-indicators">
                {
                    image && image.length ?
                        image.map((_, index) =>
                            <button key={index}
                                onClick={() => MoveToSpecific(index)}
                                className="current-indicator"></button>
                        )
                        : null}
            </span>
            {
                errorDisplay == true ?
                    <>
                    
                        <MdOutlineWifiTetheringErrorRounded style={{ height: '100px', width: '150px' }} />
                        <p>internet Error</p>
                    </> : null
            }

        </div>
    )
}