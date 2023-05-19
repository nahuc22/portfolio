import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'
import style from './Redes.module.css'
const Redes = () => {
    return (
        <div className={style.Redes}>
            <a href ="#">
                <img width='30px'src={linkedin} alt="linkedin" />
            </a>
            <a href ="#">
                <img width='30px'src={github} alt="github" />
            </a>
            <a href ="#">
                <img width='30px'src={instagram} alt="instagram" />
            </a>
        </div>
    )
}

export default Redes;