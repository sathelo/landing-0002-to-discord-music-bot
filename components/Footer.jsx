function Footer() {
    return (
        <footer className="footer">
            <div className="footer__body container">
                <div className="footer-menu-list">
                <div className="footer-menu">
                    <h2>Normalfaggotbot</h2>
                    <div className="footer-menu__text">
                    Обслуживает несколько серверов <br />
                    <i className="fas fa-music"></i>
                    Приятного прослушивания <br />
                    <i className="fas fa-users-cog"></i>
                    от <a href="https://github.com/sathelo" title="Саша">sathelo</a>,
                    <a href="https://github.com/gudlayv" title="Глеб">gudlayv</a>
                    </div>
                </div>

                <div className="footer-menu">
                    <h3>Normalfaggotbot</h3>
                    <a href="#">Команды</a>
                </div>

                <div className="footer-menu">
                    <h3>Ресурсы</h3>
                    <a href="#">Команда</a>
                </div>
                </div>

                <div className="footer__basement">
                Является чем-то большим, чем просто ботом, наверное, в этом что-то
                есть особенное
                </div>
            </div>
        </footer>
    )
}
  
export default Footer    
