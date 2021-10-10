import React, { useEffect, useState } from 'react'

import Container from '../components/Container'
import eggImg from '../images/egg.png'
import ScrollArea from 'react-scrollbar'
import Button from '../components/Button'
function RecipieDetail({ recipe }) {
    const [recipe, setRecipe] = useState()
    const
        useEffect({
            axios.get(`https://8h13f0lg8k.execute-api.us-east-2.amazonaws.com/recipe?recipe_id=${recipe}` {

            })
                .then(function (response) {
                    setRecipe(response.data.recipe)
                })
                .catch(function (error) {
                    console.log(error);
                });

        }, [])
    return (
        <div>
            <Container>

            <div className="absolute w-full h-full bg-white z-10"></div>


            <div className="content absolute top-0 left-0 w-full h-full z-30">
            <div className="flex flex-row border-b mt-16 mx-auto border-black py-2" style={{ width: '405px' }}>

            <div className=" flex flex-row justify-between items-center " style={{ width: "280px" }}>


            <i className="fas fa-chevron-left pl-4 text-2xl" ></i>


            <p className="text-md text-lg font-sans font-bold">Suggested recipe</p>
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
            <p className="ml-10 mt-10 text-2xl text-bgoogle">{recipe.id}</p>
            <div className="flex flex-col justify-center items-center mt-2 ">





            <img src={eggImg} alt="" className="" style={{ width: '360px' }} />





            <div className="bg-white shadow-md border my-8 border-gray-200" style={{ width: '360px' }}>
            <p className="p-6 text-2xl text-cgreen font-bold border-b-2 border-b-gray-300">Ingredients</p>


            <div className="flex flex-col px-8 py-4  justify-start items-center ">


            <div className="flex flex-row justify-between w-full py-1">
        {recipe.map((x) => (


                                            <p className="text-2xl">{recipe.ing}</p>
                                            <p className="text-2xl">{recipe.ingNum}</p>

        ))}

            </div>


            </div>


            </div>
            </div>


            <div className="bg-white shadow-md border my-8 border-gray-200" style={{ width: '360px' }}>
            <p className="p-6 text-2xl text-bgoogle font-bold border-b-2 border-b-gray-300">Calories and weight</p>


            <div className="flex flex-col px-8 py-4  justify-start items-center ">
        {recipe.map((x) => (


        <p className="text-2xl">{recipe.ingclass}</p>
        <p className="text-2xl">{recipe.ingclassWeign}</p>

        ))}

            <div className="flex flex-row justify-between w-full py-1">
            <p className="text-2xl">Eggs</p>
            <p className="text-2xl">2</p>
            </div>


            </div>


            </div>
            </div>






            <div className="bg-white shadow-md border my-8 border-gray-200" style={{ width: '360px' }}>
            <p className="p-6 text-2xl text-cgreen font-bold border-b-2 border-b-gray-300">Nutritional value</p>


            <div className="flex flex-col px-8 py-4  justify-start items-center ">

        {recipe.max((x) => (
            <p className="text-2xl">{x.nutrition}</p>
                    <p className="text-2xl">{x.nutritionValue}</p>
        ))}
            <div className="flex flex-row justify-between w-full py-1">

            </div>




            </div>
            </div>

            <div className=" bg-white text-bgoogle  font-bold shadow-md py-8 flex justify-center items-center" style={{ width: '360px', fontSize: '22px' }}>
            <a href={`${recipe.link}`} className="border-b-4 border-bgoogle">Click here for full recipe</a>
            </div>

            <div className="mt-10 mb-20"><Button>Save this item</Button></div>

            </div>
        </div>
            </ScrollArea >
        </div >



            </Container >
        </div >
    )
}

export default RecipieDetail
