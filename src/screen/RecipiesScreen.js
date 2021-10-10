import React from 'react'
import Container from '../components/Container'
import eggImg from '../images/egg.png'
import ScrollArea from 'react-scrollbar'
import Button from '../components/Button'




function RecipiesScreen() {
    return (
        <Container>

            <div className="absolute w-full h-full bg-white z-10"></div>
            <div className="content absolute top-0 left-0 w-full h-full z-30">
                <div className="flex flex-row border-b mt-16 mx-auto border-black py-2" style={{ width: '405px' }}>
                    <div className=" flex flex-row justify-between items-center " style={{ width: "300px" }}>
                        <i className="fas fa-chevron-left pl-4 text-2xl" ></i>
                        <p className="text-md text-lg font-sans font-bold">Uploaded successfully</p>
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

                        <div className="flex flex-col justify-center items-center mt-10 ">

                            <i className="fas fa-check p-2 text-5xl text-white bg-gradient-to-r  from-bGreen to-bBlue mb-10 rounded-lg"></i>



                            <img src={eggImg} alt="" className="" style={{ width: '360px' }} />

                            <p className="py-1 text-gray-600 border-b-4 border-gray-600 my-8" style={{ fontSize: '21px' }}>Reupload photo.</p>

                            <div className="bg-white shadow-lg border mb-8 border-gray-200" style={{ width: '360px' }}>
                                <div className="flex flex-row p-8 items-baseline ">
                                    <div className="bg-bgoogle rounded-full mr-6" style={{ width: '16px', height: '16px' }}></div>
                                    <div className="flex flex-col justify-start items-start">
                                        <p className="font-bold text-bgoogle" style={{ fontSize: '21px' }}>Suggested food</p>
                                        <p className="font-bold" style={{ fontSize: '21px' }}>Item1</p>
                                        <p className="font-bold" style={{ fontSize: '21px' }}>Item2</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white shadow-lg border border-gray-200" style={{ width: '360px' }}>
                                <div className="flex flex-row p-8 items-baseline">
                                    <div className="rounded-full bg-black mr-6" style={{ width: '16px', height: '16px' }}></div>
                                    <div className="flex flex-col justify-start items-start">
                                        <p className="font-bold text-cgreen" style={{ fontSize: '21px' }}>Suggested food</p>
                                        <p className="font-bold" style={{ fontSize: '21px' }}>Item1</p>
                                        <p className="font-bold" style={{ fontSize: '21px' }}>Item2</p>


                                    </div>
                                </div>
                            </div>


                            <div className="bg-white shadow-lg border border-gray-200 mt-8 mb-10" style={{ width: '360px' }}>

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

                            <div className="mb-20"><Button>Save this item</Button></div>

                        </div>
                    </div>
                </ScrollArea>
            </div>



        </Container >
    )
}

export default RecipiesScreen
