import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FolderGit2, Contact,CircleQuestionMark  } from 'lucide-react'; 

const Navbar = () => {
    return (
        <div className="fixed top-4 left-4 right-4 h-10 px-6 dark:bg-[#D8DEE9] rounded-full shadow-lg flex items-center justify-center">
            <div className="flex gap-10">
                <NavLink
                    to="/"
                    className="flex items-center gap-2 hover:text-white transition"
                >   
                    <Home size={16}/> Home
                </NavLink>
                <NavLink
                    to="/projects"
                    className="flex items-center gap-2 hover:text-white transition"
                >   
                    <FolderGit2 size={16}/>Projects
                </NavLink>
                <NavLink
                    to="/about"
                    className="flex items-center gap-2 hover:text-white transition"
                >   
                    <CircleQuestionMark size={16}/>About
                </NavLink>
                <NavLink
                    to="/about"
                    className="flex items-center gap-2 hover:text-white transition"
                >   
                    <Contact size={16}/>Contact
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;