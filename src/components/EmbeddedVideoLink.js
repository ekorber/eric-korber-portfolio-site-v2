import './EmbeddedVideoLink.css'

function EmbeddedVideoLink(props) {
    return (
        <embed class="video-link" src={props.url} title={props.videoMetaTitle} frameborder="0" allowfullscreen></embed>
    );
}

export default EmbeddedVideoLink;