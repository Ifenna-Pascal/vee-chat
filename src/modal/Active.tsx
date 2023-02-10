type IProps = {
    icon: string,
    name: string,
    number: string,
    numbering: string,
    onClick: () => void
}


const Active = ({icon, name, number, numbering, onClick}: IProps) => {
    let isSame = numbering === number;
    let isActive = numbering === number? "bg-[#f7f8fa] dark:bg-dark-primary1" : "";
    return (
        <div className={`flex w-full mb-3 hover:bg-[#f7f8fa] hover:dark:bg-dark-primary1 cursor-pointer relative items-center py-1 px-3 rounded-md ${isActive}`} onClick={onClick}>
            <i className={`${icon} text-md dark:text-gray-300 text-gray-800`}></i>
            <div className={`${isSame ? 'block absolute w-[3px] bg-[#008069] rounded-[20px]  h-[20px] left-0  ' : 'hidden'}`}></div>
            <p className="text-md ml-2 text-gray-800 dark:text-gray-300">{name}</p>
        </div>
    )
}

export default Active

