import React from 'react'
import Icons from '../components/Icons';
import { useAppDispatch, useAppSelector } from '../hooks/reducerHook';
import ModalWraper from '../modal';
import SettingsModal from '../modal/Settings';
import { toggle } from '../reducers/modalreducer';
import Selectbar from './Selectbar';

function Sidebar() {
  const dispatch = useAppDispatch();
  const {show, type} = useAppSelector(state => state.modal);
  const Toggle = (type: string) => {
    dispatch(toggle(type));
  }
  const isMobile = show && type === "mobileSide"
  return (
   <div className={`md:w-[365px] w-full fixed h-screen ${isMobile ? "flex w-full z-10" : "hidden"} md:flex`}>
     <div className={`w-[65px] md:flex flex-col pt-[50px] pb-[20px] h-full px-3 border-r border-gray-300 items-center bg-light-primary1 dark:bg-dark-primary2`}>
       <div className='relative flex flex-col h-full items-center'>
       <div className='flex items-center flex-col justify-self-start'>
            <Icons onClick={()=>{}} icon='ri-chat-1-line' href='/dashboard' />
            <Icons onClick={()=>{}} icon='ri-team-line' href='/dashboard/teams'/>
            <Icons onClick={()=>{}} icon='ri-contacts-line'  href='/dashboard/contacts'/>
        </div>

        <div className='flex items-center flex-col absolute bottom-0 justify-self-end align-self-end'>
            <Icons onClick={()=> Toggle('settings')} icon='ri-settings-3-line' href=''/>
            <Icons onClick={()=> Toggle("profile")} icon='ri-user-line'  href='' />
            {
              show && type === "settings" ?  <ModalWraper><SettingsModal/></ModalWraper> : null
            }
            {
              show && type === "profile" ?  <ModalWraper><SettingsModal/></ModalWraper> : null
            }
        </div>
       </div>
    </div>
    <Selectbar />
   </div>
  )
}

export default Sidebar