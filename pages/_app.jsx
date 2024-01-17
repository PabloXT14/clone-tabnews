import Head from 'next/head'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
                <title>Animes Freitas</title>
                <link href="https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap" rel="stylesheet" />
                <script src="https://cdn.tailwindcss.com"></script>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
