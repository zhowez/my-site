import style from "./Main.module.css";

const Main = (props) => {
  return <div className={style.main}> {props.children}</div>;
};

export default Main;
