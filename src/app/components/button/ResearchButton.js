'use client'

const ResearchButton = (props) => {
    return (
        <button onClick={props.onClick} class="bg-white rounded shadow-lg p-1 m-2 w-60 h-12 hover:bg-gray-50 hover:text-gray-500">{props.text}</button>
    )
}

export default ResearchButton