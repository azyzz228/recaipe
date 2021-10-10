import React from 'react'
import styled from 'styled-components'

const titleStyle = styled.p`
font-size: 30px;
line-height: 1.28px;
`;

function Title(props) {
    return (
        <p >
            {props.children}
        </p>
    )
}

export default Title
