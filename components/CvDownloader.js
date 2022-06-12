import useDownloader from "react-use-downloader";

const CvDownloader = () => {
    const {download} = useDownloader();

    const downloader = () => {
        const fileUrl = "/Domingo_Funez.pdf";
        const fileName = "Domingo Funez.pdf";
        download(fileUrl, fileName).then(r => {
            console.log("Cv Downloaded!")
        })
    }

    return <div className={"m-2"} style={{position:"fixed", bottom:"0", right:"0"}}>
        <button
            className={"h2 bg-green p-2 rounded"}
            onClick={downloader}>
            <i className="fa fa-download"
               title={"download CV"}/>
        </button>
    </div>
}

export default CvDownloader
