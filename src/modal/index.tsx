/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/reducerHook';
import { closeModal, toggle, openModal } from '../reducers/modalreducer';

type Props = {
    children?: React.ReactNode
}

function ModalWraper({children}: Props) {

  // select modal
  const modal = useAppSelector(state => state.modal.show);
  // dispatch
  const dispatch = useAppDispatch()

 // close the modal when clicking outside the modal.
  const modalRef = useRef<HTMLElement>();
  const closedModal = (e:any) => {
    if (e.target === modalRef.current) {
      dispatch(closeModal())
    }
  };
  
    useEffect(() => {
        if (modal)  {
            document.body.style.overflow = 'hidden'}
            else {
                document.body.style.overflow = 'unset';
            }
            return () => {
                document.body.style.overflow = 'unset';
            }

    }, [modal])
  return (
    <div className={`container`}  ref={modalRef as React.RefObject<HTMLDivElement> } onClick={closedModal}>
        <main className='modal'>{children}</main>
    </div>
  )
}

export default ModalWraper