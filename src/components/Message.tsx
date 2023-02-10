import React from 'react'

type Props = {
    isSender: boolean,
    message: string
}

function Message({isSender, message}:Props) {
    const classSender = 'bg-green_light dark:bg-green_dark rounded-tr-lg rounded-tl-sm justify-self-end';
    const classReciever = 'bg-white dark:bg-dark-primary1 rounded-tl-lg justify-self-start '
  return (
    <div className={` pl-4 pr-12 py-4 mb-4  cols-span-1 shadow-sm ${isSender ? classSender : classReciever}`}>
        <p className='text-[13px] tracking-wide'>{message}</p>
    </div>
  )
}

export default Message