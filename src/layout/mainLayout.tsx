import React from 'react'
import ChatHeader from '../components/ChatHeader'
import Selectbar from './Selectbar'
import Sidebar from './Sidebar'

type Props = {
    children: React.ReactNode
}

function MainLayout({children}: Props) {
  return (
    <div className='flex relative'>
        <Sidebar/>
        <main className="bg-light-secondary dark:bg-dark-primary2 w-full h-screen lg:ml-[365px]">
          <ChatHeader name="Ifemoney" message='Software Engineer_Tenecce' img='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80' />
            {children}
        </main>
    </div>
  )
}

export default MainLayout