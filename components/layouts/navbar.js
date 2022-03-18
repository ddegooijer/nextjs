import EF2Logo from "../svg/ef2-logo";
import Headroom from 'react-headroom';
import styles from '../../assets/scss/modules/Navbar.module.scss';

export default function navbar() {
    return (
        <header className={styles['header-navbar']}>
            <Headroom>
                <div className="header-elements-wrapper container-fluid px-5 py-5 d-flex align-items-center">
                    <a className="d-block branding" title="Home van EF2">
                        <EF2Logo/>
                    </a>

                    <p className="slogan mb-0 ms-auto">Ready to renew?</p>

                    <nav id="main-menu" className="main-menu-wrapper" aria-label="Hoofdnavigatie">
                        <button className="menu-toggle">
                            <span className="bars"></span>
                        </button>
                    </nav>
                </div>
            </Headroom>
        </header>
    )
}

