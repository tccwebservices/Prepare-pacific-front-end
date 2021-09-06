
import style from "./footer.module.css"
import Manukau from "../../assets/manukau.svg";
import Auckland from "../../assets/auckland.svg";
import Waitemata from "../../assets/waitemata.svg";
import NorthlandB from "../../assets/northlanddhb.svg";
import TCC from "../../assets/TCC.svg";







const Footer = () => {
    return (
        <>
            <footer >
                <div className={style.footerContainer}>
                    <div className={style.gridContainer}>
                        <div className={style.ttcLogoContainer}>
                        <TCC className={style.logoSpec}/>
                        <div className={style.ttccopyTitle}>
                        &copy; Prepare Pacific<br/>
                        Supported by The Cause Collective
                        </div>
                        </div>
                       
                      
                        <div className={style.logosContainer}>
                    <div className={style.logoBox}>
                        <Manukau className={style.logoSpec}/>
                    </div>
                    <div className={style.logoBox}>
                    <Auckland className={style.logoSpec}/>
                    </div>
                    <div className={style.logoBox}>
                    <Waitemata className={style.logoSpec}/>
                    </div>
                    <div className={style.logoBox}>
                    <NorthlandB className={style.logoSpec}/>
                    </div>
                   
                       
                       
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;