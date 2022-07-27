import Footer from "../Footer/Footer";
import style from "./Contact.module.css";
import ContentBox from "../UI/ContentBox";
import { useState } from "react";

const Contact = () => {
  const submitHandler = async (event) => {
    event.preventDefault();

    const date = new Date();
    const info = {
      name: name,
      email: email,
      subject: subject,
      message: message,
      date: date.toISOString().split("T")[0],
      time: date.toLocaleTimeString(),
    };
    console.log(info);
    const res = await fetch(
      "https://personal-site-a9a2c-default-rtdb.firebaseio.com/responses.json",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      }
    );

    if (!res.ok) {
      alert("something went wrong");
    } else {
      setName("");
      setEmail("");
      setVerifyEmail("");
      setSubject("");
      setMessage("");
      alert("Thank you for filling out the contact form.");
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [verifyEmail, setVerifyEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

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
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                ></input>
              </span>
              <div className={style["organize-email"]}>
                <span className={style["organize-inputs"]}>
                  <label className={style.email}>Email </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  ></input>
                </span>
                <span className={style["organize-inputs"]}>
                  <label className={style.email}>Re-Enter Email </label>
                  <input
                    type="email"
                    name="verifyEmail"
                    value={verifyEmail}
                    onChange={(event) => setVerifyEmail(event.target.value)}
                  ></input>
                </span>
              </div>
              <span className={style["organize-inputs"]}>
                <label className={style.subject}>Subject </label>
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                ></input>
              </span>
              <span className={style["organize-inputs"]}>
                <label>Message </label>
                <textarea
                  type="text"
                  name="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                ></textarea>
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
