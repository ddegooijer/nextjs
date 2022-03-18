import MediaImage from "../media/media-image";
import JaggedShape from "../svg/jagged-shape";
import styles from '../../assets/scss/modules/HomeHeader.module.scss';
import JaggedShapeVertical from "../svg/jagged-shape-vertical";

export default function HeaderHome({title, tagline, text, media}) {
    return (
        <div className={`${styles['header__homepage']} ${styles['header']} dark-theme`}>
            <div className={styles.inner}>
                <div className="container h-100">
                    <div className="row flex-column-reverse flex-lg-row h-100">
                        <div className={`${styles['text-wrapper']} col-lg-5 col-xl-4`}>
                            <div className="text-wrapper__inner">
                                <h1 dangerouslySetInnerHTML={{__html: title}}/>
                                <p className="intro-text" dangerouslySetInnerHTML={{__html: tagline}}/>
                                <div className="specialist-list" dangerouslySetInnerHTML={{__html: text}}/>
                            </div>
                        </div>

                        <div className={`${styles['image-wrapper']} col-lg-7 col-xl-8 g-0`}>
                            <div>
                                <MediaImage media={media} isPriority={true}/>
                                {/*<JaggedShape fill="var(--color-background)" classes={"jagged-shape"} />*/}
                                {/*<JaggedShapeVertical fill="var(--color-background)" classes={styles['jagged-shape__vertical']} />*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}