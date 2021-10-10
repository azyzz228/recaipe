import React from 'react'
import Container from '../components/Container'
import eggImg from '../images/egg.png'
import logo from '../images/logo.png'
import ScrollArea from 'react-scrollbar'
import Button from '../components/Button'


function HomepageScreen() {
    return (
        <Container>

            <div className="absolute w-full h-full bg-white z-10"></div>

            <div className="content absolute top-0 left-0 w-full h-full z-30">


                <div className="flex flex-row border-b mt-16 mx-auto border-black py-2" style={{ width: '405px' }}>
                    <div className="flex flex-row justify-between px-8" style={{ width: "404px" }}>


                        <img src={logo} alt="" className="w-10 h-10" style={{ marginTop: '20px' }} />

                        <div className="search bg-gray-200 px-2 py-3 rounded-3xl flex flex-row justify-start items-center mt-4">

                            <i className="fas fa-search pl-4"></i>
                            <input className="bg-transparent ml-4 text-gray-600"
                                style={{ width: '205px' }} type="text" name="" id="" placeholder="Search diets" />



                        </div>

                    </div>
                </div>

                <ScrollArea speed={0.4}
                    className="px-4"
                    contentClassName="content"
                    style={{ height: '750px' }}
                    horizontal={false}
                    vertical={true}
                >
                    <div className="">


                        <div className="bg-white shadow-lg border border-gray-200 mt-8 mb-10 ml-4" style={{ width: '360px' }}>

                            <div className="flex flex-col justify-start items-start ml-16 pt-6">
                                <div className="">
                                    <p className="font-bold text-bgoogle" style={{ fontSize: '21px' }}>Suggested food</p>
                                    <p className="text-sm text-bgoogle">*based on your diet preferences</p>
                                </div>

                                <div className="relative mt-3 mb-8 pb-5 flex flex-row space-x-4 overflow-x-auto" style={{ width: '300px', }} >

                                    <span className="relative" style={{ minWidth: '200px', height: '200px' }}>
                                        <p className="absolute text-xl bottom-10 left-6 w-full ">Recipe title</p>
                                        <img src={eggImg} alt="" className="mt-4 object-cover rounded-md w-full h-full" />
                                    </span>

                                    <span className="relative" style={{ minWidth: '200px', height: '200px' }}>
                                        <p className="absolute text-xl bottom-10 left-6 w-full ">Recipe title</p>
                                        <img src={eggImg} alt="" className="mt-4 object-cover rounded-md w-full h-full" />
                                    </span>

                                    <span className="relative" style={{ minWidth: '200px', height: '200px' }}>
                                        <p className="absolute text-xl bottom-10 left-6 w-full ">Recipe title</p>
                                        <img src={eggImg} alt="" className="mt-4 object-cover rounded-md w-full h-full" />
                                    </span>

                                    <span className="relative" style={{ minWidth: '200px', height: '200px' }}>
                                        <p className="absolute text-xl bottom-10 left-6 w-full ">Recipe title</p>
                                        <img src={eggImg} alt="" className="mt-4 object-cover rounded-md w-full h-full" />
                                    </span>






                                </div>



                            </div>



                        </div>
                    </div>
                </ScrollArea>
            </div >



        </Container >
    )
}

export default HomepageScreen
