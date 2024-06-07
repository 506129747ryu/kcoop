const DropDown = (props) => {

    const list = []
    var item

    for(item of props.list){
        list.push(<option>{item}</option>)
    }
    return (
        <div>
            <select class={"p-1 rounded shadow " + props.class}>
                {list}
            </select>
        </div>
    )
}

export default DropDown