import './EmbeddedVideoLink.css'

function EmbeddedVideoLink(props) {
    return (
        <embed class="video-link" src={props.url} title={props.videoMetaTitle} frameborder="0" allowFullScreen></embed>
    );
}

export default EmbeddedVideoLink;