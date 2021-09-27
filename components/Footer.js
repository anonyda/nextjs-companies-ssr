import { faFacebookF, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerTitle}>
                Company Pages
            </div>
            <div className={styles.footerLinks}>
                <FontAwesomeIcon icon={faFacebookF} style={{width: '70px', color: 'white'}} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faGithub} />
            </div>
            <div>
                2021 All Rights Reserved
            </div>
        </div>
    )
}