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
        <a href="https://github.com/luizdebem" target="_blank"><i className="fab fa-github-square"></i></a>
        <a href="https://www.linkedin.com/in/luizdebem/" target="_blank"><i className="fab fa-linkedin"></i></a>
        <a title="Email me at luizdebem99@gmail.com" href="mailto:luizdebem99@gmail.com" target="_blank"><i className="fas fa-envelope-square"></i></a>
      </div>
    </header>
  )
}

export default Header
