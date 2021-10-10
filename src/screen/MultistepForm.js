import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import Button from '../components/Button'
import Container from '../components/Container'
import { buttonWidth } from '../Variables'
import coffeeImg from '../images/coffee.png'
import breadImg from '../images/bread.png'
import ScrollArea from 'react-scrollbar'
import { preferences } from '../Variables'
import axios from 'axios'
import eggImg from '../images/egg.png'
import eggham1 from '../images/eggham1.jpeg'
import eggham2 from '../images/eggham2.jpg'
import eggham3 from '../images/eggham3.jpg'
import allergyImg from '../images/allergypic.png'




function MultistepForm() {
    const [formStep, setFormStep] = useState(0)
    const { watch, register, handleSubmit } = useForm()

    const [dropdownOn, setDropdownOn] = useState(false)
    const [imageState, setImageState] = useState()
    const [isSelected, setIsSelected] = useState(false)
    const [ingredients, setIngredients] = useState()
    const [preferences, setPreferences] = useState()
    const [recipes, setrecipe] = useState()

    const [ingredientsArray, setingredientsArray] = useState()
    function ImageHandler(e) {



        setImageState(e.target.files[0])
        setIsSelected(true)


    }

    function imageSubmiHandler(event) {
        event.preventDefault();
        let ourimage = imageState

        let finaldata = new FormData()
        finaldata.append('file', imageState)

        axios.post('http://ec2-3-131-37-179.us-east-2.compute.amazonaws.com/', finaldata)
            .then(function (response) {
                var data = []

                response.data.predictions.forEach((x) => data.push(x.className))

                setIngredients(data)



            })
            .catch(function (error) {
                console.log(error);
            });

    }





    function dropdownHandler() {
        setDropdownOn(!dropdownOn)
    }


    useEffect(() => {

        nextpage()
    }, [ingredients])


    const nextPage = () => {
        setFormStep(cur => cur + 1)
    }
    let surveyData = []
    let rawData = {}
    const onSubmit = (data) => {
        console.log('data 111', data);
        let rawData = JSON.stringify(watch(), null, 2);

        let ourKeys = Object.keys(data)
        var newArray = []
        ourKeys.map((item) => {

            if (data[item] === true) {
                surveyData.push(item)
            }

            /*
            else if (typeof (data[item]) === 'string') {
                var number = parseInt(data[item], 10)
                surveyData.push(number)
    
            }*/
            let deleteable = ['bubbles', 'cancelable', 'isTrusted', 'detail', NaN]

            for (let i = 0; i < 5; i++) {
                var index = surveyData.indexOf(deleteable[i]);

                if (index > -1) {
                    surveyData.splice(index, 1);
                }
            }


            function submitFinalHandler(e) {
                e.preventDefault()

                axios.post('https://8h13f0lg8k.execute-api.us-east-2.amazonaws.com/recipes', {
                    "ingredients": ingredients,
                    "restrictions": preferences
                })
                    .then(function (response) {
                        setRecipies(response.data.recipies)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }

        })

        setPreferences(surveyData)
    }

    return (
        <>


            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {formStep >= 0 && (
                        <div className={formStep == 0 ? '' : 'hidden'}>
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
                                                    <input className="bg-transparent w-36  ml-6 text-gray-600" type="text" id="" placeholder="Search diets" />



                                                </div>

                                                <div className="form-wrapper py-2">


                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id=""
                                                            {...register('vegan')}
                                                            className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" />
                                                        <p className="text-xl">Vegan</p>
                                                    </div>


                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id=""
                                                            {...register('vegetarian')}
                                                            className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" />
                                                        <p className="text-xl">Vegetarian</p>
                                                    </div>

                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id=""
                                                            {...register('dash')}
                                                            className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" />
                                                        <p className="text-xl">Dash</p>
                                                    </div>


                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id=""
                                                            {...register('sugar-conscious')}
                                                            className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" />
                                                        <p className="text-xl">Sugar Conscious</p>
                                                    </div>


                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id=""
                                                            {...register('keto-friendly')}
                                                            className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" />
                                                        <p className="text-xl">Keto Friendly</p>
                                                    </div>

                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id=""
                                                            {...register('low-potassium')}
                                                            className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" />
                                                        <p className="text-xl">Low potassium</p>
                                                    </div>

                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id=""
                                                            {...register('low-sugar')}
                                                            className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" />
                                                        <p className="text-xl">Low Sugar</p>
                                                    </div>

                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id=""
                                                            {...register('mediterranean')}
                                                            className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" />
                                                        <p className="text-xl">Mediterranean</p>
                                                    </div>

                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id=""
                                                            {...register('no-oil-added')}
                                                            className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" />
                                                        <p className="text-xl">No Oil Added</p>
                                                    </div>

                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id=""
                                                            {...register('pescatarian')}
                                                            className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" />
                                                        <p className="text-xl">Pescatarian</p>
                                                    </div>







                                                </div>
                                            </div>
                                        </ScrollArea>
                                    </div>
                                    <div className="mt-6" onClick={nextPage}><Button>Next</Button></div>

                                </div>
                            </div>

                        </div>
                    )}

                    {formStep >= 1 && (
                        <div className={formStep == 1 ? '' : 'hidden'}>
                            <img src={allergyImg} alt="" className="absolute " style={{ top: '450px', right: '28px', zIndex: '110' }} />
                            <div className="absolute w-full h-full bg-scrollBackground">
                            </div>
                            <div className="content absolute top-0 left-0 w-full h-full z-30">
                                <div className="wrapper z-100 relative mx-auto flex flex-col " style={{ width: buttonWidth, marginTop: '100px' }}>


                                    <div className="w-full h-2 rounded-2xl bg-gray-200">
                                        <div className="h-full w-1/3 bg-cgreen"></div>
                                    </div>



                                    <div className=" my-10 text-center font-semibold" style={{ fontSize: '28px' }}>Do you have any food allergies or intolerance?</div>


                                    <div className="div bg-white rounded-2xl" >
                                        <ScrollArea speed={0.4}
                                            className="px-4"
                                            contentClassName="content"
                                            style={{ height: '400px', zIndex: '1000' }}
                                            horizontal={false}
                                            vertical={true}
                                        >
                                            <div className="">
                                                <div className="search bg-gray-200 px-2 py-3 rounded-2xl flex flex-row justify-start items-center mt-4">

                                                    <i className="fas fa-search pl-2"></i>
                                                    <input className="bg-transparent w-36  ml-6 text-gray-600" type="text" name="search" id="" placeholder="Search diets" />



                                                </div>
                                                <div className="form-wrapper py-2">


                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id="" className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" {...register('wheat-free')} />
                                                        <p className="text-xl">Wheat Free</p>
                                                    </div>


                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id="" className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" {...register('mollusk-free')} />
                                                        <p className="text-xl">Molllusk Free</p>
                                                    </div>

                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id="" className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" {...register('alcohol-free')} />
                                                        <p className="text-xl">Alcohol Free</p>
                                                    </div>

                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id="" className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" {...register('peanut-free')} />
                                                        <p className="text-xl">Peanut free</p>
                                                    </div>

                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id="" className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" {...register('celery-free')} />
                                                        <p className="text-xl">Celery Free</p>
                                                    </div>

                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id="" className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" {...register('crustacean-free')} />
                                                        <p className="text-xl">Crustacean Free</p>
                                                    </div>

                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id="" className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" {...register('pork-free')} />
                                                        <p className="text-xl">Pork Free</p>
                                                    </div>

                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id="" className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" {...register('dairy-free')} />
                                                        <p className="text-xl">Dairy Free</p>
                                                    </div>

                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id="" className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" {...register('lupine-free')} />
                                                        <p className="text-xl">Lupine Free</p>
                                                    </div>

                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id="" className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" {...register('mustard-free')} />
                                                        <p className="text-xl">Mustard Free</p>
                                                    </div>

                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id="" className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" {...register('red-meat-free')} />
                                                        <p className="text-xl">Red Meat Free</p>
                                                    </div>

                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id="" className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" {...register('sesame-free')} />
                                                        <p className="text-xl">Sesame Free</p>
                                                    </div>

                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id="" className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" {...register('shellfish-free')} />
                                                        <p className="text-xl">Shellfish free</p>
                                                    </div>

                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id="" className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" {...register('soy-free')} />
                                                        <p className="text-xl">Soy Free</p>
                                                    </div>

                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id="" className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" {...register('egg-free')} />
                                                        <p className="text-xl">Egg free</p>
                                                    </div>

                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id="" className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" {...register('fish-free')} />
                                                        <p className="text-xl">Fish Free</p>
                                                    </div>

                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id="" className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" {...register('fodmap-free')} />
                                                        <p className="text-xl">Fodmap Free</p>
                                                    </div>

                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id="" className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" {...register('gluten-free')} />
                                                        <p className="text-xl">Gluten Free</p>
                                                    </div>

                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id="" className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" {...register('sulfite-free')} />
                                                        <p className="text-xl">Sulfite Free</p>
                                                    </div>

                                                    <div className="flex flex-row items-center py-2" >
                                                        <input type="checkbox" id="" className="appearance-none  w-6 h-6 mr-8 border-4 rounded-md border-cgreen checked:bg-cgreen" {...register('tree-nut-free')} />
                                                        <p className="text-xl">Tree Nut Free</p>
                                                    </div>




                                                </div>
                                            </div>
                                        </ScrollArea>
                                    </div>
                                    <div className="mt-6" onClick={nextPage}><Button>Next</Button></div>

                                </div>
                            </div>

                        </div>
                    )}

                    {formStep >= 2 && (
                        <div className={formStep == 2 ? '' : 'hidden'}>

                            <div className="absolute w-full h-full bg-scrollBackground">
                            </div>
                            <div className="content absolute top-0 left-0 w-full h-full z-30">
                                <div className="wrapper z-100 relative mx-auto flex flex-col " style={{ width: buttonWidth, marginTop: '100px' }}>


                                    <div className="w-full h-2 rounded-2xl bg-gray-200">
                                        <div className="h-full w-2/3 bg-cgreen"></div>
                                    </div>



                                    <div className="text-3xl my-16 text-center font-semibold ">Do you have a <br /> daily calorie net goal?</div>

                                    <div className="flex flex-row justify-around items-center px-4">
                                        <input type="number" name="limitCalories" id="" className=" w-6/12 pb-3 px-8 bg-transparent text-3xl font-semibold text-gray-400 mr-6 border-b-8 border-gray-400" {...register('calories')} />
                                        <p className="text-3xl pr-2 font-semibold">calories</p>
                                    </div>

                                    <div className="mt-10" onClick={onSubmit}>


                                        <input type="submit" value="Complete" className="flex p-2 rounded-md justify-center items-center text-white bg-gradient-to-r  from-bGreen to-bBlue mx-auto" style={{ width: '326px', height: '57px', fontSize: '21px' }} onClick={nextPage} />

                                    </div>
                                    <div className="w-full flex justify-center mt-6 items-center bg-white text-black text-" style={{ width: '326px', height: '57px', fontSize: '21px' }}>Nope, skip and complete!</div>
                                </div>
                            </div>

                        </div>
                    )}

                </form>



                {formStep >= 3 && (
                    <div className={formStep == 3 ? '' : 'hidden'}>
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

                        {dropdownOn ?
                            <div>
                                <div className="absolute w-full h-full bg-gray-500 opacity-30 z-40" onClick={dropdownHandler}>

                                </div>

                                <div className="absolute" style={{ left: '40px', bottom: '30px', zIndex: '100' }}>
                                    <form action="" onSubmit={imageSubmiHandler}>
                                        <div className="mx-auto border-2 border-gray-300 rounded-lg">




                                            <input type="file" name="" id="file" className="hidden" onChange={(e) => ImageHandler(e)} />
                                            <label htmlFor="file" className="flex flex-row justify-center items-center text-md text-blue-500 bg-white py-5  border-b border-gray-300 cursor-pointer" style={{ width: '380px' }}>Photo Gallery</label>


                                            <div className="flex flex-row justify-center items-center text-md text-blue-500 bg-white py-5 ">Camera</div>
                                            <input type="submit" value="Submit" className="flex flex-row w-full justify-center items-center text-md text-blue-500 bg-white py-5" />
                                        </div>
                                    </form>
                                    <div className="flex flex-row justify-center items-center text-md font-bold text-blue-500 bg-white py-5 mt-3 border-2 border-gray-300 rounded-t-md rounded-b-3xl">Cancel</div>
                                </div>
                            </div>

                            : ''}

                    </div>
                )}

                {formStep >= 3 && (

                    <div className={formStep == 4 ? '' : 'hidden'}>


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


                                        ``{recipies.map((x) => max(x)
                                            < img src = { x.url } alt = "" className = "" style = {{ width: '360px' }} />
                                            )}``


                                        <p className="py-1 text-gray-600 border-b-4 border-gray-600 my-8" style={{ fontSize: '21px' }}>Reupload photo.</p>

                                        <div className="bg-white shadow-lg border mb-8 border-gray-200" style={{ width: '360px' }}>
                                            <div className="flex flex-row p-8 items-baseline ">
                                                <div className="bg-bgoogle rounded-full mr-6" style={{ width: '16px', height: '16px' }}></div>
                                                <div className="flex flex-col justify-start items-start">
                                                    <p className="font-bold text-bgoogle" style={{ fontSize: '21px' }}>Suggested food</p>

                                                    {recipies.map((x) =>
                                                        <p className="font-bold" style={{ fontSize: '21px' }}>{x.name}</p>
                                                   
                                                    }

                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white shadow-lg border border-gray-200" style={{ width: '360px' }}>
                                            <div className="flex flex-row p-8 items-baseline">
                                                <div className="rounded-full bg-black mr-6" style={{ width: '16px', height: '16px' }}></div>
                                                <div className="flex flex-col justify-start items-start">
                                                    <p className="font-bold text-cgreen" style={{ fontSize: '21px' }}>Approved on your diet</p>
                                                    {preferences.map((x) =>

                                                        <p className="font-bold" style={{ fontSize: '21px' }}>{x}</p>
                                                   
                                                    }



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
                                                        <p className="absolute bg-white p-1 text-sm bottom-10 left-2 w-full ">{x.title}</p>
                                                        <img src={x.url} alt="" className="mt-4 object-cover rounded-md w-full h-full" />
                                                    </span>










                                                </div>


                                            </div>



                                        </div>

                                        <div className="mb-20"><Button>Save this item</Button></div>

                                    </div>
                                </div>
                            </ScrollArea>
                        </div>



                    </div>
                )}


                {formStep >= 3 && (

                    <RecipieDetail recipe={recipe.id} />
                )}









            </Container>

        </>
    )
}

export default MultistepForm
