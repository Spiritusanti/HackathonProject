import { FC, Fragment } from "react";
import Head from "next/head";

const Offline: FC = () => {
    return (
        <Fragment>
            <Head>
                <title>Rock Paper Scissors</title>
                <meta property="og:title" content="Rock Paper Scissors" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="Description" content="rock paper scissors 2D game" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="theme-color" content="black" />
                <link rel="manifest" href="manifest.json" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
            </Head>
            <h1>Looks like you&apos;re offline</h1>
            <p>Go online to play the game</p>
        </Fragment>
    )
}

export default Offline;