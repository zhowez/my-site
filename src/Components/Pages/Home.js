import Navbar from "../NavBar/Navbar";
import style from "./Home.module.css";
import ContentBox from "../UI/ContentBox";
import Main from "../UI/Main";

const Home = () => {
  return (
    <>
      <Navbar />
      <Main>
        <ContentBox className={style.box}>
          <p>
            NARRATOR And they all lived happily ever after. Each of us has a
            dream, a heart's desire. It calls to us. And when we're brave enough
            to listen, and bold enough to pursue, that dream will lead us on a
            journey to discover who we're meant to be. All we have to do is look
            inside our hearts and unlock the magic within.
          </p>
        </ContentBox>
        <ContentBox className={style.box}>
          <p>
            FA ZHOU The flower that blooms in adversity is the most rare and
            beautiful of all.
          </p>
        </ContentBox>
        <ContentBox className={style.box}>
          <p>
            MUFASA Look inside yourself. You are more than what you have become.
            Remember who you are. Remember. Remember. FEMALE SOLOIST I have
            often dreamed of a far off place, Where a hero's welcome would be
            waiting for me. MALE SOLOIST Where the crowds would cheer When they
            see my face. BOTH And a voice keeps saying, “This is where I'm meant
            to be.” CHORUS I will beat the odds, I can go the distance! I will
            face the world, Fearless, proud, and strong. I will please the gods,
            I can go the distance! 'Til I find my hero's welcome, Right where I
            belong.
          </p>
        </ContentBox>
        <ContentBox className={style.box}>
          <p>
            NARRATOR And so, our journey comes to an end. But yours continues
            on. Grab ahold of your dreams and make them come true. For you are
            the key to unlocking your own magic. Now go. Let your dreams guide
            you. Reach out and find your Happily Ever After. FEMALE SOLOIST
            (ANGIE KEILHAU) The battles, the stories, The losses and all the
            glories. MALE SOLOIST (JORDAN FISHER) We're changed by the way We
            live every day. Just look up and reach to the sky. BOTH We all have
            the courage to fly! CHORUS You can fly! You can fly! You can fly!
            You can fly! You can fly!
          </p>
        </ContentBox>
        <ContentBox className={style.box}>
          <p>
            It's just beginning, Feel your heart beat faster. Reach out and find
            your… Reach out and find your… Reach out and find your Happily ever
            after!
          </p>
        </ContentBox>
      </Main>
    </>
  );
};

export default Home;
