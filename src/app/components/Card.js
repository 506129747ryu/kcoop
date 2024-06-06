'use client'

import Image from 'next/image'

const Card = (props) => {
    return (
        <div class="flex justify-center">
            <Image src={props.src} width={720} height={290} objectFit="contain"/>
        </div>
    )
}

export default Card;