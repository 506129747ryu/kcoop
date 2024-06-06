const DesideButton = (props) => {
    return (
        <button onClick={props.onClick} class="bg-red-800 hover:bg-red-600 text-white hover:text-gray-100 text-xl shadow-gray-400 shadow-lg w-[960px] p-4">{props.text}</button>
    )
}

export default DesideButton;