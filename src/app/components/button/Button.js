'use client'

const Button = (props) => {

    props.isToggleMode ? 
        (props.isActive ? style_class = "": style_class=""):
        (style_class = "")

    const handleClick = () => {
        
    }

    return (
        <button
            onClick={()=>{props.onClick(); handleClick()}}
            class={style_class}>{props.text}</button>
    )
}