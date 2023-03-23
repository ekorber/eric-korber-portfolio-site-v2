import EmbeddedVideoLink from "./EmbeddedVideoLink"

function HalfPageShowcasePiece(props) {
    return (
        <div className="col-lg-6 mt-5 mb-4">
            <h4 className="text-center">{props.title}</h4>

            <EmbeddedVideoLink url={props.url} title={props.title} />

            {props.description !== "" && <p>{props.description}</p>}

            {props.additionalText !== "" && <p className="text-center mt-3 mb-4">{props.additionalText}</p>}
        </div>
    );
}

export default HalfPageShowcasePiece;