import React from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import googlelogo from '../images/googlelogo.png'

function SignupScreen({ testHandler2 }) {
    return (
        <Container>
            <div className="absolute rounded-full bg-rpink"
                style={{ top: '-230px', left: '210px', width: '500px', height: '500px' }}
            >

            </div>
            <div className="absolute flex flex-col justify-center items-center z-40" style={{ top: '200px', left: '65px' }} >

                <div className="bg-bgoogle mb-8 flex flex-row rounded-md justify-start items-center text-white" style={{ width: '326px', height: '57px', fontSize: '18px' }} onClick={testHandler2}>
                    <div className="flex flex-row justify-between items-center px-2">
                        <img src={googlelogo} alt="" className="pr-10" />
                        <p>Signup with google</p>
                    </div>
                </div>
                <form action="" className="flex flex-col justify-center">
                    <input className="mb-4 px-4 py-2 rounded-md border-2 focus:border-gray-600 border-gray-400 text-lg text-gray-500" style={{ width: '326px' }} type="text" name="" id="" placeholder="Full Name" />

                    <input className="mb-4 px-4 py-2 rounded-md border-2 focus:border-gray-600 border-gray-400 text-lg text-gray-500" style={{ width: '326px' }} type="email" name="" id="" placeholder="Email Address" />

                    <input className="mb-4 px-4 py-2 rounded-md border-2 focus:border-gray-600 border-gray-400 text-lg text-gray-500" style={{ width: '326px' }} type="password" name="" id="" placeholder="Password" />

                    <input className="mb-4 px-4 py-2 rounded-md border-2 focus:border-gray-600 border-gray-400 text-lg text-gray-500" style={{ width: '326px' }} type="password" name="" id="" placeholder="Confirm Password" />

                </form>
                <div className="mt-8"><Button>Login</Button></div>

                <p className=" text-lg mt-12">Go back to <span className="text-lg" style={{ color: '#6F924C' }}>Login</span></p>
            </div>

        </Container >
    )
}

export default SignupScreen
