import * as React from 'react';
import {NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div className="container my-5">
                <nav>
                    <ul>              
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/favoritos">Favoritos</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};