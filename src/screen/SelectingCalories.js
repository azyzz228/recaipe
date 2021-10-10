import React from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import { buttonWidth } from '../Variables'


function SelectingCalories() {
    return (
        <Container>

            <div className="absolute w-full h-full bg-scrollBackground">
            </div>
            <div className="content absolute top-0 left-0 w-full h-full z-30">
                <div className="wrapper z-100 relative mx-auto flex flex-col " style={{ width: buttonWidth, marginTop: '100px' }}>


                    <div className="w-full h-2 rounded-2xl bg-gray-200">
                        <div className="h-full w-2/3 bg-cgreen"></div>
                    </div>



                    <div className="text-3xl my-16 text-center font-semibold ">Do you have a <br /> daily calorie net goal?</div>

                    <div className="flex flex-row justify-around items-center px-4">
                        <input type="text" name="" id="" className=" w-6/12 pb-3 px-8 bg-transparent text-3xl font-semibold text-gray-400 mr-6 border-b-8 border-gray-400" />
                        <p className="text-3xl pr-2 font-semibold">calories</p>
                    </div>

                    <div className="mt-10"><Button>Complete</Button></div>
                    <div className="w-full flex justify-center mt-6 items-center bg-white text-black text-" style={{ width: '326px', height: '57px', fontSize: '21px' }}>Nope, skip and complete!</div>
                </div>
            </div>
        </Container>
    )
}

export default SelectingCalories
