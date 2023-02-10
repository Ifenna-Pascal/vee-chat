import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css";
import 'remixicon/fonts/remixicon.css'


type Props = {
    onClick: () => void,
    icon: string,
    href: string
}

function Icons({onClick, icon, href}: Props) {
    const router = useRouter();
    const isSame = router.pathname === href;
    
  return  (
        <Link href={href}>
            <button className={`flex items-center font-[300] rounded-md justify-center relative hover:shadow-sm hover:bg-[#f7f8fa] dark:hover:bg-dark-primary1 mb-3 p-5 w-[50px] h-[40px] ${isSame ? 'bg-[#f7f8fa] dark:bg-dark-primary1 ' : ''}`} onClick={onClick}>
            <div className={`${isSame ? 'block absolute dark:bg-green_dark w-[3px] bg-[#008069] rounded-[20px]  h-[20px] left-0  ' : 'hidden'}`}></div>
            <i className={`${icon} text-gray-700 dark:text-gray-200 text-xl`}></i>
        </button>
        </Link>
    )
}



export default Icons