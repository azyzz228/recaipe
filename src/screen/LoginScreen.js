import React from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import loginpizza from '../images/loginpizza.png'
import googlelogo from '../images/googlelogo.png'

import { buttonWidth } from '../Variables'

function LoginScreen() {
    return (
        <Container>
            <img src={loginpizza} className="z-0 absolute" style={{ width: '405px', left: "34px" }} alt="" />

            <div className="left-16 absolute z-30 flex flex-col justify-center items-center z-10" style={{ top: '355px' }}>


                <div className="bg-bgoogle flex flex-row rounded-md justify-start items-center text-white" style={{ width: buttonWidth, height: '57px', fontSize: '18px' }}>
                    <div className="flex flex-row justify-between items-center px-2">
                        <img src={googlelogo} alt="" className="pr-10" />
                        <p>Login with google</p>
                    </div>

                </div>

                <p className="text-lg py-4">or</p>
                <form action="" className="flex flex-col justify-center">
                    <input className="mb-4 px-4 py-2 rounded-md border-2 focus:border-gray-600 border-gray-400 text-lg text-gray-500" style={{ width: buttonWidth }} type="text" name="" id="" placeholder="Enter Address" />

                    <input className="mb-4 px-4 py-2 rounded-md border-2 focus:border-gray-600 border-gray-400 text-lg text-gray-500" style={{ width: buttonWidth }} type="password" name="" id="" placeholder="Password" />



                </form>
                <div className="mt-3"><Button>Login</Button></div>

                <p className=" text-lg mt-4">Don't have an account? <span className="text-lg" style={{ color: '#6F924C' }}>Sign up.</span></p>
            </div>

        </Container>
    )
}

export default LoginScreen
