function Header() {
    return (
      <header className="header">
        <div className="header__body container">
          <div className="logo header__logo">
            <a href="./" title="Домой">
              <img src="./images/photo_logo.png" alt="Лого" />
            </a>
          </div>
  
          <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" for="menu__toggle">
              <span></span>
            </label>
  
            <nav className="header__nav">
              <a href="#" title="Команды">
                Команды
              </a>
              <a href="#" title="Документация">
                Документация
              </a>
              <a href="#" title="Новости">
                Новости
              </a>
              <a
                href="https://discord.com/api/oauth2/authorize?client_id=877243621299064902&permissions=8&scope=bot"
                title="Добавить бота на сервер"
                target="_blank"
              >
                Добавить бота на сервер
              </a>
            </nav>
          </div>
        </div>
      </header>
    )
}
  
export default Header
  