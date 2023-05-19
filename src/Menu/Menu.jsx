import style from './Menu.module.css';
import { Link } from 'react-router-dom';
import Redes from './Redes';

const Menu = () => {
    return (
        <header className={style.header}>
            <span>LOGO</span>

            <nav className={style.nav}>

                <Link to="/portfolio/" className={style.link}>Inicio</Link>
                <Link to="/portfolio/proyectos" className={style.link}>Proyectos</Link>
                <Link to="/portfolio/sobremi" className={style.link}>Sobre Mi</Link>

            </nav>
            <Redes/>
        </header>
    )
}

export default Menu;