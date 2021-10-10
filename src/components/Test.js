import React from 'react'
import { Link } from 'react-router-dom'
import { diets } from '../Variables'
import eggImg from '../images/egg.png'

import SimpleBar from 'simplebar-react';
import ScrollArea from 'react-scrollbar'

function Test(props) {
    const preferences = {
        'alcohol-free': true,
        'gluten-free': false,
        'halal': true
    }

    function testHandler() {
        let finaldata = []

        let ourKeys = Object.keys(preferences)

        ourKeys.map((item) => {
            if (preferences[item] == true) {
                finaldata.push(item)
            }

        })

        console.log(JSON.stringify(finaldata));
        console.log(props.location.state);
    }
    return (
        <div className=" absolute">
            <p className="px-8 py-1 bg-blue-600" onClick={testHandler}>CHECK FUCK</p>
            <div className="px-2 py-4 bg-red-400" onClick={testHandler}>Test</div>

            <div className="div bg-white rounded-2xl" >
                <ScrollArea speed={0.4}
                    className=""
                    contentClassName="content"
                    style={{ height: '400px', maxWidth: '400px' }}
                    vertical={false}
                    horizontal={true}
                >
                    <div className="overflow-x-auto">
                        <div className="flex flex-row space-x-4 justify-start items-center mt-10 ">
                            <i className="fas fa-check p-2 text-5xl text-white bg-gradient-to-r  from-bGreen to-bBlue rounded-md"></i>
                            <img src={eggImg} alt="" className="" style={{ width: '360px' }} />

                            <p className="py-1 text-gray-600 border-b-4 border-gray-600" style={{ fontSize: '21px' }}>Reupload photo.</p>

                            <div className="bg-white shadow-md" style={{ width: '360px' }}>
                                <div className="flex flex-row p-8 items-baseline">
                                    <div className="rounded-full bg-black mr-6" style={{ width: '16px', height: '16px' }}></div>
                                    <div className="flex flex-col justify-start items-start">
                                        <p className="font-bold text-bgoogle" style={{ fontSize: '21px' }}>Suggested food</p>
                                        <p className="font-bold" style={{ fontSize: '21px' }}>Item1</p>
                                        <p className="font-bold" style={{ fontSize: '21px' }}>Item2</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white shadow-md" style={{ width: '360px' }}>
                                <div className="flex flex-row p-8 items-baseline">
                                    <div className="rounded-full bg-black mr-6" style={{ width: '16px', height: '16px' }}></div>
                                    <div className="flex flex-col justify-start items-start">
                                        <p className="font-bold text-cgreen" style={{ fontSize: '21px' }}>Suggested food</p>
                                        <p className="font-bold" style={{ fontSize: '21px' }}>Item1</p>
                                        <p className="font-bold" style={{ fontSize: '21px' }}>Item2</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}

export default Test
