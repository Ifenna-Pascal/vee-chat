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
    <div>
      <div className='w-full h-[10vh] md:h-[15vh] shadow-sm cursor-pointer px-6 sticky top-0 flex items-center'>
        <img src={img} alt="profile" className='w-[50px] h-[50px] rounded-[50%] object-fit' onClick={()=>Toggle("profiles")} />
        <div className='flex ml-4 flex-col w-full relative'>
            <h1 className='text-[16px] font-semibold tracking-wide'>{name}</h1>
            <p className='text-[14px] tracking-wide text-gray-500'>{message}</p>
        </div>
        <i className="ri-more-2-fill text-white text-xl block md:hidden" onClick={()=>Toggle("mobileSide")}></i>
     </div>
     {
        show && type === "profiles" ?  <ModalWraper><Header /></ModalWraper> : null
      }
    </div>
  )
}

export default ChatHeader