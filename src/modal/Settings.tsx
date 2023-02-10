import React, { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/reducerHook";
import Active from "./Active";
import Selector from "./Selector";


const SettingsModal = () => {
  const {type} = useAppSelector(state => state.modal);
    useEffect(()=> {
        type === "profile" && setNumbering('4') 
    }, [])
    const [numbering, setNumbering] = useState<string>('1');
    return (
        <div className="modal rounded-md flex ml-[62px] shadow-lg w-[400px] h-[430px]">
            <div className="h-full relative py-5 px-1 w-[150px] bg-[#f0f2f5] dark:bg-dark-primary2 flex flex-col items-center  rounded-l-md"> 
                <Active 
                    icon="ri-home-5-line" 
                    name="General" 
                    number="1" 
                    onClick={()=> setNumbering('1')} 
                    numbering={numbering}
                />
                <Active 
                    icon="ri-notification-3-line" 
                    name="Notification" 
                    number="2"   
                    onClick={()=> setNumbering('2')} 
                    numbering={numbering}
                />
                <Active 
                    icon="ri-question-line" 
                    name="Help" 
                    number="3"  
                    onClick={()=> setNumbering('3')}  
                    numbering={numbering}
                />
                <div className="absolute w-full bottom-0 px-2">
                    <Active 
                        icon="ri-user-line" 
                        name="Profile" 
                        number="4"  
                        onClick={()=> setNumbering('4')}  
                        numbering={numbering}
                    />
                </div>
            </div>
            <div className="h-full py-8 dark:bg-dark-primary1 px-5 bg-white w-[250px] rounded-r-md"> 
                <Selector numbering={numbering} /> 
            </div>
        </div>
    )
}

export default SettingsModal;



