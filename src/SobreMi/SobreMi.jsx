import styles from '../SobreMi/SobreMi.module.css'
import Animacion from '../Animacion/Animacion.jsx' 
import perfil from '../assets/perfil1.jpeg'

const SobreMi = () => {
    return (
        <section className={styles.SobreMi}>
            {/* <Animacion/> */}
           <article className={styles.intro}>
                <div className={styles.img}>
                    <img src={perfil} alt="" />
                </div>
                <div className={styles.parrafo} >
                <p>Hola! Me llamo Nahuel,tengo 26 años. Vivo en Argentina/Tucuman. Me considero una persona muy extrovertida y altamente colaborativo. Si te gustó mi perfil no dudes en ponerte en contacto conmigo! 0800-Donrouch </p>      
                </div>
                <div className={styles.adornos}>
                <div></div>
                <div></div>
                <div></div>
                </div>
            </article>

            <div className={styles.edu}>
            <h2>Educación</h2>

                <div>
                    <h3>UTN-FRT 2016-2021</h3>
                    <h3>Técnico Programador</h3>
                    <h4>C#, PHP, MySQL</h4>
                </div>

                <div>
                <h3>soyHenry 2023</h3>
                <h3>Full stack web developer</h3>
                    <h4>React, Node.js, Javascript</h4>
                </div>
            </div>
            <div className={styles.edu}>
                <h2>Experiencia</h2>

                <div>
                    <h3>AettiHub 2022</h3>
                    <h3>Sotfware developer</h3>
                    <h4>Python, MongoDB</h4>
                </div>
            </div>
        </section>
    )
}

export default SobreMi;