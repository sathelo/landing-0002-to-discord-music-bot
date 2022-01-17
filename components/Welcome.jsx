function Welcome() {
    return (
        <section className="welcome">
            <img className="welcome__waves" src="./images/waves.png" alt="Волны" />
            <div className="welcome__body container">
                <h1>Normalfaggotbot - лучший бесплатный музыкальный бот для Discord</h1>
                <a
                className="button"
                href="https://discord.com/api/oauth2/authorize?client_id=877243621299064902&permissions=8&scope=bot"
                title="Добавить бота на сервер"
                target="_blank"
                >Добавить на свой сервер Discord</a
                >

                <div className="welcome__computer">
                <picture>
                    <img src="./images/computer.svg" alt="Как подключить бота" />
                </picture>
                <video
                    controls
                    autoplay
                    loop
                    muted
                    src="./video/banner_block_one.mp4"
                    type="video/mp4"
                ></video>
                </div>
            </div>
        </section>
    )
}

export default Welcome