import React from 'react'
import Chat from '../components/Chats'
// import Icons from '../components/Icons'
import SearchField from '../components/SearchField'

function Selectbar() {
  return (
    <div className='lg:bg-white lg:dark:bg-dark-secondary flex flex-col px-2 lg:px-4 pt-6 w-full md:w-[300px] bg-light-primary1 dark:bg-dark-primary2 shadow-lg'>
      <div className='flex justify-between items-center'>
      <h1 className='font-semibold text-xl tracking-wide'>Chats</h1>
      <div>
      <i className='ri-edit-box-line px-4 py-2 cursor-pointer dark:bg-dark-primary2 hover:bg-light-primary1 rounded-md'></i>
      <i className="ri-close-line px-4 py-2 md:hidden  cursor-pointer hover:bg-light-primary1 dark:bg-dark-primary2 rounded-md"></i>
      </div>
    </div>
    <SearchField />
    <div className='flex items-center flex-col h-[80vh] overflow-y-scroll'>
        <Chat name="Ifemoney" message='Hi, whatsup!!' time='15:02' img='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80' />
        <Chat name="Stph Esus" message='Are you home now?' time='15:02' img='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80' />
        <Chat name="Ifemoney" message='Hi, whatsup!!' time='15:02' img='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80' />
        <Chat name="Ifemoney" message='Hi, whatsup!!' time='15:02' img='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80' />
        <Chat name="Ifemoney" message='Hi, whatsup!!' time='15:02' img='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80' />
        <Chat name="Ifemoney" message='Hi, whatsup!!' time='15:02' img='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80' />
        <Chat name="Ifemoney" message='Hi, whatsup!!' time='15:02' img='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80' />       
    </div>
    </div>
  )
}

export default Selectbar