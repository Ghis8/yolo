import {AiOutlineHome,AiOutlineThunderbolt,AiOutlineSearch,AiOutlineUser} from 'react-icons/ai'
import {HiBadgeCheck} from 'react-icons/hi'
import {BsFillCollectionPlayFill} from 'react-icons/bs'

import Image from "next/image"
import HeaderItem from "./HeaderItem"
function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
        <div className='flex flex-grow justify-evenly max-w-2xl' >
            <HeaderItem title="HOME" Icon={AiOutlineHome} />
            <HeaderItem title="TRENDING" Icon={AiOutlineThunderbolt} />
            <HeaderItem title="VERIFIED" Icon={HiBadgeCheck} />
            <HeaderItem title="COLLECTIONS" Icon={BsFillCollectionPlayFill} />
            <HeaderItem title="SEARCH" Icon={AiOutlineSearch} />
            <HeaderItem title="ACCOUNT" Icon={AiOutlineUser} />
        </div>
       <span className="text-blue-400  mb-8 animate-pulse font-bold hover:animate-spin cursor-pointer text-2xl">YOLO</span>
    </header>
    
  )
}

export default Header