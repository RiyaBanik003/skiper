import React from 'react'
import BadgeButton from '../ui/badge-button'
import AiInput from '../ui/ai-input'

const AiInputCard = () => {
    return (

        <div className='w-[61.5%] p-2 my-20 rounded-3xl shadow dark:bg-black/20 mx-auto'>
                <div className='h-full p-6 dark:bg-[#1f1f1f] shadow rounded-3xl mx-auto'>
                    
                <BadgeButton>Latest Component</BadgeButton>
                
                <AiInput />
            </div>
        </div>

    )
}

export default AiInputCard