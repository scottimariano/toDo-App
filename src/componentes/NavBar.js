import React from 'react';

function NavBar(props) {
    return (
        <div>
            <ul class="nav nav-pills p-4">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Tasks</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Notes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contacts</a>
                </li>
          </ul>
        </div>


    );
}

export default NavBar