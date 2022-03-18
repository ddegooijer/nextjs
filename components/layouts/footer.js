import JaggedShape from "../svg/jagged-shape";
import EF2Logo from "../svg/ef2-logo";
import styles from '../../assets/scss/modules/Footer.module.scss';

export default function footer() {

    return (
        <>
            <footer className={styles.footer}>
                <div className={`${styles["footer__contact-details"]} dark-theme`}>
                    <JaggedShape fill="var(--color-background)" classes={styles["jagged-shape"]}/>
                    <div className={`${styles.inner} pt-6 pt-lg-4`}>
                        <div className="container">
                            <div className="row mb-6 mb-md-7">
                                <div className="col-12">
                                    <p className="footer__contact-details__title font-weight-bold text-uppercase mb-0">
                                        <span className="text-stroke-primary color-transparent">Re</span>discover<br/>to
                                        renew</p>
                                </div>
                            </div>

                            <div className="contact-details row align-items-end">
                                <div className="col-lg-4 mb-4 mb-lg-0">
                                    <h3 className="virtual-h4 font-family-titles font-weight-base color-gray mb-0">Stuur
                                        ons
                                        een
                                        bericht</h3>
                                    <a href="mailto:info@ef2.nl"
                                       className="virtual-h2 font-weight-bold text-decoration-none">info@ef2.nl</a>
                                </div>
                                <div className="col-lg-5 mb-6 mb-lg-0">
                                    <h3 className="virtual-h4 font-family-titles font-weight-base color-gray mb-0">Bel
                                        ons op</h3>
                                    {/*<contact-phone-number className="virtual-h2 font-weight-bold text-decoration-none"*/}
                                    {/*:icon="false"></contact-phone-number>*/}
                                </div>

                                <div className="col-lg-3 mb-6 mb-lg-0">
                                    <h3 className="virtual-h4 font-family-titles font-weight-base color-gray mb-0">EF2
                                        voor</h3>
                                    <ul className="font-weight-bold mb-0">
                                        <li>
                                            <a className="text-decoration-none">Non-profit</a>
                                        </li>
                                        <li>
                                            <a className="text-decoration-none">Handel</a>
                                        </li>
                                        <li>
                                            <a className="text-decoration-none">Dienstverlening</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="partner-logos container pt-0 pt-md-5">
                            <div className="row">
                                <div className="col-12 pb-5">
                                    <hr/>
                                </div>

                                <div className="col-md-7">
                                    <div className="tools d-grid">
                                        {/*<svg-drupal-logo></svg-drupal-logo>*/}
                                        {/*<svg-wordpress-logo></svg-wordpress-logo>*/}
                                        {/*<svg-laravel-logo></svg-laravel-logo>*/}
                                        {/*<svg-vue-logo></svg-vue-logo>*/}
                                    </div>
                                </div>

                                <div className="col-12 py-5 d-block d-md-none">
                                    <hr/>
                                </div>

                                <div className="col-12 col-md-5">
                                    <div className="partners d-grid">
                                        {/*<svg-dutch-laravel-foundation-logo></svg-dutch-laravel-foundation-logo>*/}
                                        {/*<svg-dutch-digital-agencies-logo></svg-dutch-digital-agencies-logo>*/}
                                    </div>
                                </div>

                                <div className="col-12 pt-5">
                                    <hr/>
                                </div>
                            </div>
                        </div>

                        <div className="footer-menu-wrapper container py-4">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <nav aria-label="Footer menu">
                                        <ul className="d-flex flex-column flex-md-row">
                                            <li className="me-3"><a href="/" className="opacity-80">Algemene voorwaarden</a>
                                            </li>
                                            <li className="me-3"><a href="/" className="opacity-80">Privacy verklaring</a></li>
                                            <li className="me-3"><a href="/" className="opacity-80">Cookies</a></li>
                                        </ul>
                                    </nav>
                                </div>

                                <div className="col-4 d-flex justify-content-end">
                                    <a href="/" className="d-block">
                                        <EF2Logo negative="true" width="35" height="38" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

