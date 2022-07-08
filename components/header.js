import Avatar from "./avatar";
import { ViewGridIcon} from '@heroicons/react/solid'

export default function Header() {
  return (
    <div className='flex w-full p-5 justify-between text-gray-700 text-sm'>
        <div className='flex space-x-4 items-center '>
           <p className="link">About</p>
           <p className="link">Store</p>
 
        </div>
        <div className='flex space-x-4 items-center'>
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        <ViewGridIcon className="h-10 w-10 cursor-pointer p-2
        rounded-full hover:bg-gray-200"/>
        <Avatar image= 'https://picsum.photos/5'/>
        </div>
    </div>
  )
}
