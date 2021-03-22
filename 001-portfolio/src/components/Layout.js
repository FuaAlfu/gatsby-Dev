import React from 'react'
import Navbar from './Navbar'
export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
               { children }
            </div>
            {/*end of content*/} 
            <footer>
               <p>copyright 2021 web</p>
            </footer>
        </div>
    )
}
