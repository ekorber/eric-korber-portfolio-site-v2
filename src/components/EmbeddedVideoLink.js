import './EmbeddedVideoLink.css'

function EmbeddedVideoLink({url, videoMetaTitle}) {
    return (
        <embed className="video-link" src={url} title={videoMetaTitle} frameBorder="0" allowFullScreen></embed>
    );
}

export default EmbeddedVideoLink;