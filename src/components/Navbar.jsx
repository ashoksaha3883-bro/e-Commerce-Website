import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // import the hook

const Navbar = ({ isLoggedIn, userEmail, onLogout }) => {
  const navigate = useNavigate();
  const { getCartCount } = useCart(); // get cart count

  const handleLogoutClick = () => {
    onLogout();
    navigate('/');
  };

  return (
    <nav className='bg-green-900 w-full text-white shadow-md'>
      <div className='max-w-8xl mx-auto flex items-center justify-between p-2 ml-20 mr-20'>
        {/* Logo */}
        <div className='flex items-center gap-2'>
          <div className='text-xl font-bold tracking-tight flex items-center gap-1'>
            <h2 className='bg-black rounded-full w-8 h-8 flex items-center justify-center'>N</h2>
            <span className="hidden sm:inline">extGen</span>
          </div>
        </div>

        {/* Right side */}
        <div className='flex items-center gap-3  '>
          {isLoggedIn && (
            <span className="hidden md:inline-block text-xs bg-white text-blue-600 rounded-3xl px-3 py-1 font-bold shadow-sm">
              User: {userEmail}
            </span>
          )}

          {isLoggedIn ? (
            <button
              onClick={handleLogoutClick}
              className='text-black px-4 py-2 hover:bg-blue-500 hover:text-white rounded-md font-semibold bg-white  text-sm'
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className='text-black px-4 py-2  hover:bg-blue-500 hover:text-white rounded-md font-semibold bg-white  text-sm '>
                Login
              </button>
            </Link>
          )}

          <Link to="/cart">
            <button className='bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-blue-500 hover:text-white transition-all active:scale-95 text-sm relative'>
              Cart
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;