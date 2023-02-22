import React, { ReactNode, useEffect, useState } from "react";
import { useTheme } from 'next-themes'

// type ObjectProps = {
//     string: ReactNode;
// }

const Selector = ({numbering}: {numbering: string}) => {
    const object:any = {
        "1" : <General />,
        "2": <Notification />,
        "3": <Help />,
        "4": <Profile />,
        "5": <Overview />,
        "6": <Media />,
        "7": <SimilarGroups />
    }
    return (
        object[numbering]
    )
}



const General = () => {
    const [mounted, setMounted] = useState(false);
    const [isDark, setIsDark] = useState<boolean>(false);
    
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

  if (!mounted) {
    return null
  }
    const toggle = () => {
        if(isDark) {
            setTheme('light');
        }else {
            setTheme('dark')
        }
        setIsDark(!isDark);
    };
    const {theme, setTheme} = useTheme();
     return (
        <div className="flex flex-col">
            <h1 className="header">General</h1>
            <span className="pt-4 text-md">App Logout</span>
            <p className="text-sm text-gray-500 dark:text-gray-500 pb-2">click below to signout</p>
            <i className="ri-logout-circle-r-line cursor-pointer text-xl"></i>
            <span className="pt-4 text-md">Theme</span>
            <p className="text-sm text-gray-500 pb-1">select app theme</p>
            <i className={`ri-${isDark ? "sun" : "moon"}-line cursor-pointer py-1 text-2xl`} onClick={toggle}></i>
        </div>
    )
}

const Notification = () => {
    const [notify, setNotify] = useState<boolean>(false)
    const toggle = () => setNotify(!notify)
    return (
        <div className="flex flex-col">
            <h1 className="header">Notifications</h1>
            <span className="pt-6 text-[15px]">Toggle Notification</span>
            <p className="text-sm text-gray-400 py-1">switch notification menu</p>
        <i className={`cursor-pointer text-3xl duration-300 ri-toggle-${notify ? "fill" : "line"}`} onClick={toggle}></i>
        </div>
    )
}

const Help = () => {
    return (
        <div className="flex flex-col">
            <h1 className="header">Help</h1>
            <span className="pt-6 text-[15px]">About Us</span>
            <p className="text-sm text-gray-500 text-gray-300 py-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui commodi veniam labore corporis, quia porro cum iure? Eligendi eos, qui, magnam impedit praesentium optio excepturi consectetur ex nihil quia ab?</p>
        </div>
    )
}

const Profile = () => {
    return (
        <div className="flex flex-col">
            <h1 className="header">Profile</h1>
            <h1 className="pt-6 text-gray-800 dark:text-gray-200 font-semibold text-md">Ifenna Monanu</h1>
            <div className="pt-3">
                <span className="text-[15px]">About</span>
                <p className="text-sm text-gray-500 dark:text-gray-400">switch notification menu</p>
            </div>
            <div className="pt-6">
                <span className="text-[15px]">Phone Number</span>
                <p className="text-sm text-gray-500 dark:text-gray-400">+234-959-333-432</p>
            </div>
        </div>
    )
}

// Header components
const Overview = () => {
   return (
    <div className="flex flex-col">
        <h1 className="header">Overview</h1>   
    </div>
   )
}

const Media = () => {
   return (
    <div className="flex flex-col">
        <h1 className="header">Media</h1>
    </div>
   )
}

const SimilarGroups = () => {
    return (
        <div className="flex flex-col">
            <h1 className="header">Groups in commons (0)</h1>
        </div>
    )
}

export default Selector;