const DesideButton = (props) => {
    return (
        <button onClick={props.onClick} class="bg-red-800 hover:bg-red-600 text-white hover:text-gray-100 shadow-gray-400 shadow-lg w-1/2 p-2">{props.text}</button>
    )
}

export default DesideButton;