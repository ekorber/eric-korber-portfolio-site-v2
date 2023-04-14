import './EmbeddedVideoLink.css'

function EmbeddedVideoLink(props) {
    return (
        <embed className="video-link" src={props.url} title={props.videoMetaTitle} frameBorder="0" allowFullScreen></embed>
    );
}

export default EmbeddedVideoLink;