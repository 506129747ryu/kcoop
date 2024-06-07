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
            <div class="flex justify-end">
                <button onClick={props.handleClick} class="border">追加する</button>
            </div>
        </div>
    )
}

export default AddComponent