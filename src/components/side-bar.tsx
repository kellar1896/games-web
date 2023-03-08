import react, { memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className='min-h-screen w-3/12 hidden bg-redCrayola shadow-lg shadow-black md:flex md:flex-col items-center py-20'>
            <div className='flex flex-col items-center'>
                <div className='rounded-full bg-lavanderBLush h-32 w-32'>

                </div>
                <h3 className='mt-3 font-semibold text-lavanderBLush'>Admin Name</h3>
            </div>
            <ul className='w-2/3 mt-10 text-lavanderBLush font-mono space-y-3 text-3xl border-t'>
                <li className='hover:text-raisingBlack transition-all duration-500 border-b border-lavanderBLush space-x-2 py-5'>
                <FontAwesomeIcon icon={solid('gamepad')} className='w-2/12' />
                    <Link to="/">Games</Link>
                </li>
                <li className='hover:text-raisingBlack transition-all duration-500 border-b border-lavanderBLush space-x-2 py-5'>
                <FontAwesomeIcon icon={solid('user')} className='w-2/12' />
                    <Link to="/users">Users</Link>
                </li>
            </ul>
        </div>
    )
}

export default memo(SideBar)