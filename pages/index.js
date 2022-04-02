import Head from 'next/head'
import Whoiam from "../components/whoiam";
import Skills from "../components/Skills";
import CvDownloader from "../components/CvDownloader";
import Lang from "../components/lang";
import Provider from "../provider/provider";
import Experience from "../components/Experience"
import FooterC from "../components/footer";

const Home = () => {
    return (
        <div  style={{textShadow: "1px 1px 3px black"}}>
            <Head>
                <title>Domingo Funez</title>
                <meta charSet={"UTF-8"}/>
                <meta name="description"
                      content="Domingo Funez: Self-taught, responsible
                      and lovers of challenges that require the use of ingenuity."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Provider>
                    <Lang/>
                    <section>
                        <Whoiam/>
                        <Skills/>
                        <Experience/>
                    </section>
                </Provider>
            </main>
            <footer>
                <CvDownloader/>
                <FooterC/>
            </footer>
        </div>
    )
}

export default Home;
