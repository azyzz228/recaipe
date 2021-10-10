import React, { useState } from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import { buttonWidth } from '../Variables'
import Dropdown from '../components/DropDown'

function UploadImage({ data }) {
    const [dropdownOn, setDropdownOn] = useState(false)
   
  
    function dropdownHandler() {
        setDropdownOn(!dropdownOn)
    }
    return (
        <Container>

            <div className="absolute w-full h-full bg-white z-10"></div>
            <div className="content absolute top-0 left-0 w-full h-full z-30">
                <div className="flex flex-row border-b mt-16 mx-auto border-black py-2" style={{ width: '405px' }}>
                    <div className=" flex flex-row justify-between items-center " style={{ width: "262px" }}>
                        <i className="fas fa-chevron-left pl-4 text-2xl" ></i>
                        <p className="text-md text-lg font-sans font-bold">Upload Image</p>
                    </div>
                </div>

                <div className="wrapper z-30 relative mx-auto flex flex-col " style={{ width: buttonWidth, marginTop: '40px' }}>


                    <div className="w-full h-80 mt-20 bg-gray-200 rounded-sm border border-gray-500"></div>
                    <div className="cursor-pointer px-5 py-5 mt-8 font-bold font-sans text-white bg-gradient-to-r  from-bGreen to-bBlue flex items-center justify-center rounded-md" style={{ width: buttonWidth }} onClick={dropdownHandler}>
                        Upload Image
                    </div>
                </div>
            </div>
            {dropdownOn ? <Dropdown dropdownHandler={dropdownHandler} /> : ''}

        </Container>
    )
}

export default UploadImage
