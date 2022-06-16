import style from './fadeIn.module.css';
function FadeIn({ onClick }) {
    return <div className={style.fade_in} onClick={onClick}></div>;
}
export default FadeIn;
