import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render () {
    return (
        <div>
            <ul class="nav nav-pills p-4">
                <li class="nav-item">
                    <Link to='/tasks' class="nav-link active">Tasks</Link>
                </li>
                {/* <li class="nav-item">
                    <Link to='/notes' class='nav-link'>Notes</Link>
                </li>
                <li class="nav-item">
                <Link to='/contacts' class='nav-link'>Contacts</Link>
                </li> */}
          </ul>
        </div>


    );
}}

export default NavBar