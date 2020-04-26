import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const HeaderNav = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <FontAwesomeIcon icon={faCheckSquare} /> &nbsp;
                CheckThat
            </a>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        Help
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderNav