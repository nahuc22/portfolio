import styles from '../Inicio/Inicio.module.css'
import Animacion from '../Animacion/Animacion';
const Inicio = () => {
    return (
        <section className={styles.Inicio}>
            <article className={styles.full}>
                <h1>Full Stack Web Developer</h1>
                <p>Programador con enfoque en el desarrollo de aplicaciones web, tengo habilidades tanto en el Front-end como en el el Back-end. sin embargo mi especialidad y enfoque principal está en el Front-end.</p>
                <div className={styles.adornos}>
                <div></div>
                <div></div>
                <div></div>
                </div> 
            </article>

            <div className={styles.botones}>

                <h2>Nahuel Martin</h2>
                <h2>Castilla</h2>
                <div>
                   <a href="https://linkedin.com/in/nahuel-castilla-dev">LINKEDIN</a> 
                   <a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:babca5ab-f1dc-498e-9bab-1ffb4d5ccbdf">CV</a> 
                </div>

            </div>

            <Animacion/>
        </section>
    )
}

export default Inicio;