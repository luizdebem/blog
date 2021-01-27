import React from 'react'
import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.blogTitle}>
        <img src="https://avatars.githubusercontent.com/u/37565843?s=400&u=25228add319047862c1b98724ab4a40bd5c18752&v=4" alt="Luiz" className={headerStyles.photo} />
        <span>Luiz Guilherme</span>
      </div>
      <div className={headerStyles.socialStuff}>
        <i class="fab fa-github-square"></i>
        <i class="fab fa-linkedin"></i>
        <i class="fas fa-envelope-square"></i>
      </div>
    </header>
  )
}

export default Header
