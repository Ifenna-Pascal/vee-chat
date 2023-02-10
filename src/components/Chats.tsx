import React from 'react'

type Props = {
    img: string,
    name: string,
    message: string,
    time: string
}

function Chat({img, name, message, time}: Props) {
  return (
     <div className='mt-3 w-full py-3 cursor-pointer dark:hover:bg-dark-primary1 rounded-md hover:bg-dark-primary1 hover:bg-light-primary1 px-4 flex relative items-center'>
        <img src={img} alt="profile" className='w-[50px] h-[50px] rounded-[50%] object-fit' />
        <div className='flex ml-4 flex-col  relative'>
            <h1 className='text-[16px] font-semibold tracking-wide'>{name}</h1>
            <p className='text-[14px] tracking-wide text-gray-500'>{message}</p>
        </div>
        <p className='absolute text-[13px] font-thin right-1 top-4'>{time}</p>
     </div>
    )
}

export default Chat