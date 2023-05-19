import style from './Menu.module.css';
import { Link } from 'react-router-dom';
import Redes from './Redes';

const Menu = () => {
    return (
        <header className={style.header}>
            <span className={style.logo}>LOGO</span>

            <nav className={style.nav}>

                <Link to="/portfolio/" className={style.link}><span>I</span>nicio</Link>
                <Link to="/portfolio/proyectos" className={style.link}><span>P</span>royectos</Link>
                <Link to="/portfolio/sobremi" className={style.link}><span>S</span>obre Mi</Link>

            </nav>

            <nav className={style.navMobile}>
                <Link>
                    <img src="" alt=""/>
                </Link>

                <Link>
                    <img src="" alt=""/>
                </Link>

                <Link>
                    <img src="" alt=""/>
                </Link>
                    
            </nav>
            <Redes/>
        </header>
    )
}

export default Menu;