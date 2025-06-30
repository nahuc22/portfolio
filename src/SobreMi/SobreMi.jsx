import styles from '../SobreMi/SobreMi.module.css'
import perfil from '../assets/perfil-sbg.png'
import argentina from '../assets/argentina.jpg'
import Button from '../SobreMi/Button'

const SobreMi = () => {
    return (
        <section className={styles.SobreMi}>
            <div className={styles.seccion1}>
                <div className={styles.img}>
                    <img src={perfil} alt="perfil" />
                </div>
                <div className={styles.intro}>
                    <h1 className={styles.leagueSpartanCustom} style={{ fontSize: '38px'}}>Nahuel Castilla</h1>
                    <h4 className={styles.subtitle} style={{ fontSize: '20px', marginTop: '20px'}}>Developer Full stack</h4>
                <Button/>
                    <div className={styles.labeltitle}>
                    <div>
                            <span>Location</span>
                            <br></br>
                            <img src={argentina} alt="Bandera de Argentina" className={styles.flag} />
                        </div>
                        <div>
                            <span style={{marginLeft: '15px'}}>Age</span>
                            <br></br>
                            <span className={styles.ageText}>27 years</span>
                        </div>
                    </div>
                </div>
                <div className={styles.redes}>
                <a href="https://wa.me/+5493816319655" target="_blank">
                <img src="https://static.vecteezy.com/system/resources/previews/018/930/748/large_2x/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.png" style={{ width: '55px', height: '55px'}} alt="whatsapp logo"/>
                </a>
                <a href="https://wa.me/+5493816319655" target="_blank">
                <img src="https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png" style={{ width: '55px', height: '55px'}} alt="whatsapp logo"/>
                </a>
                <a href="https://wa.me/+5493816319655" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" style={{ width: '35px', height: '35px', marginLeft: '8px'}} alt="whatsapp logo"/>
                </a>
                <a href="https://wa.me/+5493816319655" target="_blank">
                <img src="https://static.vecteezy.com/system/resources/previews/042/148/632/non_2x/instagram-logo-instagram-social-media-icon-free-png.png" style={{ width: '60px', height: '60px', marginLeft: '8px'}} alt="whatsapp logo"/>
                </a>

                </div>
            </div>

            <div className={styles.edu}>
                <h2>Educación</h2>
                <div>
                    <h3 style={{ color: '#053847'}}>UTN-FRT 2016-2021</h3>
                    <h3 style={{ color: '#125567'}}>Técnico Programador</h3>
                    <h4 style={{ color: '#125567'}}>C#, PHP, MySQL</h4>
                </div>
                <div>
                    <h3 style={{ color: '#053847'}}>soyHenry 2023</h3>
                    <h3 style={{ color: '#125567'}}>Full stack web developer</h3>
                    <h4 style={{ color: '#125567'}}>React, Node.js, Javascript</h4>
                </div>
            </div>

            <div className={styles.exp}>
                <h2>Experiencia</h2>
                <div>
                    <h3 style={{ color: '#053847'}}>AettiHub 2022</h3>
                    <h3 style={{ color: '#125567'}}>Software developer</h3>
                    <h4 style={{ color: '#125567'}}>Python, MongoDB</h4>
                </div>
                <div>
                    <h3 style={{ color: '#053847'}}>Voluntario - OAA 2024</h3>
                    <h3 style={{ color: '#125567'}}>Web developer</h3>
                    <h4 style={{ color: '#125567'}}>React, Node, MySQL</h4>
                </div>
            </div>
        </section>
    )
}

export default SobreMi;
