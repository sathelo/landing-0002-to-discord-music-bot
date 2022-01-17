function Squad() {
    return (
        <section className="squad">
            <div className="squad__body container">
                <h2>Команда</h2>

                <div className="squad-card-list">
                <div className="squad-card">
                    <div className="squad-card__avatar">
                    <img
                        src="https://avatars.githubusercontent.com/u/79220388?v=4"
                        alt="Ава"
                    />
                    </div>
                    <div className="squad-card__text">
                    Специализируюсь на специалистах. Начинающий front-разработчик
                    </div>
                    <div className="squad-card__contacts">
                    Alex Fisherman
                    <a href="https://github.com/sathelo" title="Саша">github</a>
                    </div>
                </div>

                <div className="squad-card">
                    <div className="squad-card__avatar">
                    <img
                        src="https://avatars.githubusercontent.com/u/26620968?v=4"
                        alt="Ава"
                    />
                    </div>
                    <div className="squad-card__text">
                    Местная липучка. Специалист по приколам, расмешит не только тебя,
                    но и твоих близких
                    </div>
                    <div className="squad-card__contacts">
                    Gleb Gudlayv
                    <a href="https://github.com/gudlayv" title="Глеб">github</a>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}
  
export default Squad    
    