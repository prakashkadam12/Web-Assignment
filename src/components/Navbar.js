import React from 'react';
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className='flex flex-col md:flex-row justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
            <div className="flex justify-between items-center w-full md:w-auto">
               <h2 className='text-white font-bold text-2xl'>Welcome</h2>
                <div className="md:hidden">
                    {/* Add a mobile menu button here if needed */}
                </div>
            </div>

            <nav className="w-full md:w-auto mt-4 md:mt-0">
                <ul className='text-richblack-100 flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:gap-x-6'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* Login - SignUp - LogOut - Dashboard */}
            <div className='flex flex-col md:flex-row items-center gap-y-2 md:gap-y-0 md:gap-x-4 mt-4 md:mt-0'>
                {!isLoggedIn &&
                    <Link to="/login">
                        <button className='bg-richblack-800 text-richblack-100 py-2 px-4 rounded-lg border border-richblack-700'>
                            Log in
                        </button>
                    </Link>
                }
                {!isLoggedIn &&
                    <Link to="/signup">
                        <button className='bg-richblack-800 text-richblack-100 py-2 px-4 rounded-lg border border-richblack-700'>
                            Sign up
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to="/">
                        <button onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logged Out");
                        }}
                            className='bg-richblack-800 text-richblack-100 py-2 px-4 rounded-lg border border-richblack-700'>
                            Log Out
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to="/dashboard">
                        <button
                            className='bg-richblack-800 text-richblack-100 py-2 px-4 rounded-lg border border-richblack-700'>
                            Dashboard
                        </button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
