import React from "react"
import { NavLink} from "react-router-dom";

export default function NavBar() {
    return (
        <header>
            <div>
                <nav>
                    <NavLink to="/" exact>
                        Abraham
                    </NavLink>
                    <NavLink to="../component/Post.js">
                        Blog Posts
                    </NavLink>
                    <NavLink to="../component/Project.js">
                        Projects
                    </NavLink>
                    <NavLink to="../component/About.js">
                        About me!
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}