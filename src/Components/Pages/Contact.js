import Footer from "../Footer/Footer";
import style from "./Contact.module.css";
import ContentBox from "../UI/ContentBox";

const Contact = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className={style.content}>
        <h1>Contact</h1>
        <hr />
        <ContentBox className={style.box}>
          <form onSubmit={submitHandler}>
            <div className={style["organize-form"]}>
              <span className={style["organize-inputs"]}>
                <label className={style.name}>Name </label>
                <input></input>
              </span>
              <div className={style["organize-email"]}>
                <span className={style["organize-inputs"]}>
                  <label className={style.email}>Email </label>
                  <input></input>
                </span>
                <span className={style["organize-inputs"]}>
                  <label className={style.email}>Re-Enter Email </label>
                  <input></input>
                </span>
              </div>
              <span className={style["organize-inputs"]}>
                <label className={style.subject}>Subject </label>
                <input></input>
              </span>
              <span className={style["organize-inputs"]}>
                <label>Message </label>
                <textarea></textarea>
              </span>

              <button>Submit</button>
            </div>
          </form>
        </ContentBox>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
