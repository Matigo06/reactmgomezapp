import React from 'react';

const NavBar = (props) => {
    console.log(props);
    return (
        <nav className='NavBar'>
            <div className='logo'>
                <h2>Olinails</h2>
            </div>
            <div className='ListaItems'>
                <ul>
                    <li><a href=''>Item Lista 1</a></li>
                    <li><a href=''>Item Lista 2</a></li>
                    <li><a href=''>Item Lista 3</a></li>
                </ul>
            </div>
            <div className='Buttons'>
                <button>Boton 1</button>
                <button>Boton 2</button>
            </div>
        </nav>
    );
}

export default NavBar;

