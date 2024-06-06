'use client'

const HeaderButton = (props) => {
    return (
        <button onClick={props.onClick} class="border-x h-full w-52 m-0 py-3 text-xs transition duration-400 hover:bg-green-600">{props.text}</button>
    )
}

export default HeaderButton