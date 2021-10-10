import React from 'react'

function DropDown({ dropdownHandler }) {
    return (
        <div>
            <div className="absolute w-full h-full bg-gray-500 opacity-30 z-40" onClick={dropdownHandler}>

            </div>

            <div className="absolute" style={{ left: '40px', bottom: '30px', zIndex: '100' }}>
                <form action="">
                    <div className="mx-auto border-2 border-gray-300 rounded-lg">




                        <input type="file" name="" id="file" className="hidden" />
                        <label htmlFor="file" className="flex flex-row justify-center items-center text-md text-blue-500 bg-white py-5  border-b border-gray-300 cursor-pointer" style={{ width: '380px' }}>Photo Gallery</label>





                        <div className="flex flex-row justify-center items-center text-md text-blue-500 bg-white py-5 ">Camera</div>
                        <input type="submit" value="Submit" className="flex flex-row w-full justify-center items-center text-md text-blue-500 bg-white py-5" />
                    </div>
                </form>
                <div className="flex flex-row justify-center items-center text-md font-bold text-blue-500 bg-white py-5 mt-3 border-2 border-gray-300 rounded-t-md rounded-b-3xl">Cancel</div>
            </div>
        </div>
    )
}

export default DropDown
