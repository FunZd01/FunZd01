import Head from 'next/head'
import Whoiam from "../components/whoiam";
import Skills from "../components/Skills";

const Home = () => {
    return (
        <div>
            <Head>
                <title>Domingo Funez</title>
                <meta charSet={"UTF-8"}/>
                <meta name="description"
                      content="Domingo Funez: Self-taught, responsible
                      and lovers of challenges that require the use of ingenuity."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={"bg-black"}>
                <section>
                    <Whoiam></Whoiam>
                    <Skills></Skills>
                </section>
            </main>
        </div>
    )
}

export default Home;
