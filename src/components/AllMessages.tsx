import React from 'react'
import Message from './Message'

function AllMessages() {
  return (
    <div className='px-6 py-4 overflow-y-scroll grid justify-items-stretch  max-h-[77vh] scroll-smooth'>
        <Message isSender message="Hi, Whats'up!!!" />
        <Message isSender={false} message="Hey!! I am fine" />
        <Message isSender={false} message="Have you eaten?" />                  
        <Message isSender={true} message="Have you eaten?" />
        <Message isSender={false} message="Have you eaten?" />
        <Message isSender={false} message="Have you eaten?" />
        <Message isSender={true} message="Have you eaten?" />
        <Message isSender={false} message="Have you eaten?" />
        <Message isSender={true} message="Have you eaten?" />
        <Message isSender={false} message="Have you eaten?" />
        <Message isSender={false} message="Have you eaten?" />
        <Message isSender={false} message="Have you eaten?" />

    </div>
  )
}

export default AllMessages


