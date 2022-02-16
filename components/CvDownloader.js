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

    return <div className={"fixed-bottom bg-transparent m-3 text-end"}>
        <button
            className={"h1 bg-success p-1 rounded"}
            onClick={downloader}>
            <i className="fa fa-download"
               title={"download CV"}/>
        </button>
    </div>
}

export default CvDownloader
