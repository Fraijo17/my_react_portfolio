import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-gray-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Abraham
          </NavLink>
          <NavLink
            to="../component/Post.js"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="../component/Project.js"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="../component/About.js"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            About me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://twitter.com/AyyeBruhhHamm"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/abraham-fraijo-9a91831b6/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/Fraijo17"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
