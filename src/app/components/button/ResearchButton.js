'use client'
import { useState } from 'react'

const ResearchButton = (props) => {

    const [isActive, setActive] = useState(props.isActive)

    const non_active_style = "bg-white rounded border-b-8 p-1 m-2 w-60 h-12 hover:bg-green-600 hover:text-white hover:border-green-700 active:border-none"
    const active_style = "bg-green-600 rounded border-b-8 border-green-700 text-white p-1 m-2 w-60 h-12"

    const changeStyle = () => {
        setActive(!isActive)
    }

    return (
        <button onClick={() => {changeStyle();props.onClick()}} class={isActive ? active_style:non_active_style}>{props.text}</button>
    )
}

export default ResearchButton