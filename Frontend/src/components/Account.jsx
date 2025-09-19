import { useContext, useEffect } from 'react';
import { userContext } from '../context/context';
import { toast } from 'react-toastify';

function Account() {

    const { userData } = useContext(userContext);

    useEffect(() => {
        if (!userData.name || !userData.email) return toast.error("Please login or signup!");
    }, []);

    return (
        <div className='h-screen w-full flex justify-center'>
            <div className='h-full w-full md:w-sm flex flex-col'>
                <h2 className='bg-white p-4'>Account Settings</h2>
                <div className=" flex-grow bg-zinc-100 shadow-md flex flex-col gap-2">
                    {/* Profile Container*/}
                    <div className='h-fit px-4 pb-4 border-b border-dashed'>
                        <div className="flex gap-4 mt-4">
                            <div className="profile-image">
                                <img alt="Profile" src="./images/profile-icon.png" className='w-20' />
                                <div className='w-fit bg-purple-800 p-1 rounded-full relative -top-6 left-16'>
                                    <img alt="Camera Icon" src="./images/camera-icon.png" className='w-3 invert' />
                                </div>
                            </div>
                            <div className="profile-info" >
                                <h3 className='font-bold'>{userData.name || "Name"}</h3>
                                <p>{userData.email || "email@domain.com"}</p>
                            </div>
                        </div>
                        <p >
                            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Account;