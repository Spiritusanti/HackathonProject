// next/react imports
import type { NextPage } from 'next'
import Image from 'next/dist/client/image'
import Link from 'next/dist/client/link';
import Head from 'next/head';
// component imports
import Header from '../components/header';
import TwitterIcon from '../assests/icons8-twitter.svg';
import LinkedInIcon from '../assests/linkedin-svgrepo-com.svg';
import profileImage from '../assests/profileImage.jpg';
// style imports
import classes from '../styles/landingPage.module.css';


interface colors {
  id: number;
  color: string;
}

const Home: NextPage = () => {
  const colors: colors[] = [{ id: 1, color: '#D45B19' }, { id: 2, color: '#C2D419' }, { id: 3, color: '#19D4CD' }, { id: 4, color: '#7E0FD4' }];
  const colorsReverse: colors[] = [{ id: 5, color: '#7E0FD4' }, { id: 6, color: '#D45B19' }, { id: 7, color: '#C2D419' }, { id: 8, color: '#19D4CD' },];
  return (
    <article>
      <Header />
      <section className={classes.hero}>
        {/* hero image section - choose 1 image */}
        <ul>
          <li>{colors.map((color) => <div key={color.id} style={{ background: `${color.color}` }}><Image width={200} height={200} src={`https://robohash.org/${color.id}`} alt='robot'></Image></div>)}</li>
          <li>{colorsReverse.map((color) => <div key={color.id} style={{ background: `${color.color}` }}><Image width={200} height={200} src={`https://robohash.org/${color.id}`} alt='robot'></Image></div>)}</li>
          <li>{colors.map((color) => <div key={color.id} style={{ background: `${color.color}` }}><Image width={200} height={200} src={`https://robohash.org/${color.id}`} alt='robot'></Image></div>)}</li>
          <li>{colorsReverse.map((color) => <div key={color.id} style={{ background: `${color.color}` }}><Image width={200} height={200} src={`https://robohash.org/${color.id}`} alt='robot'></Image></div>)}</li>
          <li>{colors.map((color) => <div key={color.id} style={{ background: `${color.color}` }}><Image width={200} height={200} src={`https://robohash.org/${color.id}`} alt='robot'></Image></div>)}</li>
        </ul>

      </section>
      {/* Game Walkthrogh section */}
      <section className={classes.walkthrough}>
        <h1>Rock Paper Scissors</h1>
        <p>The classic game you can now play with your constant companion, Computer-san! </p>
        <span className={classes.walkthrough__computersan}>
          <Image src={"https://robohash.org/computersan"} alt="computersan" height={200} width={200}></Image>
        </span>
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
          <li>
            <label htmlFor="twitter">twitter</label>
            <a id="twitter" href="https://twitter.com/balorformorian"><Image src={TwitterIcon} alt="twitter icon" /></a>
          </li>
          <li>
            <label htmlFor="linkedIn">LinkedIn</label>
            <a id="linkedIn" href="https://www.linkedin.com/in/jacob-mccracken/"><Image width="48px" height="48px" src={LinkedInIcon} alt="twitter icon" /></a>
          </li>
        </ul>
      </footer>
    </article>
  )
}

export default Home;
