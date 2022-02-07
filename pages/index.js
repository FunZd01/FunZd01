import Head from 'next/head'
import Whoiam from "../components/whoiam";

const Home = () => {
    return (
        <div>
            <Head>
                <title>Domingo Funez</title>
                <meta name="description"
                      content="Domingo Funez: Self-taught, responsible
                      and lovers of challenges that require the use of ingenuity."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={"bg-black"}>
                <section>
                    <Whoiam></Whoiam>
                </section>
            </main>
        </div>
    )
}

export default Home;
