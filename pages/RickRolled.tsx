import { NextPage } from "next"
import Link from "next/link"
import { useState, Fragment } from "react"
import Iframe from "react-iframe"

const RickRolled: NextPage = () => {
    const [wrathConsent, setWrathConsent] = useState<boolean>(false)

    const wrathHandler = (): void => {
        setWrathConsent(true)
    }

    return (
        <section>
            {!wrathConsent && <Fragment>
                <h1>You fool! No place is safe from Computer-San!</h1>
                <p>Now you must suffer their wrath!</p>
                <button onClick={wrathHandler}>Suffer their wrath</button>
            </Fragment>}
            {wrathConsent &&
                <Fragment>
                    <h1>Oh no! Computer-San used Rick Roll!</h1>
                    <Iframe width="893" height="502" url="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                    <p>To atone for your offense, Computer-San demands you inform yourself on security best practices!</p>
                    <ul>
                        <li>
                            <p>To learn more about how you can protect yourself and others online!</p>
                            <Link href="https://techlore.tech/">Visit Techlore</Link>
                        </li>
                        <li>
                            <p>To learn more about secure coding and best practices!</p>
                            <Link href="https://owasp.org/">Visit OWASP</Link>

                        </li>
                    </ul>
                    <Link href="/">I&apos;ve atoned! Take me back!</Link>
                </Fragment>}
        </section>
    )
}

export default RickRolled;