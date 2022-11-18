import { useState } from "react";
import logo from '../Assets/logo.png'
export default function NavBar() {
    // const [navbar, setNavbar] = useState(false);

    return (
        <nav>
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-center py-3 md:py-5 md:block">
                        <a href="javascript:void(0)">
                        <img src={logo} alt="loading..." class= "pt-3"/>
                        </a>
                    </div>
                </div>
                <form className="max-w-sm px-4">
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Search Tree"
                    className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                />
            </div>
        </form>
            </div>
            <hr class = "m-3"/>
        </nav>
    );
}