import React, { useState } from 'react'
import axios from 'axios'




function Imagetest() {
    const [imageState, setImageState] = useState()
    const [isSelected, setIsSelected] = useState(false)
    function ImageHandler(e) {



        setImageState(e.target.files[0])
        setIsSelected(true)


    }

    function imageSubmiHandler(event) {
        event.preventDefault();
        let ourimage = imageState

        let finaldata = new FormData()
        finaldata.append('file', imageState)


        axios.post('https://recaipe-rekognition.herokuapp.com/predict/', finaldata)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div>
            <form action="" onSubmit={imageSubmiHandler}>
                {isSelected ? <p>{imageState.type}</p> : 'Not selected'}
                <label htmlFor="test"></label>
                <input type="file" name="file" id="file" onChange={(e) => ImageHandler(e)} />
                <input type="submit" value="upload" />
            </form>
        </div>
    )
}

export default Imagetest
