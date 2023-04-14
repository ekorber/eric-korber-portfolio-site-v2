import './HorizontalTextImageCombo.css'

function HorizontalTextImageCombo(props) {
    return (
        <div className='row'>
            <div className="col-lg-4">
                <p className="mb-4">{props.text}</p>
            </div>
            <div className="col-lg-8">
                <img src={props.imageSRC} className="text-combo-img" alt={props.imageAltText} />
            </div>
        </div>
    );
}

export default HorizontalTextImageCombo;