import React from "react";

const Button = ({state, ...props}) => {
    const onClick = props.onClick;
    return (
        <>

                <button className={'btn btn-primary'} style={state === 'back' ? {borderRadius: '50%'} : null} onClick={onClick}>{state === 'front' ? 'View QR Code' : 'X'}</button>
        </>

    )
}

export default Button
