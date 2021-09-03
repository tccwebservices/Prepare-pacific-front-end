import style from "./dotNaviagtion.module.css"

const DotNavigation = () => {
    return (
        <>
<div className={style.dotContainer}>
    <ul className={style.dots}>
        <li className={style.dots__item}></li>
        <li className={style.dots__item}></li>
        <li className={style.dots__item}></li>
    </ul>     
</div> 
    </>
);
}
export default DotNavigation;