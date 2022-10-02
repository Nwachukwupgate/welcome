import React from 'react'
import { faHome, faGlobe, faCaretDown, faCode, faDiagramProject, faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "@fortawesome/fontawesome-svg-core/styles.css"
import styles from "../../../styles/vertStep.module.css"
import SectionTitle from '../homePage/title'

function CompStep() {
    return (
        <>
            <div className={styles.sector}>
                <div className="pt-8">
                    <SectionTitle
                        title="Our Vetting Process"
                    />
                </div>
                
                <div className={styles.wrapper}>
                    <div className={styles.center_line}>
                        <span className={styles.scroll_icon}>
                            <FontAwesomeIcon icon={faCaretDown} beat size="sm" />
                        </span>
                    </div>
                    <div className={`${styles.row} ${styles.row_1}`}>

                        <section className={styles.sections}>
                            <div className={styles.icon}>
                                <FontAwesomeIcon icon={faGlobe} beat size="2xs" />
                            </div>

                            <div className={styles.details}>
                                <span className={styles.title}>
                                Language & Personality
                                </span>
                            </div>
                            <p className={styles.p}>We onboard our developers by first engaging them in a 15mins fun but objective language, communication & personality assessment to ascertain their level of involvement & passion in their craft</p>
                        </section>
                    </div>

                    <div className={`${styles.row} ${styles.row_2}`}>

                        <section className={styles.sections}>
                            <div className={styles.icon}>
                                <FontAwesomeIcon icon={faCode} beat size="2xs" />
                            </div>
                            <div className={styles.details}>
                                <span className={styles.title}>
                                Objective Vetting Process
                                </span>
                            </div>
                            <p className={styles.p}>Rather than a tough vetting process, we focus on real life work sceneros and test for developers acclaimed level</p>
                        </section>
                    </div>

                    <div className={`${styles.row} ${styles.row_1}`}>

                        <section className={styles.sections}>
                            <div className={styles.icon}>
                                <FontAwesomeIcon icon={faDiagramProject} beat size="2xs" />
                            </div>
                            <div className={styles.details}>
                                <span className={styles.title}>
                                Test Projects
                                </span>
                            </div>
                            <p className={styles.p}>We give each candidate a unique test project to evaluate competence, professionalism,  thoroughness and integrity of the candidate. Our test project usually last 1-3 weeks.</p>
                        </section>
                    </div>

                    <div className={`${styles.row} ${styles.row_2}`}>

                        <section className={styles.sections}>
                            <div className={styles.icon}>
                                <FontAwesomeIcon icon={faCheckDouble} beat size="2xs" />
                            </div>
                            <div className={styles.details}>
                                <span className={styles.title}>
                                Continued Excellence
                                </span>
                            </div>
                            <p className={styles.p}>We continuously keep tract of the performance of our developers to ensure they maintain continuous quality delivery</p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompStep