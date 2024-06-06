'use client'

const smButton = (props) => {
    return (
        <button onClick={props.onClick} class="border">{props.text}</button>
    )
}

export default smButton