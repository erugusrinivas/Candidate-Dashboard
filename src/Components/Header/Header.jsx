import React from 'react'
import './header.scss'
function Header({ title }) {
    return (
        <div className='header-main'>
            <h2>{title}</h2>
            <div className='header-right'>
                <button className='notify'>
                    <img src="https://img.icons8.com/?size=100&id=68376&format=png&color=000000" />

                </button>
                <button className='user'>
                    Pushpak
                    <img src='https://img.icons8.com/?size=100&id=23242&format=png&color=000000' />
                </button>

            </div>

        </div>
    )
}

export default Header