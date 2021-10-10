import React, { useEffect, useState } from 'react'
import axios from 'axios'
function OtherTest() {

    const [change, setChange] = useState()
    function changeHandler(e) {
        e.preventDefault()
    }



    function submitFinalHandler(e) {
        e.preventDefault()

        axios.post('http://c7b5-163-120-43-223.ngrok.io/recipes', {
            "ingredients": ['egg', 'ham'],
            "restrictions": ['wheat-free', 'alcohol-free']
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <form action="" onSubmit={(e) => submitFinalHandler(e)}>

                <input type="submit" value="Jun's api" />
            </form>
        </div>
    )
}

export default OtherTest
