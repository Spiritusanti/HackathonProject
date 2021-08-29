// next/react imports
import type { NextPage } from 'next'
import Image from 'next/dist/client/image'
import Link from 'next/dist/client/link';
// component imports
import Header from '../components/header';
import CatJanken from '../assests/paw-sign-of-rock-paper-scissors-game.svg';
import TwitterIcon from '../assests/icons8-twitter.svg';
import LinkedInIcon from '../assests/linkedin-svgrepo-com.svg';
import profileImage from '../assests/profileImage.jpg';
// style imports
import classes from '../styles/landingPage.module.css';


const Home: NextPage = () => {
  return (
    <article>
      <Header />
      <section className={classes.hero}>
        {/* hero image section - choose 1 image */}
        <Image src={CatJanken} alt="rock paper scissors with cat paws" />
      </section>
      {/* Game Walkthrogh section */}
      <section className={classes.walkthrough}>
        <h1>Rock Paper Scissors</h1>
        <p>The classic game you can now play with your constant companion, Computer-san!</p>
        <p>Computer-san prays to RNGesus to decide its moves. Unfortunately, RNGesus doesn&apos;t care for silly mortals so you&apos;ll have to rely on your own brain and an approximate 33% chance of success, yikes!</p>
        <p>Can you beat Computer-san?</p>
        <div className={classes.walkthrough__nav}>
          <Link href="/game">Yes I can!</Link>
          <Link href="/RickRolled">Nope! Take me to safety!</Link>
        </div>
      </section>
      {/* developer blurb */}
      <section className={classes.blurb}>
        <h1>Learn about me!</h1>
        <ul className={classes.blurb__content}>
          <li>
            <h2>Jacob McCracken</h2>
            <p>Self taught developer who can&apos;t stop tinkering. I love to experiment and figure out how and why things work to determine the best tool for a given project. Most experienced with Javascript, HTML/CSS, and react/redux. Currently working on improving my skill with typescript and expanding to the backend with NodeJS.</p>
          </li>
          <li>
            <Image src={profileImage} alt="Jacob McCracken" />
            <span>
              <Link href="https://spiritusanti.github.io/JacobMcCracken/">See my work</Link>
              <Link href="https://github.com/Spiritusanti">See my Github</Link>
            </span>
          </li>
        </ul>
      </section>
      <footer className={classes.footer}>
        <h1>connect with me</h1>
        <ul>
          <ul>
            <li>
              <label htmlFor="twitter">twitter</label>
              <a id="twitter" href="https://twitter.com/balorformorian"><Image src={TwitterIcon} alt="twitter icon"></Image></a>
            </li>
            <li>
              <label htmlFor="linkedIn">LinkedIn</label>
              <a id="linkedIn" href="https://twitter.com/balorformorian"><Image width="48px" height="48px" src={LinkedInIcon} alt="twitter icon"></Image></a>
            </li>
          </ul>
        </ul>
        <a href="https://www.vecteezy.com/free-vector/rock-paper-scissors-game">Rock Paper Scissors Game Paws SVG by Vecteezy</a>
      </footer>

    </article>
  )
}

export default Home;
