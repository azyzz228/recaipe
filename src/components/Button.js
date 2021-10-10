import React from 'react'


function Button(props) {
    return (
        <p className="flex p-2 rounded-md justify-center items-center text-white bg-gradient-to-r  from-bGreen to-bBlue mx-auto" style={{ width: '326px', height: '57px', fontSize: '21px' }}>
            {props.children}
        </p>
    )
}

export default Button
