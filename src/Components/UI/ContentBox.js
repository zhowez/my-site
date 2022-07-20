import style from "./ContentBox.module.css";

const ContentBox = (props) => {
  return (
    <div className={`${style.box} ${props.className ? props.className : ""}`}>
      {props.children}
    </div>
  );
};

export default ContentBox;
