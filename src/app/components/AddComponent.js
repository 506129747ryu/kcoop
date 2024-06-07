'use client'

import { useState } from 'react'

const AddComponent = (props) => {

    var list = []

    for(var i=1;i<=props.count;i++){
        list.push(props.component)
    }

    return (
        <div>
            {list}
            <button onClick={props.handleClick} class="border">追加する</button>
        </div>
    )
}

export default AddComponent