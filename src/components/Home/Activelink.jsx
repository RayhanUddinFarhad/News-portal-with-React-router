import React, { Children } from 'react';
import { NavLink } from 'react-router-dom';

const Activelink = ({to, children}) => {
    return (
        <div >

<NavLink 
                    to={to}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "bg-[#EEEFFF] p-3 text-[#5D5FEF] "
                        : isPending
                        ? "text-gray-400"
                        : ""
                    }
                  >

                    {children}
                    {/* other code */}
                  </NavLink>


            
        </div>
    );
};

export default Activelink;