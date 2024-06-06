'use client'
import { useState } from 'react'
import smButton from './button/smButton'

const Acordion = (props) => {

    const [isOpen, setOpen] = useState(props.isOpen)

    var icon
    isOpen ? icon="ー" : icon="＋"

    const handleClick = () => {
        setOpen(!isOpen)
    }

    return (
        <div class="w-[960px] border-green-600 border-4 p-4 rounded-xl text-green-600">
            <div class="flex justify-center">{props.notice}</div>
            <div class="flex justify-end"><button onClick={handleClick} class="border-b-2 border-green-600 font-bold">詳しく見る{icon}</button></div>
            { isOpen && (<div class="flex justify-center p-5">{props.contents}</div>)}
        </div>
    )
}

export default Acordion;