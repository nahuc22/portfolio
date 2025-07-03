import styles from '../Menu/Menu.module.css';
import Redes from './Redes';
import home from '../assets/Inicio.svg';
import proyec from '../assets/proyectos.svg';
// import sobre from '../assets/sobremi.svg';

const Menu = ({ onChangeComponent }) => {
    return (
        <header className={styles.header}>
            <span className={styles.logo}></span>

            {/* Menú en desktop */}
            <nav className={styles.nav}>
                <p onClick={() => onChangeComponent('inicio')}>Inicio</p>
                <p onClick={() => onChangeComponent('proyectos')}>Proyectos</p>
                {/* <p onClick={() => onChangeComponent('sobremi')}>Sobre Mi</p> */}
            </nav>

            {/* Menú en mobile */}
            <nav className={styles.navMobile}>
                <p onClick={() => onChangeComponent('inicio')}>
                    <img width='40px' src={home} alt="Inicio" />
                </p>
                <p onClick={() => onChangeComponent('proyectos')}>
                    <img width='40px' src={proyec} alt="Proyectos" />
                </p>
                {/* <p onClick={() => onChangeComponent('sobremi')}>
                    <img width='40px' src={sobre} alt="Sobre Mi" />
                </p> */}
            </nav>

            <Redes />
        </header>
    );
};

export default Menu;
