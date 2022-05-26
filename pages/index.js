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
        <div  style={{textShadow: "1px 2px 4px black", zIndex: "10px"}}>
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

                    <section>
                        <Whoiam/>
                        <Lang/>
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
