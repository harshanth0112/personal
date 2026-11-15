import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';

const ADMIN_EMAIL = process.env.REACT_APP_ADMIN_EMAIL || "harshanthr064@gmail.com";

function Navbar() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const isAdmin = user && user.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();

    return (
        <div className='py-5 flex justify-between items-center'>
            <h2 className='text-2xl font-bold cursor-pointer' onClick={() => navigate("/")}>
                Personal Portfolio
            </h2>
            <div className='flex items-center'>
                <Link className='list-none px-4 font-medium hover:text-orange-500' to={"/home"}>Home</Link>
                <Link className='list-none px-4 font-medium hover:text-orange-500' to={"/blogs"}>Blogs</Link>
                <Link className='list-none px-4 font-medium hover:text-orange-500' to={"/about"}>About</Link>
                
                {/* Only display Admin link if logged-in user is the Admin */}
                {isAdmin && (
                    <Link className='list-none px-4 font-semibold text-orange-600 hover:text-orange-700' to={"/admin"}>
                        Admin
                    </Link>
                )}
                
                {user ? (
                    <div className="flex items-center gap-3 ml-2">
                        <span className={`hidden lg:inline text-xs px-2.5 py-1 rounded border ${
                            isAdmin ? 'bg-orange-100 text-orange-800 border-orange-300 font-semibold' : 'bg-gray-100 text-gray-700 border-gray-200'
                        }`}>
                            {isAdmin ? '👑 Admin' : user.email}
                        </span>
                        <button
                            className='button-style bg-red-500 hover:bg-red-600'
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <button
                        className='button-style hidden md:block'
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                )}
            </div>
        </div>
    );
}

export default Navbar;
