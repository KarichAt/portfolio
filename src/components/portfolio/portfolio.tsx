import '../portfolio/portfolio.css'

export default function portfolio(){
    return(
        <>
           <section className='portfolio'  id='showcase'>
                <h2 className="caption">Samples of project througout the experience</h2>
                <div className="grid">
                    <div className="cell">
                    <a href="http://KarichAt.github.io/zmeyka"><div className="preview" style ={{backgroundImage: `url("zmeyka.png")`}}></div></a>
                    <h1>SnakeGame</h1>
                    </div>
                    <div className="cell_text">
                    <h1 className='prew_text'>Here are a few projects that I did to strengthen my skills in layout, js, react, sql and more</h1>
                    </div>
                    <div className="cell">
                    <a href="https://Karichat.github.io/CarsDilerShip"><div className="preview" style ={{backgroundImage: `url("cardilership.png")`}}></div></a>
                    <h1>CarDilerShip</h1>
                    </div>
                    <div className="cell_text">
                    <h1  className='prew_text'>Змейка</h1>
                    </div>
                    <div className="cell">
                    <a href="http://KarichAt.github.io/zmeyka"><div className="preview"></div></a>
                    <h1>Змейка</h1>
                    </div>

                    <div className="cell_text">
                    <h1>Змейка</h1>
                    </div>
                    <div className="cell">
                    <a href="https://Karichat.github.io/Spectra"><div className="preview" style ={{backgroundImage: `url("spectra.png")`}}></div></a>
                    <h1>Spectra</h1>
                    </div>
                    <div className="cell_text">
                    <h1>Змейка</h1>
                    </div>
                    <div className="cell">
                    <a href="http://KarichAt.github.io/zmeyka"><div className="preview"></div></a>
                    <h1>Змейка</h1>
                    </div>
                    <div className="cell_text">
                    <h1>Змейка</h1>
                    </div>
                </div>
            </section> 
        </>
    )
}