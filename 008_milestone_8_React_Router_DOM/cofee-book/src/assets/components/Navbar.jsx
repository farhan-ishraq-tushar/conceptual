import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="md:px-28 navbar backdrop-blur-xl bg-white/30 z-10 fixed">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {/* <NavLink></NavLink> */}
                <NavLink 
                className={({isActive}) => 
                  `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`
                }
                 to='/'>
                  Home
                 </NavLink>
                <NavLink className={({isActive}) => 
                  `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`
                }
                 to='/coffes'>Coffes</NavLink>
                <NavLink 
                className={({isActive}) => 
                  `font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`
                } 
                to='/dashboard'>Dashboard</NavLink>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">COOK_BOOK</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5">
            {/* "Link" is the replacement of tag <a> in react */}
            <Link to='/'>Home</Link>
            <Link to='/coffes'>Coffes</Link>
            <Link to='/dashboard'>Dashboard</Link>
            
            
            
          </ul>
        </div>
        
      </div>
    );
};

export default Navbar;