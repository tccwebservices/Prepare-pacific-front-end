
import Styles from "./footer.module.css"


const Footer = () => {
    return (
        <>
            <footer >
                <div className={Styles.footerContainer}>
                    <div className={Styles.gridContainer}>
                        <div className={Styles.grid1}>
                            <div className={Styles.grid1Title}>
                                LOCATION
                            </div>
                        </div>
                        <div className={Styles.grid2}>
                            <div className={Styles.grid2Title}>
                                PO BOX
                            </div>
                        </div>
                        <div className={Styles.grid3}>
                            <div className={Styles.grid3Title}>
                                CONTACT
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
}
export default Footer;