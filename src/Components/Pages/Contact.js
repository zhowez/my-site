import Footer from "../Footer/Footer";
import style from "./Contact.module.css";
import ContentBox from "../UI/ContentBox";
import { useState } from "react";

const Contact = () => {
  //TODO: Check if email inputs have been touched
  // TODO: Check if emails are same
  //TODO: If touched and Not Same highliht verify in red

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
    const res = await fetch("https://formspree.io/f/mpznaqpz", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });

    if (!res.ok) {
      alert("something went wrong");
    } else {
      setName("");
      setEmail("");
      setVerifyEmail("");
      setSubject("");
      setMessage("");
      alert(
        "Thank you for filling out the contact form. I will respond as soon as possible"
      );
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
                  required={true}
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
                    required={true}
                  ></input>
                </span>
                <span className={style["organize-inputs"]}>
                  <label className={style.email}>Re-Enter Email </label>
                  <input
                    type="email"
                    name="verifyEmail"
                    value={verifyEmail}
                    onChange={(event) => setVerifyEmail(event.target.value)}
                    required={true}
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
                  required={true}
                ></input>
              </span>
              <span className={style["organize-inputs"]}>
                <label>Message </label>
                <textarea
                  type="text"
                  name="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required={true}
                ></textarea>
              </span>

              <button disabled={email !== verifyEmail}>Submit</button>
            </div>
          </form>
        </ContentBox>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
