import styles from '../Menu/Menu.module.css';
import { Link } from 'react-router-dom';
import Redes from './Redes';
import home from '../assets/Inicio.svg';
import proyec from '../assets/proyectos.svg';
import sobre from '../assets/sobremi.svg';


const Menu = ({onChangeComponent}) => {
    return(
        <header className={styles.header}>
            <span className={styles.logo}></span>

            <nav className={styles.nav}>
                <p onClick={() => onChangeComponent('inicio')}>Inicio</p>
                <p onClick={() => onChangeComponent('proyectos')}>Proyectos</p>
                <p onClick={() => onChangeComponent('sobremi')}>SobreMi</p>
            </nav>

            <nav className={styles.navMobile}>
                <p onClick={() => onChangeComponent('inicio')}>
                    <img width='40px' src={home} alt="Inicio" />
                </p>
                <p onClick={() => onChangeComponent('proyectos')}>
                    <img width='40px' src={proyec} alt="Proyectos" />
                </p>
                <p onClick={() => onChangeComponent('sobremi')}>
                    <img width='40px' src={sobre} alt="SobreMi" />
                </p>
            </nav>

            <nav className={styles.navMobile}>
                 
              <Link to='/'>
                <img width='40px' src={home} alt="" />
              </Link>


              <Link to='/portfolio/proyectos'>
              <img width='40px' src={proyec} alt="" />
              </Link>


              <Link to='/portfolio/sobremi'>
               <img width='40px' src={sobre} alt="" />
              </Link>

            </nav>


            <Redes/>
        </header>
    )
}

export default Menu;