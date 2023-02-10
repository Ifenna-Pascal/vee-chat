import React, { useState } from 'react'
import Active from './Active'

function Header() {
    const [numbering, setNumbering] = useState<string>('1');
  return (
    <div className='modalH rounded-md flex ml-[365px] shadow-lg w-[400px] h-[430px]'>

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
        </div>
       
        <div className="h-full py-8 dark:bg-dark-primary1 px-5 bg-white w-[250px] rounded-r-md"> 
        </div>
    </div>
  )
}

export default Header