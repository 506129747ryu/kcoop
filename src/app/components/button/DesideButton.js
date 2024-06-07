const DesideButton = (props) => {
    return (
        <button onClick={props.onClick} class="bg-red-800 hover:bg-red-600 text-white hover:text-gray-100 text-xl border-b-8 active:border-none border-red-900 w-[960px] h-[90px] active:h-[82px] p-4 m-2 active:mt-4 rounded-r-xl">{props.text}</button>
        )
}

export default DesideButton;