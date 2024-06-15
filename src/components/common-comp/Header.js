import React from 'react'
import '../../styles/common-comp/Header.css'

export default function Header() {
  return (
    <header className="app-header">
    <div className="header-left">
      <img src="/path/to/logo.png" alt="Logo" className="logo" />
      <input type="text" placeholder="Search..." className="searchbar" />
    </div>
    <nav className="header-right">
      <ul className="event-types">
        <li className="nav-item"><a href="/tour">Tour</a></li>
        <li className="nav-item"><a href="/adventure">Adventure</a></li>
        <li className="nav-item"><a href="/workshop">Workshop</a></li>
        <li className="nav-item"><a href="/festivals">Festivals</a></li>
      </ul>
     <div className='user-actions'>
        <div className="user-profile">A</div>
        <div className="event-host">Host</div>
        <div className="account-business">login</div>
     </div>
    </nav>
  </header>
  )
}
