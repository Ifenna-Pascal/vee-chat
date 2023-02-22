import React, { useState } from 'react'
import Active from './Active'
import Selector from './Selector';

function Header() {
    const [numbering, setNumbering] = useState<string>('5');
  return (
    <div className='modalH rounded-md flex left-2 -top-[330px] absolute lg:left-[365px] lg:-top-[220px] shadow-lg w-[400px] h-[400px]'>

        <div className="h-full relative py-5 px-1 w-[55px] md:w-[150px] bg-[#f0f2f5] dark:bg-dark-primary2 flex flex-col items-center  rounded-l-md"> 
                 <Active
                    icon="ri-home-5-line" 
                    name="Overview" 
                    number="5" 
                    onClick={()=> setNumbering('5')} 
                    numbering={numbering}
                />
                <Active 
                    icon="ri-notification-3-line" 
                    name="Media" 
                    number="6"   
                    onClick={()=> setNumbering('6')} 
                    numbering={numbering}
                />
                <Active 
                    icon="ri-question-line" 
                    name="Groups" 
                    number="7"  
                    onClick={()=> setNumbering('7')}  
                    numbering={numbering}
                />
        </div>
       
        <div className="h-full py-5 dark:bg-dark-primary1 px-5 bg-white w-[270px] rounded-r-md"> 
          <Selector numbering={numbering} />
        </div>
    </div>
  )
}

export default Header