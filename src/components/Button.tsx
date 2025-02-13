import React, { PropsWithChildren } from 'react'

type TButton = {
    color?: string
}

const Button = (props: PropsWithChildren<TButton>) => {
    const { children } = props

    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <button>{children}</button>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Button
