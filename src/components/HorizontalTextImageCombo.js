import './HorizontalTextImageCombo.css'

function HorizontalTextImageCombo({text, imageSRC, imageAltText}) {
    return (
        <div className='row'>
            <div className="col-lg-4">
                <p className="mb-4">{text}</p>
            </div>
            <div className="col-lg-8">
                <img src={imageSRC} className="text-combo-img" alt={imageAltText} />
            </div>
        </div>
    );
}

export default HorizontalTextImageCombo;