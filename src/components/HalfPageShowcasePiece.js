import EmbeddedVideoLink from "./EmbeddedVideoLink"

function HalfPageShowcasePiece({title, url, videoMetaTitle, description, additionalText}) {
    return (
        <div className="col-lg-6 mt-5 mb-4">
            <h4 className="text-center">{title}</h4>

            <EmbeddedVideoLink url={url} videoMetaTitle={videoMetaTitle} />

            {typeof description !== "undefined" && <p>{description}</p>}

            {typeof additionalText !== "undefined" && <p className="text-center mt-3 mb-4">{additionalText}</p>}
        </div>
    );
}

export default HalfPageShowcasePiece;