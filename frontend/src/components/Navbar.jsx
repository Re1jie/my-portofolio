import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FolderGit2, BookOpen } from 'lucide-react';

const Navbar = () => {
    return (
        <div className="fixed top-4 left-4 right-4 h-12 px-8 bg-[rgba(40,44,52,0.85)] backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center dark:bg-[rgba(216,222,233,0.15)]">
            <div className="flex gap-6">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `flex items-center gap-2 px-3 py-1.5 rounded-full transition ${
                            isActive
                                ? 'bg-blue-600 text-white'
                                : 'text-white hover:bg-blue-500 hover:text-white'
                        } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`
                    }
                >
                    <Home size={16} /> Home
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        `flex items-center gap-2 px-3 py-1.5 rounded-full transition ${
                            isActive
                                ? 'bg-blue-600 text-white'
                                : 'text-white hover:bg-blue-500 hover:text-white'
                        } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`
                    }
                >
                    <FolderGit2 size={16} /> Projects
                </NavLink>
                {/* <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `flex items-center gap-2 px-3 py-1.5 rounded-full transition ${
                            isActive
                                ? 'bg-blue-600 text-white'
                                : 'text-white hover:bg-blue-500 hover:text-white'
                        } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`
                    }
                >
                    <CircleQuestionMark size={16} /> About
                </NavLink> */}
                <NavLink
                    to="/article"
                    className={({ isActive }) =>
                        `flex items-center gap-2 px-3 py-1.5 rounded-full transition ${
                            isActive
                                ? 'bg-blue-600 text-white'
                                : 'text-white hover:bg-blue-500 hover:text-white'
                        } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`
                    }
                >
                    <BookOpen size={16} /> Article
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
