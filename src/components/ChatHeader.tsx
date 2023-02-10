import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/reducerHook';
import ModalWraper from '../modal';
import Header from '../modal/Header';
import { toggle } from '../reducers/modalreducer';

type Props = {
    img: string,
    name: string,
    message: string,
}

function ChatHeader({img, name, message}: Props) {
  const dispatch = useAppDispatch();
  const {show, type} = useAppSelector(state => state.modal);
  const Toggle = (type: string) => {
    dispatch(toggle(type));
  }
  return (
    <div className='w-full h-[15vh] shadow-sm cursor-pointer px-6 flex items-center' onClick={()=>Toggle("profiles")}>
        <img src={img} alt="profile" className='w-[50px] h-[50px] rounded-[50%] object-fit' />
        <div className='flex ml-4 flex-col w-full relative'>
            <h1 className='text-[16px] font-semibold tracking-wide'>{name}</h1>
            <p className='text-[14px] tracking-wide text-gray-500'>{message}</p>
        </div>
        {
              show && type === "profiles" ?  <ModalWraper><Header /></ModalWraper> : null
        }
     </div>
  )
}

export default ChatHeader