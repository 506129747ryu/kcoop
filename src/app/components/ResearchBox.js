'use client'

const ResearchBox = (props) => {
    return (
        <div class="w-[960px] m-8">
            <div class="flex justify-start">{props.tittle}</div>
            <div>
                <div class="bg-green-600 text-white rounded-t-lg">
                    <h1 class="text-xl flex items-center p-4">{props.topic}</h1>
                    <div class="text-sm flex items-end pl-4">{props.description}</div>
                </div>
                <div class="bg-gray-200 p-1 rounded-b-lg text-sm">
                    <div class="my-5 mx-5 p-5 bg-white rounded">
                        <p class="p-3">{props.research}</p>
                        <div class="flex justify-center bg-lime-100 m-3 p-3">{props.contents}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResearchBox;