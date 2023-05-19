import style from './Inicio.module.css';
import Animacion from '../Animacion/Animacion';
const Inicio = () => {  
    return (
        <section className={style.Inicio}>
            <article className={style.full}>
            <h1>Full stack Web Developer</h1>
            <p>
            Soy un apasionado desarrollador web Full Stack con experiencia en la creación de aplicaciones y sitios web completos. Poseo amplios conocimientos en el desarrollo del front-end y el back-end, lo que me permite abordar todas las capas de una aplicación. Me encanta aprender nuevas tecnologías y aplicarlas en mis proyectos. Soy una persona responsable, creativa y con muchas ganas de seguir aprendiendo.
            </p>
            <div className={style.adornos}>
            <div></div>
            <div></div>
            <div></div>
            </div>
            </article>

            <div className={style.botones}>
                <h2>Nahuel Martin Castilla</h2>
                <div>
                    <a href='#'>GMAIL</a>
                    <a href='#'>LINKEDIN</a>
                </div>     
            </div>
            <Animacion/>
        </section>
    )
}
export default Inicio;