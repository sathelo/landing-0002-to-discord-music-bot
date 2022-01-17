function Commands() {
    return (
        <section className="commands">
          <div className="commands__body container">
            <h3>Как использовать дискорд бота</h3>
            <h2>Команды</h2>
            <h4>
              Список команд может увеличиваться или уменьшаться, так что следите за
              обновлениями
            </h4>
    
            <div className="commands__wrapper">
              <div className="commands__video">
                <picture>
                  <img src="./images/browser.svg" alt="Команды" />
                </picture>
                <video
                  controls
                  autoplay
                  loop
                  muted
                  src="./video/banner_block_two.mp4"
                  type="video/mp4"
                ></video>
              </div>
    
              <div className="commands__instruction">
                <div className="commands-card">
                  <h3 className="commands-card__title">
                    <span>
                      <i className="fas fa-book"></i>
                    </span>
                    Документация
                  </h3>
                  <div className="commands-card__text">
                    Для работы с Normalfaggotbot, необходимо:
                    <br />
                    1. Изначально добавить Normalfaggotbot на ваш дискорд сервер
                    <br />
                    2. Пригласить бота в голосовой чат, воспользовавшись командой
                    !play(!p) или !add_song(!add)
                    <br />
                    3. Наслаждаться музыкой
                  </div>
                </div>
    
                <div className="commands-card">
                  <h3 className="commands-card__title">
                    <span>
                      <i className="fas fa-list"></i>
                    </span>
                    Команды
                  </h3>
                  <div className="commands-card__text">
                    Префикс для команд "!". Весь список команд !help: <br />
                    Присоединение в голосовой чат происходит при помощи двух команд
                    <br />
                    !play(!p) или !add_song(!add) <br />
                    1. !play(!p) - Запуск youtube клипа по ссылке <br />
                    2. !add_song(!add) - Добавление youtube клипа в очередь <br />
                    3. !pause - Приостановить youtube клип <br />
                    4. !resume - Возобновить youtube клип <br />
                    5. !skip(!s) - Пропустить youtube клип <br />
                    6. !disconnect - Отключения из голосового чата
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    )
}
  
export default Commands
  