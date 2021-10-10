import React from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import { buttonWidth } from '../Variables'
import coffeeImg from '../images/coffee.png'
import breadImg from '../images/bread.png'
import { diets } from '../Variables'
import ScrollArea from 'react-scrollbar'
import { preferences } from '../Variables'


function SelectPreferenceScreen({ register }) {
    return (
        <Container>

            <img src={coffeeImg} alt="" className="absolute z-10" style={{ top: '300px', left: '10px' }} />
            <img src={breadImg} alt="" className="absolute z-10" style={{ bottom: '24px', right: '14px' }} />
            <div className="absolute w-full h-full bg-scrollBackground">
            </div>
            <div className="content absolute top-0 left-0 w-full h-full z-30">
                <div className="wrapper z-100 relative mx-auto flex flex-col " style={{ width: buttonWidth, marginTop: '100px' }}>


                    <div className="w-full h-2 rounded-2xl bg-gray-200">
                        <div className="h-full w-1/2 hidden bg-cgreen"></div>
                    </div>



                    <div className="text-3xl my-10 text-center px-4 font-semibold">Are you on any dietary restriction?</div>


                    <div className="div bg-white rounded-2xl" >
                        <ScrollArea speed={0.4}
                            className="px-4"
                            contentClassName="content"
                            style={{ height: '400px' }}
                            horizontal={false}
                            vertical={true}
                        >
                            <div className="">
                                <div className="search bg-gray-200 px-2 py-3 rounded-2xl flex flex-row justify-start items-center mt-4">

                                    <i className="fas fa-search pl-2"></i>
                                    <input className="bg-transparent w-36  ml-6 text-gray-600" type="text" name="" id="" placeholder="Search diets" />



                                </div>

                                <div className="form-wrapper py-2">
                                    {preferences.map((item, index) => (
                                        <div key={index} className="flex flex-row items-center py-2" >
                                            <input type="checkbox" name={item.apiname} id="" ref={register()} className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" />
                                            <p className="text-xl">{item.name}</p>
                                        </div>
                                    ))}




                                </div>
                            </div>
                        </ScrollArea>
                    </div>
                    <div className="mt-6"><Button>Next</Button></div>

                </div>
            </div>
        </Container>

    )
}

export default SelectPreferenceScreen
