import React from 'react'

const Header = () => {

  const toggleMenu = () => {
    if (typeof window === 'undefined') return

    document.body.classList.toggle("open");
  };

  return <header>
    <div className="background" />

    <nav className="navbar">
      <form action="/main.html">
        <button>
          <img
            className="navbar-logo"
            src="../../images/logo_mini.png"
            alt="logo_mini" />
        </button>
      </form>
      <button className="navbar-burger" onClick={toggleMenu()} />
    </nav>

    <nav className="menu" onClick={toggleMenu()}>
      <a style={{ animationDelay: "0.1s" }} href="/catalog.html">Каталог</a>
      <a style={{ animationDelay: "0.2s" }} href="#Как_это_работает?">Как это работает ?</a>
      <a style={{ animationDelay: "0.3s" }} href="#A_what_with_delivery_?">А что с доставкой ?</a>
      <a style={{ animationDelay: "0.4s" }} href="#About_us">О нас</a>
      <a style={{ animationDelay: "0.5s" }} href="#Связаться">Связаться</a>
    </nav>

  </header>
}

export default Header
